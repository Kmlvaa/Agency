'use client'
import "./globals.css";
import Header from '../_Components/Layout/Header/page'
import Footer from '../_Components/Layout/Footer/page'
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
