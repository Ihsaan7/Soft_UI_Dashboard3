import "./globals.css";
import ClientLayout from './ClientLayout';

export const metadata = {
  title: "Next.js Dashboard",
  description: "A modern dashboard built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
