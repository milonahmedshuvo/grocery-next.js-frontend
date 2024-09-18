'use client'
import { useProductGetReverceQuery } from '@/redux/api/groceryApi';
import Link from 'next/link';
import { useRef } from 'react';
import Button from '../button/page';


type TProduct = {
  _id: string,
  title: string,
  description: string,
  price: number,
  beforePrice: number,
  image: string,
  isDaleted: boolean
}




const ProductCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);


  const { data } = useProductGetReverceQuery(undefined)


  // console.log("reverce", data?.data)








  const scrollNext = () => {
    carouselRef.current?.scrollBy({
      left: 300, // Adjust based on the width of each product card
      behavior: 'smooth',
    });
  };

  const scrollPrev = () => {
    carouselRef.current?.scrollBy({
      left: -300, // Adjust based on the width of each product card
      behavior: 'smooth',
    });
  };






  return (
    <div className="relative w-full mb-20 mt-14">

      <p className='text-2xl font-semibold' > Health & Beauty </p>

      <button
        onClick={scrollPrev}
        className="absolute left-0 top-52 z-10 p-2 m-2 text-gray-500 hover:text-white bg-gray-300 rounded-full hover:bg-blue-500"
      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x gap-4 w-full no-scrollbar"
      >

        {data?.data?.map((product: TProduct, idx: number) => (
          <div
            key={idx}
            className=" min-w-[200px] md:min-w-[250px] h-[400px]  snap-center flex-shrink-0 flex items-center justify-center"
          >

            <div>
              <img className=' w-[200px] md:w-[250px] ' src={product.image} alt="" />

              <p className="text-center mt-4 text-xs md:text-sm "> <span className="font-semibold text-gray-400 line-through">৳{product.beforePrice}</span> <span className="font-bold text-green-400"> ৳ {product.price} </span> <span className="text-yellow-500 font-semibold">(-{product.beforePrice - product.price}TK) </span>  </p>


              <Link href={`/products/${product._id}`} >
                <p className="text-center mt-2 text-xs md:text-sm"> {product.title} </p>
              </Link>


              <div className="flex justify-center gap-1 items-center">
                <span className="text-yellow-500 flex mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-4 md:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </span>

                <span className="text-xs mt-2">(0.00/5.0)</span>
              </div>

              <Button product={product} ></Button>
            </div>




          </div>
        ))}

      </div>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-52 z-10 p-2 m-2 text-gray-500 hover:text-white bg-gray-300 rounded-full hover:bg-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default ProductCarousel;
