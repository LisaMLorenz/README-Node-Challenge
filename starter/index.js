const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Please describe your project briefly?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide examples and instructions for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide a screenshot of the deployed project.',
        name: 'screenshot',
    },
    {
        type: 'input',
        message: 'Add a list of all collaborators',
        name: 'collab',
    },
    {
        type: 'input',
        message: 'How can potential collaborators contribute to your project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'How can issues be reported?',
        name: 'issue',
    },
    {
        type: 'input',
        message: 'Would you like to disclose any license?',
        name: 'license',
    },

];

inquirer
    .prompt(questions)

    // function to write README file

    .then((response) => {
        console.log(`Check out your README file`)

        const userInfo = 
        `# Project Title: ${response.projectTitle}
## Description: ${response.description}
## Installation: ${response.install}
## Usage: ${response.usage}
## Screenshot: ${response.screenshot}
## Collaborators: ${response.collab}
## How to contribute: ${response.contribute}
## How to report issues: ${response.issue}
## License: ${response.license}`;

        fs.writeFile('README.md', userInfo,
            (err) =>
                err ?
                    console.error(err)
                    : console.log('User\'s README logged'));
    });


// function to initialize program
function init() {

};

// function call to initialize program
init();
