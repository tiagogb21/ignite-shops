import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";
import { CartProvider } from "use-shopping-cart";
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider
            mode="subscription"
            cartMode="client-only"
            stripe={process.env.STRIPE_SECRET_KEY!}
            currency="BRL"
            shouldPersist
            successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
            cancelUrl={`${process.env.NEXT_URL!}`}
        >
          <Header />
          <Aside />
          <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
