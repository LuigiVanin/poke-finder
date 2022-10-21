import type { Axios } from "axios";
import axios from "axios";
import { Chain, Pokemon, Specie } from "../types/pokemons.types";

export class PokemonService {
    constructor(private api: Axios) {}

    async getAllEvolutionsByName(name: string) {
        const specie = await this.getSpecieByName(name);
        const chain = await this.getEvolutionChain(specie.evolution_chain.url);
        const allEvolutions: string[] = this.getEvolutionsFromChain(chain);
        // console.log("aqui 2:", allEvolutions);

        return await this.getManyByName(allEvolutions);
    }

    async getSpecieByName(name: string) {
        const response = await this.api.get<Specie>(
            `https://pokeapi.co/api/v2/pokemon-species/${name}`
        );
        return response.data;
    }

    async getEvolutionChain(evolutionChainUrl: string) {
        const response = await this.api.get<{ chain: Chain }>(
            evolutionChainUrl
        );
        return response.data.chain;
    }

    getEvolutionsFromChain(chain: Chain, acc: string[] = []) {
        // console.log("aqui: ", chain);
        acc.push(chain.species.name);
        const next = chain.evolves_to;
        for (const evolve of next) {
            // console.log("iteration:", evolve.species.name);
            acc = this.getEvolutionsFromChain(evolve, acc);
        }
        return acc;
    }

    async getByName(name: string) {
        const response = await axios.get<Pokemon>(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        return response.data;
    }

    async getManyByName(names: string[]) {
        const response = [];
        for (const name of names) {
            response.push(await this.getByName(name));
        }
        return response;
    }
}
