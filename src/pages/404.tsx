import Image from "next/image";

export default function Custom404() {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }}>
        <p>
            If you only knew the power
        </p>
        <p>
            Of the server side.
        </p>
        <p>
            Google never told you
        </p>
        <p>
            What happened to your link.
        </p>

        <p>Client: It told me enough. It told me you removed it.</p>

        <h1>I{"'"}m your 404 page...</h1>
        <img
            style={{
                margin: 'auto',
                width: '100%',
            }}
            placeholder="blur"
            src="/404.gif" alt="404 Page - Baris Ceviz"/>

        <a href='https://www.youtube.com/watch?v=_lOT2p_FCvA' target='_blank' rel='noreferrer'>
            <p>Search your feelings, you know it to be true.</p>
        </a>
    </div>
}
