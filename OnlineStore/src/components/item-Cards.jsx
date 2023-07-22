import { useState } from "react";
import fullStar from "../assets/fullStar.jpg";
import halfStar from "../assets/halfStar.png";
import emptyStar from "../assets/emptyStar.jpg";
import { useNavigate } from 'react-router-dom';


export const Card = (props) => {
    const navigate = useNavigate();
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  const imageLink = props.imageLink;
  const productName = props.productName;
  const productPrice = props.productPrice;
  var productRating = props.productRating;
  const id = props.id

  const maxWordsToShow = 3;

  const truncateString = (str, maxWords) => {
    const wordsArray = str.split(" ");
    const truncatedString = wordsArray.slice(0, maxWords).join(" ");
    return wordsArray.length > maxWords
      ? `${truncatedString}`
      : truncatedString;
  };

  const handleCardClick = () => {
    // Navigate to the DetailsPage with the specific id
    navigate(`/details/${id}`);
  };


  return (

    <div onClick={handleCardClick} className="min-w-full flex sm:block max-w-sm sm:p-5 sm:w-fit sm:hover:scale-105 delay-50 hover:shadow-indigo-500 sm:hover:cursor-pointer  border-b-2 border-r-2  border-indigo-200 rounded-lg dark:hover:shadow-slate-500 dark:bg-slate-800">
      <div className="p-1 h-40  flex justify-around">
        <img
          className="  -mx-2 sm:ml-0 object-cover sm:mr-0 rounded-t-lg w-44 overflow-clip "
          src={imageLink}
          alt="product image"
        />
      </div>

      <div className="  flex sm:block">
        <div className=" mx-2 flex justify-center flex-col h-full text-2xl sm:block  sm:text-sm lg:text-2xl sm:hover:scale-105 delay-75 sm:hover:translate-x-1 font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="underline ">
            {truncateString(productName, maxWordsToShow)}
          </span>
          <span className="no-underline">&#8594;</span>
        </div>
      </div>

      <div className="flex mx-2 flex-wrap flex-col sm:justify-evenly lg:justify-start sm:flex-row items-center mt-3">
        <p className="lg:text-xl text-base block font-light text-gray-900 dark:text-white ">
          {" "}
          Rs. {productPrice}
        </p>
        <div className="text-white bg-purple-700 hover:-translate-y-1 active:translate-y-1 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 sm:px-2 lg:px-5 py-2.5 sm:py-1 lg:py-2.5 m-2  text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 ">
          Buy
        </div>
        
        <div className="flex mx-2 flex-wrap ">
            <span className="text-white">{productRating}</span>
    
          {stars.map((elem) => {
            if (productRating >=1) {
              productRating--;
              return <img className="w-5 sm:w-6 lg:w-5" src={fullStar} alt="" />;
            } else if (productRating > 0 && productRating < 1) {
                productRating--;
              return <img className="w-5 sm:w-6 lg:w-5" src={halfStar} alt="" />;
            } else if (productRating <= 0 ) {
              return <img className="w-5 sm:w-6 lg:w-5" src={emptyStar} alt="" />;
            }
          })}
        </div>
      </div>
    </div>
  );
};
