'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config.js';
import './style.scss';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Используем Firebase для проверки состояния аутентификации
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Пользователь авторизован
        setUser({
          name: currentUser.displayName || 'Пользователь',
          email: currentUser.email,
          uid: currentUser.uid,
          phone: currentUser.phoneNumber,
          photoURL: currentUser.photoURL
        });
      } else {
        // Пользователь не авторизован, перенаправляем на страницу входа
        router.push('/auth/login');
      }
      setLoading(false);
    });
    
    // Отписываемся от слушателя при размонтировании компонента
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      
      // Создаем пользовательское событие для обновления состояния в Nav
      window.dispatchEvent(new Event('userLogout'));
      
      router.push('/explore');
    } catch (error) {
      console.error('Ошибка при выходе из системы:', error);
    }
  };

  if (loading) {
    return (
      <div className="profile-container">
        <div className="profile-loading">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h1>Личный кабинет</h1>
      
      <div className="breadcrumbs">
        <Link href="/explore">Главная</Link> / Личный кабинет
      </div>
      
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Аватар пользователя" />
              ) : (
                user?.name?.charAt(0) || 'U'
              )}
            </div>
            <h2>Добро пожаловать, {user?.name || 'Пользователь'}!</h2>
          </div>
          
          <div className="profile-info">
            <div className="info-group">
              <label>Имя:</label>
              <p>{user?.name || 'Не указано'}</p>
            </div>
            
            <div className="info-group">
              <label>Email:</label>
              <p>{user?.email || 'Не указано'}</p>
            </div>
            
            {user?.phone && (
              <div className="info-group">
                <label>Телефон:</label>
                <p>{user.phone}</p>
              </div>
            )}
          </div>
          
          <button className="logout-button" onClick={handleLogout}>
            Выйти из системы
          </button>
        </div>
      </div>
    </div>
  );
}