'use client'
import '@/app/global.css';
import Image from 'next/image';
import { MagnifyingGlass, SignOut } from '@phosphor-icons/react';
import Profile from './profile';
import { useRouter } from 'next/navigation';
import { JwtPayload, Secret, verify } from 'jsonwebtoken';

export default function NavbarGuru(){
    const router = useRouter();
    const logout = () => {
        const confirmDialog: boolean = confirm('Apakah Anda yakin ingin keluar?');
        if(confirmDialog){
            localStorage.removeItem('token');
            router.push('/login')
        }
    }

    return <nav style={{
        width: '100%',
        height: '7rem',
        position: 'fixed',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fd8d18',
        zIndex: 999
    }}>
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 2rem 0 2rem',
            backgroundColor: '#fd8d18',
            }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Image src={'/icons/espw-white.png'} alt='eSPW' width={24} height={24}></Image>
                    <span style={{
                        marginLeft: '.75rem',
                        fontWeight: 'bold',
                        color: '#fff',
                        paddingLeft: '.75rem',
                        borderLeft: '2px solid #fff',
                        }}>eSPW Guru</span>
                </div>
                <div style={{
                    marginLeft: '5rem',
                    position: 'relative'
                }}>
                    <input type="text" name="search" id="search" placeholder='Telusuri ...' style={{
                        padding: '.5rem',
                        paddingLeft: '2.5rem',
                        width: '30rem',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: '#ebebeb',
                        borderRadius: '1.5rem'
                        }}/>
                    <MagnifyingGlass style={{
                        position: 'absolute',
                        top: '50%',
                        left: '1rem',
                        transform: 'translateY(-50%)'
                        }}/>
                </div>
            </div>
            <button onClick={logout} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                backgroundColor: '#fff',
                color: '#fd8d18',
                padding: '.5rem 1rem .5rem 1rem',
                border: 'none',
                outline: 'none',
                borderRadius: '1.5rem'
                }}>
                <span>Logout</span>
                <SignOut size={24}/>
            </button>
        </div>
        {(() => {
            const token: string = localStorage.getItem('token')!;
            const data: string | JwtPayload = verify(token, 'espwapp' as Secret);
            const nama = data as {nama: string};
            return <Profile nama={nama.nama}/>
        })()}
    </nav>
}