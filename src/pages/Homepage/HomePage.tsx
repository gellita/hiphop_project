import styles from './index.module.sass'
export const HomePage = () => {
    return(

        <div className={styles.main}>
            <div className={styles.home}>

                <div className={styles.background}>
                    <img src="./src/assets/Images/homepage/background_new.jpg" className={styles.home__backimg} alt="background image"/>
                    <img src="./src/assets/Images/homepage/vector.png" className={styles.home__vectorimg} alt = "vector image"/>
                </div>
                <div className={styles.home__text}>
                    <div className={styles.home__text__hh}>HIP-HOP</div>
                    <div className={styles.home__text__ch}>chronicles</div>
                </div>

            </div>
            <div className={styles.gallery}>
                <div className={styles.gallery__collage}>
                    <img src="./src/assets/Images/homepage/dancer1.png" alt = "dancer"/>
                    <img src="./src/assets/Images/homepage/dancer2.png" alt = "dancer"/>
                    <img src="./src/assets/Images/homepage/dancer3.png" alt = "dancer"/>
                </div>
            </div>
        </div>


    )
}
