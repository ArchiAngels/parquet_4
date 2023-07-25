import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";


export default function Page(props){
    let context = props.texts.Text.Section_9;
    let l = props.language;
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                       <div className={styles.wrap}>
                            <div className={styles.Left}>
                                <h4>{context.Title[l]}</h4>
                                <h2>{context.Heading[l]}</h2>
                                <h3>{context.paragraph[l]}</h3>
                            </div>
                            <div className={styles.Right}>
                                <Image
                                    width={648}
                                    height={283}
                                    src={context.imgSource}
                                    style={{objectFit:"cover"}}
                                    alt={"parquet scheme"}
                                />   
                            </div>
                           
                                             
                       </div>
                    </>
                }
            
            />
        </>
    )
}