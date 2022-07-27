import "./App.css";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
//import DamagedCalculator from './pages/damage-calculator/damageCalculator';
import Footer from "./pages/footer/footer";

/*
import { useEffect }  from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getCharacters } from './redux/actions/getCharacters/getCharacters-action';
import { getImages } from './redux/actions/getImages/getImages-action';
*/

function App() {
  /*
  const dispatch = useDispatch();
  //const isLoading = useSelector((state) => state.getCharactersReducer.isLoading);
  //const error = useSelector((state) => state.getCharactersReducer.error);
  const characters = useSelector((state) => state.getCharactersReducer.characters);

  const urlCharacters = '/index/English/characters.json';
  const urlImages = '/image/characters.json';
  const images = useSelector((state) => state.getImagesReducer.images);

  if(images.length !== 0){
    //console.log(images);
  }
  if(characters.length !== 0){
    //console.log(characters);
  }
  
  useEffect(() => {
    dispatch(getCharacters(urlCharacters));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getImages(urlImages));
  }, [dispatch]);
  */
  return (
    <div className="App">
      <Header />
      {/*{error && <div>* {error}</div>}
        {isLoading && <div>Cargando...</div>}
        {//<DamagedCalculator datos={characters}/>
        }*/}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
