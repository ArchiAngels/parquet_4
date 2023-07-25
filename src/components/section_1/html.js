import styles from './style.module.css';

import MaxContent from '../maxContent/maxContent';

import AdaptiveImage from '../adaptiveImage/adaptrive';

export default function Page(props){
    let context = props.texts.Text;
    let l = props.language;
    let w = props.w;
    return(
        <>
            <MaxContent 
            class={styles.marginExternal}
            content = {
                <>
                    <h1 className={styles.marginBetwennText}>
                        {context.MainHeading_1[l]}
                        <br/>
                        {context.MainHeading_2[l]}
                    </h1>

                    <AdaptiveImage 
                        src={context.MainImgSource} 
                        width={1760} 
                        height={670} 
                        diff={160} 
                        alt={"Picture of parquet"}
                        window={w}
                    />

                    
                </>
            }
            />
        </>
    )
}