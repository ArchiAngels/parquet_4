import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'
import AdaptiveImage from "../adaptiveImage/adaptrive";

export default function Page(props){
    let context = props.texts.Text.Section_5;
    let l = props.language;
    let w = window;
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
                                {context.Detail_5[l]}
                                <br/>
                            </p>
                            <AdaptiveImage 
                                width={1760}
                                diff={160}
                                height={268}
                                window={w}
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