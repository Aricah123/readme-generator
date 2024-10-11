const inquirer = require("inquirer")
const fs = require("fs")
inquirer.prompt([
    {
        message: "what is the title of your project?", 
        name: "projectTitle",
        type: "input"
    },
    {
        message: "please write a desciption of your project", 
        name: "projectDescription",
        type: "input"
    },
    {
        message: "please enter intallion instructions", 
        name: "installationInstuctions",
        type: "input" 
    },
    {
        message: "please provide usage information", 
        name: "usageInformation",
        type: "input" 
    },
    {
        message: "please provide contribution guidlines", 
        name: "contributionGuidelines",
        type: "input" 
    },
    {
        message: "please provide test instructions", 
        name: "testInstructions",
        type: "input" 
    },
    {
        message: "please choose a license", 
        name: "license",
        type: "list",
        chocies: ["mit", "The Unlicense"]

    }
])
.then(answers => {
    const markdown = `# ${answers.projectTitle}
    
## Description
${answers.projectDescription}

### Installation Intructions
${answers.installationInstuctions}

### Usage Information
${answers.projectDescription}

### Contribution Guidelines
${answers.contributionGuidelines}

### Test Instructions
${answers.testInstructions}

### License
${answers.license}`

fs.writeFileSync("readme.md", markdown
    )
})