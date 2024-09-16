'use client'

import { useAppSelector } from "@/redux/hooks"

const CheckOutPage = () => {
      const {products} = useAppSelector((state) => state.product)

      console.log("checkout page:", products)

  return (
    <div> check out page</div>
  )
}

export default CheckOutPage