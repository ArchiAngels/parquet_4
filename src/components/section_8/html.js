import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import AdaptiveImage from "../adaptiveImage/adaptrive";


export default function Page(props){
    let context = props.texts.Text.Section_6;
    let l = props.language;
    let w = props.w;
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
                            <AdaptiveImage
                                width={1760}
                                height={286}
                                diff={160}
                                src={context.imgSource}
                                window={w}
                                alt={"parquet scheme"}
                            />                    
                       </div>
                    </>
                }
            
            />
        </>
    )
}