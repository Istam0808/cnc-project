'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './style.scss';
import Upower from "../../assets/images/upower.webp"
import DigiTop from "../../assets/images/digitop-logo.png"
import Bluesun from "../../assets/images/bluesun.webp"
import Songri from "../../assets/images/songri.webp"


function Brands() {
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
        <div className="brands-container">
            <h1>Наши бренды</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / Бренды
            </div>

            <div className="brands-content">
                <section className="brands-hero animate-section">
                    <div className="hero-content">
                        <h2>Мы работаем только с лучшими производителями</h2>
                        <p>
                            Компания CNC Electric является официальным дистрибьютором ведущих мировых производителей электрооборудования. 
                            Мы тщательно отбираем партнеров, чтобы предложить нашим клиентам только качественную и надежную продукцию.
                        </p>
                    </div>
                </section>

                <section className="brands-grid animate-section">
                    <Link href="/brands/upower" className="brand-card">
                        <div className="brand-logo">
                            <Image 
                                src={Upower} 
                                alt="UPower логотип" 
                                width={150} 
                                height={80} 
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <h3>UPower</h3>
                        <p>Инновационные решения для управления электропитанием и защиты электрооборудования</p>
                        <div className="brand-overlay">
                            <span>Подробнее</span>
                        </div>
                    </Link>
                    
                    <Link href="/brands/digitop" className="brand-card">
                        <div className="brand-logo">
                            <Image 
                                src={DigiTop}
                                alt="DigiTop логотип" 
                                width={150} 
                                height={80} 
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <h3>DigiTop</h3>
                        <p>Цифровые системы контроля и автоматизации для промышленных и бытовых объектов</p>
                        <div className="brand-overlay">
                            <span>Подробнее</span>
                        </div>
                    </Link>
                    
                    <Link href="/brands/bluesun-solar" className="brand-card">
                        <div className="brand-logo">
                            <Image 
                                src={Bluesun}
                                alt="BlueSun Solar логотип" 
                                width={150} 
                                height={80} 
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <h3>BlueSun Solar</h3>
                        <p>Солнечные панели и комплектующие для альтернативных источников энергии</p>
                        <div className="brand-overlay">
                            <span>Подробнее</span>
                        </div>
                    </Link>
                    
                    <Link href="/brands/songri" className="brand-card">
                        <div className="brand-logo">
                            <Image 
                                src={Songri}
                                alt="Songri логотип" 
                                width={150} 
                                height={80} 
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <h3>Songri</h3>
                        <p>Высококачественное электротехническое оборудование для промышленного применения</p>
                        <div className="brand-overlay">
                            <span>Подробнее</span>
                        </div>
                    </Link>
                </section>

                <section className="brands-cta animate-section">
                    <h2>Нужна консультация по выбору оборудования?</h2>
                    <p>Наши специалисты помогут подобрать оптимальное решение для ваших задач</p>
                    <Link href="/contact" className="cta-button">
                        Связаться с нами
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default Brands;