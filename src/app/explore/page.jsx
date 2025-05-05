'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBolt, FaTools, FaShieldAlt, FaChartLine, FaArrowRight, FaIndustry, FaLightbulb } from 'react-icons/fa';
import './style.scss';

export default function Explore() {
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
        <div className="explore-container">
            <section className="hero-section animate-section">
                <div className="hero-content">
                    <h1>Инновационные решения в электротехнике</h1>
                    <p>Мы предлагаем широкий ассортимент высококачественного электрооборудования для промышленных и коммерческих объектов</p>
                    <div className="hero-buttons">
                        <Link href="/about" className="primary-button">
                            О компании
                        </Link>
                        <Link href="/contact" className="secondary-button">
                            Связаться с нами <FaArrowRight className="icon" />
                        </Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img 
                        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                        alt="Электрооборудование" 
                    />
                </div>
            </section>

            <section className="features-section animate-section">
                <div className="section-header">
                    <h2>Наши преимущества</h2>
                    <p>Почему клиенты выбирают именно нас</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaBolt />
                        </div>
                        <h3>Высокое качество</h3>
                        <p>Мы предлагаем только сертифицированную продукцию от проверенных производителей</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaTools />
                        </div>
                        <h3>Техническая поддержка</h3>
                        <p>Наши специалисты всегда готовы помочь с выбором и настройкой оборудования</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaShieldAlt />
                        </div>
                        <h3>Надежность</h3>
                        <p>Гарантия на всю продукцию и оперативное сервисное обслуживание</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaChartLine />
                        </div>
                        <h3>Инновации</h3>
                        <p>Мы следим за новейшими технологиями и предлагаем современные решения</p>
                    </div>
                </div>
            </section>

            <section className="products-section animate-section">
                <div className="section-header">
                    <h2>Наша продукция</h2>
                    <p>Широкий ассортимент электрооборудования для различных отраслей</p>
                </div>
                <div className="products-grid">
                    <div className="product-category">
                        <div className="category-image">
                            <img 
                                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                alt="Модульное оборудование" 
                            />
                        </div>
                        <h3>Модульное оборудование</h3>
                        <p>Автоматические выключатели, УЗО, контакторы</p>
                        <Link href="#" className="category-link">
                            Подробнее <FaArrowRight className="icon" />
                        </Link>
                    </div>
                    <div className="product-category">
                        <div className="category-image">
                            <img 
                                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                alt="Силовое оборудование" 
                            />
                        </div>
                        <h3>Силовое оборудование</h3>
                        <p>Силовые автоматические выключатели, рубильники</p>
                        <Link href="#" className="category-link">
                            Подробнее <FaArrowRight className="icon" />
                        </Link>
                    </div>
                    <div className="product-category">
                        <div className="category-image">
                            <img 
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                alt="Коммутационное оборудование" 
                            />
                        </div>
                        <h3>Коммутационное оборудование</h3>
                        <p>Устройства для коммутации электрических цепей</p>
                        <Link href="#" className="category-link">
                            Подробнее <FaArrowRight className="icon" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="industries-section animate-section">
                <div className="section-header">
                    <h2>Отрасли применения</h2>
                    <p>Наши решения используются в различных сферах промышленности</p>
                </div>
                <div className="industries-grid">
                    <div className="industry-card">
                        <div className="industry-icon">
                            <FaIndustry />
                        </div>
                        <h3>Промышленность</h3>
                        <p>Оборудование для производственных предприятий и заводов</p>
                    </div>
                    <div className="industry-card">
                        <div className="industry-icon">
                            <FaLightbulb />
                        </div>
                        <h3>Энергетика</h3>
                        <p>Решения для энергетических компаний и электростанций</p>
                    </div>
                    <div className="industry-card">
                        <div className="industry-icon">
                            <FaBolt />
                        </div>
                        <h3>Инфраструктура</h3>
                        <p>Оборудование для инфраструктурных и коммунальных объектов</p>
                    </div>
                </div>
            </section>

            <section className="cta-section animate-section">
                <div className="cta-content">
                    <h2>Готовы начать сотрудничество?</h2>
                    <p>Свяжитесь с нами, чтобы получить консультацию по подбору оборудования или оформить заказ</p>
                    <Link href="/contact" className="primary-button">
                        Связаться с нами
                    </Link>
                </div>
            </section>
        </div>
    );
}