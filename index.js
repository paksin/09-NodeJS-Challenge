// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    'What is the project title?',
    'What was your motivation?',
    'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
    'What problem does it solve?',
    'What did you learn?',
    'What makes your project stand out?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `${JSON.stringify(data)}`, 
    (err) => err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'motive',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'why',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'solved',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'lesson',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'special',
        },
    ])
    .then((response) =>
        writeToFile("README.md", response))
}

// Function call to initialize app
init();
