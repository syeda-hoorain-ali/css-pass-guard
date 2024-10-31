import Logo from './logo'
import styles from "@/styles/footer.module.css"

const Footer = () => {
  return (<>
    <footer className={styles.footer}>
      <div>
        <div className={styles.logo}><Logo /></div>
        <div>Created with 💖 by Syeda Hoorain Ali</div>
      </div>
    </footer>
  </>)
}

export default Footer