import Link from 'next/link'
import styles from '@/styles/not-found.module.css'

const page = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h3><Link href='/'>Back to home</Link></h3>
    </div>
  )
}

export default page