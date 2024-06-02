

import {GiphyFetch} from "@giphy/js-fetch-api";
import {createContext, useContext,  useState} from "react";

const GifContext = createContext();

const GifProvider = ({children}) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");

  const gf = new GiphyFetch('245VJHlX80HHnu6VKiME7mkIzNRLSexw');


  return (
    <GifContext.Provider
      value={{gf, gifs, setGifs, filter, setFilter}}
    >
      {children}
    </GifContext.Provider>
  );
};

export const GifState = () => {
  return useContext(GifContext);
};

export default GifProvider;