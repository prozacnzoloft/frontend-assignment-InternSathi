import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import fullStar from "../assets/fullStar.jpg";
import halfStar from "../assets/halfStar.png";
import emptyStar from "../assets/emptyStar.jpg";

export const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    // Fetch product details from the API based on the provided id
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  var productRating = product.rating.rate;

  const clickedLeft = () => {
    if (product.id > 0) {
      navigate(`/details/${product.id - 1}`);
    }
  };
  const clickedRight = () => {
    if (product.id < 20) {
      navigate(`/details/${product.id + 1}`);
    }
  };

  return (
    <div className="min-h-full min-w-full ">
        <div className="flex">
        <div className=" w-full p-8 flex flex-col h-full flex-wrap sm:flex-row justify-center ">
        <div
          onClick={clickedLeft}
          className="w-9 my-auto active:scale-50 relative flex align-middle h-full"
        >
          <span className="text-5xl hover:scale-y-150  delay-150 hover:cursor-pointer  text-gray-500">
            {" "}
            &lt;{" "}
          </span>
        </div>
        <div className="flex w-fit flex-col justify-evenly sm:flex-row ">
          <div className="col-span-1 md:flex justify-evenly my-auto ">
            <img
              src={product.image}
              alt={product.title}
              className=" max-h-96 w-auto m-auto"
            />
          </div>
          <div className=" p-10 flex w-fit flex-col justify-center max-w-xl ">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <div className="text-white h-11 bg-purple-700 hover:-translate-y-1 active:translate-y-1 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 sm:px-2 lg:px-5 py-2.5 sm:py-1 lg:py-2.5 m-2 ml-0  text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 hover:cursor-pointer">
              {" "}
              Buy{" "}
            </div>
            <p className="text-gray-600 mb-4">Category: {product.category}</p>
            <p className="text-lg mb-4">Rs.{product.price}</p>
            <div className="flex items-center mb-4">
              <div className="mr-2 flex flex-wrap">
                {" "}
                {stars.map((elem) => {
                  if (productRating >= 1) {
                    productRating--;
                    return (
                      <img
                        className="w-3 md:w-4 lg:w-5"
                        src={fullStar}
                        alt=""
                      />
                    );
                  } else if (productRating > 0 && productRating < 1) {
                    productRating--;
                    return (
                      <img
                        className="w-3 md:w-4 lg:w-5"
                        src={halfStar}
                        alt=""
                      />
                    );
                  } else if (productRating <= 0) {
                    return (
                      <img
                        className="w-3 md:w-4 lg:w-5"
                        src={emptyStar}
                        alt=""
                      />
                    );
                  }
                })}
                {product.rating.rate} stars
              </div>
              <div>({product.rating.count} reviews)</div>
            </div>
            <p className="mb-4">{product.description}</p>
          </div>
        </div>
        <div
          onClick={clickedRight}
          className="w-9 my-auto active:scale-50 relative  flex align-middle h-full"
        >
          <span className="text-5xl hover:scale-y-150 delay-150 hover:cursor-pointer  text-gray-500">
            {" "}
            &gt;{" "}
          </span>
        </div>
      </div>
        </div>
     
    </div>
  );
};
