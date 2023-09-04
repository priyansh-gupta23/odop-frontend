"use client"
import Image from 'next/image'
import styles from './page.module.css'

export default function Payment() {
  return <>
    <main className={styles.main}>
        <div>
            <Image src='/vercel.svg' width={400} height={500} alt={''}/>
        </div>
        <button className={styles.button}>Buy Now</button>
    </main>
  </>
}
