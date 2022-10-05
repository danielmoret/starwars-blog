import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardCharacter = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card me-5" style={{ minWidth: "14rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${props.item.uid}.jpg`}
        className="card-img-top"
        alt={props.item.name}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{props.item.properties.name}</h5>
        <div className="card-text">
          <p>
            <strong>Gender:</strong> {props.item.properties.gender}
          </p>
          <p>
            <strong>Hair color:</strong> {props.item.properties.hair_color}
          </p>
          <p>
            <strong>Eye-color: </strong>
            {props.item.properties.eye_color}
          </p>
        </div>
        <div className="buttons-card">
          <Link
            to={`/people/${props.item.uid}`}
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
