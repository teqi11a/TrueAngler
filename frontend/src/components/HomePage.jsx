import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Styles/HomePage.css';
import Footer from '../components/Footer';


const HomePage = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Добро пожаловать в <span className="gradient-text">TrueAngler</span>
          </h1>
          <p className="hero-subtitle">
            Ваш надежный инструмент для управления фишинговыми письмами как способом тренировки сотрудников
          </p>
          { !isLoading && (<button className="cta-button" onClick={() => navigate(user ? '/dashboard' : '/login')}>
              {user ? 'Перейти в личный кабинет' : 'Начать работу'}
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

      {/* Команда */}
      <section className="team-section">
        <div className="section-header">
          <h2 className="section-title">Наша команда</h2>
          <p>Создавая безопасность будущего</p>
        </div>

        <div className="team-grid">
          {/* Участники команды */}
          {[
            {
              role: "DevOps Architect",
              name: "teqi11a",
              bio: "Превратил инфраструктуру в самообучающуюся систему безопасности. Автор концепции \"Security-as-Code\".",
              quote: "Надежность системы определяется weakest link - моя задача исключить само понятие слабого звена",
              tech: ["Kubernetes", "GitOps", "AWS Security"],
            },
            {
              role: "Security Analyst",
              name: "SiberiaSec",
              bio: "Специалист по киберпсихологии и адаптивным фишинговым сценариям.",
              quote: "Человек - не слабое звено, а главный актив защиты",
              tech: ["MITRE ATT&CK", "ML Security", "Threat Modeling"],
            },
            {
              role: "Security Automation",
              name: "Gribn33k",
              bio: "Эксперт по Red Team автоматизации и симуляции APT-атак.",
              quote: "Лучшая защита - это реалистичная тренировка",
              tech: ["Python Automation", "Honeytokens", "CTI"],
            },
          ].map((member, index) => (
            <article className="member-card" key={index}>
              <span className="member-role">{member.role}</span>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-bio">{member.bio}</p>
              <blockquote className="philosophy">"{member.quote}"</blockquote>
              <ul className="tech-list">
                {member.tech.map((t, i) => (
                  <li className="tech-item" key={i}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <Footer />
        </div>
  );
};

export default HomePage;
