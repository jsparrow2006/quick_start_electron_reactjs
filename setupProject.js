const fs = require('fs');
const chalk = require('chalk');
const readline = require("readline");
const { resolve } = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let rawdata = fs.readFileSync('package.json');
let package = JSON.parse(rawdata);
let rawdataManifest = fs.readFileSync('public/manifest.json');
let manifest = JSON.parse(rawdataManifest);

const questions = [
    { question: 'project name: ', key: 'name'},
    { question: 'project description: ', key: 'description'},
    { question: 'project author: ', key: 'author'},
    { question: 'project version: ', key: 'version'},
];

const questions2 = [
    { question: 'project name: ', key: 'name'},
    { question: 'project short_name: ', key: 'short_name'},
];

function getAnswer(item, object ) {
    return new Promise((resolve, reject) => {
        rl.question(chalk.blue(`Enter ${item.question} (${object[item.key]})`), function(answer) {
            object[item.key] = answer || object[item.key];
            console.log(chalk.magenta(`Your select ${item.question}${answer || object[item.key]}`));
            resolve(answer)
        })
    })
}


async function main(){
    console.log(chalk.green('Settings your package.json'))
    console.log(chalk.green('__________________________'))
    console.log('')
    for (const item of questions) {
        await getAnswer(item, package)
    }

    console.log('')
    console.log(chalk.green('Settings your manifest.json'))
    console.log(chalk.green('__________________________'))
    console.log('')
    for (const item of questions2) {
        await getAnswer(item, manifest)
    }

    rl.question(chalk.cyan('Save settings? (Y/N) '), function(answer) {
        if (answer.toUpperCase() === 'Y') {
            let dataPackage = JSON.stringify(package, null, 2);
            let dataManifest = JSON.stringify(manifest, null, 2);
            fs.writeFileSync('package.json', dataPackage);
            fs.writeFileSync('public/manifest.json', dataManifest);
            console.log(chalk.green('Settings is saved!'));
            rl.close();
        }
        if (answer.toUpperCase() === 'N') {
            console.log(chalk.red('Settings is not saved!'));
            rl.close();
        }
    });
    
}

main();
