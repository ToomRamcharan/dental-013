import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Dr. Seena\'s Dental - Nizamabad | Premium Dental Care in Nizamabad',
  description: 'Dr. Seena\'s Dental - Nizamabad offers premium dental care in Nizamabad, Telangana. Expert dentists and modern technology. Book now!',
  openGraph: { title: 'Dr. Seena\'s Dental - Nizamabad | Premium Dental Care', description: 'Expert dental care in Nizamabad', type: 'website', locale: 'en_IN' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
