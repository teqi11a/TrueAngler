import './Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-links">
          <a href="https://github.com/teqi11a/TrueAngler" target="_blank" rel="noopener noreferrer">О проекте</a> 
          <a href="https://www.consultant.ru/popular/" target="_blank" rel="noopener noreferrer">Политика</a>
          <a href="" target="_blank" rel="noopener noreferrer">Условия</a>
          <a href="https://github.com/teqi11a/TrueAngler/graphs/contributors" target="_blank" rel="noopener noreferrer">Контакты</a>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} TrueAngler
        </p>
      </div>
    </footer>
  );
};

export default Footer;