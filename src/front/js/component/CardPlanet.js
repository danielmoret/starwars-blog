import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const CardPlanet = (props) => {
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    const apiURL = `https://www.swapi.tech/api/planets/${props.item.uid}`;

    fetch(apiURL)
      .then((respond) => {
        if (respond.ok) {
          return respond.json();
        }
        throw new Error("Algo salio mal");
      })
      .then((data) => setPlanet(data.result.properties))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card me-5" style={{ minWidth: "14rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`}
        className="card-img-top"
        alt={props.item.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-text">
          <p>
            <strong>Population:</strong> {planet.population}
          </p>
          <p>
            <strong>Terrain:</strong> {planet.terrain}
          </p>
        </p>
        <div className="buttons-card">
          <Link
            to={`/planets/${props.item.uid}`}
            className="btn btn-outline-primary"
          >
            Learn more!
          </Link>
          <Link to="#" className="btn btn-outline-warning">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
      </div>
    </div>
  );
};
