const Employee = require("../lib/Employee");

test("Can get name via getName()", () => {
    const testValue = "Jared";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 123;
    const e = new Employee("Jared", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "email@email.com";
    const e = new Employee("Jared", 123, testValue);
    expect(e.getEmail()).toBe(testValue);
  });