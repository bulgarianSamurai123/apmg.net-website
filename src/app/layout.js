import NavBar from "../../components/NavBar";
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
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <NavBar />
        <div className="m-20">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
