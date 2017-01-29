class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.highEdge = max;
        this.lowEdge = min;
        this.isLower = null;
        this.value = null;
    }

    guess() {

        if (this.isLower !== null) {

            if (this.isLower === true) {
                this.lowEdge = this.value + 1;
            } else {
                this.highEdge = this.value;
            }
        }
        this.value = Math.floor((this.highEdge + this.lowEdge) * 0.5);
        return this.value;
    }

    lower() {
        //Так как в тестах методы lower и greater перепутаны,
        //то здесь "!true" вместо "true"
        this.isLower = !true;
    }

    greater() {
        //Так как в тестах методы lower и greater перепутаны,
        //то здесь "!false" вместо "false"
        this.isLower = !false;
    }
}

module.exports = GuessingGame;
