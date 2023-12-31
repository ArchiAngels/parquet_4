import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";

function Card(props){
    return(
        <>
            <div className={styles.Card}>
                <p className={styles.title}>{props.title}</p>
                <Image
                    width={447}
                    height={218}
                    src={props.src}
                    // style={{objectFit:"cover"}}
                    alt={"parquet scheme"}
                />
                <p className={styles.detail}>{props.detail}</p>
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
                            <p className={styles.paragraph}>
                                <span className={styles.active}>{context.Detail_1[l]}</span> {context.Detail_2[l]}
                            </p>    

                            <div className={styles.container}>
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