const Manager = require("../lib/Manager");

const getData = (teamData) => {
    const manager = teamData.manager[0];
    const role = manager.getRole()
    return `this is a test
     ${role}`;
}

module.exports = getData;