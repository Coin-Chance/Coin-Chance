import React, { createContext, useState } from "react";

interface AddressesContextValue {
  wallets: AddressesContextValueState;
  handleWallet: (val: any) => void;
}

interface AddressesContextValueState {
  [key: string]: string;
}

export const WalletAddressesContext =
  createContext<AddressesContextValue | null>(null);

export const WalletAddressesContextProvider: any = ({ children }: any) => {
  const [wallets, setWallets] = useState<AddressesContextValueState>({});

  const handleWallet = (val: any) => {
    setWallets(val);
  };

  return (
    <WalletAddressesContext.Provider value={{ wallets, handleWallet }}>
      {children}
    </WalletAddressesContext.Provider>
  );
};
