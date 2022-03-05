//Inputs modules from /lib
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team-profiles.html');

//make an array for the employees
const employees = [];

//claifys what employee will be added to the team
nextEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role of the next employee you would like to add?',
            name: 'role',
            choices: [
                'Engineer',
                'Intern'
            ],
        }
    ])
    .then(choice => {
        if (choice.role === 'Engineer') {
            addEngineer();
        }
        else {
            addIntern();
        }
    })
}

//additional employee prompt
addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add another employee to this team?',
            name: 'add',
            choices: [
                'Yes',
                'No'
            ],
        }
    ])
    .then(choice => {
        if (choice.add === 'Yes') {
            nextEmployee();
        }
        else {
            createPage();
        }
    })
}

//engineer prompt
addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the engineer you would like to add?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is this engineers ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is this engineers email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the GitHub of this engineer?',
            name: 'gitHub'
        }
    ])
    .then((engineerAnswers) => {
        engineerAnswers.role = 'Engineer';
        const { name, id, email, github, role } = engineerAnswers;
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        
        addEmployee();
    })
}

//intern prompt
addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the intern you would like to add?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is this interns ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is this interns email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the name of this interns school?',
            name: 'school'
        }
    ])
    .then((internAnswers) => {
        internAnswers.role = 'Intern';
        const { name, id, email, github, role } = internAnswers;
        const newintern = new Intern(name, id, email, github, role);
        employees.push(newintern);
        
        addEmployee();
    })
}

//initializing questions
initialize = () => {
    console.log('------------------------------------\nLets us begin making your team. \nPlease answer the following questions fully and your team will be compiled in the output folder');
    return inquirer.prompt([
        //question prompts for team
        {
            type: 'input',
            message: 'Lets begin with your manager, what is their name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the managers ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the managers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the managers office number?',
            name: 'officeNumber'
        },
    ])
    .then((managerAnswers) => {
        managerAnswers.role = 'Manager';
        const { name, id, email, officeNumber, role } = managerAnswers;
        const newManager = new Manager(name, id, email, officeNumber, role);
        employees.push(newManager);
        nextEmployee();
    })
}

//html generator to create page
createPage = () => {
    const buildCards = render(employees);
    fs.writeFile(outputPath, buildCards, (err) => {
        if (err) {
            return console.log(err);
        }
        else {
            return console.log('File Created!')
        }
    })
}

//starts prompts
initialize();