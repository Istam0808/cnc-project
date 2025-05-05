'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaDigitalTachograph, FaTools, FaShieldAlt, FaChartLine, FaArrowRight, FaIndustry, FaLightbulb, FaCheck } from 'react-icons/fa';
import '../style.scss';
import './style.scss';
import DigiTopLogo from "../../../assets/images/digitop-logo.png";

function DigiTop() {
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
        <div className="digitop-container">
            <h1>DigiTop</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / <Link href="/brands">Бренды</Link> / DigiTop
            </div>

            <div className="digitop-content">
                <section className="digitop-hero animate-section">
                    <div className="hero-content">
                        <div className="hero-logo">
                            <Image 
                                src={DigiTopLogo} 
                                alt="DigiTop логотип" 
                                width={300} 
                                height={150} 
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className="hero-description">
                            DigiTop – ведущий производитель цифровых систем контроля и автоматизации для промышленных и бытовых объектов. 
                            Компания специализируется на разработке и производстве высокоточных измерительных приборов, 
                            контроллеров и систем автоматизации, которые помогают оптимизировать процессы и повысить 
                            эффективность работы оборудования.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img 
                            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                            alt="DigiTop оборудование" 
                        />
                    </div>
                </section>

                <section className="digitop-services animate-section">
                    <h2>Инновационные решения</h2>
                    <p className="section-description">
                        DigiTop предлагает полный спектр услуг в области автоматизации и контроля – 
                        от проектирования и поставки оборудования до внедрения и последующего обслуживания. 
                        Наши специалисты помогут подобрать оптимальное решение для вашего бизнеса или дома.
                    </p>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <FaLightbulb />
                            </div>
                            <h3>Проектирование</h3>
                            <p>Разработка индивидуальных проектов систем автоматизации с учетом особенностей объекта</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <FaTools />
                            </div>
                            <h3>Внедрение</h3>
                            <p>Профессиональная установка и настройка оборудования с минимальными простоями</p>
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
                            <p>Системы мониторинга работы оборудования в режиме реального времени</p>
                        </div>
                    </div>
                </section>

                <section className="digitop-products animate-section">
                    <h2>Продукция DigiTop</h2>
                    <p className="section-description">
                        Компания предлагает широкий ассортимент высококачественного оборудования для автоматизации и контроля, 
                        которое соответствует международным стандартам качества и безопасности.
                    </p>
                    <div className="products-grid">
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Измерительные приборы" 
                                />
                            </div>
                            <h3>Измерительные приборы</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Цифровые вольтметры</li>
                                <li><FaCheck /> Амперметры</li>
                                <li><FaCheck /> Мультиметры</li>
                                <li><FaCheck /> Анализаторы сети</li>
                            </ul>
                        </div>
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1581092787765-e31baa629495?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Контроллеры" 
                                />
                            </div>
                            <h3>Контроллеры</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Температурные контроллеры</li>
                                <li><FaCheck /> Контроллеры влажности</li>
                                <li><FaCheck /> Программируемые логические контроллеры</li>
                                <li><FaCheck /> Таймеры и реле времени</li>
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
                                <li><FaCheck /> Системы "Умный дом"</li>
                                <li><FaCheck /> Промышленная автоматизация</li>
                                <li><FaCheck /> Системы удаленного мониторинга</li>
                                <li><FaCheck /> Интеграционные решения</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="digitop-advantages animate-section">
                    <h2>Преимущества DigiTop</h2>
                    <div className="advantages-grid">
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaDigitalTachograph />
                            </div>
                            <h3>Высокая точность</h3>
                            <p>Все приборы DigiTop обеспечивают высокую точность измерений и стабильную работу</p>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaShieldAlt />
                            </div>
                            <h3>Надежность</h3>
                            <p>Оборудование DigiTop отличается высокой надежностью и длительным сроком службы</p>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaIndustry />
                            </div>
                            <h3>Инновации</h3>
                            <p>Компания постоянно внедряет новые технологии и совершенствует свою продукцию</p>
                        </div>
                    </div>
                </section>

                <section className="digitop-testimonials animate-section">
                    <h2>Отзывы клиентов</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Используем контроллеры DigiTop на нашем производстве. Точность и надежность на высоте, 
                                техподдержка всегда оперативно реагирует на запросы."
                            </p>
                            <div className="testimonial-author">
                                <h4>Сергей Иванов</h4>
                                <p>Главный инженер, ООО "ТехноПром"</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Внедрили систему 'Умный дом' от DigiTop в нашем офисном здании. 
                                Экономия энергоресурсов превзошла ожидания."
                            </p>
                            <div className="testimonial-author">
                                <h4>Анна Петрова</h4>
                                <p>Директор по развитию, "БизнесЦентр"</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Приборы DigiTop используем уже более 5 лет. Ни одного серьезного сбоя за все время, 
                                а точность измерений всегда на высоте."
                            </p>
                            <div className="testimonial-author">
                                <h4>Владимир Смирнов</h4>
                                <p>Технический директор, "ЭнергоСервис"</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="digitop-cta animate-section">
                    <h2>Готовы к сотрудничеству?</h2>
                    <p>Свяжитесь с нами, чтобы получить консультацию по продукции DigiTop или оформить заказ</p>
                    <Link href="/contact" className="cta-button">
                        Связаться с нами <FaArrowRight className="icon" />
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default DigiTop;