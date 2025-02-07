export type PetService = {
    name: string;
    image: string;
    description?: string;
    text?: string;
};

export type Pet = {
    _id: string;
    name: string;
    age: number;
    breed: string;
    image?: string;
};
