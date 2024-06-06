'use client'
import './global.css';
import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { DownloadSimple } from '@phosphor-icons/react';

export default function Home(){
    return <>
        <Navbar initialIndex='1'/>
        <Header/>
    </>
}

function Navbar(prop: any){
    return <nav className={styles.navbar}>
        <div className={styles.brand}>
            <Link style={{textDecoration: 'none'}} href={'/'}>
                <Image src={'/icons/espw-white.png'} width={24} height={24} alt='eSPW' className={styles.brandLogo}></Image>
            </Link>
        </div>
        <div className={styles.menu}>
            <div className={styles.menuButton}>
                <div className={styles.garis1}></div>
                <div className={styles.garis2}></div>
                <div className={styles.garis3}></div>
            </div>
            <div className={`${styles.menuLink} ${styles.hide}`}>
                <Link style={{textDecoration: 'none'}} href={'/'} className={`${styles.navLink} ${prop.initialIndex == 1 ? styles.active : ''}`}>Beranda</Link>
                <Link style={{textDecoration: 'none'}} href={'/'} className={`${styles.navLink} ${prop.initialIndex == 2 ? styles.active : ''}`}>Tentang</Link>
                <Link style={{textDecoration: 'none'}} href={'/'} className={`${styles.navLink} ${prop.initialIndex == 3 ? styles.active : ''}`}>Fitur</Link>
                <Link style={{textDecoration: 'none'}} href={'/'} className={`${styles.navLink} ${prop.initialIndex == 4 ? styles.active : ''}`}>FAQ</Link>
                <Link style={{textDecoration: 'none'}} href={'/login-guru'} className={`${styles.navLink} ${prop.initialIndex == 5 ? styles.active : ''}`}>Guru PKK</Link>
            </div>
            <div className={styles.download}>
                <Link style={{textDecoration: 'none'}} href={'/app/espw-v0.1.0-alpha.apk'} download={'espw-app-v0.1.0-alpha'} className={styles.downloadButton}><DownloadSimple size={22}/></Link>
            </div>
        </div>
    </nav>
}

function Header(){
    return <div className={styles.header}>
        <div className={styles.headerTitle}>
            <h1>Beli apa aja<br/>bisa dimana aja</h1>
            <p>Dapatkan produk yang kamu inginkan dengan kemudahan berbelanja online hanya di eSPW!</p>
            <div className={styles.download}>
                <Link style={{textDecoration: 'none'}} href={'/app/espw-v0.1.0-alpha.apk'} download={'espw-app-v0.1.0-alpha'} className={`${styles.downloadButton} ${styles.downloadHeaderButton}`}><DownloadSimple size={22}/></Link>
            </div>
            <div>
                <Image src={'/images/frame.png'} width={240} height={480} alt='eSPW Mobile'></Image>
            </div>
        </div>
    </div>
}