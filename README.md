# README Node Challenge

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br>

Tailored prompts help you to create coherent README files for your project - all via the VS Code Terminal!

## Table of contents
1. [Getting Started](#toc-gettingstarted)
2. [Summary](#toc-summary)
3. [App Description](#toc-appdescription)
4. [Usage & Video](#toc-usage)
5. [License](#toc-license)
6. [Collaborators](#toc-collaborators)
7. [Contribute](#toc-contribute)
8. [Tests](#toc-tests)
8. [FAQ](#toc-FAQ)
10. [Contact](#toc-contact)


## Getting Started <a name="toc-gettingstarted"></a>
To use this program, you will need to have Node.js and Inquirer 6.5.0 installed. You can download Node.js from the official website and install Inquirer by running the following command in your terminal:

```javascript
npm i inquirer@6.5.0
```

Once you have these dependencies installed, you can run the program in your VS Code Terminal.

## Summary Description <a name="toc-summary"></a>
This program will help you to write README files. The prompts it generates in the VS Code terminal make sure that you don't forget about essential information and streamline the content of all your projects. I hope you find it useful!


## User Story

### As a developer:

- I want to use a template via the VS Code Terminal for creating README files
- So that I can save time,be consistent in my output, and create sound documentation for others to refer to.


# App description <a name="toc-appdescription"></a>

This program can be used via the VS Code Terminal to create a README file for your project. It uses prompts to ask you for the necessary information, such as the project title, description, installation instructions, usage information, and more.

## Who is the target audience?

This program is suitable for anyone who wants to streamline their README files and ensure that they are comprehensive and well-organized. It's particularly useful for new developers who may not be familiar with what's important to include in a README file.

## What is the problem that it addresses?

Creating consistent and comprehensive README files can be a challenge, especially for new developers who may not know what information to include. Remembering all the essential information can also be time-consuming, and writing README files can sometimes feel like a chore.

## How does the product solve that problem?

This program addresses these issues by providing tailored prompts that guide you through the process of creating a high-quality README file. The prompts ensure that you don't forget any essential information and streamline the content of your projects. Additionally, the program includes links to license badges, and the most popular licenses are included in a list to select from, making it easier for you to add licensing information to your README file.

## JavaScript
The program runs in VS Code and doesn't require any HTML or CSS. Javascript is implementing a function with switch statement to create license badges and link to their license files, jQuery to grab information from user input in terminal (prompts).

# Usage <a name="toc-usage"></a>

Use the following command in your VS Code terminal to get started with receiving the prompts:

```javascript
node index.js
```

Check out my [GitHub Repo](https://github.com/LisaMLorenz/README-Node-Challenge) to see the required code and have a look at this 3.5min [video on Youtube](https://youtu.be/Cm_pAYxG5wk) that shows you how the terminal input generates the README based on prompts.


![gif of demo video that shows user input and dynamic README file generation](assets/images/README_Challenge_V1.gif)


Here are a few more screenshots to illustrate how to get started. Make sure to use `node index.js` in the terminal to start the process.

![screenshot of this terminal in VS Code](assets/images/screenshot_vscode_terminal.png)


## This is what the app should do:

* Create a command-line application that accepts user input.
* When a user is prompted for information, a high-quality README.md is created with:
    * Project Title
    * Description
    * Table of Contents
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions

* When a user enters the project title, it's displayed as the title of the README.
* When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
* When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
* When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.
* When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.
* When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

## License <a name="toc-license"></a>

This project is licensed under the MIT license.

## Collaborators <a name="toc-collaborate"></a>

For now it's just - [Lisa Lorenz](https://github.com/LisaMLorenz). We are looking forward to welcome contributors though.

## How to Contribute <a name="toc-contribute"></a>
If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## Tests <a name="toc-tests"></a>

This application was thoroughly tested to ensure that it performs as expected and without any bugs. The testing was conducted using the VS Code Terminal with Node.js and Inquirer.js installed.

To test the application, we ran multiple scenarios in which we input different values in response to the prompts generated by the application. We also tested the application with different combinations of inputs to verify that it handles all cases correctly.

During testing, we didn't encounter any issues or errors. The application performed smoothly, generating a high-quality README file with all the required sections and information.

If you encounter any issues or bugs while using the application, please don't hesitate to report them by opening an issue in the GitHub repository. We'll do our best to address them promptly.

## FAQ <a name="toc-FAQ"></a>

1. What if I don't want to use all the sections in the README?
- You can simply leave those sections blank or remove them from the generated README.
2. What if I want to use a license that's not included in the list of options?
- You can manually add the badge and license information to the generated README.
3. Can I customize the prompts for my specific project needs?
- Yes, you can modify the prompts in the code to suit your project requirements.
4. Can I use this program for projects other than Node.js projects?
- No, this program is specifically designed to work with Node.js projects and requires Node and Inquirer 6.5.0 to be installed.
5. Can I contribute to this project?
- Yes, contributions are welcome! Please refer to the "How to Contribute" section in the README for more information.

## Any more questions? <a name="toc-contact"></a>

Please get in touch via [GitHub](https://github.com/LisaMLorenz) or contact me directly via hej@frau-lorenz.de.