import inquirer from "inquirer"; //calls inquirer
const answer = await inquirer.prompt([
    { message: "Enter a digit.",
        type: "number",
        name: "amOne"
    },
    {
        message: "Please select an operator.",
        type: "list",
        name: "Operators",
        choices: ["Add", "Subtract", "Multiply", "Divide"]
    },
    { message: "Enter another digit.",
        type: "number",
        name: "amTwo"
    }
]);
if (answer.Operators === "Add") {
    console.log("Your total amount is ", +answer.amOne + answer.amTwo);
}
else if (answer.Operators === "Subtract") {
    console.log("Your total amount is ", +answer.amOne - answer.amTwo);
}
else if (answer.Operators === "Multiply") {
    console.log("Your total amount is", +answer.amOne * answer.amTwo);
}
else
    console.log("Your total amount is", +answer.amOne / answer.amTwo);
