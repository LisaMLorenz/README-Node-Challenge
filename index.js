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
        message: 'Please enter your GitHub username',
        name: 'gitUser',
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Choose a license',
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
# Table of Contents \n\n
## Installation: \n\n ${response.install} \n\n
## Usage: \n\n ${response.usage} \n\n
## License: \n\n ${response.license}
## Screenshot: \n\n ${response.screenshot} \n\n
# Collaborators: \n\n ${response.collab} \n\n
## Contributing: \n\n ${response.contribute} \n\n
## Tests: \n\n ${response.contribute} \n\n
## How to report issues or ask questions: \n\n Please get in touch via www.github/${response.gitUser}.com or contact directy via ${response.email}`;

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
