const Manager = require("../lib/Manager");

test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Jared", 123, "email@email.com", 321);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get office number via getOfficNumber()", () => {
    const testValue = 321;
    const e = new Manager("Foo", 123, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });