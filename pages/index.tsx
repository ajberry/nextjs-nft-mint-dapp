import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NFT_NAME}</title>
      </Head>

      <Image src={topImage} alt={process.env.NEXT_PUBLIC_NFT_NAME} />

      <div className="bg-gray-800 py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2">
            {process.env.NEXT_PUBLIC_NFT_NAME}
          </h1>
          <p className="text-xl">
                      Welcome to Faces. This is my first foray into the world of NFTs, and this is step one of learning about the potential uses of smart contracts.
                      Faces complies with the ERC721 standard, so they are all as unique as we are. Mint one of my many faces.
                       
          </p>
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
