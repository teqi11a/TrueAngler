import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Styles/HomePage.css';

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Добро пожаловать в
            <span className="gradient-text"> TrueAngler</span>
          </h1>
          <p className="hero-subtitle">
            Ваш надежный инструмент для управления фишинговыми письмами как способом тренировки сотрудников
          </p>

          {!user && (
            <button
              className="cta-button"
              onClick={() => navigate('/login')}
            >
              Начать работу
              <div className="button-overlay"></div>
            </button>
          )}
        </div>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon security"></div>
          <h3>Безопасность</h3>
          <p>Шифрование данных и двухфакторная аутентификация</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon collaboration"></div>
          <h3>Совместная работа</h3>
          <p>Редактирование документов в реальном времени</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon analytics"></div>
          <h3>Аналитика</h3>
          <p>Подробная статистика и визуализация данных</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;