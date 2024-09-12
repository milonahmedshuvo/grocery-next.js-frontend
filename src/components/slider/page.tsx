'use client'
import { useEffect, useState } from "react";




const SliderComponents = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    'https://api.ebangladesh.com/upload/banner_popup/1/Slider_9c1943f0-a90d-11ed-918d-478673d8ab8a.webp',
    'https://api.ebangladesh.com/upload/banner_popup/1/Slider_bccc8520-b7e5-11ed-89c3-9d80630da166.webp',
    'https://api.ebangladesh.com/upload/banner_popup/1/Slider_c186a1e0-b7e5-11ed-ad83-511e8e5b99a5.webp'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);




  return (
    <div>
        <div className="overflow-hidden  w-full h-full ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full box-border">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

    </div>
  )
}

export default SliderComponents