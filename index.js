var game = require('./game.js');
var fs = require('fs')


let filename = process.argv[2];
main(filename);


function main(filename){
    //read file
    let array = fs.readFileSync(filename).toString().split("\n");

    let game1 = new game();

    for(i in array) {
        game1.executeCommand(array[i]);
    }
}