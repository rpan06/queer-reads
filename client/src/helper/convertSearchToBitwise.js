export default function convertSearchToBitwise(obj){
    let charLookUp = {
        gay: 1,
        lesbian: 2,
        bisexual: 4,
        trans: 8,
        nonbinary: 16,
        intersex: 32,
        asexual: 64,
        aromantic: 128,
        multiple: 256,
        main: 512,
        major: 1024,
        minor: 2048,
        later: 4096
    }
    let output = 0;
    for (let key in obj){
      if (obj[key] && charLookUp[key]){
        output += charLookUp[key]
      }
    }
    return output;
}
