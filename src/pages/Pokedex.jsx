import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormPoke from "../components/Pokedex/FormPoke";
import PokeContainer from "../components/Pokedex/PokeContainer";
import imgs1 from "../assets/images/img_title.png";
import imgs2 from "../assets/images/img_footer.png";
import "../components/Pokedex/styles/pokedex.css";

const Pokedex = () => {
    const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const [formUrl, setFormUrl] = useState(urlBase);
    const { trainerName } = useSelector((state) => state);

    return (
        <div className="pokedex">
            <header className="pokedex__header">
                <div className="pokedex__header-1"></div>
                <div className="pokedex__header-2"></div>
                <img className="pokedex__header-img-1" src={imgs1} alt="" />
                <img className="pokedex__header-img-2" src={imgs2} alt="" />
            </header>
            <p>
                <span className="pokedex__title">Welcome {trainerName}, </span>
                <span className="pokedex__parrafo">
                    here you can find your favorite pokemon
                </span>
            </p>

            <FormPoke urlBase={urlBase} setFormUrl={setFormUrl} />
            <PokeContainer formUrl={formUrl} />
        </div>
    );
};

export default Pokedex;
