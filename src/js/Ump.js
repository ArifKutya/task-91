import EventEmitter from "eventemitter3";

export default class Ump extends EventEmitter {
    static get events() {
        return {
            BIT: "bit",
        };
    }
    constructor() {
        super();
        setInterval(() => {
            this.emit(Ump.events.BIT);
        }, 1000);
    }
}