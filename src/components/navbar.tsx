"use client"
import Link from 'next/link'
import { useState } from 'react'
import Logo from './logo'
import { GithubIcon, LinkedinIcon, MenuIcon, XIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import styles from "@/styles/navbar.module.css"

const Navbar = () => {

  const [active, setActive] = useState<boolean>(false)


  return (<>
    <nav className={styles.navbar}>
      <div className={styles.myContainer}>

        <div className={styles.logo}>
          <Link href='/'><Logo /></Link>
        </div>

        <div className={styles.mobileIcons}>
          <span onClick={() => setActive(!active)}> {active ? <XIcon /> : <MenuIcon />}</span>
        </div>



        <div className={styles.desktopNav}>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>

          <Link className={styles.github} href='https://github.com/syeda-hoorain-ali/pass-guard.git'>
            <button className={styles.button}>
              <GithubIcon size={20} />  GitHub
            </button>
          </Link>
        </div>


        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: active ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className={styles.mobileNav}
        >
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>

          <span>
            <Link href='https://github.com/syeda-hoorain-ali/css-pass-guard.git'>
              <button className={styles.button + styles.github}>
                <GithubIcon size={20} />  GitHub
              </button>
            </Link>

            <Link href='https://www.linkedin.com/in/syedahoorainali/'>
              <button className={styles.button+ styles.linkedin}>
                <LinkedinIcon size={20} /> LinkedIn
              </button>
            </Link>

          </span>
        </motion.div>

      </div>
    </nav>
  </>)
}

export default Navbar