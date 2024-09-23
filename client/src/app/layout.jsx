import { roboto } from "@/providers/FontsProvider";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { DevNav } from "@/components/DevelopersSuite";
import "./globals.css";



export const metadata = {
  title: "Wrapzip",
  description: "Clothing brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-text font-extralight`}>
        <DevNav/>
        <Navbar/>
        <main className='w-screen flex flex-col gap-[100px] py-[50px]'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
