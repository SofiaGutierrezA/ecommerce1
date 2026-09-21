import runningShoes1 from "../assets/running-shoes.jpg";
import runningShoes2 from "../assets/pexels-bui-huy-857169-1750045.jpg";
import denimSneakers from "../assets/pexels-jose-martin-segura-benites-1422456152-27063095.jpg";
import shinySneakers from "../assets/pexels-jose-martin-segura-benites-1422456152-26954375.jpg";
import runningShoes3 from "../assets/pexels-wolrider-18202644.jpg";

const products = [
    {
        id: 1,
        name: "Shoes 1",
        price: 49.99,
        category: "women",
        image: runningShoes1
    },
    {
        id: 2,
        name: "Running shoes",
        price: 32.99,
        category: "women",
        image: runningShoes2
    },
    {
        id: 3,
        name: "Denim sneakers",
        price: 28.99,
        category: "women",
        image: denimSneakers
    },
    {
        id: 4,
        name: "Shiny sneakers",
        price: 23.99,   
        category: "women",
        image: shinySneakers
    },
    {
        id: 5,
        name: "Running shoes",
        price: 39.99,
        category: "men",
        image: runningShoes3
    }
]
export default products;