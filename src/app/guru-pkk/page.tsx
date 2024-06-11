'use client'
import NavbarGuru from "@/components/navbar-guru";
import { ChalkboardTeacher } from "@phosphor-icons/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GuruPKK(){
    const [jumlahKelas, setJumlahKelas] = useState(0);
    const [jumlahKelompok, setJumlahKelompok] = useState(0);
    const [jumlahSiswa, setJumlahSiswa] = useState(0);
    const [kelas, setKelas] = useState([]);
    const router = useRouter();
    
    const color = (jurusan: string) => {
        switch(jurusan){
            case 'Desain Pemodelan Informasi Bangunan':
                return 'brown';
            case 'Teknik Elektronika':
                return 'orange';
                case 'Teknik Ketenagalistrikan':
                return 'yellow';
            case 'Teknik Mesin':
                return 'lightblue';
                case 'Teknik Otomotif':
                    return 'blue';
            case 'Teknik Jaringan Komputer dan Telekomunikasi':
                return 'red';
            case 'Pengembangan Perangkat Lunak dan Gim':
                return '#780800';
            case 'Broadcasting dan Perfilman':
                return 'green';
        }
    }

    useEffect(() => {
        axios.get('https://api.espw.my.id/api/v2/guru/all/siswa', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setJumlahSiswa(res.data.data.length);
        })
        axios.get('https://api.espw.my.id/api/v2/guru/all/kelas', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setJumlahKelas(res.data.data.length);
            setKelas(res.data.data);
        })
        axios.get('https://api.espw.my.id/api/v2/guru/all/kelompok', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setJumlahKelompok(res.data.data.length);
        })
    })

    if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined || localStorage.getItem('token') === ''){
        return router.push('/login')
    }

    return <>
        <NavbarGuru/>
        <div style={{
            width: '100%',
            padding: '8rem 2rem 2rem 2rem',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <Insight title="Jumlah Kelas" count={jumlahKelas}/>
                <Insight title="Jumlah Kelompok" count={jumlahKelompok}/>
                <Insight title="Jumlah Siswa" count={jumlahSiswa}/>
            </div>
            <h1 style={{
                fontFamily: 'Poppins SemiBold',
                marginTop: '2rem'
            }}>Kelas</h1>
            <p>Pilih kelas yang ingin anda periksa.</p>
            <div style={{
                marginTop: '1rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min-content, 25rem))',
                gap: '1rem'
            }}>
                {kelas.map((item) => {
                    return <Class color={color(item['program_keahlian'])!} idKelas={item['id_kelas']} kelas={item['kelas']} jurusan={item['program_keahlian']} jumlahKelompok={0}/>
                })}
            </div>
        </div>
    </>
}

function Insight(props: {title: string; count: number}){
    return <div style={{
        width: '18rem',
        height: '10rem',
        backgroundColor: '#fd8d18',
        borderRadius: '1rem',
        padding: '2rem',
        color: '#fff',
        position: 'relative'
    }}>
        <span>{props.title}</span>
        <h1 style={{
            fontFamily: 'Poppins Bold',
            fontSize: '50px'
        }}>{props.count}</h1>
        <Image src={'/icons/espw-white.png'} alt="eSPW" width={120} height={120} style={{
            position: 'absolute',
            top: '50%',
            right: '-2rem',
            transform: 'translateY(-50%)',
            opacity: '15%'
        }}></Image>
    </div>
}

function Class(props: {color: string; idKelas: string; kelas: string; jurusan: string; jumlahKelompok: number}){
    const router = useRouter();
    return <div onClick={() => router.push(`/guru-pkk/kelas?id_kelas=${props.idKelas}`)} style={{
        height: '8rem',
        backgroundColor: '#fff',
        boxShadow: '0px 0px 10px grey',
        borderRadius: '1rem',
        borderLeft: `10px solid ${props.color}`,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        lineHeight: '1.2',
        cursor: 'pointer'
    }}>
        <div style={{
            width: '60%'
        }}>    
            <h2 style={{
                fontFamily: 'Poppins Bold',
            }}>{props.kelas}</h2>
            <span style={{
                fontSize: '14px',
                lineHeight: '0'
            }}>{props.jurusan}</span>
        </div>
        <ChalkboardTeacher size={120} style={{
            position: 'absolute',
            top: '50%',
            right: '1rem',
            transform: 'translateY(-50%)',
            opacity: '20%'
        }}/>
    </div>
}