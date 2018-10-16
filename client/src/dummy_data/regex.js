filteredData.imageURL = data.match(/id="coverImage"[\w\W]*(http.*\.jpg)[\w\W]*class="bookCoverActions">/)[1];
const bookDescription = data.match(/id="description"[\w\W]*freeTextContainer[\d]*">(.*)<\/span>[\w\W]*style="display:none">(.*)<\/span>[\w\W]*buyButtonContainer/);
