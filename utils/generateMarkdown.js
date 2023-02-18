// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Screenshot](#screenshot)
* [Collaborators](#collaborators)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}

## Screenshot

${data.screenshot}

## Collaborators

${data.collab}

## Contributing

${data.contribute}

## Tests

${data.tests}

## Questions

Please get in touch via [GitHub](https://github.com/${data.gitUser}) or contact directly via ${data.email}.
`;
}

module.exports = generateMarkdown;

