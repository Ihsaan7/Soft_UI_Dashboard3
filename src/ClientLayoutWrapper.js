'use client';
import { usePathname } from 'next/navigation';
import ClientLayout from './app/ClientLayout';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  if (pathname === '/SignIn' || pathname === '/SignUp') {
    return <>{children}</>;
  }
  return <ClientLayout>{children}</ClientLayout>;
}