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
# Description \n\n ${response.description} \n\n
## Installation \n\n ${response.install} \n\n
## Usage \n\n ${response.usage} \n\n
## Screenshot \n\n ${response.screenshot} \n\n
# Collaborators \n\n ${response.collab} \n\n
## How to contribute \n\n ${response.contribute} \n\n
## How to report issues \n\n ${response.issue} \n\n
### License: ${response.license}`;

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
