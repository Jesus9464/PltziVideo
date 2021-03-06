import React from "react";
import "../assets/style/App.scss";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Categories from "../components/Categories";
import { Header } from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";
import { useInitialState } from "../hooks/useInitialState.js";

const API = "http://localhost:3000/initalState";

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist?.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist?.map((item) => (
              <CarouselItem key={item.id} {...itme} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {initialState.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
