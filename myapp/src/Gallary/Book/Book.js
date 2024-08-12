import React, { useState } from 'react';
import './Book.css';
import GalModal from './GalModal';
import ScrollToTopButton from '../../Home/ScrollToTopButton/ScrollToTopButton';

// images for non-fiction
import image1 from './Images/Non-Fiction/poh.jpg';
import image2 from './Images/Non-Fiction/nhs.jpg';
import image3 from './Images/Non-Fiction/bob.jpg';
import image4 from './Images/Non-Fiction/twg.jpg';
import image5 from './Images/Non-Fiction/nbw.jpg';
import image6 from './Images/Non-Fiction/1984.jpg';
import image7 from './Images/Non-Fiction/educated.jpg';
import image8 from './Images/Non-Fiction/influ.jpg';
import image9 from './Images/Non-Fiction/gene.jpg';
import image10 from './Images/Non-Fiction/glass.jpg';

// images for fiction
import fic1 from './Images/Fiction/hp-cham.jpg';
import fic2 from './Images/Fiction/hp-dh.jpg';
import fic3 from './Images/Fiction/hp-priz.jpg';
import fic4 from './Images/Fiction/hp-ps.jpg';
import fic5 from './Images/Fiction/got.jpg';
import fic6 from './Images/Fiction/hod.jpg';
import fic7 from './Images/Fiction/tgawg.jpg';
import fic8 from './Images/Fiction/kmb.jpg';
import fic9 from './Images/Fiction/hobbit.jpg';
import fic10 from './Images/Fiction/lor.jpg';

// images for mystery
import mystery1 from './Images/Mystery/mystery1.jpg';
import mystery2 from './Images/Mystery/mystery2.jpg';
import mystery3 from './Images/Mystery/mystery3.jpg';
import mystery4 from './Images/Mystery/mystery4.jpg';
import mystery5 from './Images/Mystery/mystery5.jpg';
import mystery6 from './Images/Mystery/mystery6.jpg';
import mystery7 from './Images/Mystery/mystery7.jpg';
import mystery8 from './Images/Mystery/mystery8.jpg';
import mystery9 from './Images/Mystery/mystery9.jpeg';
import mystery10 from './Images/Mystery/mystery10.jpg';

