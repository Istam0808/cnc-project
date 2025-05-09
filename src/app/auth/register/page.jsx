'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../style.scss';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        // Здесь будет логика регистрации
        console.log('Registration attempt with:', formData);
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
                            />
                        </div>

                        <div className="form-agreement">
                            <input type="checkbox" id="agreement" required />
                            <label htmlFor="agreement">
                                Я согласен с <Link href="/terms">условиями использования</Link> и <Link href="/privacy">политикой конфиденциальности</Link>
                            </label>
                        </div>

                        <button type="submit" className="auth-button">
                            Зарегистрироваться
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