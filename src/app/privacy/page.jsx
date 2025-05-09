'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaUserShield, FaLock, FaDatabase, FaCookieBite, FaGlobe } from 'react-icons/fa';
import './style.scss';

function Privacy() {
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
        <div className="privacy-container">
            <h1>Политика конфиденциальности</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / Политика конфиденциальности
            </div>

            <div className="privacy-content">
                <section className="privacy-intro animate-section">
                    <div className="intro-icon">
                        <FaUserShield />
                    </div>
                    <p>
                        Компания CNC Electric уважает вашу конфиденциальность и стремится защищать ваши персональные данные. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем и защищаем информацию, которую вы предоставляете при использовании нашего сайта.
                    </p>
                </section>

                <section className="privacy-section animate-section">
                    <h2>1. Сбор информации</h2>
                    <div className="section-icon">
                        <FaDatabase />
                    </div>
                    <div className="section-content">
                        <p>
                            1.1. Мы можем собирать следующие типы персональных данных:
                        </p>
                        <ul>
                            <li>Контактная информация (имя, адрес электронной почты, номер телефона);</li>
                            <li>Информация о компании (название, адрес, ИНН);</li>
                            <li>Информация о входе в систему (имя пользователя, пароль);</li>
                            <li>Информация об использовании сайта (IP-адрес, тип браузера, время посещения).</li>
                        </ul>
                        <p>
                            1.2. Мы собираем персональные данные, когда вы:
                        </p>
                        <ul>
                            <li>Регистрируетесь на нашем сайте;</li>
                            <li>Заполняете формы обратной связи;</li>
                            <li>Подписываетесь на нашу рассылку;</li>
                            <li>Оформляете заказ на нашем сайте.</li>
                        </ul>
                    </div>
                </section>

                <section className="privacy-section animate-section">
                    <h2>2. Использование информации</h2>
                    <div className="section-icon">
                        <FaLock />
                    </div>
                    <div className="section-content">
                        <p>
                            2.1. Мы используем собранную информацию для следующих целей:
                        </p>
                        <ul>
                            <li>Предоставление и улучшение наших услуг;</li>
                            <li>Обработка и выполнение ваших заказов;</li>
                            <li>Отправка информационных и рекламных материалов (с вашего согласия);</li>
                            <li>Ответы на ваши запросы и обращения;</li>
                            <li>Анализ использования сайта и улучшение пользовательского опыта;</li>
                            <li>Обеспечение безопасности нашего сайта и предотвращение мошенничества.</li>
                        </ul>
                        <p>
                            2.2. Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством.
                        </p>
                    </div>
                </section>

                <section className="privacy-section animate-section">
                    <h2>3. Файлы cookie</h2>
                    <div className="section-icon">
                        <FaCookieBite />
                    </div>
                    <div className="section-content">
                        <p>
                            3.1. Наш сайт использует файлы cookie для улучшения пользовательского опыта и анализа использования сайта.
                        </p>
                        <p>
                            3.2. Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайта.
                        </p>
                        <p>
                            3.3. Мы используем следующие типы файлов cookie:
                        </p>
                        <ul>
                            <li>Необходимые файлы cookie — для обеспечения работы основных функций сайта;</li>
                            <li>Аналитические файлы cookie — для анализа использования сайта и улучшения его работы;</li>
                            <li>Функциональные файлы cookie — для запоминания ваших предпочтений и настроек;</li>
                            <li>Рекламные файлы cookie — для показа релевантной рекламы.</li>
                        </ul>
                        <p>
                            3.4. Вы можете отключить использование файлов cookie в настройках вашего браузера, однако это может повлиять на функциональность сайта.
                        </p>
                    </div>
                </section>

                <section className="privacy-section animate-section">
                    <h2>4. Защита информации</h2>
                    <div className="section-content">
                        <p>
                            4.1. Мы принимаем соответствующие меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                        </p>
                        <p>
                            4.2. Мы используем различные технические и организационные меры безопасности, включая шифрование данных, брандмауэры и контроль доступа.
                        </p>
                        <p>
                            4.3. Несмотря на принимаемые меры, мы не можем гарантировать абсолютную безопасность передачи данных через интернет или электронное хранилище.
                        </p>
                    </div>
                </section>

                <section className="privacy-section animate-section">
                    <h2>5. Ваши права</h2>
                    <div className="section-icon">
                        <FaGlobe />
                    </div>
                    <div className="section-content">
                        <p>
                            5.1. В соответствии с законодательством о защите данных, вы имеете следующие права:
                        </p>
                        <ul>
                            <li>Право на доступ к вашим персональным данным;</li>
                            <li>Право на исправление неточных или неполных данных;</li>
                            <li>Право на удаление ваших персональных данных;</li>
                            <li>Право на ограничение обработки ваших данных;</li>
                            <li>Право на возражение против обработки ваших данных;</li>
                            <li>Право на перенос данных;</li>
                            <li>Право отозвать согласие на обработку данных.</li>
                        </ul>
                        <p>
                            5.2. Для реализации этих прав, пожалуйста, свяжитесь с нами по контактным данным, указанным в разделе 7.
                        </p>
                    </div>
                </section>

                <section className="privacy-section animate-section">
                    <h2>6. Изменения в политике конфиденциальности</h2>
                    <div className="section-content">
                        <p>
                            6.1. Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности в любое время.
                        </p>
                        <p>
                            6.2. Актуальная версия Политики конфиденциальности всегда доступна на нашем сайте.
                        </p>
                        <p>
                            6.3. Мы рекомендуем периодически проверять эту страницу для ознакомления с возможными изменениями.
                        </p>
                    </div>
                </section>

                <section className="privacy-section animate-section">
                    <h2>7. Контактная информация</h2>
                    <div className="section-content">
                        <p>
                            7.1. Если у вас возникли вопросы или предложения относительно нашей Политики конфиденциальности, пожалуйста, свяжитесь с нами:
                        </p>
                        <div className="contact-info">
                            <p>Телефон: +998 90 191 49 90</p>
                            <p>Адрес: Самарканд, Туркестанская улица, 30</p>
                            <p>Email: info@cncelectric.uz</p>
                        </div>
                    </div>
                </section>

                <div className="privacy-footer animate-section">
                    <p>Последнее обновление: {new Date().toLocaleDateString()}</p>
                    <Link href="/terms" className="related-link">
                        Перейти к Условиям использования
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Privacy;