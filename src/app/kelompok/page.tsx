'use client'
import '@/app/global.css';
import NavbarGuru from '@/components/navbar-guru';
import Profile from '@/components/profile';
import { Dispatch, SetStateAction, useState } from 'react';
import { CaretCircleLeft } from '@phosphor-icons/react';
import { useSearchParams } from 'next/navigation';

export default function Kelompok(){
    const searchParams = useSearchParams();
    const [index, setIndex] = useState(0);
    return <>
        <NavbarGuru/>
        <Profile nama='Muhammad Ilham Mutaqin'/>
        <div style={{
            width: '80%',
            margin: 'auto',
            padding: '6rem 2rem 2rem 2rem',
        }}>
            <Header namaToko='Fiesta Food' kelas='XI PPLG'/>
            <Tab initialIndex={index} setIndex={setIndex}/>
            {(() => {
                switch (index) {
                    case 0:
                        return <NotFound/>
                    case 1:
                        return <NotFound/>
                    case 2:
                        return <NotFound/>
                    case 3:
                        return <NotFound/>
                    case 4:
                        return <NotFound/>
                    case 5:
                        return <NotFound/>
                    default:
                        return <NotFound/>
                }
            })()}
        </div>
    </>
}

function Header(props: {namaToko: string; kelas: string}){
    return <div style={{
        width: '100%',
        height: '8rem',
        backgroundColor: '#fd8d18',
        borderRadius: '1rem',
        lineHeight: '1.2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '1rem',
        color: '#fff',
        position: 'relative',
    }}>
        <h1>{props.namaToko}</h1>
        <p>{props.kelas}</p>
        <CaretCircleLeft size={28} style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
        }}/>
    </div>
}

function Tab(props: {initialIndex: number; setIndex: Dispatch<SetStateAction<number>>}){
    return <div style={{
        marginTop: '2rem',
        borderBottom: '2px solid #fd8d18',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        justifyItems: 'stretch',
        textAlign: 'center',
        cursor: 'pointer',
    }}>
        <span onClick={() => props.setIndex(0)} style={{
            padding: '.5rem',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
            color: `${props.initialIndex === 0 ? '#fff' : 'grey'}`,
            backgroundColor: `${props.initialIndex === 0 ? '#fd8d18' : '#fff'}`,
        }}>Tentang</span>
        <span onClick={() => props.setIndex(1)} style={{
            padding: '.5rem',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
            color: `${props.initialIndex === 1 ? '#fff' : 'grey'}`,
            backgroundColor: `${props.initialIndex === 1 ? '#fd8d18' : '#fff'}`,
        }}>Produk</span>
        <span onClick={() => props.setIndex(2)} style={{
            padding: '.5rem',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
            color: `${props.initialIndex === 2 ? '#fff' : 'grey'}`,
            backgroundColor: `${props.initialIndex === 2 ? '#fd8d18' : '#fff'}`,
        }}>Grafik Penjualan</span>
        <span onClick={() => props.setIndex(3)} style={{
            padding: '.5rem',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
            color: `${props.initialIndex === 3 ? '#fff' : 'grey'}`,
            backgroundColor: `${props.initialIndex === 3 ? '#fd8d18' : '#fff'}`,
        }}>Detail Penjualan</span>
        <span onClick={() => props.setIndex(4)} style={{
            padding: '.5rem',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
            color: `${props.initialIndex === 4 ? '#fff' : 'grey'}`,
            backgroundColor: `${props.initialIndex === 4 ? '#fd8d18' : '#fff'}`,
        }}>Rekap Barang</span>
        <span onClick={() => props.setIndex(5)} style={{
            padding: '.5rem',
            borderTopLeftRadius: '.5rem',
            borderTopRightRadius: '.5rem',
            color: `${props.initialIndex === 5 ? '#fff' : 'grey'}`,
            backgroundColor: `${props.initialIndex === 5 ? '#fd8d18' : '#fff'}`,
        }}>Kas Harian</span>
    </div>
}

function NotFound(){
    return <div style={{
        width: '100%',
        height: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <span>Halaman belum tersedia.</span>
    </div>
}