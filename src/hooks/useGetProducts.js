import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios(API).then((response) => setProducts(response.data));
  }, []);

  return products;
};

export default useGetProducts;
