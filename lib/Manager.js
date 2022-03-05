const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //method to get managers office number
    getOfficeNumber() {
        return this.officeNumber
    }
    //method to get role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;