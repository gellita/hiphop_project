import styles from './index.module.sass'
import {Link} from "react-router-dom";

export const Footer = () =>{
    return(

        <footer>
            <div className={styles.footer_content}>
                <div className={styles.footer_content_logo}>
                    <ul className={styles.footer_content_logo_item}>
                        <li className={styles.footer_content_logo_item_title}>HIP-HOP</li>
                        <li className={styles.footer_content_logo_item_article}>chronicles</li>
                    </ul>
                </div>
                <div className={styles.footer_content_socialmedia}>
                    <ul className={styles.footer_content_socialmedia_item}>Контакты
                        <li className={styles.footer_content_socialmedia_item_vk}><a href="https://vk.com/chto_tebe_nadoa"><img src="./src/assets/Images/Icons/vkontakte.svg"/></a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer_bottom}>
                    <div className={styles.footer_bottom_prjinfo}>
                        <Link to="/login">Вход</Link>
                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <div className={styles.footer_bottom_prjinfo}>
                    ©2024
                </div>
            </div>
        </footer>
    )
}

