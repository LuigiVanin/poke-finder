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
    type: {
        name: string;
    };
}

export interface Pokemon {
    name: string;
    weight: number;
    id: number;
    sprites: Sprites;
    stats: Stats[];
    types: Types[];
}
