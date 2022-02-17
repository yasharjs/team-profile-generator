const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");


const promptManager = () => {
     return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the team manager's name:",
            },
            {
                type: "input",
                name: 'id',
                message: "Enter the team manager's id:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter the team manager's email:"
            },
            {
                type: "input",
                name: "officeNum",
                message: "Enter the team manager's office number:"
            }
        ])
        .then((answers)=>{
            const teamData = { manager: [], engineers: [], interns: [] };
            teamData.manager.push(new Manager(answers.name, answers.id, answers.email, answers.officeNum));
            return menuPrompt(teamData);
        } )
   
};

const engineerPrompt = (teamData) => {
    console.log("");
    return inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:"Enter engineer's name:"
        },
        {
            type:"input",
            name:"id",
            message:"Enter engineer's id:"
        },
        {
            type:"input",
            name:"email",
            message:"Enter engineer's email:"
        },
        {
            type:"input",
            name:"github",
            message:"Enter engineer's GitHub username:"
        }
    ])
    .then(answers => {
        teamData.engineers.push(new Engineer(answers.name,answers.id,answers.email,answers.github))
        //console.log(teamData);
        
        return menuPrompt(teamData);

    })
}

const internPrompt = (teamData) => {
    console.log("");
    return inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:"Enter intern's name:"
        },
        {
            type:'input',
            name:'id',
            message: "Enter intern's id:"
        },
        {
            type:'input',
            name:'email',
            message:"Enter intern's email:"
        },
        {
            type:'input',
            name:'school',
            message:"Enter intern's school:"
        }
    ])
    .then(answers => {
        teamData.interns.push(new Intern(answers.name,answers.id,answers.email,answers.school));
        return menuPrompt(teamData);
    })

}

const menuPrompt = (teamData) =>{
    //console.log(teamData);
    console.log("");
    return inquirer
    .prompt({
        type:'list',
        name:'action',
        message:"Please choose an option:",
        choices: ['Add an Engineer','Add an Intern','Finish building team']
    })
    .then(answers => {
       // console.log(answers.action);
        switch(answers.action){
            case 'Add an Engineer':
                return engineerPrompt(teamData);
            case 'Add an Intern':
                return internPrompt(teamData);
            default:
                // console.log(teamData);
                return teamData;
        }
    })

}


module.exports = {promptManager };