import { useParams } from "react-router-dom";
import React from "react";
import { ProductContext } from "../App";
import { Card } from "../components/item-Cards";
const [noResult, changeNoResult] = useState(true);

export const SearchPage = () => {
  const { searchedFor } = useParams();
  const products = React.useContext(ProductContext);

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-evenly">
        {products.map((product) => {
          if (
            product.description
              .toUpperCase()
              .includes(searchedFor.toUpperCase()) ||
            product.title.toUpperCase().includes(searchedFor.toUpperCase())
          ) {
            changeNoResult(false);
            return (
              <div className="flex p-4 sm:p-8 justify-center" key={product.id}>
                <Card
                  imageLink={product.image}
                  productName={product.title}
                  productPrice={product.price}
                  productRating={product.rating.rate}
                  id={product.id}
                />
              </div>
            );
          }
        })}
      </div>
      {noResult && <p>No result</p>}
    </div>
  );
};
