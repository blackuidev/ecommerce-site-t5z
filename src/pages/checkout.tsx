import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Check, CreditCard, Truck } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmissionSuccess(true);

    toast.success('Order placed successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const confirmationVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto py-12 px-4 md:px-6"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Information Form */}        
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardHeader className="text-lg font-semibold">
            Shipping Information
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" placeholder="John Doe" required className="w-full" />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input type="text" id="address" placeholder="123 Main St" required className="w-full" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input type="text" id="city" placeholder="Anytown" required className="w-full" />
              </div>
              <div>
                <Label htmlFor="zip">Zip Code</Label>
                <Input type="text" id="zip" placeholder="12345" required className="w-full" />
              </div>
          
          </CardContent>
        </Card>
        {/* Payment Information Form */}
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardHeader className="text-lg font-semibold">
            Payment Information
          </CardHeader>
          <CardContent>
          <div>
                <Label htmlFor="card">Card Number</Label>
                <Input type="text" id="card" placeholder="1234-5678-9012-3456" required className="w-full" />
              </div>
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input type="text" id="expiry" placeholder="MM/YY" required className="w-full" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input type="text" id="cvv" placeholder="123" required className="w-full" />
              </div>
           </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardHeader className="text-lg font-semibold">
            Order Summary
          </CardHeader>
          <CardContent>
            <p>Subtotal: $79.98</p>
            <p>Shipping: $5.00</p>
            <p className="font-semibold">Total: $84.98</p>
          </CardContent>
          <CardFooter>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-br from-primary to-secondary text-white hover:scale-105 transition-all duration-300">
              {isSubmitting ? 'Placing Order...' : 'Confirm Order'}
            </Button>
          </CardFooter>
          </form>
        </Card>
      </div>

      {submissionSuccess && (
        <motion.div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-6 rounded-md shadow-lg flex items-center space-x-2"
          initial="hidden"
          animate="visible"
          variants={confirmationVariants}
        >
          <Check className="h-6 w-6" />
          <span>Order placed successfully!</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CheckoutPage;
