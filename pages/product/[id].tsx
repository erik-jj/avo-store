import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<TProduct>({} as TProduct);

 useEffect(() => {

  window.fetch(`/api/avo/${query.id}`) 
  .then((response) => response.json())
  .then(({data}) => setProduct(data))
 }, [])
 

  return (
    <section>
      <h1>Detalle:</h1>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name}/>
      <p>{product.attributes.description}</p>
    </section>
  )
}

export default ProductPage
