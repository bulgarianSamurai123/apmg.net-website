import BackroundIcons from "../../components/UI/BackroundIcons";
import Footer from "../../components/UI/Footer";
import NavBar from "../../components/UI/NavBar";
import "./app.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body lang="en" className={`bg-background-color ${sora.variable}`}>
        <div className="relative overflow-x-clip">
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <BackroundIcons />

        <div className="relative z-10">
          <NavBar />
          <div className="m-20">
            <main>{children}</main>
          </div>
          <Footer />
        </div>
        </div>
      </body>
    </html>
  );
}
