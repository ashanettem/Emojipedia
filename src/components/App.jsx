import React from "react";
import Card from "./Card";
import emojis from "../emojipedia";

function createEmoji(emoji) {
  return (
    <Card
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojis.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
