import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Styles/RegistrationForm.css';
import Footer from '../components/Footer';

function RegistrationForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Некорректный email';
    if (formData.password.length < 6) newErrors.password = 'Пароль должен быть не менее 6 символов';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Отправка данных
      console.log('Форма отправлена:', formData);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h1>Создать аккаунт</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Пароль</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Зарегистрироваться
        </button>
      </form>

      <p className="login-link">
        Уже есть аккаунт? <a href="/login">Войти</a>
      </p>
    </div>
  );
}

export default RegistrationForm;