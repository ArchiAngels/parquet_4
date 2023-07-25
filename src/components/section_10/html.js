import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";
import { useState } from "react";

function Titles(props){
    return(
        <>
            <div 
                className={styles.Name}
                onClick = {()=>{props.onTimeout(props.id)}}
            >
                <p className={props.active? styles.active: styles.nactive}>{props.name}</p>
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

            <p className={styles.details}>
                
                {props.constQuality.Details_1[props.l]} <span>{props.el.Details_1[props.l]}</span>
                <br/>
                {props.constQuality.Details_2[props.l]} <span>{props.el.Details_2[props.l]}</span>
                <br/>
                {props.constQuality.Details_3[props.l]} <span>{props.el.Details_3[props.l]}</span>
                <br/>
                {props.constQuality.Details_4[props.l]} <span>{props.el.Details_4[props.l]}</span>
                <br/>
                {props.constQuality.Details_5[props.l]} <span>{props.el.Details_5[props.l]}</span>
                <br/>
                {props.constQuality.Details_6[props.l]} <span>{props.el.Details_6[props.l]}</span>
                <br/><br/>
                <span>{props.constQuality.Details_7[props.l]}</span>
            </p>
            </>}
        </>
    )
}


export default function Page(props){
    const [count,setCount] = useState(0);

    let onTimeout = (n) =>{
        let tempCount = n;
        if(tempCount > (max-1)){
            setCount(0)
        }else{
            setCount(tempCount)
        }
    }

    let context = props.texts.Text.Section_8;
    let l = props.language;
    let max = context.ListItems.length;
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
                                            id={idx}
                                            active = {count === idx}
                                            onTimeout = {onTimeout}                        
                                        />

                                    )
                                })}

                            </div>

                            <div className={styles.Images}>
                                {context.ListItems.map((el,idx)=>{
                                    return(
                                        <Images el={el} constQuality={context.constQuality} l={l} key = {idx} draw = {count === idx}/>                                   
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