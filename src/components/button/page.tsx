'use client'; 

import { productAddToCard } from '@/redux/feature/product/productSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useState } from 'react';



type TProduct = {
    _id: string,
    title: string,
    description: string,
    price: number,
    beforePrice: number,
    image: string,
    isDaleted: boolean
}


type ProductType  = {
    product: TProduct
}



export default function Button({product}:ProductType) {
  const [count, setCount] = useState<TProduct>();
  console.log(count)

  const dispatch = useAppDispatch()
  

  const handleClick = () => {
     dispatch(productAddToCard(product))
    setCount(product);
   
  };


  return (
<button onClick={handleClick} className="bg-blue-400 hover:bg-yellow-400 text-white text-[10px] md:text-xs w-full py-[2px] md:py-[4px] rounded  mt-6" >Add To Cart</button>
  );
}


