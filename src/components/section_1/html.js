import styles from './style.module.css';
import Image from 'next/image'
import MaxContent from '../maxContent/maxContent';

export default function Page(props){
    return(
        <>
            <MaxContent 
            class={styles.marginExternal}
            content = {
                <>
                    <h1
                        style={{maxWidth:"1200px"}}
                        className={styles.marginBetwennText}
                    >
                        {props.texts.Text.MainHeading[props.language]}
                    </h1>

                    <Image
                        src={props.texts.Text.MainImgSource}
                        width={1760}
                        height={670}
                        style={{objectFit:"cover"}}
                        alt="Picture of parguet"
                    />
                </>
            }
            />
        </>
    )
}