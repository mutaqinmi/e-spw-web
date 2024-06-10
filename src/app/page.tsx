'use client'
import './global.css';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import { CaretRight, DownloadSimple, NotePencil, Question, Star, Storefront } from '@phosphor-icons/react';

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
                    }}>Dapatkan produk yang kamu inginkan dengan kemudahan berbelanja online hanya di eSPW!</span>
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
        <div style={{
            width: '100%',
            textAlign: 'center',
            marginTop: '5rem',
            marginBottom: '5rem',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div style={{
                width: '60%',
            }}>
                <Image src={'/icons/espw-colored.png'} alt='eSPW' width={32} height={32} style={{marginBottom: '2rem'}}></Image>
                <h1 style={{
                    fontFamily: 'Poppins Bold',
                    fontSize: '2rem',
                }}>Apa itu <span style={{color: '#fd8d18', fontFamily: 'Poppins Bold'}}>eSPW</span>?</h1><br/>
                <p>Saat ini, penerapan program Sekolah Pencetak Wirausaha (SPW) telah menjadi bagian integral dari banyak lembaga pendidikan. SPW tidak hanya memberikan pengalaman belajar yang praktis kepada siswa, tetapi juga mendukung pengembangan keterampilan yang relevan dengan industri.</p><br/>
                <p>Salah satu kegiatan utama yang dilakukan dalam konteks SPW di SMKN 2 Tasikmalaya adalah penyelenggaraan bazar. Bazar menjadi kesempatan bagi siswa untuk mengimplementasikan pengetahuan dan keterampilan yang mereka pelajari di sekolah dalam konteks nyata. Namun, seperti halnya dalam setiap proyek, ada tantangan yang perlu diatasi.</p><br/>
                <p>Sebelumnya, salah satu mata pelajaran yang turut mendukung visi SPW adalah Projek Kreatif dan Kewirausahaan (PKK). Dalam PKK, siswa diharapkan untuk menciptakan produk-produk secara berkelompok sebagai bagian dari kurikulum. Namun, permasalahan muncul ketika siswa harus merencanakan stand, promosi, dan strategi pemasaran produk mereka.</p><br/>
                <p>Untuk mengatasi permasalahan tersebut, dikembangkanlah aplikasi eSPW. Aplikasi ini dirancang untuk memudahkan para siswa dalam memasarkan produk mereka dan memungkinkan guru untuk memantau aktivitas siswa secara real-time melalui website eSPW.</p><br/>
            </div>
        </div>
        <div style={{
            width: '100%',
            textAlign: 'center',
            marginTop: '10rem',
            marginBottom: '10rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                marginBottom: '2rem',
            }}>
                <h1 style={{
                    fontFamily: 'Poppins Bold',
                    fontSize: '2rem',
                }}>Fitur Utama <span style={{color: '#fd8d18', fontFamily: 'Poppins Bold'}}>eSPW</span></h1>
            </div>
            <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '20rem',
                    height: '20rem',
                    backgroundColor: '#fd8d18',
                    borderRadius: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                }}>
                    <div style={{
                        width: '3rem',
                        height: '3rem',
                        backgroundColor: '#fff',
                        alignSelf: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                    }}><Storefront color='#fd8d18' size={28} weight='bold'/></div>
                    <h2 style={{color: '#fff', marginTop: '1rem'}}>Live Mode</h2><br/>
                    <p style={{color: '#fff'}}>eSPW ini menyediakan fitur khusus untuk penjual, yang digunakan untuk laporan penjualan jikalau ada pelanggan yang datang ke tempat.</p>
                </div>
                <div style={{
                    width: '20rem',
                    height: '20rem',
                    backgroundColor: '#fd8d18',
                    borderRadius: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                }}>
                    <div style={{
                        width: '3rem',
                        height: '3rem',
                        backgroundColor: '#fff',
                        alignSelf: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                    }}><NotePencil color='#fd8d18' size={28} weight='bold'/></div>
                    <h2 style={{color: '#fff', marginTop: '1rem'}}>Laporan Penjualan</h2><br/>
                    <p style={{color: '#fff'}}>Fitur laporan penjualan ini diperuntukan untuk mempermudah siswa/i yang sedang dalam tugas wirausaha dan dalam pantauan guru pengajarnya.</p>
                </div>
                <div style={{
                    width: '20rem',
                    height: '20rem',
                    backgroundColor: '#fd8d18',
                    borderRadius: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                }}>
                    <div style={{
                        width: '3rem',
                        height: '3rem',
                        backgroundColor: '#fff',
                        alignSelf: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                    }}><Star color='#fd8d18' size={28} weight='bold'/></div>
                    <h2 style={{color: '#fff', marginTop: '1rem'}}>Penilaian Produk</h2><br/>
                    <p style={{color: '#fff'}}>Fitur ini disediakan agar setiap toko dapat meningkatkan kualitas dalam penjualannya.</p>
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            textAlign: 'center',
            marginTop: '10rem',
            marginBottom: '10rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                marginBottom: '2rem',
            }}>
                <h1 style={{
                    fontFamily: 'Poppins Bold',
                    fontSize: '2rem',
                }}>Frequently Asked Question</h1>
                <p>Kami mengumpulkan pertanyaan-pertanyaan yang sering diajukan oleh pelanggan untuk mempermudah Anda</p>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
            }}>
                <FAQ faq='Apa itu eSPW?'/>
                <FAQ faq='Jangkauan eSPW sampai mana?'/>
                <FAQ faq='Bagaimana prosedur menjadi pengguna eSPW?'/>
                <FAQ faq='Bagaimana cara pembayaran di eSPW?'/>
                <FAQ faq='Apakah di eSPW bisa Live Streaming?'/>
            </div>
        </div>
    </>
}

function FAQ(props: {faq: string}){
    return <div style={{
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '5px 5px 10px #b5b5b5',
        padding: '1rem',
        borderRadius: '1rem',
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
        }}>
            <Question weight='fill' color='#fd8d18'/>
            <span style={{fontWeight: 'bold'}}>{props.faq}</span>
        </div>
        <CaretRight color='#fd8d18' weight='bold'/>
    </div>
}