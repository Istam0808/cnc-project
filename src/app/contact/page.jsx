'use client';

import Link from 'next/link';
import { FaTelegram, FaMapMarkedAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './style.scss';

function Contact() {
    const [isMapLoading, setIsMapLoading] = useState(true);
    
    const handleMapLoad = () => {
        setIsMapLoading(false);
    };
    
    return (
        <div className="contact-container">
            <h1>Контакты</h1>
            <div className="breadcrumbs">
                <Link href="/explore">Главная</Link> / Контакты
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2 className="phone">+998 90 191 49 90</h2>
                    <p className="address">
                        Самарканд, Туркестанская улица, 30
                    </p>
                    <a href="https://t.me/CNCElectricSamarqand" className="telegram-link">
                        <FaTelegram size={34} />
                    </a>
                </div>

                <div className="map-container">
                    {isMapLoading && (
                        <div className="map-loading">
                            <FaMapMarkedAlt size={50} />
                            <p>Загрузка карты...</p>
                        </div>
                    )}
                    <iframe
                        src="https://yandex.uz/map-widget/v1/?oid=169801177160&ll=66.919351,39.646627&z=17&pt=66.919351,39.646627,pm2rdm~&text=Electro%20market%20Cnc"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        title="Карта расположения офиса"
                        onLoad={handleMapLoad}
                        style={{ opacity: isMapLoading ? 0 : 1 }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;