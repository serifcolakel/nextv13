import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <body>
        <main>{children}</main>
      </body>
      <Footer />
    </div>
  );
}
