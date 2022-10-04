import React, { useContext } from "react";
import rigoImageUrl from "../../img/placeholder.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanet = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card me-5" style={{ minWidth: "14rem" }}>
      <img
        src={
          props.item.uid != 1
            ? `https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`
            : rigoImageUrl
        }
        className="card-img-top"
        alt={props.item.name}
      />
      <div className="card-body d-flex flex-column justify-content-around">
        <h5 className="card-title">{props.item.properties.name}</h5>
        <p className="card-text">
          <p>
            <strong>Population:</strong> {props.item.properties.population}
          </p>
          <p>
            <strong>Terrain:</strong> {props.item.properties.terrain}
          </p>
        </p>
        <div className="buttons-card">
          <Link
            to={`/planets/${props.item.uid}`}
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
