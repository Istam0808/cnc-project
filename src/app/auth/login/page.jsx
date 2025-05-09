'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { useRouter } from 'next/navigation';
import '../style.scss';

function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        setLoading(true);
        
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            // Успешный вход, перенаправление на главную страницу
            router.push('/explore');
        } catch (error) {
            // Обработка ошибок аутентификации
            let errorMessage = 'Произошла ошибка при входе';
            
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = 'Неверный формат электронной почты';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'Этот аккаунт отключен';
                    break;
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    errorMessage = 'Неверный email или пароль';
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
            <h1>Вход в аккаунт</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / Вход
            </div>

            <div className="auth-content">
                <div className="auth-form-container">
                    <h2>Войти в систему</h2>
                    <p className="form-description">
                        Введите ваши данные для входа в личный кабинет
                    </p>

                    {error && <div className="auth-error">{error}</div>}

                    <form className="auth-form" onSubmit={handleSubmit}>
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
                                placeholder="Введите ваш пароль"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="form-options">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Запомнить меня</label>
                            </div>
                            <Link href="/auth/reset-password" className="forgot-password">
                                Забыли пароль?
                            </Link>
                        </div>

                        <button type="submit" className="auth-button" disabled={loading}>
                            {loading ? 'Вход...' : 'Войти'}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            Нет аккаунта?{' '}
                            <Link href="/auth/register">
                                Зарегистрироваться
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;