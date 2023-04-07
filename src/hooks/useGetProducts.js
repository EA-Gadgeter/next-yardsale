import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios(API).then((response) => {
      const filteredProducts = response.data.filter(({ images }) => {
        if (images[0].startsWith('http://') || images[0].startsWith('https://') || images[0].startsWith('ftp://')) {
          return true;
        }
      });

      setProducts(filteredProducts);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return products;
};

export default useGetProducts;
