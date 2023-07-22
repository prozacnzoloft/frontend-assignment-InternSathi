import { generateRandomNumbersArray } from "../logics/arrayOf12RandomNumbers"
import { Card } from "./item-Cards"
import { useEffect, useState } from "react";

export const BrowsingSection = () => {
    const [arrayOfIds, fun] = useState(generateRandomNumbersArray());

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint when the component mounts
        fetchProducts();
    }, []);



    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="grid sm:grid-cols-4 place-content-evenly">
            {arrayOfIds.map((id) => {
                const product = products.find((product) => product.id === id);
                if (product) {
                    return (
                        <div className="flex p-4 sm:p-8 justify-center" key={product.id}>
                            <Card imageLink={product.image} productName={product.title} productPrice={product.price} productRating={product.rating.rate} id={product.id}/>
                        </div>
                    );
                }
            })}
        </div>

    )
}