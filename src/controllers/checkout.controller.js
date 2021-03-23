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
            name: 'T-shirt',
          },
          unit_amount: req.body.amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
};