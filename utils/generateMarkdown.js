// function to generate markdown for README

function generateMarkdown(data, licenseBadge, licenseNotice) {


  // Add badge and notice for selected license
  switch (data.license) {
    case 'MIT':
      licenseBadge = "[![L[LICENSE] MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseNotice = "This project is licensed under the MIT license - full [LICENSE](./licenses/LICENCE-MIT.txt)";
      break;
    case 'Apache 2.0':
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseNotice = "This project is licensed under the Apache License 2.0. - full [LICENSE](./licenses/LICENCE-APACHE-V2.txt)";
      break;
    case 'GNU v3.0':
      licenseBadge = "[![L[LICENSE] GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseNotice = "This project is licensed under the GNU General Public License v3.0. - full [LICENSE](./licenses/LICENCE-GNU-GP-V3.txt)";
      break;
    case 'BSD 3-Clause':
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      licenseNotice = "This project is licensed under the BSD 3-Clause license - full [LICENSE](./licenses/LICENCE-BSD3CL.txt)";
      break;
    case 'Boost':
      licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      licenseNotice = "This project is licensed under the Boost Software License 1.0. - full [LICENSE](./licenses/LICENCE-BOOST.txt)";
      break;
    case 'Eclipse':
      licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      licenseNotice = "This project is licensed under the Eclipse Public License 1.0. - full [LICENSE](./licenses/LICENCE-ECLIPSE.txt)";
      break;
    case 'Mozilla Public':
      licenseBadge = "[![L[LICENSE] MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      licenseNotice = "This project is licensed under the Mozilla Public License 2.0. - full [LICENSE](./licenses/LICENCE-MOZILLA.txt)";
      break;
    case 'The Unlicense':
      licenseBadge = "[![L[LICENSE] Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      licenseNotice = "This project is licensed under the Unlicense - full [LICENSE](./licenses/LICENCE-UNLICENSE.txt)";
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

${data.screenshot}

## License

${licenseNotice}

## Collaborators

${data.collab}

## Contributing

Please send me an email to find out how to contribute: ${data.email}

## Tests

${data.tests}

## Questions

Please get in touch via [GitHub](https://github.com/${data.gitUser}) or contact directly via ${data.email}.
`;
}

module.exports = generateMarkdown;

