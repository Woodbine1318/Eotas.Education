import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Pattern from '../components/Pattern';
import Callout from '../components/Callout';
import HowItWorks from '../components/HomePage/how-it-works';
import Expertise from '../components/HomePage/expertise';
import Support from '../components/HomePage/support';

const IndexPage = ({ location: { pathname } }) => (
  <Layout>
    <SEO title="Education Other Than At School" canonicalPath={pathname} />

    <section className="grid grid-cols-1 pt-36 px-constrained overflow-visible pb-28 md:pt-20 md:grid-cols-2 md:gap-x-24 md:px-constrained-md md:mb-0 md:pb-20 lg:pt-36 lg:gap-x-32 lg:px-constrained-lg">
      <h1 className="relative text-xl mb-4 md:mb-20 md:col-span-2 md:text-2xl lg:mb-11 xl:col-span-1 lg:text-3xl">
        Our EOTAS. Education Centres provide educational provision for schools, commissioners and pupils in the towns we
        serve.
        <Pattern className="absolute top-0 left-0 -mt-36 -ml-36 opacity-20" />
      </h1>

      <div className="col-start-1 mb-14">
        <p className="max-w-prose mb-4 md:text-lg md:mb-6">
          Providing flexible live interactive teaching. Bringing quality education to vulnerable learners.
        </p>

        <p className="max-w-prose md:text-lg">
          Here at the EOTAS our centres serve learners who cannot or will not attend mainstream education due to a range
          of conditions. Including medical and other health issues.
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-0 justify-center items-center w-max mx-auto xl:row-start-1 xl:row-end-3 xl:col-start-2">
        <Pattern className="order-2 lg:order-3 lg:col-start-2 lg:-mt-48 lg:w-96 lg:h-96" />

        <StaticImage
          src="../images/home-page/eotas-education-teaching.jpg"
          alt=""
          quality={100}
          className="order-1 border-8 border-white rounded-3xl -mr-28 -mb-56 max-w-md md:max-w-lg lg:max-w-2xl"
        />

        <StaticImage
          src="../images/home-page/eotas-education-online-provision.jpeg"
          alt=""
          quality={100}
          className="order-3 border-8 border-white rounded-3xl col-start-2 -ml-28 max-w-xs md:max-w-md lg:order-2 lg:max-w-xl"
        />
      </div>
    </section>

    <Callout>
      <p>Our EOATAS centres provides the educational support for pupils and students who need it most.</p>
    </Callout>

    <HowItWorks />

    <Expertise />

    <Support />
  </Layout>
);

export default IndexPage;
