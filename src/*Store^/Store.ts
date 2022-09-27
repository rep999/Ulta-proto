import create from "zustand";

const useStore = create((set) => ({
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
selectTopic: (topic) =>
    set((state) => ({
        topicSelection: topic
    })),
selectCategory: (category) =>
    set((state) => ({
        categorySelection: category
    })),
selectWeight: (weight) =>
    set((state) => ({
        weightSelection: weight
    })),
 }))

 

export default useStore;