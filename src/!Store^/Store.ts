import create from "zustand";

const useStore = create((set) => ({
    topicsSelected: [],
    subTopicsSelected: [],
    subSubTopicsSelected: [],
    categoriesSelected: [],
    weightSelected: '',
    topics: [
        { id: 1, name: "Tech" },
        { id: 2, name: "Religion" },
        { id: 3, name: "News" },
        { id: 4, name: "Business" },
        { id: 5, name: "Nature" },
        { id: 6, name: "Science" },
        { id: 7, name: "Art" },
        { id: 8, name: "Finance" },
        { id: 9, name: "Health" },
        { id: 10, name: "Fashion" },
        { id: 11, name: "Software" },
        { id: 12, name: "Fitness" },
        ],
    categories: [
        { id: 11, name: "Note" },
        { id: 22, name: "Religion" },
        { id: 33, name: "Key" },
        { id: 44, name: "Date" },
        { id: 55, name: "Career" },
        { id: 66, name: "Applicable" },
        { id: 77, name: "Inisghtful" },
        { id: 88, name: "Funny" },
        { id: 99, name: "Knowledge" },
        { id: 1010, name: "Question" },
        { id: 1111, name: "Interesting" },
        { id: 1212, name: "Helpful" },
    ],
    pokemons: [
        { id: 1, name: "Bulbasaur" },
        { id: 2, name: "Ivysaur" },
        { id: 3, name: "Venusaur" },
        { id: 4, name: "Charmander" },
        { id: 5, name: "Charmeleon" },
    ],
pushTopic: (topic) =>
    set((state) => ({
        topicsSelected: [
            { name: topic.name, id: Math.random() * 100 },
            ...state.topicsSelected,
        ]
    })),
pushSubTopic: (subTopic) =>
    set((state) => ({
        subTopicsSelected: [
            { name: subTopic.name, id: Math.random() * 100 },
            ...state.subTopicsSelected,
        ]
    })),
pushSubSubTopic: (subSubTopic) =>
    set((state) => ({
        subSubTopicsSelected: [
            { name: subSubTopic.name, id: Math.random() * 100 },
            ...state.subSubTopicsSelected,
        ]
    })),
pushCategory: (category) =>
    set((state) => ({
        subSubTopicsSelected: [
            { name: category.name, id: Math.random() * 100 },
            ...state.subSubTopicsSelected,
        ]
    })),
selectWeight: (weight) =>
    set((state) => ({
        weightSelected: [
            { name: weight.name, id: Math.random() * 100 },
            ...state.weightSelected,
        ]
    })),
addPokemons: (pokemon) =>
    set((state) => ({
    pokemons: [
    { name: pokemon.name, id: Math.random() * 100 },
    ...state.pokemons,
        ]
    })),
removePokemon: (id) =>
    set((state) => ({
        pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
    }))
 }))

 

export default useStore;