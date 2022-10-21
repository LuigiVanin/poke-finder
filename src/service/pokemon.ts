import type { Axios } from "axios";
import axios from "axios";

interface Specie {
    evolution_chain: {
        url: string;
    };
}

interface Chain {
    specie: string;
    evolves_to: Chain[];
}

export class PokemonService {
    constructor(private api: Axios) {}

    async getByName(name: string) {
        const specie = await this.getSpecieByName(name);
        const chain = await this.getEvolutionChain(specie.evolution_chain.url);
        // return await this.getFromEvolutionChain(chain);
        return chain;
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

    async getFromEvolutionChain(chain: Chain, acc = []) {}
}
