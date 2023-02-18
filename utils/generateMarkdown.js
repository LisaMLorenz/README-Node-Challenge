// function to generate markdown for README

function generateMarkdown(data, licenseBadge, licenseNotice) {


  // Add badge and notice for selected license
  switch (data.license) {
    case 'MIT':
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseNotice = "This project is licensed under the MIT license.";
      break;
    case 'Apache 2.0':
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseNotice = "This project is licensed under the Apache License 2.0.";
      break;
    case 'GNU v3.0':
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseNotice = "This project is licensed under the GNU General Public License v3.0.";
      break;
    case 'BSD 2-Clause':
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      licenseNotice = "This project is licensed under the BSD 2-Clause license.";
      break;
    case 'BSD 3-Clause':
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      licenseNotice = "This project is licensed under the BSD 3-Clause license.";
      break;
    case 'Boost':
      licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      licenseNotice = "This project is licensed under the Boost Software License 1.0.";
      break;
    case 'Eclipse':
      licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      licenseNotice = "This project is licensed under the Eclipse Public License 1.0.";
      break;
    case 'Mozilla Public':
      licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      licenseNotice = "This project is licensed under the Mozilla Public License 2.0.";
      break;
    case 'The Unlicense':
      licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      licenseNotice = "This project is licensed under the Unlicense.";
      break;
    default:
      // No license selected
      break;
  }

// Add other user input from prompts in terminal to the README structure

  return `# ${data.projectTitle} ${licenseBadge}
  

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

This project is licensed under the ${data.license} license - checkout the full license here:

## Screenshot

${data.screenshot}

## Collaborators

${data.collab}

## Contributing

Please send me an email to find out how to contribut: ${data.email}

## Tests

${data.tests}

## Questions

Please get in touch via [GitHub](https://github.com/${data.gitUser}) or contact directly via ${data.email}.
`;
}

module.exports = generateMarkdown;

