import './index.sass'

export const Footer = () =>{
    return(
        <footer>
            <div className="footer_content">
                <div className="footer_content_logo">
                    <ul className="footer_content_logo-item">
                        <li className="footer_content_logo-item-title">HIP-HOP</li>
                        <li className="footer_content_logo-item-article">chronicles</li>
                    </ul>
                </div>
                <div className="footer_content_socialmedia">
                    <ul className="footer_content_socialmedia-item">Контакты
                        <li className="footer_content_socialmedia-item-vk"><a href="https://vk.com/chto_tebe_nadoa"><img src="./src/assets/Images/Icons/vkontakte.svg"/></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom-prjinfo">
                    ©2024
                </div>
            </div>
        </footer>
    )
}

