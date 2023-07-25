import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";


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
                            <p>
                                <span>{context.paragraph_1[l]}</span>
                                {context.paragraph_2[l]}
                            </p>
                            <Image
                                width={1760}
                                height={286}
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