import { type PokeData } from '../types/pokemonTypes';

const PokemonCard = ({ pokemon }: {pokemon:PokeData}) => {

    const pokemonId = pokemon.url.split('/').slice(-2, -1)[0];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return (
        <div>
            <div>
                <img src={imageUrl} alt="poke" />
            </div>
            <div>
                <p>{pokemon.name}</p>
            </div>
        </div>
    )
}
export default PokemonCard;