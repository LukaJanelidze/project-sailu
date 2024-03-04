import { Link } from "react-router-dom"
import Logo from "./../../../assets/logo.png"
import './Header.css'

export default function FirstSection() {
    return (
        <div className='header'>
            <Link to="/" className="logo"><img src={Logo} alt="" /><span>$AILU</span></Link>
            <div className="xdt">
            <Link to="https://twitter.com/ailurus_sol" className="X">X</Link>
            <Link to="https://discord.gg/G6ZnSUPRJW" className="discord">Discord</Link>
            <Link to="https://t.me/ailurus_sol" className="telegram">Telegram</Link>
            </div>
        </div>
    )

}