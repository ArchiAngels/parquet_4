import MaxContent from "../maxContent/maxContent"
import styles from "./style.module.css";
import Image from "next/image";
import AdaptiveImage from "../adaptiveImage/adaptrive";

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
    let w = props.w;
    let context = props.texts.Text.Section_1;
    let l = props.language;
    return(
        <>
            <MaxContent
            class={styles.marginExternal}
            content={
                <>
                    <div className={styles.container}>
                        <h2 id="about">
                            {context.Title[l]}
                        </h2>

                        <p className={styles.paragraph}>
                            {context.Detail_1[l]}
                            <br/>
                            {context.Detail_2[l]}
                            <br/>
                            {context.Detail_3[l]}
                            <br/>
                            {context.Detail_4[l]}
                            
                        </p>    

                        <div className={styles.wrap}>
                            {context.ListItems.map((el)=>{
                                return <Card 
                                    key={el.Heading[l]}
                                    title={el.Heading[l]}
                                    detail={el.Detail[l]}
                                    src={el.imgSource}

                                />
                            })}
                        </div>
                    </div>


                    <AdaptiveImage 
                        src={context.imgSource} 
                        width={1760} 
                        height={360} 
                        diff={160} 
                        alt={"parquet demonstation"}
                        style={{objectFit:"cover"}}
                        window={w}
                    />

                </>
            }
            />
        </>
    )
}