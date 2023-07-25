import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'

export default function Page(props){
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                        <h3 className={styles.header}>{props.texts.Text.Section_2.Title[props.language]}</h3>
                        <p>{props.texts.Text.Section_2.Detail[props.language]}</p>
                    </>
                }
            
            />
        </>
    )
}