import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import PopularTours from '../components/PopularTours';
import States from '../components/States';
import CallToAction from '../components/CallToAction';
import ContactUs from '../components/ContactUs';

 function Home() {
  return (
       <>      
        <Hero />
        <Benefits />
        <PopularTours />
        <States />
        <CallToAction />
        <ContactUs />
      </>
  );
}

export default Home;
