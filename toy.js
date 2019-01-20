class Toy{

    constructor(maxX, maxY){

        Toy.north = "NORTH";
        Toy.south = "SOUTH";
        Toy.east  = "EAST";
        Toy.west = "WEST";
        Toy.validDirections = [Toy.north , Toy.east, Toy.south , Toy.west];

        this.maxX = maxX;
        this.maxY = maxY;
        this.currentX = 0;
        this.currentY = 0;
        this.currentDirection = Toy.north;
    }

    /**
     * place toy
     * @param x
     * @param y
     * @param direction
     */
    place(x , y , direction){

        this.currentX = this.checkXLocation(x);
        this.currentY = this.checkYLocation(y);
        this.currentDirection = this.validDirectionName(direction);

    }

    /**
     * move the toy by 1 step
     */
    move (){

        switch(this.currentDirection){

            case Toy.north :
                this.currentY = this.checkYLocation(this.moveY(1));
                break;

            case Toy.south :
                this.currentY = this.checkYLocation(this.moveY(-1));
                break;

            case Toy.east :
                this.currentX = this.checkXLocation(this.moveX(1));
                break;

            case Toy.west :
                this.currentX = this.checkXLocation(this.moveX(-1));
                break;

            default :
                break;
        }
    }


    /**
     * check x location
     * @param newLocation
     * @param oldLocation
     * @returns {*}
     */
    checkXLocation(newLocation){
        return this.checkLocation(newLocation,this.currentX,this.maxX)
    }

    /**
     * check y location
     * @param newLocation
     * @param oldLocation
     * @returns {*}
     */
    checkYLocation(newLocation){
        return this.checkLocation(newLocation,this.currentY,this.maxY)
    }

    /**
     * check location
     * @param newLocation
     * @param oldLocation
     * @param max
     * @returns {*}
     */
    checkLocation(newLocation, oldLocation ,max){

        if( newLocation >= max || 0 > newLocation)
            return oldLocation;

        return newLocation;
    }

    /**
     * check direction name
     * @param newDirection
     * @returns {*}
     */
    validDirectionName(newDirection){

        if( Toy.validDirections.indexOf(newDirection) == -1 )
            return this.currentDirection;

        return newDirection;
    }

    /**
     * get estimated y location
     * @param step
     * @returns {*}
     */
    moveY(step){
        return this.currentY + step;
    }

    /**
     * get estimated x location
     * @param step
     * @returns {*}
     */
    moveX(step){
        return this.currentX + step;
    }


    /**
     * rotate toy
     * @param turn
     */
    rotate(turn){

        let index = Toy.validDirections.indexOf(this.currentDirection);

        if(index != -1){
            let length = Toy.validDirections.length;
            let newIndex = (((index + turn) % length ) + length) % length;
            this.currentDirection = Toy.validDirections[newIndex];
        }

    }

    /**
     * toy turn left
     */
    left(){
        this.rotate(-1);
    }

    /**
     * toy turn right
     */
    right(){
        this.rotate(1);
    }

    /**
     * report current  location and the direction
     */
    report(){
        return this.currentX + "," + this.currentY + "," + this.currentDirection ;
    }

}

module.exports = Toy;