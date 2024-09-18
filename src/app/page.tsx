
// const handle = () => {
//   console.log('click')
// }

import BandCarousel from "@/components/bandcarosel/page"
import ProductCarousel from "@/components/carosel/page"
import HomeproductPage from "@/components/homeproduct/page"
import SliderComponents from "@/components/slider/page"
import TopCategorispage from "@/components/topCategoris/page"


const HomePage = () => {
  return (
    <div>
       <SliderComponents/>
       <BandCarousel/>
        <HomeproductPage/>
        <ProductCarousel/>
        <TopCategorispage/>
       </div>
  )
}

export default HomePage