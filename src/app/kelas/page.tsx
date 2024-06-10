'use client'
import '@/app/global.css';
import NavbarGuru from '@/components/navbar-guru';
import Profile from '@/components/profile';
import { CaretRight, UserCircle } from '@phosphor-icons/react';

export default function Kelas(){
    return <>
        <NavbarGuru/>
        <Profile nama='Muhammad Ilham Mutaqin'/>
        <div style={{
            width: '80%',
            margin: 'auto',
            padding: '6rem 2rem 2rem 2rem',
        }}>
            <h1 style={{
                fontFamily: 'Poppins SemiBold',
            }}>Kelompok</h1>
            <p>Pilih kelompok yang ingin anda periksa.</p>
            <div style={{
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <Kelompok namaKelompok="Fiesta Food" jumlahAnggota={6} kelas='XI PPLG'/>
                <Kelompok namaKelompok="Kedai Masik" jumlahAnggota={6} kelas='XI PPLG'/>
                <Kelompok namaKelompok="Kedai Barista" jumlahAnggota={6} kelas='XI PPLG'/>
            </div>
        </div>
    </>
}

function Kelompok(props: { namaKelompok: string; jumlahAnggota: number; kelas: string; }){
    return <div style={{
        width: '100%',
        padding: '.5rem',
        boxShadow: '0px 0px 10px grey',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
        }}>
            <UserCircle size={52}/>
            <div>
                <h3>{props.namaKelompok}</h3>
                <p style={{
                    lineHeight: '1',
                }}>{props.kelas}</p>
            </div>
        </div>
        <CaretRight color='#fd8d18' weight='bold'/>
    </div>
}