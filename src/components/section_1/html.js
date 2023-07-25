import styles from './style.module.css';

import MaxContent from '../maxContent/maxContent';

import AdaptiveImage from '../adaptiveImage/adaptrive';

export default function Page(props){

    let w = window;
    return(
        <>
            <MaxContent 
            class={styles.marginExternal}
            content = {
                <>
                    <h1 className={styles.marginBetwennText}>
                        {props.texts.Text.MainHeading_1[props.language]}
                        <br/>
                        {props.texts.Text.MainHeading_2[props.language]}
                    </h1>

                    <AdaptiveImage 
                        src={props.texts.Text.MainImgSource} 
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