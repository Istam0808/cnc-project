'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { useRouter } from 'next/navigation';
import '../style.scss';

function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Проверка совпадения паролей
        if (formData.password !== formData.confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }
        
        // Проверка сложности пароля
        if (formData.password.length < 6) {
            setError('Пароль должен содержать не менее 6 символов');
            return;
        }
        
        setLoading(true);
        
        try {
            // Создание нового пользователя
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                formData.email, 
                formData.password
            );
            
            // Обновление профиля пользователя (добавление имени)
            await updateProfile(userCredential.user, {
                displayName: formData.name
            });
            
            // Успешная регистрация, перенаправление на главную страницу
            router.push('/explore');
        } catch (error) {
            // Обработка ошибок регистрации
            let errorMessage = 'Произошла ошибка при регистрации';
            
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'Этот email уже используется';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Неверный формат электронной почты';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'Слишком слабый пароль';
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
            <h1>Регистрация</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / Регистрация
            </div>

            <div className="auth-content">
                <div className="auth-form-container">
                    <h2>Создать аккаунт</h2>
                    <p className="form-description">
                        Заполните форму для создания нового аккаунта
                    </p>

                    {error && <div className="auth-error">{error}</div>}

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Имя</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Введите ваше имя"
                                required
                                disabled={loading}
                            />
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
                                required
                                disabled={loading}
                            />
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
                                required
                                disabled={loading}
                            />
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
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-agreement">
                            <input type="checkbox" id="agreement" required disabled={loading} />
                            <label htmlFor="agreement">
                                Я согласен с <Link href="/terms">условиями использования</Link> и <Link href="/privacy">политикой конфиденциальности</Link>
                            </label>
                        </div>

                        <button type="submit" className="auth-button" disabled={loading}>
                            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            Уже есть аккаунт?{' '}
                            <Link href="/auth/login">
                                Войти
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;