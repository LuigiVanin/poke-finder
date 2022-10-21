import axios from "axios";
import { PokemonService } from "../../service/pokemon";
import { useAsync } from "./../useAsync";

export const useGetPokemon = () => {
    const { action, data, error, loading } = useAsync(async (name: string) => {
        // const specie = await axios.get<Specie>(
        //     `https://pokeapi.co/api/v2/pokemon-species/${name}`
        // );

        // const evolution = await axios.get(specie.data.evolution_chain.url);
        const service = new PokemonService(axios);
        return service.getByName(name);
    }, false);

    return {
        loading,
        getPokemon: action,
        pokemonData: data,
        error,
    };
};
