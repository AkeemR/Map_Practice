import React from "react";
import Entry from "./Entry";
import emojinary from "../emojinary";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emoji-nary</span>
      </h1>

      <dl className="dictionary">{emojinary.map(createEntry)}</dl>
    </div>
  );
}

export default App;
