import React from 'react';
import './styles/globals.css'; 
import  Header  from '../components/header'; 
import  Footer  from '../components/footer'; 
import { Toaster } from 'react-hot-toast'; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 container mx-auto p-4" role="main">
        {children}
      </main>
      <Footer/>
      <Toaster position="bottom-center" /> 
    </div>
  );
}
