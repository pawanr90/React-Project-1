import React from 'react'
import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={AlexaImage} 
                                content="Alexa was created by Amazon and helps you with any basic questions"
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                image={CortanaImage} 
                                content="Cortana was made by Microsoft, but is not as popular as the other digital assistants"
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                image={SiriImage}
                                content="Siri was made by Apple and is a great chatting assistant"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App