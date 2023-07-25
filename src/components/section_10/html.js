import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";
import { useState } from "react";

function Titles(props){
    return(
        <>
            <div 
                className={styles.Name}
                onClick = {()=>{props.onTimeout()}}

            >
                {props.active? 
                    <b>{props.name}</b>: <p>{props.name}</p>
                }
            </div>
        </>
    )
}

function Images(props){
    return (
        <>
            {props.draw && <>
                <div className={styles.images}>
                <Image
                    width={410}
                    height={408}
                    src={props.el.DictinaryList.photoSource}
                    style={{objectFit:"cover"}}
                    alt={"parquet scheme"}
                />      
                <Image
                    width={410}
                    height={408}
                    src={props.el.DictinaryList.schemeSource}
                    style={{objectFit:"cover"}}
                    alt={"parquet scheme"}
                />       
                <Image
                    width={675}
                    height={408}
                    src={props.el.DictinaryList.multipleSchemeSource}
                    style={{objectFit:"cover"}}
                    alt={"parquet scheme"}
                />        
            </div>

            <p>{props.el.Details[props.l]}</p>
            </>}
        </>
    )
}


export default function Page(props){
    const [count,setCount] = useState(0);

    let onTimeout = () =>{
        let tempCount = count + 1;
        if(tempCount > 8){
            setCount(0)
        }else{
            setCount(tempCount)
        }
    }

    let context = props.texts.Text.Section_8;
    let l = props.language;
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                       <div className={styles.wrap}>
                            <div className={styles.ListContainer}>

                                {context.ListItems.map((el,idx)=>{
                                    return(
                                        <Titles 
                                            key = {el.Heading[l]}
                                            name = {el.Heading[l]}
                                            active = {count === idx}
                                            onTimeout = {onTimeout}                        
                                        />

                                    )
                                })}

                            </div>

                            <div className={styles.Images}>
                                {context.ListItems.map((el,idx)=>{
                                    return(
                                        <Images el={el} l={l} key = {idx} draw = {count === idx}/>                                   
                                    )
                                })}
                            </div>


                            
                                         
                       </div>
                    </>
                }
            
            />
        </>
    )
}