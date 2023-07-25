import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import Image from "next/image";

export default function Page(props){
    let context = props.texts.Text.Section_13;
    let l = props.language;
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                       <div className={styles.wrap} id="contacts">
                            <h2>{context.Heading[l]}</h2>
                            <p>{context.paragraph_1[l]}</p>
                            <p>{context.paragraph_2[l]}</p>
                            <div className={styles.container}>
                                {context.ListItems.map((el)=>{
                                    return <Image
                                        key={el.Title[l]}
                                        width={32}
                                        height={32}
                                        src={el.imgSource}
                                        style={{objectFit:"cover"}}
                                        alt={el.Title[l]}
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