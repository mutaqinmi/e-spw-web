'use client'
import NavbarGuru from "@/components/navbar-guru";
import Profile from "@/components/profile";
import { ChalkboardTeacher } from "@phosphor-icons/react";
import Image from "next/image";

export default function GuruPKK(){
    return <>
        <NavbarGuru/>
        <Profile nama="Muhammad Ilham Mutaqin"/>
        <div style={{
            width: '100%',
            padding: '6rem 2rem 2rem 2rem',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <Insight title="Jumlah Kelas" count={3}/>
                <Insight title="Jumlah Kelompok" count={6}/>
                <Insight title="Jumlah Siswa" count={72}/>
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
                <Class color="red" kelas="XI TJKT 1" jurusan="Teknik Jaringan Komputer dan Telekomunikasi" jumlahKelompok={6}/>
                <Class color="red" kelas="XI TJKT 2" jurusan="Teknik Jaringan Komputer dan Telekomunikasi" jumlahKelompok={6}/>
                <Class color="#8f0a00" kelas="XI PPLG" jurusan="Pengembangan Perangkat Lunak dan Gim" jumlahKelompok={6}/>
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

function Class(props: {color: string; kelas: string; jurusan: string; jumlahKelompok: number}){
    return <div onClick={() => location.href = '/kelas'} style={{
        height: '12rem',
        backgroundColor: '#fff',
        boxShadow: '0px 0px 10px grey',
        borderRadius: '1rem',
        borderLeft: `10px solid ${props.color}`,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        <div style={{
            alignSelf: 'flex-start'
        }}>
            <span style={{
                fontSize: '14px',
            }}>Jumlah Kelompok</span>
            <h2 style={{
                fontFamily: 'Poppins Bold',
                fontSize: '32px'
            }}>{props.jumlahKelompok}</h2>
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