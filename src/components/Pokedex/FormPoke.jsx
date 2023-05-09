import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "../Pokedex/styles/formPoke.css";

const FormPoke = ({ setFormUrl, urlBase }) => {
    const inputPoke = useRef();

    const navigate = useNavigate();

    const url = "https://pokeapi.co/api/v2/type/";

    const [types, getAllTypes] = useFetch(url);

    useEffect(() => {
        getAllTypes();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`;
        navigate(path);
    };

    const handleChange = (e) => {
        setFormUrl(e.target.value);
    };

    return (
        <div className="formPoke">
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputPoke}
                    type="text"
                    className="formPoke__input"
                />
                <button className="formPoke__button">Search</button>
            </form>
            <select onChange={handleChange} className="formPoke__select">
                <option value={urlBase}>All Pokemons</option>
                {types?.results.map((type) => (
                    <option key={type.url} value={type.url}>
                        {type.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FormPoke;
