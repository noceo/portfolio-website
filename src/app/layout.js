import "@/assets/styles/main.scss";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-default">
          {children}
          <div className="lines-left" />
          <div className="lines-right" />
          {/* <div className="noise" /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
