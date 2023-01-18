import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {

  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat();
     this.lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
     this._create();
    this._beat.on(Beat.events.BIT, this._create);
    this.emit(Application.events.READY);
  }

  _create() {
    for (let i = 0; i < this.lyrics.length; i++) {
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = this.lyrics[i];
      document.querySelector(".main").appendChild(message);
    }
  }
}