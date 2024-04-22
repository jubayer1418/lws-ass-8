import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Home/Navbar";
import { dbConnect } from "@/server/db";
import AuthProvider from "@/provider/AuthProvider";



const poppins = Poppins({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ['latin'],
  display: 'swap',
 
});

export const metadata = {
  title: "Khana Khazana",
  description:
    "Warm up with a bowl of hearty vegetable soup, brimming with colorful veggies and fragrant herbs. This comforting dish is not only nutritious but also incredibly satisfying, perfect for chilly evenings or when you need a nourishing pick-me-up.",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <Navbar />
          
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
