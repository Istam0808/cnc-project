'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTools, FaLightbulb, FaAward, FaHistory } from 'react-icons/fa';
import './style.scss';

function About() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.animate-section');
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="about-container">
            <h1>О компании</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / О нас
            </div>

            <div className="about-content">
                <section className="about-hero animate-section">
                    <div className="hero-content">
                        <h2>CNC Electric - Ваш надежный партнер в мире электрооборудования</h2>
                        <p>
                            Компания CNC Electric специализируется на поставке высококачественного электрооборудования для промышленных и коммерческих объектов. Мы предлагаем широкий ассортимент продукции от ведущих производителей.
                        </p>
                    </div>
                    <div className="hero-image">
                        <div className="image-placeholder">
                            <img 
                                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                alt="CNC Electric оборудование" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </section>

                <section className="company-mission animate-section">
                    <h2>Наша миссия</h2>
                    <p>
                        Обеспечивать клиентов надежными и инновационными решениями в области электрооборудования, способствуя развитию их бизнеса и повышению энергоэффективности.
                    </p>
                </section>

                <section className="features-section animate-section">
                    <h2>Почему выбирают нас</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaTools />
                            </div>
                            <h3>Качественное оборудование</h3>
                            <p>Мы предлагаем только сертифицированную продукцию от проверенных производителей</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaLightbulb />
                            </div>
                            <h3>Инновационные решения</h3>
                            <p>Современные технологии и передовые разработки в области электротехники</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaAward />
                            </div>
                            <h3>Профессиональный подход</h3>
                            <p>Команда опытных специалистов, готовых решить задачи любой сложности</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaHistory />
                            </div>
                            <h3>Многолетний опыт</h3>
                            <p>Годы успешной работы и сотни реализованных проектов</p>
                        </div>
                    </div>
                </section>

                <section className="product-categories animate-section">
                    <h2>Наши категории продукции</h2>
                    <div className="categories-list">
                        <div className="category-item">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Модульное оборудование" 
                                />
                            </div>
                            <h3>Модульное оборудование</h3>
                            <p>Автоматические выключатели, УЗО, контакторы и другие компоненты для распределительных щитов</p>
                        </div>
                        <div className="category-item">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Силовое оборудование" 
                                />
                            </div>
                            <h3>Силовое оборудование</h3>
                            <p>Силовые автоматические выключатели, рубильники, предохранители для защиты электроустановок</p>
                        </div>
                        <div className="category-item">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Коммутационное оборудование" 
                                />
                            </div>
                            <h3>Коммутационное оборудование</h3>
                            <p>Устройства для коммутации электрических цепей и управления электроприводами</p>
                        </div>
                        <div className="category-item">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1605493725784-56d8d20d4a5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Трансформаторы" 
                                />
                            </div>
                            <h3>Трансформаторы</h3>
                            <p>Силовые и распределительные трансформаторы различной мощности</p>
                        </div>
                        <div className="category-item">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Распределительные устройства" 
                                />
                            </div>
                            <h3>Распределительные устройства</h3>
                            <p>Комплектные распределительные устройства среднего и низкого напряжения</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section animate-section">
                    <h2>Готовы к сотрудничеству?</h2>
                    <p>Свяжитесь с нами, чтобы получить консультацию по подбору оборудования или оформить заказ</p>
                    <Link href="/contact" className="cta-button">
                        Связаться с нами
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default About;