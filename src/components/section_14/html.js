import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";
import { useState } from "react";


function Next(props){
    return(
        <>
            <div className={styles.container} onClick={()=>{props.onClick(1)}}>
                <Image
                    width={400}
                    height={628}
                    src={props.src}

                alt={'alt'}
                />
                <h2>NEXT</h2>
                <p>{props.text}</p>
            </div>
        </>
    )
}
function Prev(props){
    return(
        <>
        <div className={styles.container} onClick={()=>{props.onClick(-1)}}>
            <Image
                width={400}
                height={628}
                src={props.src}

                alt={'alt'}
            />
            <h2>Prev</h2>
            <p>{props.text}</p>
        </div>
        </>
    )
}
function Current(props){
    return(
        <>
         <div className={styles.current}>
            <Image
                width={700}
                height={628}
                src={props.src}
                alt={'alt'}
            />
            <h2>Current</h2>
            <p>{props.text}</p>
            </div>
        </>
    )
}

function DrawAll(props){
    const {prev,el,next,l,draw,onChange} = props;
    return(
        <>
            {draw && <>
                <Prev text = {prev.paragraph[l]} src={prev.imgSource} onClick={onChange}/>
                <Current text = {el.paragraph[l]} src={el.imgSource} />
                <Next text = {next.paragraph[l]} src={next.imgSource} onClick={onChange}/>
                </>
            }
        </>
    )
}





export default function Page(props){
    const [count,setCount] = useState(0);

    

    let context = props.texts.Text.Section_12;
    let l = props.language;
    let max = context.ListItems.length;

    let onChange = (n) =>{
        let tempCount = count + n;

        if(tempCount > (max-1)){
            setCount(0)
        }else if(tempCount < 0){
            setCount(max-1)
        }
        else{
            setCount(tempCount)
        }
    }
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                       <div className={styles.wrap} id="gallery">
                            <h2>{context.Heading[l]}</h2>

                            <div className={styles.ListContainer}>

                                {context.ListItems.map((el,idx,arr)=>{
                                    let prev = idx !== 0? arr[(idx-1)%max]: arr[(arr.length - idx-1)%max];
                                    let next = arr[(idx+1)%max];
                                    return(
                                        <DrawAll prev={prev} el={el} next={next} l={l} key ={idx} draw={count === idx} onChange={onChange}/>
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