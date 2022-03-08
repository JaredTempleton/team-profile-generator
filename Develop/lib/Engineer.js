const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = 'Engineer'
        this.gitHub = github;
    }

    //method to get gitHub id
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer