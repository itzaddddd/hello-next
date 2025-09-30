"use client"

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '@/components/theme-provider'; 

export default function ClientRoutePage() {
  const theme = useTheme()

  return <h1 style={{ color: theme.colors.secondary }}>Client router page</h1>
}

// export default function ClientRoute() {
//   const settings = {
//     dots: true,
//   };
//   return (
//     <div className="image-slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src="http://picsum.photos/g/400/200" />
//         </div>
//         <div>
//           <img src="http://picsum.photos/g/400/200" />
//         </div>
//         <div>
//           <img src="http://picsum.photos/g/400/200" />
//         </div>
//         <div>
//           <img src="http://picsum.photos/g/400/200" />
//         </div>
//       </Slider>
//     </div>
//   );
// }
