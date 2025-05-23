import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 'cart',
    title: 'Cart',
    icon: '🛒',
  },
  {
    id: 'checkout',
    title: 'Checkout',
    icon: '📝',
  },
  {
    id: 'confirmation',
    title: 'Confirmation',
    icon: '✅',
  },
];

export default function OrderProgress({ currentStep }) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isActive = steps.findIndex(s => s.id === currentStep) >= index;
          const isCompleted = steps.findIndex(s => s.id === currentStep) > index;

          return (
            <React.Fragment key={step.id}>
              {index > 0 && (
                <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200">
                  {isActive && (
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              )}
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'
                  }`}
                  initial={{ scale: 1 }}
                  animate={{ scale: isCompleted ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                </motion.div>
                <span className={`mt-2 text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}