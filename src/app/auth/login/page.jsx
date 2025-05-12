'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import '../style.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    
    setLoading(true);
    
    try {
      // Аутентификация через Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Сохраняем базовую информацию о пользователе в localStorage для быстрого доступа
      // (это опционально, так как Firebase хранит состояние сессии)
      localStorage.setItem('user', JSON.stringify({
        name: user.displayName || 'Пользователь',
        email: user.email,
        uid: user.uid
      }));
      
      // Создаем пользовательское событие для обновления состояния в Nav
      window.dispatchEvent(new Event('userLogin'));
      
      // Перенаправляем на страницу профиля
      router.push('/profile');
    } catch (error) {
      // Обработка ошибок Firebase
      let errorMessage = 'Произошла ошибка при входе';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Неверный формат электронной почты';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Этот аккаунт отключен';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Пользователь с таким email не найден';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Неверный пароль';
          break;
        default:
          errorMessage = `Ошибка: ${error.message}`;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h1>Авторизация</h1>
      
      <div className="breadcrumbs">
        <Link href="/explore">Главная</Link> / Авторизация
      </div>
      
      <div className="auth-content">
        <div className="auth-form-container">
          <h2>Вход в аккаунт</h2>
          <p className="form-description">
            Введите свои данные для входа в систему
          </p>
          
          {error && <div className="auth-error">{error}</div>}
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                placeholder="Введите ваш пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Запомнить меня</label>
              </div>
              
              <Link href="/auth/forgot-password" className="forgot-password">
                Забыли пароль?
              </Link>
            </div>
            
            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>
          
          <div className="auth-footer">
            Нет аккаунта? <Link href="/auth/register">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
}