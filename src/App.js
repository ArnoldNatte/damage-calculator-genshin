import "./App.css";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import DamagedCalculator from "./pages/damage-calculator/damageCalculator";
import About from "./pages/about/about";
import Footer from "./pages/footer/footer";
/*
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*
import { getCharacters } from "./redux/actions/getCharacters/getCharacters-action";
import { getImages } from "./redux/actions/getImages/getImages-action";*/

function App() {
  /*
  const dispatch = useDispatch();
  const urlCharacters = "/index/English/characters.json";
  const charactersStatus = {
    characters: useSelector((state) => state.getCharactersReducer.characters),
    isLoading: useSelector((state) => state.getCharactersReducer.isLoading),
    error: useSelector((state) => state.getCharactersReducer.error),
  };
  useEffect(() => {
    dispatch(getCharacters(urlCharacters));
  }, [dispatch]);

  const urlImages = "/image/characters.json";
  const images = useSelector((state) => state.getImagesReducer.images);
  useEffect(() => {
    dispatch(getImages(urlImages));
  }, [dispatch]);

  if (images.length !== 0) {
    //console.log(images);
  }
  if (charactersStatus.characters.length !== 0) {
    //console.log(characters);
  }*/

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Damage-calculator"
            element={<DamagedCalculator />}
          />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
      {/*charactersStatus.error && <div>* {charactersStatus.error}</div>}
      {charactersStatus.isLoading && <div>Cargando...</div>*/}
    </div>
  );
}

export default App;
