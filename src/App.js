import "./App.css";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import Footer from "./pages/footer/footer";

import {Provider} from 'react-redux';
import store from "./store";


// `https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/dist/data/scripts/english-characters.js`

function App() {
  /*
  const [Ar, setAr] = useState("");
  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/src/data/index/English/characters.json')
    .then( response => response.text())
    .then( resultText => {
      setAr(JSON.parse(resultText));
      //return console.log(JSON.parse(resultText)) 
    })
    .catch( err => console.log(err) );
  }, []);

  */
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
