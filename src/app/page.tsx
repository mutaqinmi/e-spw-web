import './global.module.css';
import './style.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home(){
    return <>
        <Navbar initialIndex='1'/>
        <Header/>
    </>
}

function Navbar(prop: any){
    console.log(prop.initialIndex);
    return <nav className='navbar'>
        <div className='brand'>
            <Link href={'/'}>
                <Image src={'/icons/espw-white.png'} alt='eSPW' className='brand-logo'></Image>
            </Link>
        </div>
        <div className='menu'>
            <div className='menu-button'>
                <div className='garis1'></div>
                <div className='garis2'></div>
                <div className='garis3'></div>
            </div>
            <div className='menu-link hide'>
                <Link href={'/'} className='nav-link active'>Beranda</Link>
                <Link href={'/'} className='nav-link'>Tentang</Link>
                <Link href={'/'} className='nav-link'>Fitur</Link>
                <Link href={'/'} className='nav-link'>FAQ</Link>
                <Link href={'/login-guru'} className='nav-link'>Guru PKK</Link>
            </div>
            <div className='download'>
                <Link href={'/app/espw-v0.1.0-alpha.apk'} download={'espw-app-v0.1.0-alpha'} className='download-button'>Download</Link>
            </div>
        </div>
    </nav>
}

function Header(){
    return <div className='header'>
        <div className='circle crc1'></div>
        <div className='circle crc2'></div>
        <div className='circle crc3'></div>
        <div className='header-title'>
            <h1>Beli apa aja<br/>bisa dimana aja</h1>
            <p>Dapatkan produk yang kamu inginkan dengan kemudahan berbelanja online hanya di eSPW!</p>
            <div className='download'>
                <Link href={'/app/espw-v0.1.0-alpha.apk'} download={'espw-app-v0.1.0-alpha'} className='download-button header-download-button'>Download</Link>
            </div>
            <div className='header-image'>
                <Image src={'/images/frame.png'} alt='eSPW Mobile'></Image>
            </div>
        </div>
    </div>
}