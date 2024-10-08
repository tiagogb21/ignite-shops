import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import {
    AsideContainer,
    BottomContainer,
    CardContainer,
    CardsContainer,
    Close,
    TopContainer,
} from "../styles/components/aside";

interface AsideProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const Aside = ({ isOpen, setIsOpen }: AsideProps) => {
    const { cartDetails, removeItem, formattedTotalPrice } = useShoppingCart();

    const arrayCartDetails = Object.values(cartDetails!);

    if (!isOpen) {
        return <></>;
    }

    return (
        <AsideContainer>
            <TopContainer>
                <Close>
                    <button type="button" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/close.svg"
                            alt="fechar"
                            width={24}
                            height={24}
                        />
                    </button>
                </Close>
                <h2>Sacola de compras</h2>
                <CardsContainer>
                    {arrayCartDetails.map(
                        ({ id, name, imageUrl, formattedPrice }) => (
                            <CardContainer key={id}>
                                <div className="aside-card-img-container">
                                    <Image
                                        src={imageUrl}
                                        width={102}
                                        height={93}
                                        alt={name}
                                    />
                                </div>
                                <div>
                                    <p>{name}</p>
                                    <p>{formattedPrice}</p>
                                    <button
                                        type="button"
                                        onClick={() => removeItem(id)}
                                    >
                                        Remover
                                    </button>
                                </div>
                            </CardContainer>
                        )
                    )}
                </CardsContainer>
            </TopContainer>
            <BottomContainer>
                <div>
                    <p>
                        Quantidade: <span>{arrayCartDetails?.length}</span>
                    </p>
                    <p className="total">
                        Valor Total: <span>{formattedTotalPrice}</span>
                    </p>
                </div>
                <button type="button">Finalizar Compra</button>
            </BottomContainer>
        </AsideContainer>
    );
};
