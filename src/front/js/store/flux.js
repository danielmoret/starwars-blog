const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      characters: JSON.parse(localStorage.getItem("characters")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
    },
    actions: {
      getUpdateFavorite: (item) => {
        const store = getStore();

        const favorite = store.favorites.find((fav) => fav._id === item._id);

        if (favorite) {
          setStore({
            favorites: store.favorites.filter((fav) => fav._id !== item._id),
          });
          localStorage.setItem("favorites", JSON.stringify(store.favorites));
        } else {
          setStore({ favorites: [...store.favorites, item] });
          localStorage.setItem("favorites", JSON.stringify(store.favorites));
        }
      },

      getCharacters: () => {
        const store = getStore();

        if (localStorage.characters == undefined) {
          for (let index = 1; index <= 10; index++) {
            const apiURLPeople = `https://www.swapi.tech/api/people/${index}`;

            fetch(apiURLPeople)
              .then((respond) => {
                if (respond.ok) {
                  return respond.json();
                }
                throw new Error("Algo salio mal");
              })
              .then((data) => {
                store.characters.push(data.result);
                setStore({ characters: store.characters });
                localStorage.setItem(
                  "characters",
                  JSON.stringify(store.characters)
                );
              })
              .catch((err) => console.error(err));
          }
        }
      },

      getPlanets: () => {
        const store = getStore();

        if (localStorage.planets == undefined) {
          for (let index = 1; index <= 10; index++) {
            const apiURLPlanet = `https://www.swapi.tech/api/planets/${index}`;

            fetch(apiURLPlanet)
              .then((respond) => {
                if (respond.ok) {
                  return respond.json();
                }
                throw new Error("Algo salio mal");
              })
              .then((data) => {
                store.planets.push(data.result);
                setStore({ planets: store.planets });
                localStorage.setItem("planets", JSON.stringify(store.planets));
              })
              .catch((err) => console.error(err));
          }
        }
      },

      getVehicles: () => {
        const store = getStore();

        if (localStorage.vehicles == undefined) {
          for (let index = 0; index < 10; index++) {
            const idVehicles = [4, 7, 6, 8, 14, 18, 16, 19, 20, 24];
            const apiURLVehicle = `https://www.swapi.tech/api/vehicles/${idVehicles[index]}`;

            fetch(apiURLVehicle)
              .then((respond) => {
                if (respond.ok) {
                  return respond.json();
                }
                throw new Error("Algo salio mal");
              })
              .then((data) => {
                store.vehicles.push(data.result);
                setStore({ vehicles: store.vehicles });
                localStorage.setItem(
                  "vehicles",
                  JSON.stringify(store.vehicles)
                );
              })
              .catch((err) => console.error(err));
          }
        }
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
