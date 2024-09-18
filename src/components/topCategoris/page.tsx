'use client'

const TopCategorispage = () => {
  return (
     <div> 
           <div className="w-1/2 mx-auto flex items-center justify-center flex-col mb-8 ">
               <p className="text-xl mt-4 mb-2 ">Top Categories</p>
               <span className="text-sm  text-center " >Star Ship Sweetened Condensed Filled Milk combined with tea, coffee, and desserts makes the drinks and foods tasty and delicious.</span>
           </div>



    <div className="grid grid-cols-3 mb-14 gap-3 w-full rounded-full">
       
       <div className="relative">
           <img className="w-full h-full object-cover" src="https://api.ebangladesh.com/upload/shop/items/89a08f60-a7c6-11ee-b649-c1f191df228a/thumb/89a08f60-a7c6-11ee-b649-c1f191df228a.webp" alt="" />
           <div className="absolute inset-0 bg-blue-500 opacity-30"></div>
           <p className="absolute bottom-5 left-5 text-blue-500 text-xl">Music, Sports & Outdoors</p>
       </div>

       <div className=" flex flex-col justify-between gap-3 ">
          <div className="relative rounded-2xl">
          <img className="rounded-2xl" src="https://api.ebangladesh.com/upload/shop/items/3735b220-aa46-11ee-a7a5-cb793dee101c/thumb/3735b220-aa46-11ee-a7a5-cb793dee101c.webp" alt="" />
          <div className="absolute inset-0 bg-blue-500 opacity-30"></div>
          <p className="absolute bottom-5 left-5 text-blue-500 text-xl">Music, Sports & Outdoors</p>
          </div>


          <div className="relative">
          <img src="https://api.ebangladesh.com/upload/shop/items/b5817e90-a0f0-11ee-b34b-377efa19a1c2/thumb/b5817e90-a0f0-11ee-b34b-377efa19a1c2.webp" alt="" />
          <div className="absolute inset-0 bg-blue-500 opacity-30"></div>
          <p className="absolute bottom-5 left-5 text-blue-500 text-xl">Music, Sports & Outdoors</p>
          </div>
       </div>

       <div className="relative">
           <img className="w-full h-full object-cover " src="https://api.ebangladesh.com/upload/shop/items/51e5d340-4eb0-11ed-94b3-11fe045134b8/thumb/51e5d340-4eb0-11ed-94b3-11fe045134b8.png" alt="" />
           <div className="absolute inset-0 bg-blue-500 opacity-30"></div>
           <p className="absolute bottom-10 left-5 text-blue-500 text-xl">Music, Sports & Outdoors</p>
       </div>

    </div>
    </div>
  )
}

export default TopCategorispage;