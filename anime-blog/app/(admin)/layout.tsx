import CMSNavbar from "../components/CMSNavbar";
import { Providers } from "../utils/Providers";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CMSNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
