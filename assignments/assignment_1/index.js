function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    return process.argv[5]
}   

function getNameFromEnv() {
    // Write your code here
    return process.env.name
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}
