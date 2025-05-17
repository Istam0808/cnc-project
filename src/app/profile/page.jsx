'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import './style.scss';
import { useAuth } from '../../context/AuthContext';
import { logoutUser } from '../../firebase/auth';

export default function Profile() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  // Устанавливаем аватар из данных пользователя
  useEffect(() => {
    if (user?.avatar) {
      setAvatarUrl(user.avatar);
    }
  }, [user]);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logoutUser();
      router.push('/explore');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading || !user) {
    return <div className="profile-container">Загрузка...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Профиль</h1>
      
      <div className="breadcrumbs">
        <Link href="/explore">Главная</Link> / Профиль
      </div>
      
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div 
              className="profile-avatar"
              style={{ 
                backgroundImage: avatarUrl ? `url(${avatarUrl})` : 'none',
                backgroundColor: avatarUrl ? 'transparent' : '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {!avatarUrl && (user?.name?.charAt(0) || <FaUser />)}
            </div>
            <h2>{user.name}</h2>
          </div>
          
          <div className="profile-info">
            <div className="info-group">
              <div className="info-label">
                <FaEnvelope className="info-icon" />
                <span>Email:</span>
              </div>
              <div className="info-value">{user.email}</div>
            </div>
            
            <div className="profile-actions">
              <button className="edit-profile-button">
                <FaEdit className="button-icon" />
                Редактировать профиль
              </button>
              
              <button 
                className="logout-button" 
                onClick={handleLogout}
                disabled={isLoading}
              >
                <FaSignOutAlt className="button-icon" />
                {isLoading ? 'Выход...' : 'Выйти'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}