const books = [
  {
    id: 1,
    title: 'Portrait of Humanity Vol 5',
    description: 'A comprehensive collection showcasing the diversity of human experience.',
    image: image1,
    price: 500
  },
  {
    id: 2,
    title: 'The National Health Service',
    description: 'An in-depth look at the NHS.',
    image: image2,
    price: 200
  },
  {
    id: 3,
    title: 'An Opinionated Guide to Free London',
    description: 'A guide to exploring London on a budget.',
    image: image3,
    price: 300
  },
  {
    id: 4,
    title: 'The Woman In the Garden',
    description: 'The story about a garden and the relationship with a woman\'s feelings.',
    image: image4,
    price: 350
  },
  {
    id: 5,
    title: 'New British Wine',
    description: 'A detailed review of the latest trends in British wine.',
    image: image5,
    price: 750
  },
  {
    id: 6,
    title: '1989',
    description: 'A book by Yuval Noah Harari that explores the history of humanity.',
    image: image6,
    price: 550
  },
  {
    id: 7,
    title: 'Educated',
    description: 'A memoir by Tara Westover about growing up in a strict and abusive household in rural Idaho but eventually escaping to learn about the wider world through education.',
    image: image7,
    price: 350
  },
  {
    id: 8,
    title: 'How to Win Friends & Influence People',
    description: 'A classic self-help book by Dale Carnegie on building relationships and influencing people.',
    image: image8,
    price: 450
  },
  {
    id: 9,
    title: 'The Glass Castle',
    description: 'A memoir by Jeannette Walls about growing up in a dysfunctional family and finding success despite it.',
    image: image10,
    price: 400
  },
  {
    id: 10,
    title: 'The Gene: An Intimate History',
    description: 'A book by Siddhartha Mukherjee that explores the history of genetics.',
    image: image9,
    price: 480
  },
  
  {
    id: 11,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling", 
    description: "The first book in the Harry Potter series, introducing the magical world of Hogwarts.",
    image: fic4,
    price: 300
  },
  {
    id: 12,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    description: 'The second book in the Harry Potter series, where Harry returns to Hogwarts and faces new challenges.',
    image: fic1,
    price: 320
  },
  {
    id: 13,
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    description: 'The third book in the Harry Potter series, involving a dangerous prisoner escape and dark secrets.',
    image: fic3,
    price: 350
  },
  {
    id: 14,
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling',
    description: 'The final book in the Harry Potter series, where Harry and his friends face the ultimate battle against Voldemort.',
    image: fic2,
    price: 400
  },
  {
    id: 15,
    title: 'Game of Thrones',
    author: 'George R.R. Martin',
    description: 'The first book in the A Song of Ice and Fire series, featuring political intrigue and epic battles in a fantasy world.',
    image: fic5,
    price: 500
  },
  {
    id: 16,
    title: 'House of Dragons',
    author: 'Jessica Cluess',
    description: 'A prequel to Game of Thrones, exploring the history of House Targaryen and their dragons.',
    image: fic6,
    price: 550
  },
  {
    id: 17,
    title: 'New Girl and a Witch\'s Garden',
    author: 'Jane Doe',
    description: 'A captivating story about a girl discovering a magical garden and meeting a witch.',
    image: fic7,
    price: 650
  },
  {
    id: 18,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A novel set in the American South that deals with serious themes of racial injustice and moral growth.',
    image: fic8,
    price: 350
  },
  {
    id: 19,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'A fantasy novel following Bilbo Baggins on his quest to help dwarves reclaim their homeland.',
    image: fic9,
    price: 490
  },
  {
    id: 20,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description: 'An epic fantasy trilogy following the quest to destroy a powerful ring that threatens the fate of Middle-earth.',
    image: fic10,
    price: 590
  },

  {
    id: 21,
    title: 'The Hound of the Baskervilles',
    author: 'Arthur Conan Doyle',
    description: 'A classic mystery novel by Arthur Conan Doyle.',
    image: mystery1,
    price: 270
  },
  {
    id: 22,
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    description: 'A thriller novel by Gillian Flynn.',
    image: mystery2,
    price: 300
  },
  {
    id: 23,
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    description: 'A mystery novel by Stieg Larsson.',
    image: mystery3,
    price: 350
  },
  {
    id: 24,
    title: 'Big Little Lies',
    author: 'Liane Moriarty',
    description: 'A novel by Liane Moriarty.',
    image: mystery4,
    price: 400
  },
  {
    id: 25,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    description: 'A mystery thriller by Dan Brown.',
    image: mystery5,
    price: 450
  },
  {
    id: 26,
    title: 'Sherlock Holmes: The Complete Novels and Stories',
    author: 'Arthur Conan Doyle',
    description: 'All the classic stories by Arthur Conan Doyle.',
    image: mystery6,
    price: 500
  },
  {
    id: 27,
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    description: 'A mystery novel by Agatha Christie.',
    image: mystery7,
    price: 550
  },
  {
    id: 28,
    title: 'In the Woods',
    author: 'Tana French',
    description: 'A psychological mystery novel by Tana French.',
    image: mystery8,
    price: 600
  },
  {
    id: 29,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: 'A psychological thriller by Alex Michaelides.',
    image: mystery9,
    price: 650
  },
  {
    id: 30,
    title: 'The Woman in White',
    author: 'Wilkie Collins',
    description: 'A classic mystery novel by Wilkie Collins.',
    image: mystery10,
    price: 700
  }
];
const Book = ({ searchQuery }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="gal-book-section">
      <h2>Book Collection</h2>
      <div className="gal-book-list">
        {filteredBooks.map((book) => (
          <div className="gal-book-card" key={book.id} onClick={() => handleCardClick(book)}>
            <img src={book.image} alt={book.title} className="gal-book-image" />
            <div className="gal-book-content">
              <h3 className="gal-book-title">{book.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedBook && <GalModal book={selectedBook} onClose={handleCloseModal} />}
      <ScrollToTopButton />
    </div>
  );
}

export default Book;
