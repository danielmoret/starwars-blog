import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <React.Fragment>
      {store.vehicles.map((vehicle) =>{
        if (vehicle.uid == params.id){
          return(
            <div className="container" key={vehicle._id}>
            <div className="row d-flex justify-content-evenly">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
                className="img-description col-6"
                alt={vehicle.properties.name}
              />
              <div className="description col-6 text-center">
                <h1>{vehicle.properties.name}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  semper diam et augue faucibus, eu elementum leo euismod. Aenean
                  id ipsum velit. Integer quis hendrerit purus. Aliquam sagittis
                  diam et lorem posuere, sit amet ultricies velit efficitur. Nunc
                  molestie elit risus, ut commodo ligula facilisis et. Suspendisse
                  viverra lobortis ipsum.
                </p>
              </div>
            </div>
            <div className="row justify-content-center text-danger border-top border-danger mt-4 text-center">
              <div className="col-2">
                <p className="fw-bolder">Name</p>
                <p>{vehicle.properties.name}</p>
              </div>
              <div className="col-2">
                <p className="fw-bolder">Model</p>
                <p>{vehicle.properties.model}</p>
              </div>
              <div className="col-2">
                <p className="fw-bolder">Cost</p>
                <p>{vehicle.properties.cost_in_credits}</p>
              </div>
              <div className="col-2">
                <p className="fw-bolder">Passengers</p>
                <p>{vehicle.properties.passengers}</p>
              </div>
              <div className="col-2">
                <p className="fw-bolder">Length</p>
                <p>{vehicle.properties.length}</p>
              </div>
              <div className="col-2">
                <p className="fw-bolder">Vehicle Class</p>
                <p>{vehicle.properties.vehicle_class}</p>
              </div>
            </div>
          </div>
          )
        }
      })}  

    </React.Fragment>
  );
};