
const Intern = require("../lib/Intern");

test("creates an intern object", ()=>{
    const intern = new Intern("Dave",1,"email","toronto");

    expect(intern.name).toBe("Dave");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("email");
    expect(intern.school).toBe("toronto");
})

test("gets school value", ()=>{
    const intern = new Intern("Dave",1,"email","toronto");

    expect(intern.getSchool()).toBe("toronto");
})