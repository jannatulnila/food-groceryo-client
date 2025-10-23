// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaPhoneAlt, FaFacebookMessenger } from 'react-icons/fa';

// const Support = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <motion.h2 
//         className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-[#FFC107] text-primary"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Support Center
//       </motion.h2>

//       <motion.div 
//         className="bg-base-100 shadow rounded-xl p-6 space-y-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="flex items-start gap-4">
//           <FaEnvelope className="text-2xl text-blue-500 mt-1" />
//           <div>
//             <p className="font-semibold">Email Support</p>
//             <p>support@foodgroceryo.com</p>
//           </div>
//         </div>

//         <div className="flex items-start gap-4">
//           <FaPhoneAlt className="text-2xl text-green-500 mt-1" />
//           <div>
//             <p className="font-semibold">Phone</p>
//             <p>+8801323456532</p>
//           </div>
//         </div>

//         <div className="flex items-start gap-4">
//           <FaFacebookMessenger className="text-2xl text-indigo-500 mt-1" />
//           <div>
//             <p className="font-semibold">Messenger</p>
//             <p>facebook.com/foodgroceryo</p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Support;


import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaFacebookMessenger } from 'react-icons/fa';

const Support = () => {
  const supportOptions = [
    {
      icon: FaEnvelope,
      title: 'Email Support',
      contact: 'support@foodgroceryo.com',
      color: 'text-blue-500',
      description: 'Get in touch via email for detailed support'
    },
    {
      icon: FaPhoneAlt,
      title: 'Phone Support',
      contact: '+8801323456532',
      color: 'text-green-500',
      description: 'Call us directly for immediate assistance'
    },
    {
      icon: FaFacebookMessenger,
      title: 'Messenger',
      contact: 'facebook.com/foodgroceryo',
      color: 'text-indigo-500',
      description: 'Chat with us on Facebook Messenger'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header with Gradient Text */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          <span className="bg-primary bg-clip-text text-transparent">
            Support Center
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-md">
          We're here to help you with any questions or concerns
        </p>
      </motion.div>

      {/* Support Options Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportOptions.map((option, index) => {
          const IconComponent = option.icon;
          
          return (
            <motion.div
              key={index}
              className="bg-base-100 dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className={`${option.color} text-4xl p-3 bg-gray-50 dark:bg-gray-700 rounded-full`}>
                  <IconComponent />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {option.title}
                </h3>
                
                {/* Contact Info */}
                <p className="text-lg font-semibold bg-primary bg-clip-text text-transparent">
                  {option.contact}
                </p>
                
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {option.description}
                </p>
              
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Support Information */}
      <motion.div
        className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4">
          <span className="bg-primary bg-clip-text text-transparent">
            Need Immediate Help?
          </span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Our support team is available 24/7 to assist you with any issues or questions you may have.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full">
            ✓ 24/7 Support Available
          </span>
          <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full">
            ✓ Quick Response Time
          </span>
          <span className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full">
            ✓ Expert Assistance
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Support;