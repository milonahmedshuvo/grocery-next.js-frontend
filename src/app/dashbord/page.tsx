'use client'

import { useCurrentUserQuery } from "@/redux/api/groceryApi"


const Homepage = () => {
  const {data, error }  = useCurrentUserQuery(undefined)

  console.log(data?.data?.role)
  console.log(error)

  return (
    <div> 
      <p className="text-2xl text-center text-blue-500 mt-10">Welcome {data?.data?.name} your dashbord </p>
    </div>
  )
}

export default Homepage