import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'Running Shoe',
    price: 89.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1542296635-0645d259b620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    name: 'Basketball Shoe',
    price: 129.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b586aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const CartPage: React.FC = () => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-md border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            Shopping Cart
          </CardTitle>
          <CardDescription>Review and manage your cart items.</CardDescription>
        </CardHeader>
        <CardContent>
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center justify-between py-2 border-b border-white/10 last:border-none"
                >
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-white/20 rounded-md">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        -
                      </Button>
                      <span className="px-2">{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        +
                      </Button>
                    </div>
                    <Button variant="destructive" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</div>
          <Button className="bg-primary hover:bg-primary/80 text-primary-foreground">
            Checkout
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CartPage;
