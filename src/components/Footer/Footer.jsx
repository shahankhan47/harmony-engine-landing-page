import styles from './Footer.module.css'


export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.inner}>
                    <div>Harmony Engine © {new Date().getFullYear()}</div>
                    <div className={styles.links}>Privacy · Terms · Contact</div>
                </div>
            </div>
        </footer>
    )
}