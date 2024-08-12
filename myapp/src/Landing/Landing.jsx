import { Link } from 'react-router-dom';
import './Landing.css';
import icon from './icon.png';

export default function Landing() {
  return (
    <div className="lan-all">
      <div className="lan-msg">
        <div className="lan-icon">
          <img src={icon} alt="Landing Icon" />
        </div>
        <div className="lan-content">
          <p>Please Login to get Better Experience!</p>
          <Link to="home">
            <button className="lan-btn">Search some interesting books ➔</button>
          </Link>
        </div>
      </div>
      <div className="lan-footer">
        <h2>Antiquarian - Best website for buying and selling books</h2>
        <h3>Welcome</h3>
        <p>The second-hand book store aims to create an eco-friendly and budget-conscious solution for book enthusiasts, 
          students, and avid readers. By providing a platform for buying and selling used books, the store encourages the 
          reuse of books, thus contributing to environmental sustainability. The store's inventory will include a diverse 
          range of genres, catering to various age groups and interests, ensuring that there is something for everyone. 
          The second-hand book store is dedicated to fostering a love for reading while promoting sustainable living. 
          By making books more accessible and affordable, the store aims to support education, spread knowledge, and build 
          a community of environmentally-conscious readers.</p>
        <p>Our platform offers a seamless experience for book buyers and sellers. We strive to provide excellent customer 
          service and ensure that every transaction is smooth and secure. Whether you're looking for rare finds, popular 
          titles, or just want to clear out your old books, Antiquarian is here to help. Join our community today and be 
          part of a movement that values both books and the planet. Happy reading!</p>
        <p>At Antiquarian, we believe in the power of books to transform lives and communities. Our commitment to sustainability 
          extends beyond just selling books; we aim to create a positive impact on the environment and promote a culture of 
          responsible consumption. By choosing second-hand books, you’re making a choice that benefits both your wallet and 
          the planet. We invite you to explore our collection and experience the joy of giving books a second life.</p>
        <p>We also offer various features to enhance your book-buying and selling experience, including user-friendly search 
          tools, detailed book descriptions, and secure payment options. Our team is dedicated to ensuring that you find 
          exactly what you're looking for and have a pleasant experience every time you visit our site. Thank you for being 
          a part of Antiquarian, and we look forward to serving you.</p>
      </div>
    </div>
  );
}
