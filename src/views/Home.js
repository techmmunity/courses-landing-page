import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Results from '../components/sections/Results';

const Home = () => (
  <>
    <Hero className="illustration-section-01" />
    <FeaturesTiles />
    <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
    <Results topDivider />
    <Testimonial topDivider />
  </>
);

export default Home;
