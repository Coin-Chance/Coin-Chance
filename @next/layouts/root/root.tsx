import React, { ReactNode } from "react";
import { MainLayout } from "@layouts";
import { SnackbarProvider } from "notistack";
import { WalletAddressesContextProvider } from "@contexts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ThemeProvider } from "@mui/material/styles";
import { MUITheme } from "@styles";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { store } from "@store";
interface LayoutProps {
  children: ReactNode;
}
const persistor = persistStore(store);

export const RootLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <WalletAddressesContextProvider>
      <Provider {...{ store }}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={MUITheme}>
            <Toaster position="bottom-center" />
            <MainLayout>
              <Suspense fallback={<p>Loading feed...</p>}>{children}</Suspense>
            </MainLayout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </WalletAddressesContextProvider>
  );
};
