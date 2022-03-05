const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);

        this.gitHub = gitHub;
    }

    //method to get gitHub id
    getGitHub() {
        return this.getGitHub;
    }
    //method to get role
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer