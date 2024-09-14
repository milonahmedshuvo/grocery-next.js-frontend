'use client'
import { useProductGetQuery } from "@/redux/api/groceryApi";
import { Button } from "@nextui-org/react";
import Link from "next/link";
type TProduct = {
    _id: string,
    title: string,
    description: string,
    price: number,
    beforePrice: number,
    image:string,
    isDaleted: boolean
  }



const  AllproductPage = () => {
      const {data } = useProductGetQuery(undefined)

    
      


  return (
    <div> 
      <section className="flex justify-between items-center">
        <p className="uppercase text-sm " >All Products</p>
        <Link href='/dashbord/addproduct'> <Button color="primary">Add product</Button> </Link>
      </section>




      <div className="overflow-x-auto mt-6">
      <table className="min-w-full text-left table-auto">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>

          

          {data?.data?.map((product:TProduct) => (             
            <tr key={product._id} className="bg-white border-b">
              <td className="px-6 py-4">
                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
              </td>
              <td className="px-6 py-4">{product.title}</td>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4">
                <button className="text-blue-500 hover:text-blue-700 px-3 py-1">Edit</button>
                <button className="text-red-500 hover:text-red-700 px-3 py-1 ml-2">Delete</button>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>



    </div>
  )
}

export default AllproductPage;