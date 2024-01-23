const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// array of questions for user
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
    name: "getmail",
    message: "Enter interns email",
  },
  {
    type: "input",
    name: "getSchool",
    message: "Enter interns School",
  },
];

//output data array
const output = [];

//Initiilise the programme
function init() {
  inquirer.prompt(initialQuestions).then((answers) => {
    output.push(answers);
    //run selected function to ask menu question
    selected();
  });
  // .then(()=> render(output));
}
//2nd set of questions based on who is selected
function selected() {
  inquirer.prompt(menu).then((answers) => {
    if (answers.addMore === "Add engineer") {
      engineerQs();
    } else if (answers.addMore === "Add intern") {
      internQs();
    } else if (answers.addMore === "Finish building the team") {
      console.log("Your team profile has been built");
      console.log(manager);
      render(output);
    }
  });
}

function engineerQs() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    output.push(answers);
    selected();
  });
}

function internQs() {
  inquirer.prompt(internQuestions).then((answers) => {
    output.push(answers);
    selected();
  });
}

init();
