import { useDataPokemon } from "../hooks/usePokemon";
import PokemonCard from "../components/PokemonCard";

const Pokemon = () => {
    const { data, page, loading, nextPage, prevPage } = useDataPokemon(50);

    return (
        <div className="mx-auto p-4">
            <p>Pokemones</p>

            <div className="bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
                {loading ? 
                <div>Loading...</div> 
                : 
                (data.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                )))
                }
            </div>
            <div>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={prevPage}
                    disabled={page === 1}
                >
                    Anterior
                </button>
                <span>Página {page}</span>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                    onClick={nextPage}
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}

export default Pokemon;