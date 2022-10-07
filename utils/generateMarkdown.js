// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge;
  switch (license) {
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
      licenseBadge = "";
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink;
  switch (license) {
    case 'MIT':
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case 'GPLv2':
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case 'Apache':
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case 'GPLv3':
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseLink = renderLicenseLink(license);
  var licenseBadge = renderLicenseBadge(license);
  var licenseInfo = '![License](' + licenseBadge + ')  ' + licenseLink;
  return licenseInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseSection(data.license)}

# ${data.title} 
https://github.com/${data.username}/${data.title}
  
## Description    
  
${data.description}
  
[Installation](#installation)
  
[Usage](#usage)
  
[Contributing](#contributing)
  
[Tests](#tests)
  
[License](#license)
  
[Questions](#questions)
  
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
      `;
}

module.exports = generateMarkdown;