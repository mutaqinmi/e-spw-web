'use client'
import { Eye, EyeSlash } from '@phosphor-icons/react';
import './../global.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Login(){
    const [type, setType] = useState('password');
    return <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image src={'/images/login-image-web.png'} alt='Login' width={450} height={450}></Image>
        </div>
        <div style={{
            width: '50%',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                width: '65%',
                padding: '2rem',
                boxShadow: '0px 0px 10px grey',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image src={'/icons/espw-colored.png'} alt='eSPW' width={42} height={42}></Image>
                <h2 style={{
                    marginTop: '1rem',
                    fontFamily: 'Poppins Bold',
                    color: '#fd8d18'
                }}>Login</h2>
                <p style={{
                    fontSize: '12px'
                }}>Masuk ke akun anda.</p>
                <form method='post' style={{
                    width: '100%',
                    marginTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label htmlFor="nip" style={{marginBottom: '2px'}}>NIP/NUPTK <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="nip" id="nip" placeholder='NIP/NUPTK' required style={{
                        padding: '.5rem',
                        borderRadius: '10px',
                        border: '1px solid #000',
                        outline: 'none',
                        marginBottom: '1rem'
                    }}/>
                    <label htmlFor="password">Password <span style={{color: 'red'}}>*</span></label>
                    <div style={{
                        position: 'relative',
                    }}>
                        <input type={type} name="password" id="password" required placeholder='Password' style={{
                            padding: '.5rem',
                            borderRadius: '10px',
                            border: '1px solid #000',
                            outline: 'none',
                            width: '100%'
                        }}/>
                        {type === 'password' ? <EyeSlash size={18} style={{
                            position: 'absolute',
                            top: '50%',
                            right: '.5rem',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer'
                        }} onClick={() => setType('text')}/> : <Eye size={18} style={{
                            position: 'absolute',
                            top: '50%',
                            right: '.5rem',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer'
                        }} onClick={() => setType('password')}/>}
                    </div>
                    <button type="submit" style={{
                        marginTop: '3rem',
                        padding: '.75rem',
                        backgroundColor: '#fd8d18',
                        border: 'none',
                        outline: 'none',
                        borderRadius: '10px',
                        color: 'white',
                        fontFamily: 'Poppins SemiBold',
                        letterSpacing: '1px'
                    }}>Login</button>
                </form>
            </div>
        </div>
    </div>
}