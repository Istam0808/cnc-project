'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import './auth.scss'; // Добавляем общий файл стилей

export default function AuthLayout({ children }) {
  const router = useRouter();
  const { user, loading } = useAuth();
  
  useEffect(() => {
    // Если пользователь уже авторизован, перенаправляем на страницу профиля
    if (!loading && user) {
      router.push('/profile');
    }
    
    // Анимация появления секций
    const animateSections = () => {
      const sections = document.querySelectorAll('.auth-content section');
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add('animate');
        }, 100 * index); // Последовательная анимация элементов
      });
    };

    // Запускаем анимацию после загрузки страницы
    setTimeout(animateSections, 100);
  }, [user, loading, router]);

  // Показываем загрузку, пока проверяем аутентификацию
  if (loading) {
    return (
      <div className="auth-loading">
        <div className="loader"></div>
        <p>Загрузка...</p>
      </div>
    );
  }

  // Если пользователь не авторизован, показываем страницу авторизации
  return (
    <main className="auth-layout">
      <div className="auth-background">
        <div className="auth-shape"></div>
        <div className="auth-shape"></div>
      </div>
      {children}
    </main>
  );
}