import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardCharacter } from "../component/CardCharacter";
import { CardPlanet } from "../component/CardPlanet";
import { CardVehicle } from "../component/CardVehicle.js";


export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
    actions.getPlanets();
    actions.getVehicles();
  },[])

   

  return (
    <div className="container">
      <h2 className="text-danger mt-5">Characters</h2>
      <div id="carousel">
        <div id="characters">
          {store.characters.map(character =>{
			return <CardCharacter item={character} key={character.uid}/>
		  })}
        </div>
      </div>
      <h2 className="text-danger mt-5">Planets</h2>
      <div id="carousel">
        <div id="characters">
          {store.planets.map(planet =>{
			return <CardPlanet item={planet} key={planet.uid}/>
		  })}
        </div>
      </div>
      <h2 className="text-danger mt-5">Vehicles</h2>
      <div id="carousel">
        <div id="characters">
          {store.vehicles.map(vehicle =>{
			return <CardVehicle item={vehicle} key={vehicle.uid}/>
		  })}
        </div>
      </div>
    </div>
  );
};
