
// const handle = () => {
//   console.log('click')
// }

import ProductCarousel from "@/components/carosel/page"
import HomeproductPage from "@/components/homeproduct/page"
import SliderComponents from "@/components/slider/page"


const HomePage = () => {
  return (
    <div>
       <SliderComponents/>
        <HomeproductPage/>
        <ProductCarousel/>
       </div>
  )
}

export default HomePage