'use client'
import Image from 'next/image';
import Link from 'next/link';
import { DownloadSimple } from '@phosphor-icons/react';

export default function Navbar(props: {initialIndex: number}){
    return <nav style={{
        width: '100%',
        height: '4rem',
        position: 'fixed',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        zIndex: 999
    }}>
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 2rem 0 2rem',
            backgroundColor: '#fff',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Image src={'/icons/espw-colored.png'} alt='eSPW' width={24} height={24}></Image>
                    <span style={{
                        marginLeft: '.75rem',
                        fontWeight: 'bold',
                        color: '#fd8d18',
                        paddingLeft: '.75rem',
                        borderLeft: '2px solid #fd8d18',
                    }}>eSPW</span>
                </div>
                <div style={{
                    marginLeft: '5rem',
                }}>
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        gap: '2rem',
                    }}>
                        <li>
                            <Link href={'/'} style={{
                                color: '#fd8d18',
                                textDecoration: 'none',
                                fontWeight: props.initialIndex === 0 ? 'bold' : 'normal',
                                paddingBottom: props.initialIndex === 0 ? '.25rem' : '0',
                                borderBottom: props.initialIndex === 0 ? '3px solid #fd8d18' : 'none',
                            }}>Beranda</Link>
                        </li>
                        <li>
                            <Link href={'/about'} style={{
                                color: '#fd8d18',
                                textDecoration: 'none',
                                fontWeight: props.initialIndex === 1 ? 'bold' : 'normal',
                                paddingBottom: props.initialIndex === 1 ? '.25rem' : '0',
                                borderBottom: props.initialIndex === 1 ? '3px solid #fd8d18' : 'none',
                            }}>Tentang</Link>
                        </li>
                        <li>
                            <Link href={'/feature'} style={{
                                color: '#fd8d18',
                                textDecoration: 'none',
                                fontWeight: props.initialIndex === 2 ? 'bold' : 'normal',
                                paddingBottom: props.initialIndex === 2 ? '.25rem' : '0',
                                borderBottom: props.initialIndex === 2 ? '3px solid #fd8d18' : 'none',
                            }}>Fitur</Link>
                        </li>
                        <li>
                            <Link href={'/faq'} style={{
                                color: '#fd8d18',
                                textDecoration: 'none',
                                fontWeight: props.initialIndex === 3 ? 'bold' : 'normal',
                                paddingBottom: props.initialIndex === 3 ? '.25rem' : '0',
                                borderBottom: props.initialIndex === 3 ? '3px solid #fd8d18' : 'none',
                            }}>FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
            }}>
                <Link href={'/login'} style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    padding: '.5rem 1rem',
                    color: '#fd8d18',
                    border: '1px solid #fd8d18',
                    borderRadius: '1rem',
                    fontSize: '14px',
                }}>Guru PKK</Link>
                <form action="/app/espw-app-v1.1.2-beta.apk" method="get">
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.5rem',
                        padding: '.5rem 1rem',
                        backgroundColor: '#fd8d18',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '1rem',
                        cursor: 'pointer',
                    }}><DownloadSimple/>Download</button>
                </form>
            </div>
        </div>
    </nav>
}