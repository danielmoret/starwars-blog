import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const CardVehicle = (props) => {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    const apiURL = `https://www.swapi.tech/api/vehicles/${props.item.uid}`;

    fetch(apiURL)
      .then((respond) => {
        if (respond.ok) {
          return respond.json();
        }
        throw new Error("Algo salio mal");
      })
      .then((data) => setVehicle(data.result.properties))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card me-5" style={{ minWidth: "14rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${props.item.uid}.jpg`}
        className="card-img-top"
        alt="props.item.name"
      />
      <div className="card-body">
        <h5 className="card-title">{props.item.name}</h5>
        <p className="card-text">
          <p>
            <strong>Name:</strong> {vehicle.name}
          </p>
          <p>
            <strong>Model:</strong> {vehicle.model}
          </p>
          <p>
            <strong>Cost:</strong> {vehicle.cost_in_credits}
          </p>
        </p>
        <div className="buttons-card">
          <Link
            to={`/vehicles/${props.item.uid}`}
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
