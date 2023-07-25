import styles from './header.module.css';
import ButtonComponent from '../button/button';
import MaxContent from '../maxContent/maxContent';

export default function HeaderComponent(props){
    return (
        <>
        <MaxContent 
        class={styles.fixed} 
        content={
            <header className={styles.header}>
                <h3>GP</h3>


                <nav>
                    <ul className={styles.ul}>
                        <li>
                            <p>{props.texts.Text.Header.AboutUs[props.language]}</p>
                        </li>

                        <li>
                            <p>{props.texts.Text.Header.Products[props.language]}</p>
                        </li>

                        <li>
                            <p>{props.texts.Text.Header.Gallery[props.language]}</p>
                        </li>

                        <li>
                            <p>{props.texts.Text.Header.Contact[props.language]}</p>
                        </li>
                    </ul>
                </nav>


                <div>   
                    <ButtonComponent text="RUS" onClick={props.onRus} className={styles.spacer_right}/>
                    <ButtonComponent text="ENG" onClick={props.onEng}/>
                </div>
            </header>
        }/>
            
        </>
    )
}