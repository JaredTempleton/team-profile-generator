const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.role = 'Engineer'
        this.gitHub = gitHub;
    }

    //method to get gitHub id
    getGitHub() {
        return this.getGitHub;
    }
}

module.exports = Engineer