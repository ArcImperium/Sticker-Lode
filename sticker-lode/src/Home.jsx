import './Home.css'
import {useEffect} from 'react'

function Home() {
    useEffect(() => {
        document.title="Home"
    }, [])

    return(
        <>
            <h1 style={{textShadow: '2px 2px darkblue'}}>Projects 4 Stickers</h1>
            <div className="projectcard" >
                <a href="/calculator">Calculator</a>
            </div>
            <div className="projectcard" >
                <a href="/new">New Project?</a>
            </div>
        </>
    )
}

export default Home