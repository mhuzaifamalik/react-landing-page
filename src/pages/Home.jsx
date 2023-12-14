import React from 'react'

// dependencies


// components

import Banner from '../components/Banner';
import Trustedbanner from '../components/Trustedbanner';
import Paperbanner from '../components/Paperbanner';
import Stepup from '../components/Stepup';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Foure from '../components/Foure';
import Form from './Form';

import Testimonails from '../components/Testimonails';

// images




const Home = () => {

    return (
        <>
            <main>
             
                <Banner />
                <Trustedbanner />
                <Stepup />
                <Paperbanner />
                <Services />
                <Process />
                <Portfolio />
                <Pricing />
                <Foure />
                <Testimonails />
                <Form />
               

            </main>
        </>
    )
}

export default Home











