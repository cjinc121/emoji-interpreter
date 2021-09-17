import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const eventdic = {
    "😀": " Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "🌟": " Gold Star ",
    "💛": " Yellow Heart",
    " 💕": "Pink Hearts "
  };

  const [meaning, setmeaning] = useState("");
  function eventhandler(event) {
    var userinp = event.target.value;
    var newmean = eventdic[userinp];
    if (newmean === undefined) {
      newmean = "undefined";
    }
    setmeaning(newmean);
  }
  var emojisknown = Object.keys(eventdic);
  function emojieventhandler(emoji) {
    var newmean = eventdic[emoji];
    setmeaning(newmean);
  }
  return (
    <div className="App">
      <h1>Emoji Detector!!</h1>
      <input id="inp" onChange={eventhandler}></input>
      <h2>{meaning}</h2>
      <h3> Emojis We Know</h3>
      {emojisknown.map((emoji) => {
        return (
          <span
            onClick={() => emojieventhandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
