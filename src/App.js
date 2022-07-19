import { useEffect }  from 'react';
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import Footer from "./pages/footer/footer";

import { getCharacters } from './redux/actions/getCharacters/getCharacters-action';

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
  
  const isLoading = useSelector((state) => state.getCharactersReducer.isLoading);
  const characters = useSelector((state) => state.getCharactersReducer.characters);
  const error = useSelector((state) => state.getCharactersReducer.error);
  const dispatch = useDispatch();

  const aea = '/English/talents/amber.json';
  console.log(characters);

  useEffect(() => {
    dispatch(getCharacters(aea))
  }, [dispatch]);

  return (
      <div className="App">
        {error && <div>* {error}</div>}
        {isLoading && <div>Cargando...</div>}
        <Header />
        <Home />
        <Footer />
      </div>
  );
}

export default App;
