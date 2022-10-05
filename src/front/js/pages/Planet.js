import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/placeholder.jpg";

export const Planet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <React.Fragment>
      {store.planets.map((planet) => {
        if (planet.uid == params.id) {
          return (
            <div className="container" key={planet._id}>
              <div className="row d-flex justify-content-evenly">
                <img
                  src={
                    planet.uid != 1
                      ? `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`
                      : rigoImageUrl
                  }
                  className="img-description col-6"
                  alt={planet.properties.name}
                />
                <div className="description col-6 text-center">
                  <h1>{planet.properties.name}</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin semper diam et augue faucibus, eu elementum leo
                    euismod. Aenean id ipsum velit. Integer quis hendrerit
                    purus. Aliquam sagittis diam et lorem posuere, sit amet
                    ultricies velit efficitur. Nunc molestie elit risus, ut
                    commodo ligula facilisis et. Suspendisse viverra lobortis
                    ipsum.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center text-danger border-top border-danger mt-4 text-center">
                <div className="col-2">
                  <p className="fw-bolder">Name</p>
                  <p>{planet.properties.name}</p>
                </div>
                <div className="col-2">
                  <p className="fw-bolder">Population</p>
                  <p>{planet.properties.population}</p>
                </div>
                <div className="col-2">
                  <p className="fw-bolder">Terrain</p>
                  <p>{planet.properties.terrain}</p>
                </div>
                <div className="col-2">
                  <p className="fw-bolder">Diameter</p>
                  <p>{planet.properties.diameter}</p>
                </div>
                <div className="col-2">
                  <p className="fw-bolder">Orbital Period</p>
                  <p>{planet.properties.orbital_period}</p>
                </div>
                <div className="col-2">
                  <p className="fw-bolder">Climate</p>
                  <p>{planet.properties.climate}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </React.Fragment>
  );
};
