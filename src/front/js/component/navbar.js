import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import starWarsLogo from "../../img/pngwing.com.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <div className="container">
        <Link to="/">
          <img style={{ width: "100px" }} src={starWarsLogo}></img>
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favorites.length}
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {!(store.favorites.length == 0) ? (
              store.favorites.map((favorite) => (
                <li key={favorite._id} className="d-flex flex-nowrap p-2">
                  <span className="dropdown-item">
                    {favorite.properties.name}
                  </span>
                  <button
                    className="btn-dropdown"
                    onClick={(e) => actions.getUpdateFavorite(favorite)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))
            ) : (
              <li className="text-center">No favorites</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
