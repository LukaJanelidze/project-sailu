/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import AnimatedPage from "./../AnimatedPage/AnimatedPage"
import './FirstSection.css'

export default function FirstSection() {
    return (
        <AnimatedPage>
            <div className='firstsection'>
            <h1>How to claim the <span>$AILU</span> Airdrop?</h1>

            <div className="firstsection-wrap">
                <div className="firstsection-wrap-steps-first">
                    <h3 className='first-step'>Step 1</h3>
                    <p>To receive the airdrop, post on X why you are bullish on $AILU and submit the link to your post in the "Insert Link" section.</p>
                    <div className="icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    </div>
                </div>

            <hr />

            <div className="firstsection-wrap-steps-second">
                <h3 className='second-step'>Step 2</h3>
                <p>Enter your wallet address to become eligible for $AILU airdrop</p>
                <div className="icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z"/></svg>
                </div>
            </div>

            </div>

            <div className='button-div'>
            <Link to="secondsection" className="links"><button className='firstsection-button'>Become eligible <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button></Link>
            </div>
        </div>
        </AnimatedPage>
        

    )
}