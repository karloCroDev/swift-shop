import { Inter } from "next/font/google";
import "./styles/global-style.scss";
import FirebseAuthContext from "./components/contextes/FirebseAuthContext.jsx";
import LogicContext from "./components/contextes/LogicContext.jsx";
import CartFav from "./components/CartFav";
import Popup from "./components/Popup";
import FirebaseFirestoreContext from "./components/contextes/FirebaseFirestoreContext";
import Toast from "./components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LogicContext>
          <FirebseAuthContext>
            <FirebaseFirestoreContext>
              {children}
              <CartFav />
              <Popup />
              {/* <Toast /> */}
              {/* Setted on all pages */}
            </FirebaseFirestoreContext>
          </FirebseAuthContext>
        </LogicContext>
      </body>
    </html>
  );
}
