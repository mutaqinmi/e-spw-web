'use client'
import './global.css';
import Navbar from './../components/navbar';
import Image from 'next/image';
import { DownloadSimple } from '@phosphor-icons/react';

export default function Home(){
    return <>
        <Navbar initialIndex={0}/>
        <div style={{
            width: '100%',
            height: '100vh',
            padding: '5rem 2rem 2rem 2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fd8d18',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <div style={{
                    width: '50%',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <h1 style={{
                        color: '#fff',
                        fontSize: '4rem',
                        fontFamily: 'Poppins ExtraBold',
                    }}>Beli apa aja<br/>bisa dimana aja.</h1>
                    <span style={{
                        color: '#fff',
                        marginBottom: '2rem',
                    }}>Dapatkan produk yang kamu inginkan dengan kemudahan berbelanja online hanya di E - SPW!</span>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                    }}>
                        <form action="/app/espw-app-v0.1.3-alpha.apk" method="get">
                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                alignSelf: 'flex-start',
                                gap: '.5rem',
                                padding: '.5rem 1rem',
                                backgroundColor: '#fff',
                                color: '#fd8d18',
                                border: 'none',
                                borderRadius: '1rem',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}><DownloadSimple style={{fontWeight: 'bold'}}/>Download</button>
                        </form>
                        <span style={{
                            color: '#fff',
                            paddingLeft: '1rem',
                            borderLeft: '2px solid #fff',
                        }}>eSPW v0.1.3-alpha</span>
                    </div>
                </div>
                <div style={{
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Image src={'/images/espw-app.png'} alt='eSPW App' height={450} width={215}></Image>
                </div>
            </div>
        </div>
    </>
}