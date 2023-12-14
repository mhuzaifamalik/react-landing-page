import React from 'react'
import video from '../images/hero-video.mp4';
import { Typewriter, Cursor } from 'react-simple-typewriter'


const handleType = (count: number) => {
    // access word count number
    console.log(count)
}
  

const handleDone = () => {
    console.log(`Done after 5 loops!`)
}

function Banner() {
    // const {text} = useTypewriter({
    //     words:[' Website','web apps',' Digital Experiences', 'Mobile Apps'],
    //     loop:{},
    //     typeSpeed:120,
    // });

    return (
        <div>
            <section className="banner-home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12">
                            <div className="content">
                                <h2>A cutting-edge digital agency specializing in custom website design and development {' '}  <span style={{fontWeight:'bold',color: '#fff',}}>
                                <Typewriter
                                        words={[' Website','web apps',' Digital Experiences', 'Mobile Apps']}
                                        loop={5}
                                        cursor
                                        cursorStyle=''
                                        typeSpeed={100}
                                        deleteSpeed={40}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    />
                                </span>
                                    <Cursor />
                                {/* <span style={{ color: '#fff', fontWeight: 500 }}>                                    
                                </span> */}
                                </h2>
                                <p>Customized Solutions for website design and development, emphasizing results.</p>
                                <div className="main-banner-btn">
                                    <a data-bs-toggle="modal" href="#exampleModalToggle" role="button" class="btn1">
                                        get a Proposal
                                    </a>
                                    {/* <a href="#">
                                        Contact us
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12">
                            <div className="main-banner-video">
                                <video width="750" height="500" loop="ture" autoPlay muted>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>                </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
