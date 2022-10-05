import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicle = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card me-5" style={{ minWidth: "14rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${props.item.uid}.jpg`}
        className="card-img-top"
        alt="props.item.name"
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{props.item.properties.name}</h5>
        <div className="card-text">
          <p>
            <strong>Model:</strong> {props.item.properties.model}
          </p>
          <p>
            <strong>Passengers:</strong> {props.item.properties.passengers}
          </p>
          <p>
            <strong>Cost:</strong> {props.item.properties.cost_in_credits}
          </p>
        </div>
        <div className="buttons-card">
          <Link
            to={`/vehicles/${props.item.uid}`}
            className="btn btn-outline-primary"
          >
            Learn more!
          </Link>
          <button
            className={
              store.favorites.find((fav) => fav._id == props.item._id)
                ? "btn btn-outline-warning fas fa-heart"
                : "btn btn-outline-warning far fa-heart"
            }
            onClick={(e) => actions.getUpdateFavorite(props.item)}
          ></button>
        </div>
      </div>
    </div>
  );
};
