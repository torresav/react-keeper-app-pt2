import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import notes from "../notes.js"

function App() {
  return (
    <div>
      <Header />
        {notes.map(entry => 
          <Note 
            title={entry.title}
            content={entry.content}
          />
        )}
      <Footer />
    </div>
  );
}

export default App;