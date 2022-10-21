export type Stat =
    | "hp"
    | "attack"
    | "defense"
    | "special-attack"
    | "special-defense"
    | "speed";

export interface Specie {
    evolution_chain: {
        url: string;
    };
}

export interface Chain {
    species: {
        name: string;
        url: string;
    };
    evolves_to: Chain[];
}

export interface Sprites {
    back_default: string;
    front_default: string;
    front_shiny: string;
    back_shiny: string;
}

export interface Stats {
    base_stat: number;
    stat: {
        name: Stat;
    };
}

export interface Types {
    name: string;
}

export interface Pokemon {
    name: string;
    weight: number;
    sprites: Sprites;
    stats: [Stats, 6];
    types: Types[];
}
