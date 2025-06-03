import React from 'react';
import { images } from '../../../public/images/image';
import Button from '../Button';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const Service = () => {
  const cardsData = [
    { head: "Design", detail: { item1: "Integrated Custom Web Design", item2: "Customized Logo Design", item3: "Scalable E-commerce Solutions", item4: "Seamless UI/UX" }},
    { head: "Development", detail: { item1: "Component wise", item2: "Responsive web", item3: "Modular Backend", item4: "API Integrations" }},
    { head: " Website SEO", detail: { item1: "On-Page Optimization", item2: "Keyword Research", item3: "Performance Tracking", item4: "Technical SEO" }},
    { head: "Hosting", detail: { item1: "Secure Servers", item2: "24x7 Support", item3: "Scalability", item4: "CDN Integration" }},
    { head: "Marketing", detail: { item1: "Social Media Marketing", item2: "Email Campaigns", item3: "Conversion Tracking", item4: "Ad Analytics" }},
    { head: "Maintenance", detail: { item1: "Bug Fixing", item2: "Feature Enhancements", item3: "Security Patches", item4: "Monitoring" }},
    { head: "Branding", detail: { item1: "Brand Strategy", item2: "Visual Identity", item3: "Storytelling", item4: "Digital Presence" }},
    { head: "UI/UX", detail: { item1: "Wireframing", item2: "User Testing", item3: "Interactive Prototypes", item4: "User Journey Mapping" }}
  ];

  return (
    <div
      id="service-section"
      style={{ backgroundImage: `url(${images.servicebg})` }}
      className='w-full max-w-[1440px] h-[796px] mx-auto flex justify-between px-30 items-center bg-cover overflow-hidden relative'
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className='text-left w-1/2 flex flex-col gap-6 relative z-10'>
        <h1 className='text-3xl font-bold text-[#E26D5A]'>Services</h1>
        <p className='text-3xl text-white'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div className='address text-black bg-[#172933] flex leading-8 px-9 gap-2 items-center w-[515px] h-[240px] rounded-[29.93px] hover:scale-110 transition-transform duration-300 ease-in'>
          <div className='data text-white'>
            <h2 className='text-2xl'>Fuel Your Digital-First Idea</h2>
            <br />
            <p className='text-sm'>
              With 1600+ page when looking at its layout. The point of using 
            </p>
            <br />
            <Button />
          </div>
        </div>
      </div>

      {/* Motion Cards Section */}
      <div className='w-[400px] h-[645px] overflow-hidden relative z-10'>
        <div className="flex flex-col gap-4">
          {cardsData.map((card, index) => (
            <motion.div
              key={`${card.head}-${index}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <ServiceCard 
                head={card.head} 
                detail={card.detail}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
