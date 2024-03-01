/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom"
import AnimatedPage from "./../AnimatedPage/AnimatedPage"
import './SecondSection.css';

export default function SecondSection() {
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

    };

    return (
        <AnimatedPage>
        <div className='secondsection fade-active fade-enter-active'>
            <div className="secondsection-headline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                <h1>Insert X Post address</h1>
            </div>

            <p>To receive the airdrop, post on X why you are bullish on $AILU and submit the link to your post in the "Insert Link" section</p>

            <form onSubmit={handleSubmit}>
                <input
                    className='X-link-input'
                    placeholder="Insert here"
                    value={inputLink}
                    onChange={handleInputChange}
                />

                {(isInputEmpty && formSubmitted) && (
                        <span className='error'>Must not be empty !</span>
                    )}

                <div className='button-back-div'>
                    <Link to="/" className="links"><button className='secondsection-back-button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> BACK</button></Link>
                </div>
            
                <div className='button-next-div'>
                    <button 
                    className='secondsection-next-button' 
                    type="submit"
                    onClick={ () => { 
                        if(inputLink) navigate('/thirdsection')
                    }}>NEXT <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                </div>
            </form>
        </div>
    </AnimatedPage>
    );
}