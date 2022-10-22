import { faker } from "@faker-js/faker";

export const generateText = (words) => {
    return faker.lorem.words(words);
};
