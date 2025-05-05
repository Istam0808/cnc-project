'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBolt, FaTools, FaShieldAlt, FaChartLine, FaArrowRight, FaIndustry, FaLightbulb, FaCheck } from 'react-icons/fa';
import './style.scss';
import SongriLogo from "../../../assets/images/songri.webp";

function Songri() {
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
        <div className="songri-container">
            <h1>Songri</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / <Link href="/brands">Бренды</Link> / Songri
            </div>

            <div className="songri-content">
                <section className="songri-hero animate-section">
                    <div className="hero-content">
                        <div className="hero-logo">
                            <Image 
                                src={SongriLogo} 
                                alt="Songri логотип" 
                                width={300} 
                                height={150} 
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className="hero-description">
                            Songri – ведущий производитель высококачественного электротехнического оборудования для промышленного применения. 
                            Компания специализируется на разработке и производстве надежных и эффективных решений для электроснабжения, 
                            автоматизации и защиты электрических сетей, которые обеспечивают бесперебойную работу предприятий 
                            различных отраслей промышленности.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img 
                            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                            alt="Songri оборудование" 
                        />
                    </div>
                </section>

                <section className="songri-services animate-section">
                    <h2>Профессиональные решения</h2>
                    <p className="section-description">
                        Songri предлагает комплексные решения для промышленных предприятий – 
                        от проектирования и поставки оборудования до монтажа и последующего обслуживания. 
                        Наши специалисты помогут подобрать оптимальное решение для вашего производства.
                    </p>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <FaLightbulb />
                            </div>
                            <h3>Проектирование</h3>
                            <p>Разработка индивидуальных проектов электроснабжения с учетом особенностей производства</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <FaTools />
                            </div>
                            <h3>Монтаж</h3>
                            <p>Профессиональная установка и настройка оборудования с минимальными простоями производства</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <FaShieldAlt />
                            </div>
                            <h3>Обслуживание</h3>
                            <p>Регулярное техническое обслуживание и оперативное устранение неисправностей</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <FaChartLine />
                            </div>
                            <h3>Модернизация</h3>
                            <p>Модернизация существующих систем электроснабжения для повышения их эффективности</p>
                        </div>
                    </div>
                </section>

                <section className="songri-products animate-section">
                    <h2>Продукция Songri</h2>
                    <p className="section-description">
                        Компания предлагает широкий ассортимент высококачественного электротехнического оборудования, 
                        которое соответствует международным стандартам качества и безопасности.
                    </p>
                    <div className="products-grid">
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1581092787765-e31baa629495?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Силовое оборудование" 
                                />
                            </div>
                            <h3>Силовое оборудование</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Силовые трансформаторы</li>
                                <li><FaCheck /> Автоматические выключатели</li>
                                <li><FaCheck /> Распределительные устройства</li>
                                <li><FaCheck /> Системы компенсации реактивной мощности</li>
                            </ul>
                        </div>
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Системы автоматизации" 
                                />
                            </div>
                            <h3>Системы автоматизации</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Программируемые логические контроллеры</li>
                                <li><FaCheck /> Системы SCADA</li>
                                <li><FaCheck /> Частотные преобразователи</li>
                                <li><FaCheck /> Устройства плавного пуска</li>
                            </ul>
                        </div>
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Системы защиты" 
                                />
                            </div>
                            <h3>Системы защиты</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Релейная защита</li>
                                <li><FaCheck /> Системы молниезащиты</li>
                                <li><FaCheck /> Устройства защитного отключения</li>
                                <li><FaCheck /> Системы заземления</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="songri-advantages animate-section">
                    <h2>Преимущества Songri</h2>
                    <div className="advantages-grid">
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaBolt />
                            </div>
                            <h3>Высокая надежность</h3>
                            <p>Оборудование Songri разработано для бесперебойной работы в самых сложных условиях эксплуатации</p>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaIndustry />
                            </div>
                            <h3>Промышленный стандарт</h3>
                            <p>Все решения соответствуют строгим промышленным стандартам и требованиям безопасности</p>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaLightbulb />
                            </div>
                            <h3>Инновации</h3>
                            <p>Компания постоянно внедряет новые технологии для повышения эффективности и надежности оборудования</p>
                        </div>
                    </div>
                </section>

                <section className="songri-testimonials animate-section">
                    <h2>Отзывы клиентов</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Используем оборудование Songri на нашем металлургическом заводе. Надежность на высшем уровне, 
                                даже в условиях агрессивной производственной среды."
                            </p>
                            <div className="testimonial-author">
                                <h4>Виктор Кузнецов</h4>
                                <p>Главный энергетик, АО "МеталлПром"</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Модернизировали систему электроснабжения с помощью оборудования Songri. 
                                Снизили энергопотребление на 15% и повысили надежность работы всего предприятия."
                            </p>
                            <div className="testimonial-author">
                                <h4>Наталья Иванова</h4>
                                <p>Технический директор, ООО "ХимПроизводство"</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Сотрудничаем с Songri более 5 лет. Качество продукции всегда на высоте, 
                                техническая поддержка оперативно решает любые вопросы."
                            </p>
                            <div className="testimonial-author">
                                <h4>Михаил Сидоров</h4>
                                <p>Директор по закупкам, "ЭнергоСистемы"</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="songri-cta animate-section">
                    <h2>Готовы модернизировать ваше производство?</h2>
                    <p>Свяжитесь с нами, чтобы получить консультацию по подбору оборудования или заказать проект модернизации</p>
                    <Link href="/contact" className="cta-button">
                        Связаться с нами <FaArrowRight className="icon" />
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default Songri;