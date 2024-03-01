/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom"
import AnimatedPage from "./../AnimatedPage/AnimatedPage"
import './ThirdSection.css'

export default function ThirdSection() {

    const [inputLink, setInputLink] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setInputLink(e.target.value);
        if (isInputEmpty && e.target.value.trim() !== '') {
            setIsInputEmpty(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (inputLink.trim() === '') {
            setIsInputEmpty(true);
            return;
        }
        navigate('/fourthsection')

    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <AnimatedPage>
            <div className='thirdsection'>
            <div className="thirdsection-headline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            <h1>Insert Wallet adress</h1>
            </div>

            <p>Enter your wallet address to become eligible for $AILU airdrop</p>

                <input
                    className='wallet-input'
                    placeholder="Insert here"
                    value={inputLink}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />

            {(isInputEmpty && formSubmitted) && (
                    <span className='error'>Must not be empty !</span>
                )}

            <div className='button-back-div'>
            <Link to="/secondsection" className="links"><button className='thirdsection-back-button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> BACK</button></Link>
            </div>
            
            <div className='button-next-div'>
            <button className='thirdsection-next-button'
                    onClick={handleSubmit}
            >NEXT <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
            </div>

        </div>
        </AnimatedPage>
    )
}