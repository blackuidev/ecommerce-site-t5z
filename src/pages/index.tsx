import React from 'react';
import { motion } from 'framer-motion';
import { ShoeIcon, StarIcon, MessageSquareIcon } from 'lucide-react';

const HomePage = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeInOut' },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white font-sans">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(50rem_50rem_at_top,transparent_20%,black)]">
        <div className="absolute inset-0 bg-noise-300 opacity-20" style={{ backgroundSize: '250px, 250px' }}></div>
      </div>

      <header className="p-6 md:p-8 lg:p-12">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
        >
          Step into Style
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center text-muted-foreground"
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
        >
          Discover the perfect pair for every occasion.
        </motion.p>
      </header>

      <section className="py-12 md:py-16 lg:py-20">
        <motion.div
          className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
        >
          {/* Featured Shoe Categories */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
            <ShoeIcon className="text-primary w-6 h-6 mb-2" />
            <h2 className="text-xl font-semibold text-white">Sneakers</h2>
            <p className="text-muted-foreground">Explore our wide range of stylish sneakers.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
            <ShoeIcon className="text-primary w-6 h-6 mb-2" />
            <h2 className="text-xl font-semibold text-white">Boots</h2>
            <p className="text-muted-foreground">Find the perfect boots for any weather.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
            <ShoeIcon className="text-primary w-6 h-6 mb-2" />
            <h2 className="text-xl font-semibold text-white">Sandals</h2>
            <p className="text-muted-foreground">Stay cool and comfortable with our selection of sandals.</p>
          </div>
        </motion.div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInAnimation.transition, delay: 0.6 }}
          >
            Customer Testimonials
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInAnimation.transition, delay: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <StarIcon className="text-yellow-500 w-5 h-5 mr-2" />
                <StarIcon className="text-yellow-500 w-5 h-5 mr-2" />
                <StarIcon className="text-yellow-500 w-5 h-5 mr-2" />
                <StarIcon className="text-yellow-500 w-5 h-5 mr-2" />
                <StarIcon className="text-yellow-500 w-5 h-5 mr-2" />
              </div>
              <p className="text-muted-foreground mb-4">"Great selection of shoes and excellent customer service. I found exactly what I was looking for!"</p>
              <p className="text-sm font-medium">- John Doe</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <StarIcon className="text-yellow-500 w-5 h-5 mr-2" />
                <StarIcon className="text-yellow-500 w-5 h-5 mr-2" />
                <StarIcon className="text-yellow-500 w-5 h-5 mr-2" />
                <StarIcon className="text-yellow-500 w-5 h-5 mr-2" />
                <StarIcon className="text-gray-500 w-5 h-5 mr-2" />
              </div>
              <p className="text-muted-foreground mb-4">"Fast shipping and high-quality shoes. I will definitely be buying from here again."</p>
              <p className="text-sm font-medium">- Jane Smith</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInAnimation.transition, delay: 1.0 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInAnimation.transition, delay: 1.2 }}
          >
            Have questions? Reach out to our team today.
          </motion.p>
          <motion.button
            className="bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-white/90 transition-all duration-300"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInAnimation.transition, delay: 1.4 }}
          >
            <MessageSquareIcon className="inline-block w-5 h-5 mr-2 align-middle"/>
            Contact Us
          </motion.button>
        </div>
      </section>

      <footer className="bg-gray-900 text-center py-6">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Shoe Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
