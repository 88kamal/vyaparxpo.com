// // import ScrollToTop from "react-scroll-to-top";
// import React, { useRef, useEffect, useState } from "react";
// import BackToUp from '@uiw/react-back-to-top';
// import styled from 'styled-components';
// import { BsFillArrowUpSquareFill, BsArrowUp } from 'react-icons/bs'



// const Warpper = styled.div`
//   overflow: auto;
//   white-space: normal;
//   width: 300px;
//   height: 300px;
//   &::-webkit-scrollbar {
//     -webkit-appearance: none;
//     width: 7px;
//     background: #00000038;
//   }
//   &::-webkit-scrollbar-thumb {
//     border-radius: 4px;
//     background-color: #595959;
//   }
//   p {
//     display: inline;
//     background: rgba(0, 0, 0, 0.12);
//     color: transparent;
//   }
// `;
// function ScrollBtn() {

//     const $dom = useRef(null);
//     const [element, setElement] = useState();
//     useEffect(() => setElement($dom.current), [])
//     return (

//         <div>
//             {/* <div>
//                 <div style={{ marginTop: "150vh" }} />
//                 <ScrollToTop className='' smooth />
//             </div> */}
//             <Warpper ref={$dom}>

//                 <BackToUp top={0} hideProgress element={$dom.current} style={{ float: 'right' }}>
//                     <div style={{ border: '1px solid red', color: 'red', background: '#ffeb3b' }}>
//                         Top
//                     </div>
//                 </BackToUp>
//             </Warpper>
//         </div>

//     )
// }

// export default ScrollBtn


import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './Styles';
function ScrollBtn() {


    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <div>
            <Button>
                <FaArrowCircleUp onClick={scrollToTop}
                    style={{ display: visible ? 'inline' : 'none' }} />
            </Button>
        </div>
    )
}

export default ScrollBtn