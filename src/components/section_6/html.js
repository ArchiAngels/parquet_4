import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";

export default function Page(props){
    let context = props.texts.Text.Section_5;
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
                            <Image
                                width={1760}
                                height={268}
                                src={context.imgSource}
                                style={{objectFit:"cover"}}
                                alt={"parquet scheme"}
                            />
                       </div>
                    </>
                }
            
            />
        </>
    )
}