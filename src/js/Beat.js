import EventEmitter from "eventemitter3";
import Ump from "./Ump";
export default class Beat extends EventEmitter {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super()
    setInterval(() => {
      this.emit(Beat.events.BIT);
    }, 1000);
  }
}

