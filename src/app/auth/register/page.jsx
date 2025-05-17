'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaGoogle, FaFacebook, FaCamera } from 'react-icons/fa';
import './style.scss';
import { registerUser, loginWithGoogle, loginWithFacebook } from '../../../firebase/auth';

export default function Register() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPasswordStrength = (password) => {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    setPasswordStrength(strength);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Имя обязательно';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать минимум 6 символов';
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = 'Пароль должен содержать хотя бы одну заглавную букву';
    } else if (!/(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Пароль должен содержать хотя бы одну цифру';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
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
      const userData = await registerUser(
        formData.email, 
        formData.password, 
        formData.name, 
        avatar
      );
      
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Создание события об изменении состояния авторизации
      window.dispatchEvent(new Event('auth-state-changed'));
      
      // Перенаправление на страницу профиля
      router.push('/profile');
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      setError('Ошибка при регистрации: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const userData = await loginWithGoogle();
      
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Создание события об изменении состояния авторизации
      window.dispatchEvent(new Event('auth-state-changed'));
      
      // Перенаправление на страницу профиля
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
      const userData = await loginWithFacebook();
      
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Создание события об изменении состояния авторизации
      window.dispatchEvent(new Event('auth-state-changed'));
      
      // Перенаправление на страницу профиля
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
      <h1>Регистрация</h1>
      
      <div className="breadcrumbs">
        <Link href="/explore">Главная</Link> / Регистрация
      </div>
      
      <div className="auth-content">
        <section className="animate">
          <div className="auth-form-container">
            <h2>Создать аккаунт</h2>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="avatar-upload">
                <div 
                  className="avatar-preview" 
                  onClick={handleAvatarClick}
                  style={{ 
                    backgroundImage: avatarPreview ? `url(${avatarPreview})` : 'none',
                    backgroundColor: avatarPreview ? 'transparent' : '#f0f0f0'
                  }}
                >
                  {!avatarPreview && <FaCamera className="camera-icon" />}
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleAvatarChange} 
                  accept="image/*" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              
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
                  placeholder="Создайте пароль"
                />
                {errors.password && <div className="error-message">{errors.password}</div>}
                
                <div className="password-strength">
                  <div className="strength-bar">
                    <div 
                      className={`strength-level ${
                        passwordStrength === 1 ? 'very-weak' :
                        passwordStrength === 2 ? 'weak' :
                        passwordStrength === 3 ? 'medium' :
                        passwordStrength === 4 ? 'strong' :
                        passwordStrength === 5 ? 'very-strong' : ''
                      }`}
                    ></div>
                  </div>
                  <div className="strength-text">
                    {passwordStrength === 0 && 'Введите пароль'}
                    {passwordStrength === 1 && 'Очень слабый пароль'}
                    {passwordStrength === 2 && 'Слабый пароль'}
                    {passwordStrength === 3 && 'Средний пароль'}
                    {passwordStrength === 4 && 'Сильный пароль'}
                    {passwordStrength === 5 && 'Очень сильный пароль'}
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Подтверждение пароля</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Подтвердите пароль"
                />
                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
              </div>
              
              <button 
                type="submit" 
                className="auth-button"
                disabled={isLoading}
              >
                {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
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
            
            <div className="auth-links">
              Уже есть аккаунт? <Link href="/auth/login">Войти</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}