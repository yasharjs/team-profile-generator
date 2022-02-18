const Manager = require("../lib/Manager");

test('creates a manager object',() => {
    const manager = new Manager('Dave',1,'myEmail',0);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('myEmail');
    expect(manager.officeNum).toBe(0);
})

test("gets role",() => {
    const manager = new Manager('Dave',1,"nyEmail",0);

    expect(manager.getRole()).toBe("Manager");
})