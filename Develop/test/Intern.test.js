const Intern = require("../lib/Intern");

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Jared", 1, "email@email.com", "UCF");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get school via getSchool()", () => {
    const testValue = "UCF";
    const e = new Intern("Jared", 1, "email@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });