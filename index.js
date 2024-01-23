const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// array of questions for mnager
const initialQuestions = [
  {
    type: "input",
    name: "getName",
    message: "What is the team manager name?",
  },
  {
    type: "input",
    name: "getId",
    message: "What is the Employee ID?",
  },
  {
    type: "input",
    name: "getEmail",
    message: "What is manager email?",
  },
  {
    type: "input",
    name: "getOfficeNumber",
    message: "What is the Office number?",
  },
];

//menu questions to add or exit
const menu = [
  {
    type: "list",
    name: "addMore",
    message: "Do you want to..",
    choices: ["Add engineer", "Add intern", "Finish building the team"],
  },
];

//engineer questions
const engineerQuestions = [
  {
    type: "input",
    name: "getName",
    message: "Enter engineers name",
  },
  {
    type: "input",
    name: "getId",
    message: "Enter engineers ID",
  },
  {
    type: "input",
    name: "getEmail",
    message: "Enter engineers email",
  },
  {
    type: "input",
    name: "getGithub",
    message: "Enter engineers Github username",
  },
];

//intern questions
const internQuestions = [
  {
    type: "input",
    name: "getName",
    message: "Enter interns name",
  },
  {
    type: "input",
    name: "getId",
    message: "Enter interns ID",
  },
  {
    type: "input",
    name: "getEmail",
    message: "Enter interns email",
  },
  {
    type: "input",
    name: "getSchool",
    message: "Enter interns School",
  },
];

//output data array
const allTeamMembers = [];

//Initiilise the programme
function init() {
  inquirer.prompt(initialQuestions).then((answers) => {
    //create manager using inquirer inputs
    const newManager = new Manager(
      answers.getName,
      answers.getId,
      answers.getEmail,
      answers.getOfficeNumber
    );
    allTeamMembers.push(newManager);

    //run selected function to ask question
    selected();
  });
  // .then(()=> render(output));
}
//2nd set of questions based on who is selected
function selected() {
  inquirer.prompt(menu).then((answers) => {
    //show engineer Q's if engineer selected
    if (answers.addMore === "Add engineer") {
      engineerQs();

      //show intern Q's if intern selected
    } else if (answers.addMore === "Add intern") {
      internQs();
    } else if (answers.addMore === "Finish building the team") {
      console.log("Your team profile has been built");

      //write html with output data
      // render(allTeamMembers);

      fs.writeFile(outputPath, render(allTeamMembers), function (err) {
        if (err) throw err;
        console.log("Saved!");
      });
    }
  });
}

function engineerQs() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const newEngineer = new Engineer(
      answers.getName,
      answers.getId,
      answers.getEmail,
      answers.getGithub
    );
    allTeamMembers.push(newEngineer);
    selected();
  });
}

function internQs() {
  inquirer.prompt(internQuestions).then((answers) => {
    const newIntern = new Intern(
      answers.getName,
      answers.getId,
      answers.getEmail,
      answers.getSchool
    );
    allTeamMembers.push(newIntern);
    selected();
  });
}

init();
