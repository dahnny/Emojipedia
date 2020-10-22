import React from "react";
import Entry from './Entry';
import emojipedia from '../emojipedia';


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emojipedia => (<Entry
          key={emojipedia.id}
          emoji={emojipedia.emoji}
          title={emojipedia.name}
          description={emojipedia.meaning} />))}
      </dl>
    </div>
  );
}

export default App;
