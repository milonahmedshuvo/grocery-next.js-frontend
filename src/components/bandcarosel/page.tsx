'use client'
// import { useProductGetReverceQuery } from '@/redux/api/groceryApi';
import { useRef } from 'react';



type TProduct = {
  image: string,
}




const BandCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);


//   const { data } = useProductGetReverceQuery(undefined)


 
 const images = [
    {
        "image" : "https://api.ebangladesh.com/upload/brand/c29c7bf0-b654-11ed-92bd-edfb33ed6e42.webp"
    },
    {
        "image" : "https://api.ebangladesh.com/upload/brand/29a416a0-aba1-11ed-989d-af41561c47ae.png"
    },
    {
        "image" : "https://api.ebangladesh.com/upload/brand/401dba20-72d6-11ec-b979-65907513d24e.png"
    },
    {
        "image" : "https://api.ebangladesh.com/upload/brand/402241c0-72d6-11ec-983a-438455813d3b.png"
    },
    {
        "image" : "https://api.ebangladesh.com/upload/brand/afa5ad60-b658-11ed-a902-773c7171c76d.webp"
    },
    {
        "image" : "https://api.ebangladesh.com/upload/brand/be336e50-c023-11ed-a473-1f9cb2bbeeff.webp"
    },
    {
        "image" : "https://api.ebangladesh.com/upload/brand/4023d1c0-72d6-11ec-bd09-7b2fc7057c0e.png"
    },
    {
        "image" : "https://api.ebangladesh.com/upload/brand/4023d1c0-72d6-11ec-bd09-7b2fc7057c0e.png"
    },
    {
        "image" : "https://api.ebangladesh.com/upload/brand/c8c411f0-b7f7-11ed-a0f3-2d13b79b8179.webp"
    }
 ]







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
    <div className="relative w-full mb-20 mt-2">

      <p className='text-2xl font-semibold mb-2' > Popular Brands </p>

      <button
        onClick={scrollPrev}
        className="absolute left-0 top-32 z-10 p-2 m-2 text-gray-500 hover:text-white bg-gray-300 rounded-full hover:bg-blue-500"
      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x w-full no-scrollbar gap-5"
      >

        {images?.map((product: TProduct, idx: number) => (
          <div
            key={idx}
            className="min-w-[200px] md:min-w-[250px] h-[200px] snap-center flex-shrink-0 flex items-center justify-start "
          >

            <div>
              <img className=' w-[200px] md:w-[250px]  ' src={product.image} alt="" />

            </div>




          </div>
        ))}

      </div>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-32 z-10 p-2 m-2 text-gray-500 hover:text-white bg-gray-300 rounded-full hover:bg-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default BandCarousel;
