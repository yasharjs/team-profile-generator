const Manager = require("../lib/Manager");

const getData = (teamData) => {
    const manager = teamData.manager[0];
    const role = manager.getRole()
    const managerName = manager.getName();
    const managerId = manager.getId();
    const managerEmail = manager.getEmail();
    const  managerOfficeNum = manager.officeNum;
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Team Viewer</title>
</head>
<body>
    <h1 class="text-center" style="background-color:crimson; font-size: 3rem; padding: 1rem; font-weight: bolder;">Team Viewer</h1>

    <div class="d-flex justify-content-center" id="manager">
        <div class="card" style = "width: 25.5rem;" id="manager">
            <div class="card-body">
                <h5 class="card-title">${managerName}</h5>
                <p class="card-text">${role}</p>
            </div>
        
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerId}</li>
                <li class="list-group-item">Email: ${managerEmail}</li>
                <li class="list-group-item">Office: ${managerOfficeNum}</li>
            </ul>
        </div>
    </div>

    </body>
    `;
}

module.exports = getData;