import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    " Luxurious cabin hotel, located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forests",
};
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1  px-8 py-12 grid">
          <main className=" max-w-7xl mx-auto w-full ">
            <ReservationProvider>{children}</ReservationProvider>            
          </main>
        </div>
      </body>
    </html>
  );
}
export default RootLayout;
