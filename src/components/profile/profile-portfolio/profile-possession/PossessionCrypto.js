import React from 'react';
import CryptoCard from '../../../shared/card/crypto-card/CryptoCard';
import { ContentWrapper } from './PossessionElements';

import { useSelector } from 'react-redux';

const PossessionCrypto = ({ cryptoPossesionState }) => {
    const FetchedCryptoValues = useSelector(
        (state) => state.FetchedCryptoValues
    );
    const PossessionCrypto = useSelector(
        (state) => state.PossessionCrypto
    );

    return (
        <>
            <ContentWrapper>
                <h1>Possession cryptocurrencies</h1>
                <div>
                    {FetchedCryptoValues.length > 0 ? (
                        FetchedCryptoValues.map((item, index) => {
                            return (
                                <CryptoCard
                                    key={index}
                                    img={item.image}
                                    amount={item.amount}
                                    name={item.name}
                                    percent={item.usd_24h_change}
                                    price={item.usd}
                                    cost={item.price * item.amount}
                                    cryptoList={cryptoPossesionState}
                                />
                            );
                        })
                    ) : (
                        <>
                        {PossessionCrypto.map((item, index) =>{
                            return(
                                    <CryptoCard
                                    key={index}
                                    img={item.image}
                                    amount={item.amount}
                                    name={item.name}
                                    percent={item.usd_24h_change}
                                    price={item.usd ? item.usd : item.price}
                                    cost={item.price * item.amount}
                                    cryptoList={cryptoPossesionState}
                                />
                            )
                        })}
                        </>
                    )}
                </div>
            </ContentWrapper>
        </>
    );
};

export default PossessionCrypto;
