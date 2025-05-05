'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './style.scss'
import { FaSun, FaTools, FaShieldAlt, FaChartLine, FaArrowRight, FaLeaf, FaLightbulb, FaCheck } from 'react-icons/fa';
import BlueSunLogo from "../../../assets/images/bluesun.webp";

function BlueSunSolar() {
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
        <div className="bluesun-solar-container">
            <h1>BlueSun Solar</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / <Link href="/brands">Бренды</Link> / BlueSun Solar
            </div>

            <div className="bluesun-solar-content">
                <section className="bluesun-hero animate-section">
                    <div className="hero-content">
                        <div className="hero-logo">
                            <Image 
                                src={BlueSunLogo} 
                                alt="BlueSun Solar логотип" 
                                width={300} 
                                height={150} 
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className="hero-description">
                            BlueSun Solar – ведущий производитель солнечных панелей и комплектующих для альтернативных 
                            источников энергии. Компания специализируется на разработке и производстве высокоэффективных 
                            солнечных модулей, инверторов и систем хранения энергии, которые помогают снизить зависимость 
                            от традиционных источников энергии и уменьшить углеродный след.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img 
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                            alt="BlueSun Solar панели" 
                        />
                    </div>
                </section>

                <section className="bluesun-services animate-section">
                    <h2>Комплексные решения</h2>
                    <p className="section-description">
                        BlueSun Solar предлагает полный спектр услуг в области солнечной энергетики – 
                        от проектирования и поставки оборудования до монтажа и последующего обслуживания. 
                        Наши специалисты помогут подобрать оптимальное решение для вашего дома или бизнеса.
                    </p>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <FaLightbulb />
                            </div>
                            <h3>Проектирование</h3>
                            <p>Разработка индивидуальных проектов солнечных электростанций с учетом особенностей объекта</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <FaTools />
                            </div>
                            <h3>Монтаж</h3>
                            <p>Профессиональная установка солнечных панелей и сопутствующего оборудования</p>
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
                            <h3>Мониторинг</h3>
                            <p>Системы мониторинга производительности солнечных электростанций в режиме реального времени</p>
                        </div>
                    </div>
                </section>

                <section className="bluesun-products animate-section">
                    <h2>Продукция BlueSun Solar</h2>
                    <p className="section-description">
                        Компания предлагает широкий ассортимент высококачественного оборудования для солнечной энергетики, 
                        которое соответствует международным стандартам качества и безопасности.
                    </p>
                    <div className="products-grid">
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Солнечные панели" 
                                />
                            </div>
                            <h3>Солнечные панели</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Монокристаллические панели</li>
                                <li><FaCheck /> Поликристаллические панели</li>
                                <li><FaCheck /> Тонкопленочные панели</li>
                                <li><FaCheck /> Двусторонние панели</li>
                            </ul>
                        </div>
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1559302995-f8d3d980e2d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Инверторы" 
                                />
                            </div>
                            <h3>Инверторы</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Сетевые инверторы</li>
                                <li><FaCheck /> Гибридные инверторы</li>
                                <li><FaCheck /> Автономные инверторы</li>
                                <li><FaCheck /> Микроинверторы</li>
                            </ul>
                        </div>
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1593941707882-a5bba53aab27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Системы хранения энергии" 
                                />
                            </div>
                            <h3>Системы хранения энергии</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Литий-ионные аккумуляторы</li>
                                <li><FaCheck /> Гелевые аккумуляторы</li>
                                <li><FaCheck /> Системы управления батареями</li>
                                <li><FaCheck /> Домашние накопители энергии</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bluesun-advantages animate-section">
                    <h2>Преимущества BlueSun Solar</h2>
                    <div className="advantages-grid">
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaSun />
                            </div>
                            <h3>Высокая эффективность</h3>
                            <p>Солнечные панели BlueSun Solar обеспечивают максимальную выработку энергии даже при низкой освещенности</p>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaShieldAlt />
                            </div>
                            <h3>Надежность</h3>
                            <p>Оборудование BlueSun Solar отличается высокой надежностью и длительным сроком службы</p>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaLeaf />
                            </div>
                            <h3>Экологичность</h3>
                            <p>Использование солнечной энергии помогает снизить выбросы CO2 и сохранить окружающую среду</p>
                        </div>
                    </div>
                </section>

                <section className="bluesun-testimonials animate-section">
                    <h2>Отзывы клиентов</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Установили солнечные панели BlueSun Solar на крыше дома год назад. Качество отличное, 
                                выработка энергии соответствует заявленным характеристикам. Очень довольны!"
                            </p>
                            <div className="testimonial-author">
                                <h4>Андрей Смирнов</h4>
                                <p>Владелец частного дома</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Наша компания использует солнечные панели BlueSun Solar для энергоснабжения офисного здания. 
                                Экономия на электроэнергии значительная, окупаемость быстрее, чем ожидали."
                            </p>
                            <div className="testimonial-author">
                                <h4>Елена Петрова</h4>
                                <p>Директор по развитию, ООО "ЭкоСтрой"</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Сотрудничаем с BlueSun Solar как интеграторы. Оборудование надежное, 
                                техподдержка всегда на связи, клиенты довольны."
                            </p>
                            <div className="testimonial-author">
                                <h4>Игорь Васильев</h4>
                                <p>Технический директор, "СолнцеТех"</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bluesun-cta animate-section">
                    <h2>Готовы перейти на солнечную энергию?</h2>
                    <p>Свяжитесь с нами, чтобы получить консультацию по подбору оборудования или заказать проект солнечной электростанции</p>
                    <Link href="/contact" className="cta-button">
                        Связаться с нами <FaArrowRight className="icon" />
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default BlueSunSolar;