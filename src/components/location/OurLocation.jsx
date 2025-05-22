import React from 'react';
import { motion } from 'framer-motion';

const OurLocation = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-yellow-500">Location</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Visit us at our office location
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full rounded-xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.8876671246387!2d43.47543099999999!3d34.932027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1553dd5b38411375%3A0x30ea9927fbf9535b!2z2LTYsdmD2Kkg2YfZhtiv2LPYqSDYp9mE2K_ZgtipINmE2YTZhdmC2KfZiNmE2KfYqiDYp9mE2LnYp9mF2Kkg2YjYp9mE2KrYrNmH2YrYsiDZiNiq2KPYrNmK2LEg2KfZhNin2YTZitin2Kog2Ygg2KfZhNin2YrYp9iv2Yog2KfZhNi52KfZhdmE2Kkg2KfZhNi52LHYp9mC2YrYqQ!5e0!3m2!1sen!2siq!4v1701101548811!5m2!1sen!2siq"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
            <p className="text-gray-600">صلاح الدين - قضاء بيجي - الحي العسكري -قرب دائرة توزيع كهرباء بيجي</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Working Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact</h3>
            <p className="text-gray-600">Website: al-dikkaengineering.com</p>
            <p className="text-gray-600">Phone: 07706141190</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;