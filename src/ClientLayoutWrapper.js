'use client';
import { usePathname } from 'next/navigation';
import ClientLayout from './app/ClientLayout';
import Footer from './app/components/Footer';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/SignIn' || pathname === '/SignUp';

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <ClientLayout>
      {children}
      <Footer />
    </ClientLayout>
  );
}