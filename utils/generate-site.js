const Manager = require("../lib/Manager");

const getData = (teamData) => {
    const manager = teamData.manager[0];
    const role = manager.getRole()
    console.log(role);
}

module.exports = getData;