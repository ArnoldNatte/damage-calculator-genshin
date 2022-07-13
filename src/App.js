import './App.css';
import { useEffect, useState } from 'react';

// `https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/dist/data/scripts/english-characters.js`


function App() {

  const [Ar, setAr] = useState("");

  useEffect(() => {

    fetch('https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/src/data/English/characters/lisa.json')
    .then( response => response.text())
    .then( resultText => {
      setAr(JSON.parse(resultText));
      //return console.log(JSON.parse(resultText)) 
    })
    .catch( err => console.log(err) );

  }, []);



  return (
    <div className="App">
      {Ar.name}
    </div>
  );
}

export default App;
