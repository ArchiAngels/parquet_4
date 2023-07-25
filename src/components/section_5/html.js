import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";

export default function Page(props){
    let context = props.texts.Text.Section_4;
    let l = props.language;
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                       <div className={styles.wrap}>
                            <h5>{context.Title[l]}</h5>
                            <p>
                                {context.Detail_1[l]}
                                <br/>
                                {context.Detail_2[l]}
                                <br/>
                                
                                {context.Detail_3[l]}
                                <br/>
                                {context.Detail_4[l]}
                                <br/>
                                
                                
                            </p>
                            <Image
                                width={863}
                                height={268}
                                src={context.imgSource}
                                alt={"parquet scheme"}
                            />
                       </div>
                    </>
                }
            
            />
        </>
    )
}