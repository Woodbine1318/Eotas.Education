import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Pattern from '../Pattern';

const HowItWorks = () => {
  return (
    <section
      className="grid grid-cols-1 py-16 px-constrained md:px-constrained-md md:grid-cols-2 md:items-start md:py-36 lg:px-constrained-lg"
      id="how-it-works"
    >
      <h2 className="text-lg text-center mb-7 md:col-start-2 md:text-left md:mb-10 lg:text-xl lg:mb-16">
        How Education Other than at School Works:
      </h2>

      <div className="order-1 relative flex justify-center items-center mb-24 md:-ml-56">
        <Pattern className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-0" />

        <StaticImage
          src="../../images/home-page/alternative-provision-online-compueter.jpg"
          alt=""
          className="relative max-w-md border-8 border-white rounded-3xl transform -rotate-6 md:max-w-xl md:-mt-16 md:-ml-56"
        />
      </div>

      <div className="order-2 md:col-start-2 lg:text-md">
        <p className="mb-8">
          Flexibility and quality of educational provision are key to schools and local authorities when they consider
          providers in the towns we serve. We are regularly adding our Education Other Than School Centres with our
          partners BYT.
        </p>

        <p className="mb-8">
          EOTAS.Education provides the quality and the focus needed for schools, local authorities and stake holders.
          Regularly delivering EHC Plans through alternative provision across the need range.
        </p>

        <p className="mb-8">Reaching and reporting learning goals and attainment throughout the pupil enrolment.</p>

        <p className="mb-8">The Flexibility of EOTAS brings value for money for all state holders.</p>
      </div>
    </section>
  );
};

export default HowItWorks;
