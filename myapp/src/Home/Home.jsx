import React from 'react';
import Header from './Header/Header';
import Booksection from './BookSection/Booksection';
import Footer from '../Footer/Footer';
import ImageSlide from './ImageSlide/ImageSlide';

export default function Home() {
  return (
    <div>
      <Header/>
      <br/><br/><br/>
      <ImageSlide/>
      <Booksection/>
      <Footer/>
    </div>
  );
}
