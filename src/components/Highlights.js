// import React from 'react'
// import '../styleSheet/Highlights.css'


// const highlights = [
//     { highlights: "250+ Exhibitors" },
//     { highlights: "200 + Brand" },
//     { highlights: "25,000+ Visitors" },
//     { highlights: "1000+ Farmer" },
//     { highlights: "5000+ Product & Services" },
//     { highlights: "Latest Manufacturing Technology" },
//     { highlights: "New Business Opportunities" },
//     { highlights: "Quality Manufacturer Suppliers" },
//     { highlights: "Ideal Networking Platform" },
//     { highlights: "5 days expo on Dairy, Agriculture & Poultry Expo" },
//     { highlights: "Community Meet ups." },
//     { highlights: "Interactive Sessions." },
//     { highlights: "Golden opportunity for related segments to introduce themselves and their products, establish their brands and broaden their network." },
//     { highlights: "VYAPAR EXPO 2023 is not only B2B , B2C , D2C show but a festival of business tradition & modern world" },
// ]


// const sectors1 = [
//     { sectors: "Agriculture Machinery" },
//     { sectors: "Farm Machinery" },
//     { sectors: "Combine Harvester" },
//     { sectors: "Submersible Pumps" },
//     { sectors: "Agriculture Pumps    " },
//     { sectors: "Sprayer Pumps" },
//     { sectors: "Automatic Sprayer Pumps" },
//     { sectors: "Tractor Mounted Sprayer" },
//     { sectors: "Fertilizers" },
//     { sectors: "Grain Cleaning Machine" },
// ]

// const sectors2 = [
//     { sectors: "Agriculture Machinery" },
//     { sectors: "Farm Machinery" },
//     { sectors: "Combine Harvester" },
//     { sectors: "Submersible Pumps" },
//     { sectors: "Agriculture Pumps    " },
//     { sectors: "Sprayer Pumps" },
//     { sectors: "Automatic Sprayer Pumps" },
//     { sectors: "Tractor Mounted Sprayer" },
//     { sectors: "Fertilizers" },
//     { sectors: "Grain Cleaning Machine" },
// ]
// function Highlights() {


//     return (
//         <div className=' '>
//             <div className=' container mx-auto px-5 md:px-0 md:p-10 '>

//                 <div className=' '>
//                     <div className=''>
//                         <div className="left">
//                             <h1>SHOW HIGHTLIGHTS</h1>
//                             <ul>
//                                 {highlights.map((item, index) => {
//                                     return (
//                                         <>
//                                             <li>{item.highlights}</li>
//                                         </>
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//                         <div className="right">

//                         </div>
//                     </div>

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Highlights



import React from 'react'
import '../styleSheet/Highlights.css'

function Highlights() {
  return (
    <div className=' '>
            <div className=' container mx-auto px-5 md:px-0 md:p-10 '>
                <div className=' '>
                    <div className=''>
                        <img className='image1 ml-[-60px]' src="image/DesH.png" alt="" />
                        <img className='image2 ml-[-10px] mt-5' src="image/MobH.png" alt="" />
                    </div>

                </div>
               
            </div>

        </div>
  )
}

export default Highlights