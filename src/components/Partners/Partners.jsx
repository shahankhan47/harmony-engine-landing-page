import styles from './Partners.module.css'


const logos = [ '/images/logo-1.svg', '/images/logo-2.svg', '/images/logo-3.svg', '/images/logo-4.svg' ]


export default function Partners(){
return (
<div className={styles.wrap}>
<div className={styles.container + ' container'}>
<div className={styles.caption}>Trusted by engineering leaders and innovation teams.</div>
<div className={styles.marquee}>
<div className={styles.track}>
{logos.concat(logos).map((src, idx) => (
<div className={styles.logo} key={idx}><img src={src} alt={`logo-${idx}`} /></div>
))}
</div>
</div>
</div>
</div>
)
}