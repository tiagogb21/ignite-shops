import Image from "next/image";
import { HeaderContainer } from "../styles/components/header";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import { Aside } from "./Aside";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { cartCount, cartDetails, totalPrice } = useShoppingCart();
    return (
        <>
            <HeaderContainer>
                <Image
                    src="/Logo.svg"
                    alt="dois triângulos verdes sobreposicionados representando a logo do ignite shop"
                    width={130}
                    height={52}
                />
                <div>
                    <button onClick={() => setIsOpen(true)}>
                        <Image
                            src="/bag.svg"
                            alt="sacola de compra"
                            width={32}
                            height={32}
                        />
                    </button>
                    <div>
                        <span>{cartCount ?? 0}</span>
                    </div>
                </div>
            </HeaderContainer>
            <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};
