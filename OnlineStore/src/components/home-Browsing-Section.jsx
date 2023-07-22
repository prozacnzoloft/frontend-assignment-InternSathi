import { generateRandomNumbersArray } from "../logics/arrayOf12RandomNumbers"
import { Card } from "./item-Cards"
import { useState } from "react";
import React from "react";
import { ProductContext } from "../App";

export const BrowsingSection = (props) => {
    const products = React.useContext(ProductContext);

  const [arrayOfIds, fun] = useState(generateRandomNumbersArray());
  

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-evenly">
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