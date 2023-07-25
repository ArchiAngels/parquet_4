import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";

function Card(props){
    return(
        <>
            <div className={styles.Card}>
                <p>{props.title}</p>
                <Image
                    width={447}
                    height={218}
                    src={props.src}
                    // style={{objectFit:"cover"}}
                    alt={"parquet scheme"}
                />
                <p>{props.detail}</p>
            </div>
        </>
    )
}

export default function Page(props){
    let context = props.texts.Text.Section_6;
    let l = props.language;
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                       <div className={styles.wrap}>
                            <h5>{context.Title[l]}</h5>
                            <p>{context.Detail[l]}</p>    

                            <div >
                                {context.ListItems.map((el)=>{
                                    return <Card 
                                        key = {el.Title[l]}
                                        title = {el.Title[l]}
                                        detail = {el.Detail[l]}
                                        src = {el.imgSource}
                                    />
                                })}  
                            </div>                      
                       </div>
                    </>
                }
            
            />
        </>
    )
}