const toy = require('./toy.js');

class Game {

    constructor(){
        Game.placeCommandRegex = /^PLACE\s(\d),(\d),(\w{4})$/g;
        Game.moveCommandRegex = /^MOVE$/g;
        Game.leftCommandRegex = /^LEFT$/g;
        Game.rightCommandRegex = /^RIGHT$/g;
        Game.reportCommandRegex = /^REPORT$/g;

        //create 5,5
        this.tObject = new toy(5,5);
    }

    /**
     * check command
     * @param command
     */
    executeCommand(command){

        if(this.executePlaceCommand(command) !== false)
            return;

        if(this.executeMoveCommand(command) !== false)
            return;

        if(this.executeLeftCommand(command) !== false)
            return;

        if(this.executeRightCommand(command) !== false)
            return;

        let message = this.executeReportCommand(command);
        if( message !== false){
            console.log(message);
            return;
        }
    }

    /**
     * execute place command
     * return true if executed
     * @returns {boolean}
     */
    executePlaceCommand(command){

        let result = command.match(Game.placeCommandRegex);

        if(result == null)
            return false;

        this.tObject.place(result[0],result[1],result[2]);
        return true;
    }

    /**
     * execute move command
     * return true if executed
     * @returns {boolean}
     */
    executeMoveCommand(command){

        let result = command.match(Game.moveCommandRegex);

        if(result == null)
            return false;

        this.tObject.move();
        return true;
    }

    /**
     * execute left command
     * return true if executed
     * @returns {boolean}
     */
    executeLeftCommand(command){

        let result = command.match(Game.leftCommandRegex);

        if(result == null)
            return false;

        this.tObject.left();
        return true;
    }

    /**
     * execute right command
     * return true if executed
     * @returns {boolean}
     */
    executeRightCommand(command){

        let result = command.match(Game.rightCommandRegex);

        if(result == null)
            return false;

        this.tObject.right();
        return true;
    }

    /**
     * execute report command
     * return true if executed
     * @returns {boolean}
     */
    executeReportCommand(command){

        let result = command.match(Game.reportCommandRegex);
        if(result == null)
            return false;

        return this.tObject.report();
    }
}
module.exports = Game;