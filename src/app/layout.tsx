import "./globals.css";
import { Quicksand } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ReactQueryClientProvider } from "@/utils/react-query";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--quicksand-font",
});

export const metadata = {
  title: "Wesley Wu's Portfolio",
  description:
    "A website showcasing Wesley Wu's experiences, projects, and skills.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <NavBar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
