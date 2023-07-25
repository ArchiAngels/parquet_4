import MaxContent from "../maxContent/maxContent";
import styles from './style.module.css'

export default function Page(props){
    let context = props.texts.Text.Section_2;
    let l = props.language;
    return(
        <>
            <MaxContent
                class={styles.marginExternal}
                content={
                    <>
                        <h3 className={styles.header}>{context.Title[l]}</h3>
                        <p className={styles.paragraph}>
                            {context.Detail_1[l]}
                            <br/>
                            <br/>
                            {context.Detail_2[l]}
                            <br/>
                            <br/>
                            {context.Detail_3[l]}
                            
                        </p>
                    </>
                }
            
            />
        </>
    )
}