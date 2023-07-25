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
                            <a href="#AboutUs">{props.texts.Text.Header.AboutUs[props.language]}</a>
                        </li>

                        <li>
                            <a href="#products">{props.texts.Text.Header.Products[props.language]}</a>
                        </li>

                        <li>
                            <a href="#gallery">{props.texts.Text.Header.Gallery[props.language]}</a>
                        </li>

                        <li>
                            <a href="#contacts">{props.texts.Text.Header.Contact[props.language]}</a>
                        </li>
                    </ul>
                </nav>


                <div>   
                    <ButtonComponent text="RUS" onClick={()=>{}} className={styles.spacer_right}/>
                    <ButtonComponent text="ENG" onClick={()=>{}} />
                </div>
            </header>
        }/>
            
        </>
    )
}