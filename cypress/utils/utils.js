export const getEvolutions = (chain, acc = []) => {
    acc.push(chain.species.name);
    const next = chain.evolves_to;
    for (const evolve of next) {
        acc = getEvolutions(evolve, acc);
    }
    return acc;
};
