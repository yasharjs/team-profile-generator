const prompts = require("./utils/prompts");
const generateSite = require("./utils/generate-site");


//execute
console.log("");
console.log("Welcome to the Team Profile Generator!");
console.log("======================================");
console.log("");

//prompt
prompts
    .promptManager()
    .then(data => {
        generateSite(data);
    })
    

