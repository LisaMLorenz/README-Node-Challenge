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
        message: 'Describe what you have done to test the code',
        name: 'tests',
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
        type: 'list',
        message: 'Would you like to disclose any license?',
        name: 'license',
        choices: ['None','MIT','Apache 2.0', 'GNU v3.0', 'BSD 3-Clause', 'Boost', 'Eclipse', 'Mozilla Public', 'The Unlicense']
    },

];

// function to write README file

let licenseBadge = "";
let licenseContent ="";

inquirer.prompt(questions).then((response) => {
        console.log(`Check out your README file`)

        const markdown = generateMarkdown(response, licenseBadge, licenseContent);
        
        fs.writeFile('README.md', markdown, (err) =>
                err ? console.error(err) : console.log("User's README logged"));
    });


// function to initialize program
function init() {

};

// function call to initialize program
init();
