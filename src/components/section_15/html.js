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
                            <p className={styles.first}>{context.paragraph_1[l]}</p>
                            <p>{context.paragraph_2[l]}</p>
                            <p>{context.paragraph_3[l]}</p>
                            <div className={styles.container}>
                                {context.ListItems.map((el,idx)=>{
                                    return <Image
                                        key={el.Title[l]}
                                        width={32}
                                        height={32}
                                        style={idx ===1?{margin:"0px 12px",objectFit:"cover"}:{objectFit:"cover"}}
                                        src={el.imgSource}
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