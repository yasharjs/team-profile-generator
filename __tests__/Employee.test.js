const Employee = require("../lib/Employee");

test("creates an employee object",() => {
    const employee = new Employee("Dave",10,"myemail");

    expect(employee.name).toBe("Dave");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
})

test("gets employee name", ()=>{
    const employee = new Employee("Dave",10,"myemail");

    expect(employee.getName()).toBe(employee.name);
})

test("gets employee id", () =>{
    const employee = new Employee("Dave",10,"myemail");

    expect(employee.getId()).toEqual(employee.id);
})

test("gets employee email",() => {
    const employee = new Employee("Dave",10,"myemail");

    expect(employee.getEmail()).toBe(employee.email);
})

//returns employee
test("gets employee role", () =>{
    const employee = new Employee("Dave",10,"myemail");

    expect(employee.getRole()).toEqual(expect.stringContaining("employee"));
})