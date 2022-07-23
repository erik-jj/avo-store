import React, { useEffect,useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

const HomePage = () => {
  const [listProducts, setListProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('/api/avo')
    .then((response) => response.json())
    .then(({data,length}) => setListProducts(data));
  }, [])
  
  return (
    <div>
      <Navbar />
        <h1>Lista de avos</h1>
        {listProducts.map(product => 
        <div key={"index"+product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.attributes.description}</p>
        </div>)}
    </div>
  )
}

export default HomePage;
