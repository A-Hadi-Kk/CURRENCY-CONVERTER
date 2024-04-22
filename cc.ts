#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to KKs Exchange! ");
const currency: any = {
USD: 1,
EUR: 0.91,
GBP: 0.76,
INR: 74.57,
PKR: 280,
}
let user_input = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Choose the currency in which u have the amount: ",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Choose the currency in which u want the amount: ",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"] 
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount in numbers: "
    }
])
if(isNaN(user_input.amount) ){
    console.log("Kindly enter the correct amount.")
}
else {
let fromAmount = currency[user_input.from];
let toAmount = currency[user_input.to];
let amount = user_input.amount;
let convertedAmount = amount * toAmount;
console.log(`Congratulation! You have successfully converted ${amount} ${user_input.from} into ${user_input.to} and the converted amount is: ${convertedAmount} ${user_input.to}`);
}