import Link from 'next/link';
import styles from "@/styles/about.module.css"
import { GithubIcon, GlobeIcon, LinkedinIcon } from 'lucide-react';

const AboutPage = () => {
  return (<>
    <div className={styles.about}>
      <h1>Welcome to Password Manager</h1>

      <p>Password Manager is a secure and easy-to-use password management tool built with Next.js and localStorage. Our goal is to help you protect your online identity and sensitive information by generating and storing unique, strong passwords for each of your online accounts.</p>

      <h2>Why Password Manager?</h2>

      <ul>
        <li><b>Security:</b> We use advanced encryption and hashing algorithms to protect your passwords and keep them safe from prying eyes.</li>
        <li><b>Convenience:</b> With Password Manager, you only need to remember one master password to access all of your other passwords.</li>
        <li><b>Organization:</b> Our intuitive interface makes it easy to manage and organize your passwords, so you can quickly find the one you need.</li>
      </ul>

      <h2>Our Values</h2>

      <ul>
        <li><b>Privacy:</b> We respect your privacy and never store your passwords on our servers. Your data is always stored locally on your device.</li>
        <li><b>Security:</b> We&apos;re committed to keeping your passwords safe and secure, using the latest security best practices and technologies.</li>
        <li><b>Transparency:</b> We&apos;re open and honest about how we store and manage your data, so you can trust us with your sensitive information.</li>
      </ul>

      <h2>Get in Touch</h2>

      <p>If you have any questions, feedback, or suggestions, please don&apos;t hesitate to contact us. We&apos;re always looking for ways to improve and make Password Manager even better for you.</p>

      <h3>Thanks for Choosing Password Manager!</h3>

      <p>Remember, your security and privacy are our top priorities. We&apos;re glad you&apos;ve chosen Password Manager to help protect your online identity.</p>

      <div className={styles.links}>
        <Link target='_blank' href="https://github.com/syeda-hoorain-ali/">
          <GithubIcon />
        </Link>

        <Link target='_blank' href="https://www.linkedin.com/in/syedahoorainali/">
          <LinkedinIcon />
        </Link>

        <Link target='_blank' href="https://syeda-hoorain-ali.vercel.app">
          <GlobeIcon />
        </Link>
      </div>

    </div>
  </>)
}

export default AboutPage