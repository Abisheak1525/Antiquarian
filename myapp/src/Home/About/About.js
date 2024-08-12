import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="About-all" id="About">
      <div className="About-Content">
        <h1>About Us</h1>
        <div className="About-Section">
          <h2>About Site</h2>
          <p>
            Antiquarian is a dedicated platform for second-hand book enthusiasts. We provide a wide range of pre-loved books at affordable prices. Our mission is to make quality reading material accessible to everyone while promoting the sustainability of book reuse. We are passionate about fostering a love for reading and supporting a circular economy for books. Our site features a user-friendly interface for browsing, buying, and selling books, ensuring a seamless experience for book lovers.
          </p>
        </div>

        <div className="About-Section">
          <h2>About Book Auctions</h2>
          <p>
            Our book auctions offer a unique opportunity for collectors and enthusiasts to bid on rare and valuable books. We hold regular auctions featuring a curated selection of rare finds, vintage editions, and collectible items. Participants can place bids and compete for exclusive book lots. Whether you're looking to expand your collection or find a special edition, our auctions provide a platform for exciting book discoveries. We also offer auction previews and notifications to keep you informed about upcoming events and featured lots.
          </p>
        </div>

        <div className="About-Section">
          <h2>About Book Selling and User Contributions</h2>
          <p>
            At Antiquarian, users can easily list their pre-loved books for sale. Our platform allows individuals to contribute to the book-selling community by creating listings, setting prices, and managing their own inventory. This user-friendly system helps promote the sale of second-hand books and enables sellers to reach a wide audience. We provide tools for users to track their sales, communicate with buyers, and update their listings. We believe that everyone should have the chance to share their books and contribute to the circular economy of literature. Our goal is to empower book sellers and foster a vibrant marketplace.
          </p>
        </div>

        <div className="About-Section">
          <h2>About Me</h2>
          <p>
            I’m currently studying at Sri Krishna College of Technology in Coimbatore, where I am an active member of Group 2, known as Antiquarian. As a student and a book enthusiast, I am dedicated to promoting the mission of our second-hand book selling website. My role involves contributing to the development of our platform, engaging with our community, and supporting our sustainability goals. I am passionate about fostering a love for reading and encouraging the reuse of books to promote a greener future. If you’d like to connect with me professionally or learn more about our work, please follow me on the links below.
          </p>
          <div className="About-Links">
            <button><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
            <button><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></button>
            <button><a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></button>
            <button><a href="mailto:your-email@example.com">Mail</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}
