import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Results from '../components/sections/Results';
import CallToAction from '../components/sections/CallToAction';

const Home = () => (
  <>
    <Hero className="illustration-section-01" />
    <FeaturesTiles />
    <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
    <Results topDivider />
    <Testimonial topDivider />
    <CallToAction topDivider />
  </>
);

export default Home;
