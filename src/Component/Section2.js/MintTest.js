import React from 'react'
import { useRef } from 'react'
export const MintTest = () => {
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
  
    return (
        <div id="container">
            {/* <div class="photobanner">
                <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" />
                <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="" />
                <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="" />
                <img src="https://i.stack.imgur.com/RTiml.jpg" alt="" />
                <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" />
            </div> */}
        </div>
    )
}
