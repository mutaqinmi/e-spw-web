export default function Profile(props: {nama: string}){
    return <div style={{
        width: '100%',
        backgroundColor: '#fd8d18',
        padding: '.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    }}>
        <span style={{
            fontSize: '14px',
            textAlign: 'center',
        }}>Selamat datang, <span style={{
            fontFamily: 'Poppins Bold',
        }}>{props.nama}</span></span>
    </div>
}