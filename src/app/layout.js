import "@/assets/styles/main.scss";

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
          <div className="noise" />
        </div>
      </body>
    </html>
  );
}
