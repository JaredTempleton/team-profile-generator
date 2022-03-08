const Engineer = require("../lib/Engineer");

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Jared", 1, "email@email.com", "EngineerHub");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "EngineerHub";
    const e = new Engineer("Jared", 1, "email@email.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
  });