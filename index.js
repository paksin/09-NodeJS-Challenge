// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


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
    var licenseBadge;
    switch (data.license) {
        case 'MIT':
            licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
            break;
        case 'GPLv2':
            licenseBadge = "https://img.shields.io/badge/License-GPL_v2-blue.svg";
            break;
        case 'Apache':
            licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
            break;
        case 'GPLv3':
            licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
            break;
        default:
            licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg"
            break;
    }
    fs.writeFile(fileName,
        `
![License](${licenseBadge})

# ${data.title} 
https://github.com/${data.username}/${data.title}

## Description    

${data.description}

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

## Installation

${data.installation}

## Usage 

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

This project is licensed under the ${data.license} license.

## Questions

If you have any inquiries about my repository, please feel free to reach out through GitHub or email: ${data.email}

https://github.com/${data.username}
    `, (err) => err ? console.error(err) : console.log('Success!'))
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
                choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'Other', ]
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