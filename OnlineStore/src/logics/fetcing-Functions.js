export const fetchProductUsingID = async (productId) => {

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data:', error);
  }
    
  };
  
export const fetchAllProducts = async (productId) => {
    const response = await axios.get(`'https://fakestoreapi.com/products`);
    return response.data;
  };
