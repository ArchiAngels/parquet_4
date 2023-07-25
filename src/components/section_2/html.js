import MaxContent from "../maxContent/maxContent"
import styles from "./style.module.css";
import Image from "next/image";

function Card(props){
    return (
        <>
            <div className={styles.card}>
                <div className={styles.left}>
                    <Image

                        width={80}
                        height={80}
                        alt={props.title}
                        src={props.src}
                    
                    />
                </div>
                <div className={styles.right}>
                    <h3>{props.title}</h3>
                    <p>{props.detail}</p>
                </div>
            </div>
        </>
    )
}


export default function Page(props){
    return(
        <>
            <MaxContent
            class={styles.marginExternal}
            content={
                <>
                    <h2>
                        {props.texts.Text.Section_1.Title[props.language]}
                    </h2>

                    <p className={styles.paragraph}>
                        {props.texts.Text.Section_1.Detail[props.language]}
                    </p>    

                    <div className={styles.wrap} id="AboutUs">
                        {props.texts.Text.Section_1.ListItems.map((el)=>{
                            return <Card 
                                key={el.Heading[props.language]}
                                title={el.Heading[props.language]}
                                detail={el.Detail[props.language]}
                                src={el.imgSource}

                            />
                        })}
                    </div>

                    <Image 
                        width={1760}
                        height={360}
                        src={props.texts.Text.Section_1.imgSource}
                        alt={"parquet demonstation"}
                        style={{objectFit:"cover"}}
                    />

                </>
            }
            />
        </>
    )
}