import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";

export default function Page(props){
    let context = props.texts.Text.Section_3;
    let l = props.language;
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                       <div className={styles.wrap}>
                            <div className={styles.left}>
                                <h4>{context.Title[l]}</h4>
                                <h2>{context.Heading[l]}</h2>
                                <h4>{context.paragraph_1[l]}</h4>
                                <h3>{context.paragraph_2[l]}</h3>
                            </div>
                            <div className={styles.right}>
                                <Image
                                    width={648}
                                    height={283}
                                    src={context.imgSource}
                                    alt={"parquet few different pieces"}
                                />
                            </div>
                       </div>
                    </>
                }
            
            />
        </>
    )
}