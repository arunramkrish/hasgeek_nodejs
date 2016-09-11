"use strict"
const EventEmitter = require("events");

class MyTimer extends EventEmitter {
    constructor (count) {
        super();
        this.count = count;
    }
    start () {
        this.interval = setInterval(this.createCallback(this), 1000);
    }

    createCallback (emitter) {
        return function() {
           emitter.count--;
           console.log(emitter.count);
           if (emitter.count == 0) {
               emitter.emit("complete");
               clearInterval(emitter.interval);
           } 
        };
    }
}
module.exports = MyTimer;
