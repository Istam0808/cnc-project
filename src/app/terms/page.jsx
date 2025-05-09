'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaShieldAlt, FaFileContract, FaUserLock, FaHandshake } from 'react-icons/fa';
import './style.scss';

function Terms() {
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
        <div className="terms-container">
            <h1>Условия использования</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / Условия использования
            </div>

            <div className="terms-content">
                <section className="terms-intro animate-section">
                    <div className="intro-icon">
                        <FaFileContract />
                    </div>
                    <p>
                        Добро пожаловать на сайт компании CNC Electric. Используя наш сайт, вы соглашаетесь с настоящими условиями использования. Пожалуйста, внимательно ознакомьтесь с ними перед началом использования сайта.
                    </p>
                </section>

                <section className="terms-section animate-section">
                    <h2>1. Общие положения</h2>
                    <div className="section-icon">
                        <FaHandshake />
                    </div>
                    <div className="section-content">
                        <p>
                            1.1. Настоящие Условия использования (далее — «Условия») регулируют отношения между компанией CNC Electric (далее — «Компания») и пользователями сайта (далее — «Пользователи»).
                        </p>
                        <p>
                            1.2. Используя сайт, Пользователь подтверждает, что ознакомился с настоящими Условиями, понимает их и соглашается с ними. Если Пользователь не согласен с Условиями, он должен прекратить использование сайта.
                        </p>
                        <p>
                            1.3. Компания оставляет за собой право в любое время изменять, добавлять или удалять части настоящих Условий без предварительного уведомления. Пользователь обязуется регулярно проверять Условия на наличие изменений.
                        </p>
                    </div>
                </section>

                <section className="terms-section animate-section">
                    <h2>2. Использование сайта</h2>
                    <div className="section-icon">
                        <FaUserLock />
                    </div>
                    <div className="section-content">
                        <p>
                            2.1. Пользователь обязуется использовать сайт только в законных целях и в соответствии с настоящими Условиями.
                        </p>
                        <p>
                            2.2. При использовании сайта запрещается:
                        </p>
                        <ul>
                            <li>Нарушать права интеллектуальной собственности Компании или третьих лиц;</li>
                            <li>Загружать, отправлять или распространять любые материалы, содержащие вирусы, вредоносные программы или коды;</li>
                            <li>Использовать сайт для распространения рекламы или спама;</li>
                            <li>Выдавать себя за другое лицо или организацию;</li>
                            <li>Нарушать работу сайта или серверов.</li>
                        </ul>
                        <p>
                            2.3. Компания оставляет за собой право ограничить доступ Пользователя к сайту в случае нарушения настоящих Условий.
                        </p>
                    </div>
                </section>

                <section className="terms-section animate-section">
                    <h2>3. Интеллектуальная собственность</h2>
                    <div className="section-icon">
                        <FaShieldAlt />
                    </div>
                    <div className="section-content">
                        <p>
                            3.1. Все материалы, размещенные на сайте, включая тексты, изображения, логотипы, товарные знаки, программное обеспечение и другие объекты интеллектуальной собственности, принадлежат Компании или используются с разрешения правообладателей.
                        </p>
                        <p>
                            3.2. Пользователь не имеет права копировать, воспроизводить, распространять, публиковать, изменять или иным образом использовать материалы сайта без письменного разрешения Компании.
                        </p>
                        <p>
                            3.3. Использование материалов сайта в коммерческих целях без письменного разрешения Компании строго запрещено.
                        </p>
                    </div>
                </section>

                <section className="terms-section animate-section">
                    <h2>4. Ограничение ответственности</h2>
                    <div className="section-content">
                        <p>
                            4.1. Компания не гарантирует, что сайт будет функционировать без перерывов и ошибок. Сайт предоставляется «как есть» без каких-либо гарантий.
                        </p>
                        <p>
                            4.2. Компания не несет ответственности за любые прямые, косвенные, случайные, специальные или последующие убытки, возникшие в результате использования или невозможности использования сайта.
                        </p>
                        <p>
                            4.3. Компания не несет ответственности за содержание сторонних сайтов, на которые могут вести ссылки с нашего сайта.
                        </p>
                    </div>
                </section>

                <section className="terms-section animate-section">
                    <h2>5. Применимое право</h2>
                    <div className="section-content">
                        <p>
                            5.1. Настоящие Условия регулируются и толкуются в соответствии с законодательством Республики Узбекистан.
                        </p>
                        <p>
                            5.2. Любые споры, возникающие в связи с использованием сайта, подлежат разрешению в соответствии с законодательством Республики Узбекистан.
                        </p>
                    </div>
                </section>

                <section className="terms-section animate-section">
                    <h2>6. Контактная информация</h2>
                    <div className="section-content">
                        <p>
                            6.1. Если у вас возникли вопросы или предложения относительно настоящих Условий, пожалуйста, свяжитесь с нами:
                        </p>
                        <div className="contact-info">
                            <p>Телефон: +998 90 191 49 90</p>
                            <p>Адрес: Самарканд, Туркестанская улица, 30</p>
                            <p>Email: info@cncelectric.uz</p>
                        </div>
                    </div>
                </section>

                <div className="terms-footer animate-section">
                    <p>Последнее обновление: {new Date().toLocaleDateString()}</p>
                    <Link href="/privacy" className="related-link">
                        Перейти к Политике конфиденциальности
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Terms;