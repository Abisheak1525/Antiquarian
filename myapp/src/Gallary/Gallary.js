import React, { useState } from 'react';
import './Gallary.css';
import Header from '../Home/Header/Header';
import MainSearch from './Search/MainSearch';
import Footer from '../Footer/Footer';
import Book from './Book/Book';

export default function Gallary() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      <Header/>
      <MainSearch onSearch={setSearchQuery} />
      <Book searchQuery={searchQuery} />
      <Footer/>
    </div>
  )
}
