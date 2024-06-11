'use client'
import '@/app/global.css';
import NavbarGuru from '@/components/navbar-guru';
import { CaretRight, UserCircle } from '@phosphor-icons/react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Kelas(){
    const router = useRouter();
    const [data, setData] = useState([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        axios.get(`https://api.espw.my.id/api/v2/guru/kelas/${searchParams.get('id_kelas')}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setData(res.data.data);
        }).catch(err => [
            console.log(err)
        ])
    })

    if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined || localStorage.getItem('token') === ''){
        return router.push('/login')
    }

    return <>
        <NavbarGuru/>
        <div style={{
            width: '80%',
            margin: 'auto',
            padding: '8rem 2rem 2rem 2rem',
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
                {data.length === 0 ? <NotFound/> : data.map((item) => {
                    return <Kelompok idKelompok={item['toko']['id_toko']} namaKelompok={item['toko']['nama_toko']} kelas={item['kelas']['kelas']}/>
                })}
            </div>
        </div>
    </>
}

function Kelompok(props: { idKelompok: string; namaKelompok: string; kelas: string; }){
    const router = useRouter();
    return <div onClick={() => router.push(`/guru-pkk/kelompok?id_kelompok=${props.idKelompok}`)} style={{
        width: '100%',
        padding: '.5rem',
        boxShadow: '0px 0px 10px grey',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
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

function NotFound(){
    return <div style={{
        width: '100%',
        height: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <span>Kelas ini belum memiliki kelompok.</span>
    </div>
}