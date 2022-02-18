// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");

const generateIntern = interns =>{
    return `
    ${interns.map(({name,id,email,school})=>{
        return`<div class="col-sm-12 col-md-6 col-lg-4 mt-4">
        <div class= "card">
            <div class="card-body bg bg-primary">
                <h5 class="card-title text-white text-uppercase" style="font-size: 1.5rem; font-weight: 500;">${name}</h5>
                <p class="card-text text-white" style="font-size: 1.3rem; font-weight: 500;"><span class="material-icons" style="font-size: 1.3rem;">badge</span>Intern</p>
            </div>
            <div class="card-body"style="background-color:#e6e6e6;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" >ID: ${id} </li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
        
            </div>
            
        </div>
    </div>    `
    }).join('')}`
}

const generateEngineer = engineers =>{
  return `
  ${engineers.map(({name,id,email,github})=>{
     return `
     <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
                <div class= "card">
                    <div class="card-body bg bg-primary">
                        <h5 class="card-title text-white text-uppercase" style="font-size: 1.5rem; font-weight: 500;">${name}</h5>
                        <p class="card-text text-white" style="font-size: 1.3rem; font-weight: 500;"><span class="material-icons" style="font-size: 1.3rem;">badge</span>Engineer</p>
                    </div>
                    <div class="card-body"style="background-color:#e6e6e6;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" >ID: ${id} </li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
                        </ul>
                
                    </div>
                    
                </div>
            </div>    ` 
  }).join('')}`

}

const getData = (teamData) => {
    const {manager,engineers, interns} = teamData;
  
    const role = manager[0].getRole()
    const managerName = manager[0].getName();
    const managerId = manager[0].getId();
    const managerEmail = manager[0].getEmail();
    const  managerOfficeNum = manager[0].officeNum;
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&display=swap" rel="stylesheet"> 
    <title>Team Viewer</title>
</head>
<body style="font-family: 'oswald',sans-serif;">
    <h1 class="text-center text-white" style="background-color:crimson; font-size: 3.5rem; padding: 1rem; font-weight: 700;">Team Viewer</h1>
  
    <div class="container" style="padding: 2rem;" id="manager" >
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-6 col-lg-4 mt-4">
                <div class= "card">
                    <div class="card-body bg bg-primary">
                        <h5 class="card-title text-white text-uppercase" style="font-size: 1.5rem; font-weight: 500;">${managerName}</h5>
                        <p class="card-text text-white" style="font-size: 1.3rem; font-weight: 500;"><span class="material-icons" style="font-size: 1.3rem;">badge</span>${role}</p>
                    </div>
                    <div class="card-body"style="background-color:#e6e6e6;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" >ID: ${managerId} </li>
                            <li class="list-group-item">Email: <a href="mailto:${managerEmail}">${managerEmail}</a></li>
                            <li class="list-group-item">Office Number: ${managerOfficeNum}</li>
                        </ul>
                
                    </div>
                    
                </div>
            </div>    
            ${generateEngineer(engineers)}
            ${generateIntern(interns)}
            
        </div>        
    </div>
 
</body>
</html>
    `;
}

module.exports = getData;