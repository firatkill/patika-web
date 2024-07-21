import { Inter } from "next/font/google";
import "./globals.css";

import SideBar from "@/Components/Global/SideBar/SideBar";
import MainContainer from "@/Components/Global/MainContainer/MainContainer";
import NavBar from "@/Components/Global/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Makine Öğrenmesi",
  description: "Makine Öğrenmesi",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <NavBar />
        <SideBar />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
