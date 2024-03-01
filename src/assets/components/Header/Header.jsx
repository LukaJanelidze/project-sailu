import { Link } from "react-router-dom"
import Logo from "./../../../assets/logo.png"
import './Header.css'

export default function FirstSection() {
    return (
        <div className='header'>
            <Link to="/" className="logo"><img src={Logo} alt="" /><span>$AILU</span></Link>
            <div className="xdt">
            <Link to="/" className="X">X</Link>
            <Link to="/" className="discord">Discord</Link>
            <Link to="/" className="telegram">Telegram</Link>
            </div>
        </div>
    )

}