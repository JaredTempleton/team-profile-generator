class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.is = id;
        this.email = email;
    }
    //methods for gathering employee data
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;