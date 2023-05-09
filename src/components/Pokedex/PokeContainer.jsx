import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import PokeCard from "./PokeCard";
import "../Pokedex/styles/pokeContainer.css";
import Pagination from "./Pagination";

const PokeContainer = ({ formUrl }) => {
    const [pokemons, getAllPokemons] = useFetch(formUrl);

    /*     const [pokeCard, setPokeCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokePerPage, setPokePerPage] = useState(10);

    const lastIndex = currentPage * pokePerPage;
    const firstIndex = lastIndex - pokePerPage;
 */
    useEffect(() => {
        getAllPokemons();
    }, [formUrl]);

    /*     useEffect(() => {
        if (pokemons?.results) {
            setPosts(pokemons?.results);
        } else {
            setPosts(pokemons?.pokemon.map((objPoke) => objPoke.pokemon));
        }
    }, [pokemons]);
 */
    return (
        <>
            <div className="poke__container">
                {pokemons?.results
                    ? pokemons?.results.map((pokemon) => (
                          <PokeCard key={pokemon.url} url={pokemon.url} />
                      ))
                    : pokemons?.pokemon.map((objPoke) => (
                          <PokeCard
                              key={objPoke.pokemon.url}
                              url={objPoke.pokemon.url}
                          />
                      ))}
            </div>

            {/*             <Pagination
                pokePerPage={pokePerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPokemon={pokeCard.length}
            />
 */}
        </>
    );
};

export default PokeContainer;
