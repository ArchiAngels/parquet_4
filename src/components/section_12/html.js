import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";

function Images(props){
    return(
        <>
            <div 
                className={styles.border}
            >
                <Image
                width={props.el.x}
                height={props.el.y}
                src={props.el.imgSource}
                style={{objectFit:"cover"}}
                alt={"parquet scheme"}
                />
            </div>
        </>
    )
}


export default function Page(props){
    let context = props.texts.Text.Section_10;
    let l = props.language;
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                       <div className={styles.wrap}>
                            <h4>{context.Title[l]}</h4>

                            <p>{context.paragraph[l]}</p>
                               
                            <div className={styles.Images2}>
                                {context.ListItems.map((el,i)=>{
                                    return (
                                        <Images key = {i} el={el}/>
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