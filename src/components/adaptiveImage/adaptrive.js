'use client'

import { useState,useRef } from "react";
import Image from 'next/image'

export default function AdaptiveImage(props){

    const {width,height,diff,alt,src,window} = props;

    const [currentWidth,setCurrentWidth] = useState(width);
    
    window.addEventListener('load',()=>{
        if(window.innerWidth > 1920){
            setCurrentWidth(width)
        }else{
            setCurrentWidth(window.innerWidth - diff)
        }
    })
    
    window.addEventListener('resize',(e)=>{
        if(window.innerWidth > 1920){
            setCurrentWidth(width)
        }else{
            setCurrentWidth(window.innerWidth - diff)
        }
    })
    return(<>
            <Image
                src={src}
                width={currentWidth}
                height={height}
                style={{objectFit:"cover"}}
                alt={alt}
            />
        </>)
}