'use client'
import '@/app/global.css';
import NavbarGuru from '@/components/navbar-guru';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CaretCircleLeft } from '@phosphor-icons/react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function Kelompok(){
    const router = useRouter();
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([]);
    const [dataKelompok, setDataKelompok] = useState([]);
    const [dataTransaksi, setDataTransaksi] = useState([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        axios.get(`https://api.espw.my.id/api/v2/toko/${searchParams.get('id_kelompok')}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setData(res.data.data);
        }).catch(err => [
            console.log(err)
        ])
        axios.post('https://api.espw.my.id/api/v2/kelompok/all', {
            'id_toko': searchParams.get('id_kelompok')
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setDataKelompok(res.data.data);
        }).catch(err => [
            console.log(err)
        ])
        axios.post('https://api.espw.my.id/api/v2/toko/orders', {
            'id_toko': searchParams.get('id_kelompok'),
            'status': 'Selesai'
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setDataTransaksi(res.data.data);
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
            <Header namaToko={data[0]?.['toko']['nama_toko']} kelas={data[0]?.['kelas']['kelas']}/>
            <Tab initialIndex={index} setIndex={setIndex}/>
            {(() => {
                switch (index) {
                    case 0:
                        return <Tentang data={dataKelompok}/>
                    case 1:
                        return <Produk data={data}/>
                    case 2:
                        return <Transaksi data={dataTransaksi}/>
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
        // borderRadius: '1rem',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        lineHeight: '1.2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fd8d18',
        color: '#fff',
        padding: '1rem',
    }}>
        <h1>{props.namaToko}</h1>
        <p>{props.kelas}</p>
    </div>
}

function Tab(props: {initialIndex: number; setIndex: Dispatch<SetStateAction<number>>}){
    return <div style={{
        marginTop: '0rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyItems: 'stretch',
        textAlign: 'center',
        cursor: 'pointer',
    }}>
        <span onClick={() => props.setIndex(0)} style={{
            padding: '.5rem',
            borderBottomLeftRadius: '1rem',
            borderBottomRightRadius: '1rem',
            color: `${props.initialIndex === 0 ? '#fff' : 'grey'}`,
            backgroundColor: `${props.initialIndex === 0 ? '#fd8d18' : '#fff'}`,
        }}>Tentang</span>
        <span onClick={() => props.setIndex(1)} style={{
            padding: '.5rem',
            borderBottomLeftRadius: '1rem',
            borderBottomRightRadius: '1rem',
            color: `${props.initialIndex === 1 ? '#fff' : 'grey'}`,
            backgroundColor: `${props.initialIndex === 1 ? '#fd8d18' : '#fff'}`,
        }}>Produk</span>
        <span onClick={() => props.setIndex(2)} style={{
            padding: '.5rem',
            borderBottomLeftRadius: '1rem',
            borderBottomRightRadius: '1rem',
            color: `${props.initialIndex === 2 ? '#fff' : 'grey'}`,
            backgroundColor: `${props.initialIndex === 2 ? '#fd8d18' : '#fff'}`,
        }}>Detail Penjualan</span>
    </div>
}

function Tentang(props: { data: any }){
    return <div style={{
        width: '100%',
        marginTop: '2rem',
    }}>
        <h2>Daftar Anggota</h2>
        <table style={{
            width: '100%',
            marginTop: '.5rem',
        }}>
            <tr>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>NIS</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Nama</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Kelas</th>
            </tr>
            {props.data.map((item: any) => {
                return <tr>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['siswa']['nis']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['siswa']['nama']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['kelas']['kelas']}</td>
                </tr>
            })}
        </table>
    </div>
}

function Produk(props: { data: any }){
    return <div style={{
        width: '100%',
        marginTop: '2rem',
    }}>
        <table style={{
            width: '100%',
        }}>
            <tr>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Nama Produk</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Jumlah Terjual</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Stok</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Harga</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Rating Produk</th>
            </tr>
            {props.data.map((item: any) => {
                return <tr style={{
                    textAlign: 'center',
                }}>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['produk']['nama_produk']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['produk']['jumlah_terjual']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['produk']['stok']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['produk']['harga']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['produk']['rating_produk']}</td>
                </tr>
            })}
        </table>
    </div>
}

function Transaksi(props: { data: any }){
    return <div style={{
        width: '100%',
        marginTop: '2rem',
    }}>
        <table style={{
            width: '100%',
        }}>
            <tr>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Pembeli</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Produk</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Jumlah</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Total Harga</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Status Pesanan</th>
                <th style={{
                    padding: '.5rem',
                    backgroundColor: '#fd8d18',
                    color: '#fff',
                }}>Waktu</th>
            </tr>
            {props.data.map((item: any) => {
                return <tr style={{
                    textAlign: 'center',
                }}>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['siswa']['nama']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['produk']['nama_produk']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['transaksi']['jumlah']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['transaksi']['total_harga']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['transaksi']['status']}</td>
                    <td style={{
                        padding: '.5rem',
                        backgroundColor: '#ffddba',
                    }}>{item['transaksi']['waktu']}</td>
                </tr>
            })}
        </table>
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