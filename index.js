const prompts = require("./utils/prompts");
const generateSite = require("./utils/generate-site");
const writeSite = require('./utils/write-site');


//execute
console.log("");
console.log("Welcome to the Team Profile Generator!");
console.log("======================================");
console.log("");

//prompt
prompts
    .promptManager()
    .then(data => {
       return generateSite(data);
    })
    .then(generatedMarkup=> {
        writeSite(generatedMarkup);
    })
    .then(writeSiteResponse => {
        console.log(writeSiteResponse);
    })
    

