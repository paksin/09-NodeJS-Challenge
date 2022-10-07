// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    'What is the project title?',
    'Provide a short description explaining the what, why, and how of your project.',
    'Installation instructions?',
    'Usage information?',
    'Contribution guidelines?',
    'Test instructions?',
    'Licenses? (e.g. MIT etc.)',
    'Enter your GitHub username for questions: ',
    'Enter your email for inquiries: '
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName,
        markdown(data), (err) => err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([{
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contributing',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'tests',
            },
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'No License', ]
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((response) =>
            writeToFile("README.md", response))
}

// Function call to initialize app
init();