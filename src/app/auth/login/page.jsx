'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './style.scss';
import { loginUser, loginWithGoogle, loginWithFacebook } from '../../../firebase/auth';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      await loginUser(formData.email, formData.password);
      router.push('/profile');
    } catch (error) {
      console.error('Ошибка при входе:', error);
      if (error.code === 'auth/network-request-failed') {
        setError('Проблема с подключением к сети. Пожалуйста, проверьте ваше интернет-соединение.');
      } else {
        setError(error.message || 'Ошибка при входе. Пожалуйста, попробуйте снова.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      await loginWithGoogle();
      router.push('/profile');
    } catch (error) {
      console.error('Ошибка при входе через Google:', error);
      setError('Ошибка при входе через Google');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      await loginWithFacebook();
      router.push('/profile');
    } catch (error) {
      console.error('Ошибка при входе через Facebook:', error);
      setError('Ошибка при входе через Facebook');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h1>Вход в аккаунт</h1>
      
      <div className="breadcrumbs">
        <Link href="/explore">Главная</Link> / Вход
      </div>
      
      <div className="auth-content">
        <section className="animate">
          <div className="auth-form-container">
            <h2>Вход в систему</h2>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Введите ваш email"
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Введите ваш пароль"
                />
                {errors.password && <div className="error-message">{errors.password}</div>}
                <div className="forgot-password">
                  <Link href="/auth/reset-password">Забыли пароль?</Link>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="auth-button"
                disabled={isLoading}
              >
                {isLoading ? 'Вход...' : 'Войти'}
              </button>
            </form>
            
            <div className="divider">
              <span>или</span>
            </div>
            
            <div className="social-login">
              <button 
                className="social-button" 
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <FaGoogle className="icon" /> Google
              </button>
              <button 
                className="social-button"
                onClick={handleFacebookLogin}
                disabled={isLoading}
              >
                <FaFacebook className="icon" /> Facebook
              </button>
            </div>
            
            <div className="login-links">
              Нет аккаунта? <Link href="/auth/register">Зарегистрироваться</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}