'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBolt, FaTools, FaShieldAlt, FaChartLine, FaArrowRight, FaIndustry, FaLightbulb, FaCheck } from 'react-icons/fa';
import '../style.scss';
import './style.scss';
import UpowerLogo from "../../../assets/images/upower.webp";

function UPower() {
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
        <div className="upower-container">
            <h1>UPOWER</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / <Link href="/brands">Бренды</Link> / UPOWER
            </div>

            <div className="upower-content">
                <section className="upower-hero animate-section">
                    <div className="hero-content">
                        <div className="hero-logo">
                            <Image 
                                src={UpowerLogo} 
                                alt="UPOWER логотип" 
                                width={300} 
                                height={150} 
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className="hero-description">
                            Бренд UPOWER специализируется на продаже электротоваров низкого и высокого напряжения. 
                            Основанная в 2022 году, она быстро завоевала доверие клиентов благодаря высокому качеству 
                            своей продукции. В ассортименте компании представлены качественные электрические щиты 
                            различной сложности, а также дифреки и другие комплектующие для систем электроснабжения.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img 
                            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                            alt="UPOWER оборудование" 
                        />
                    </div>
                </section>

                <section className="upower-services animate-section">
                    <h2>Полный спектр услуг</h2>
                    <p className="section-description">
                        UPOWER обеспечивает полный спектр услуг – от консультации и подбора необходимого 
                        оборудования до его установки и последующего обслуживания. Компания активно сотрудничает как с 
                        частными лицами, так и с крупными промышленными предприятиями, предлагая решения, которые помогают 
                        оптимизировать энергопотребление и повысить безопасность электрических сетей.
                    </p>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <FaLightbulb />
                            </div>
                            <h3>Консультации</h3>
                            <p>Профессиональные консультации по подбору оптимального оборудования для ваших задач</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <FaTools />
                            </div>
                            <h3>Установка</h3>
                            <p>Квалифицированная установка и настройка оборудования с соблюдением всех норм безопасности</p>
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
                            <h3>Оптимизация</h3>
                            <p>Решения для оптимизации энергопотребления и повышения эффективности электросетей</p>
                        </div>
                    </div>
                </section>

                <section className="upower-products animate-section">
                    <h2>Продукция UPOWER</h2>
                    <p className="section-description">
                        Компания предлагает широкий ассортимент высококачественного электрооборудования, 
                        которое соответствует международным стандартам качества и безопасности.
                    </p>
                    <div className="products-grid">
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Электрические щиты" 
                                />
                            </div>
                            <h3>Электрические щиты</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Щиты распределительные</li>
                                <li><FaCheck /> Щиты учетно-распределительные</li>
                                <li><FaCheck /> Щиты автоматического ввода резерва</li>
                                <li><FaCheck /> Щиты управления и автоматики</li>
                            </ul>
                        </div>
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Дифференциальные автоматы" 
                                />
                            </div>
                            <h3>Дифференциальные автоматы</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Дифавтоматы 1P+N</li>
                                <li><FaCheck /> Дифавтоматы 2P</li>
                                <li><FaCheck /> Дифавтоматы 3P</li>
                                <li><FaCheck /> Дифавтоматы 4P</li>
                            </ul>
                        </div>
                        <div className="product-category">
                            <div className="category-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                                    alt="Комплектующие" 
                                />
                            </div>
                            <h3>Комплектующие</h3>
                            <ul className="product-features">
                                <li><FaCheck /> Автоматические выключатели</li>
                                <li><FaCheck /> Контакторы и пускатели</li>
                                <li><FaCheck /> Устройства защитного отключения</li>
                                <li><FaCheck /> Реле и таймеры</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="upower-advantages animate-section">
                    <h2>Преимущества UPOWER</h2>
                    <div className="advantages-grid">
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaBolt />
                            </div>
                            <h3>Высокое качество</h3>
                            <p>Вся продукция проходит строгий контроль качества и соответствует международным стандартам</p>
                        </div>
                        <div className="advantage-card">
                            <div className="advantage-icon">
                                <FaShieldAlt />
                            </div>
                            <h3>Надежность</h3>
                            <p>Оборудование UPOWER отличается высокой надежностью и длительным сроком службы</p>
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

                <section className="upower-testimonials animate-section">
                    <h2>Отзывы клиентов</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Мы используем оборудование UPOWER на нашем производстве уже более года. 
                                Качество на высоте, никаких проблем за все время эксплуатации не возникало."
                            </p>
                            <div className="testimonial-author">
                                <h4>Алексей Петров</h4>
                                <p>Главный энергетик, ООО "ПромТех"</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Заказывали электрощиты UPOWER для нового офисного здания. 
                                Отличное соотношение цены и качества, монтаж прошел без проблем."
                            </p>
                            <div className="testimonial-author">
                                <h4>Марина Соколова</h4>
                                <p>Руководитель проекта, "СтройИнвест"</p>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                "Сотрудничаем с UPOWER как дистрибьюторы. Клиенты всегда довольны 
                                качеством продукции, а сервис на высшем уровне."
                            </p>
                            <div className="testimonial-author">
                                <h4>Дмитрий Иванов</h4>
                                <p>Директор, "ЭлектроТрейд"</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="upower-cta animate-section">
                    <h2>Готовы к сотрудничеству?</h2>
                    <p>Свяжитесь с нами, чтобы получить консультацию по продукции UPOWER или оформить заказ</p>
                    <Link href="/contact" className="cta-button">
                        Связаться с нами <FaArrowRight className="icon" />
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default UPower;