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
    this._lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    this._beat.on(Beat.events.BIT,() => {
      this._create();
    })


    // const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    // let count = 0;

    const message = document.createElement("div");
    message.classList.add(".message");
    message.innerText = "Ah";

    document.querySelector(".main").appendChild(message);

    this.emit(Application.events.READY);
  }
  _create() {
    for (let lyric of this._lyrics) {
      let message = `.message created for ${lyric} </br>`;
      document.writeln(message);
    }

  }
}
