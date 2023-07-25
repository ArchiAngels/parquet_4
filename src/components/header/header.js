import styles from './header.module.css';
import ButtonComponent from '../button/button';
import MaxContent from '../maxContent/maxContent';
import { useState } from 'react';

export default function HeaderComponent(props){
    const [link,setLink] = useState(0)
    return (
        <>
        <MaxContent 
        class={styles.fixed} 
        content={
            <header className={styles.header}>
                <a href="#" className={styles.logo}>GP</a>


                <nav>
                    <ul className={styles.Ula}>
                        <li>
                            <a 
                            href="#about" 
                            onClick={()=>{setLink(0)}}
                            className={link === 0? styles.active: styles.nactive}
                            >{props.texts.Text.Header.AboutUs[props.language]}</a>
                        </li>

                        <li>
                            <a 
                            href="#products"
                            onClick={()=>{setLink(1)}}
                            className={link === 1? styles.active: styles.nactive}
                            >{props.texts.Text.Header.Products[props.language]}</a>
                        </li>

                        <li>
                            <a 
                            href="#gallery"
                            onClick={()=>{setLink(2)}}
                            className={link === 2? styles.active: styles.nactive}
                            >{props.texts.Text.Header.Gallery[props.language]}</a>
                        </li>

                        <li>
                            <a 
                            href="#contacts"
                            onClick={()=>{setLink(3)}}
                            className={link === 3? styles.active: styles.nactive}
                            >{props.texts.Text.Header.Contact[props.language]}</a>
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