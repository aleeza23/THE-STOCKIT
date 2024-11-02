import React from 'react';
import img01 from '@/public/hostarmada.png';
import img02 from '@/public/Untitled-design-3-1024x1024.webp';
import img03 from '@/public/liquid.png';
import img04 from '@/public/chemi.png';
import img05 from '@/public/shopifyy.webp';
import img06 from '@/public/Scala-Hosting-1024x1024.webp';
import img07 from '@/public/fastcome.webp';
import img08 from '@/public/interserver2000.webp';

import Image from 'next/image';
import Card from '@/constant/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Hosting = () => {
  const data = [
    { img: img06, link: 'https://www.scalahosting.com/#661e37f21eb85' },
    { img: img04, link: 'https://chemicloud.com/#660526c05255d' },
    { img: img03, link: 'https://liquidweb.i3f2.net/WqDnA3' },
    { img: img02, link: 'https://partners.inmotionhosting.com/nL1GPx' },
    { img: img01, link: 'https://affiliates.hostarmada.com/scripts/q1yoac4x8oq?a_aid=moha' },
    { img: img05, link: 'https://shopify.pxf.io/ZQdaoK' },
    { img: img07, link: 'https://affiliate.fastcomet.com/scripts/2wc9ym?a_aid=659e4ffcaedda' },
    { img: img08, link: 'https://www.interserver.net/r/899620' },
  ];

  return (
    <div>
      <div className="pt-10">
        <Header />
      </div>
      <div className="relative px-6 mt-10 mb-10 md:mt-20 mx-auto max-w-5xl text-center">
        <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
          Explore Our Web Hosting Solutions
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
          At The Stockit, we offer reliable and high-performance web hosting services to ensure your websites run smoothly and efficiently. Discover our range of hosting plans designed to meet your specific needs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4 mb-10">
        {data.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <Card key={index} link={item.link}>
              <Image
                src={item.img}
                alt="Web Hosting"
                fill
                className="w-full h-full object-cover"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Hosting;
