'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../style.scss';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика авторизации
        console.log('Login attempt with:', formData);
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

                        <button type="submit" className="auth-button">
                            Войти
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