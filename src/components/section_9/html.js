import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import AdaptiveImage from "../adaptiveImage/adaptrive";


export default function Page(props){
    let context = props.texts.Text.Section_7;
    let l = props.language;
    let w = props.w;
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                       <div className={styles.wrap}>
                           <h4>{context.Title[l]}</h4>
                           <p className={styles.paragraph}>
                                {context.Detail_1[l]}
                                <br/>
                                <br/>
                                {context.Detail_2[l]}
                                <br/>
                                <br/>
                                {context.Detail_3[l]}
                            </p>
                            <AdaptiveImage
                                width={1760}
                                height={286}
                                diff={160}
                                window={w}
                                src={context.imgSource}
                                // style={{objectFit:"cover"}}
                                alt={"parquet scheme"}
                            />                    
                       </div>
                    </>
                }
            
            />
        </>
    )
}