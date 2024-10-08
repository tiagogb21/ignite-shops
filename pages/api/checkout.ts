import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../lib/stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { priceId } = req.body;

        try {
            const successUrl = `${req.headers.origin}/success`;
            const cancelUrl = `${req.headers.origin}/cancel`;

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [{
                    price: priceId,
                    quantity: 1,
                }],
                mode: 'subscription',
                success_url: successUrl,
                cancel_url: cancelUrl,
            });

            return res.status(200).json({ checkoutUrl: session.url });
        } catch (error) {
            const errorMessage = (error instanceof Error) ? error.message : "Erro desconhecido";
            console.error(errorMessage);
            return res.status(500).json({ error: errorMessage });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
