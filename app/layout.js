'use client'
// Import necessary dependencies
import { Inter } from 'next/font/google';
import "./globals.css";
import Topbar from '../components/Topbar';
import AppProvider from '../context/AppProvider';


const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppProvider>
      <Topbar /> 
        {children}
    </AppProvider>
      </body>
    </html>
  );
}