import { useAsync } from "./../useAsync";
import { api } from "../../service/api";

export const useGetPokemon = () => {
    const { action, data, error, loading } = useAsync(async (name: string) => {
        return await api.get(`pokemon/${name}`);
    }, false);

    return {
        loading,
        getPokemon: action,
        pokemonData: data,
        error,
    };
};
