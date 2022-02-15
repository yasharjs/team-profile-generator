
const Engineer = require("../lib/Engineer");

test("creates engineer object",() => {
    const employee = new Engineer("Dave",1,"email","github");

    expect(employee.name).toBe("Dave");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("email");
    expect(employee.github).toBe("github");
})

test("gets github username", () => {
    const engineer = new Engineer("Dave",1,"email","github");

    expect(engineer.getGithub()).toBe(engineer.github);
})

test("gets engineer role", ()=>{
    const engineer = new Engineer("Dave",1,"email","github");

    expect(engineer.getRole()).toBe("Engineer");
})