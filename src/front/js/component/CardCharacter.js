import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const CardCharacter = (props) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const apiURL = `https://www.swapi.tech/api/people/${props.item.uid}`;

    fetch(apiURL)
      .then((respond) => {
        if (respond.ok) {
          return respond.json();
        }
        throw new Error("Algo salio mal");
      })
      .then((data) => setCharacter(data.result.properties))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card me-5" style={{ minWidth: "14rem" }}>
      <img 
        src={`https://starwars-visualguide.com/assets/img/characters/${props.item.uid}.jpg`}
        className="card-img-top"
        alt={props.item.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-text">
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Hair color:</strong> {character.hair_color}</p>
          <p><strong>Eye-color: </strong>{character.eye_color}</p>
        </p>
        <div className="buttons-card">
          <Link to={`/people/${props.item.uid}`} className="btn btn-outline-primary">
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
