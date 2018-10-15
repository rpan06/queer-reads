const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const mysql = require('mysql');
const credentials = require('./config.js');
const gsjson = require('google-spreadsheet-to-json');
const axios = require('axios');
const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(express.static(resolve(__dirname,'client','dist')));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//create connection
const db = mysql.createConnection(credentials);

//connect
db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('MySQL Connected...')
});


//TODO: should this be post??
app.get('/add-data', async (req,res)=> {
    const resultsArray = await getSpreadsheetsData();

    let sql = "INSERT INTO `books` (`ID`, `title`, `series`, `characterPresence`, `author`, `shortDescription`, `longDescription`, `ISBN`, `imageURL`) VALUES";

    for (let i = 0; i<resultsArray.length; i++){
        escapeApostrophes(resultsArray[i])
        let { ID, title, series, characterPresence, author, shortDescription, longDescription, ISBN, imageURL } = resultsArray[i];
        let newValues = ` (${ID}, '${title}', '${series}', ${characterPresence}, '${author}', '${shortDescription}', '${longDescription}', '${ISBN}', '${imageURL}'),`;
        if (i === resultsArray.length - 1){
            newValues = newValues.slice(0,newValues.length-1)
        }
        sql += newValues
    }
    // console.log(sql)
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Data added...')
    })
})

function escapeApostrophes(obj){
    for (var key in obj){
        if (typeof obj[key] === 'string'){
          obj[key] = obj[key].replace(/[']/g, "''")
        }
    }
}


// let sql = "INSERT INTO ?? (??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
// let fieldInserts = [`books`,`ID`, `title`, `characterPresence`, `author`, `shortDescription`, `longDescription`, `ISBN`, `imageURL`];
// let valueInserts = [ID, title, characterPresence, author, shortDescription, longDescription, ISBN, imageURL];
// let inserts = fieldInserts.concat(valueInserts);
// sql = mysql.format(sql, inserts);

app.get('/api/book/:ISBN', (req,res) => {
    let sql = `SELECT * FROM books WHERE ISBN = ${req.params.ISBN}`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results)
    })
})

//TODO: @closeness := 0; SELECT name, author, @closeness:=characterPresence&userFilter FROM books WHERE @closeness > 0 ORDER BY @closeness DESC
app.get('/api/search/:filter', (req,res) => {
    console.log("API SHITT", req.params)
    let sql = `SELECT * FROM books WHERE characterPresence & ${req.params.filter} = ${req.params.filter}`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results)
    })
})

app.get('/get-all-data', (req,res) => {
    let sql = `SELECT * FROM books`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results)
    })
})



app.get('*',(req,res)=>{
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, ()=> {
    console.log('This is your captain speaking, we are listening on PORT:', PORT)
})

/******************************************
Get data from spreadsheets and goodreads
***************************************/

function getSpreadsheetsData(){
    return gsjson({
        spreadsheetId: '1foghwIYxxYSF2cj6kA9Wrl_JfAiloBI_a0r4XjxJGGQ',
        listOnly: true,
    })
    .then(function(result) {
        // console.log(result.length);
        // console.log(result);
        return separateArrayResults(result)
    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });
}


async function separateArrayResults(resultsArray){
    let informationArrayForServer = [];
    for (let i = 0; i<resultsArray.length; i++){
        let bookObject = await createBookObject(resultsArray[i])
        informationArrayForServer.push(bookObject)
    }
    return informationArrayForServer
}

async function createBookObject(arrayInformation){
    let book = {
        ID: generateID(),
        title: arrayInformation[2],
        series: arrayInformation[1],
        characterPresence: getCharPresence(arrayInformation.splice(6,18)),
        author: arrayInformation[3],
        shortDescription: null,
        longDescription: null,
        ISBN: arrayInformation[0],
        imageURL: null
    }
    let filteredData = await goodreadsAxiosCall(book.ISBN);
    book = {...book, ...filteredData}
    return book;
}

//TODO: fix this for UUID
function generateID(){
    return Math.floor(Math.random() * 1000)
}

function getCharPresence(characterArray) {
    const bitwiseArray = [1, 2, 4, 8, 16, 32, 62, 128, 256, 512, 1024, 2048, 4096]
    let output = 0;
    for (let index = 0; index < characterArray.length; index++){
      if(characterArray[index]) {
        output += bitwiseArray[index]
      }
    }
    return output;
}

async function goodreadsAxiosCall(isbn){
    const response = await axios.get(`https://www.goodreads.com/book/isbn/${isbn}`)
    return scrapeWebData(response.data)

}

function scrapeWebData(data){
    let filteredData = {
        shortDescription: null,
        longDescription: null,
        imageURL: null
    }
    filteredData.imageURL = data.match(/id="coverImage"[\w\W]*(http.*\.jpg)[\w\W]*class="bookCoverActions">/)[1]
    const bookDescription = data.match(/id="description"[\w\W]*freeTextContainer[\d]*">(.*)<\/span>[\w\W]*style="display:none">(.*)<\/span>[\w\W]*buyButtonContainer/);
    filteredData.shortDescription = bookDescription[1].replace(/<br \/>/g, " ");
    filteredData.longDescription = bookDescription[2];
    return filteredData
}


/******************************************
Update Information Server Check
***************************************/

//getSpreadsheetsData(true)
//pull all ISBN from server
//loop through spreadsheet data
//if ISBN not in server list
//Upload it to server
