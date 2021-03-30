//clé secrete
const stripe = require('stripe')('sk_test_51IYB0mJijRGvnX6M7kVfe2gFejtLKRAiUzSpy9tRg0TJZIidIZAfR14r0IbI7RGCPmeQqJjF2wK0s9GUCt9WiLJa00AxDvYYIW')

exports.checkout = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Order',
          },
          unit_amount: req.body.amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.VUE}/success`,
    cancel_url: `${process.env.VUE}/cancel`,
  });

  res.json({ id: session.id });
};