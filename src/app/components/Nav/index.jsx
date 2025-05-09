'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaShoppingBag, FaChevronDown , FaSignInAlt} from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import Logo from '../../../assets/images/logo.png';
import './style.scss';

export default function Nav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Обработчики для hover эффекта
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 60); // Небольшая задержка перед закрытием для лучшего UX
  };

  const brands = [
    { name: 'UPower', path: '/brands/upower' },
    { name: 'DigiTop', path: '/brands/digitop' },
    { name: 'BlueSun Solar', path: '/brands/bluesun-solar' },
    { name: 'Songri', path: '/brands/songri' },
  ];

  return (
    <div className="nav-container">
      <div className="left">
        <div className="logo">
          <Link href="/explore">
            <Image
              src={Logo}
              alt="Логотип компании"
              width={150}
              height={40}
              priority
              quality={100}
            />
          </Link>
        </div>
      </div>
      <div className="right" >
        <Link href="/explore" className={pathname === '/explore' ? 'active' : ''}>
          <FaHome className="icon" />
          Главная
        </Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
          <FaInfoCircle className="icon" />
          О нас
        </Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
          <FaPhoneAlt className="icon" />
          Контакты
        </Link>
        <div
          className={`dropdown-container ${pathname.startsWith('/brands') ? 'active' : ''}`}
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href="/brands"
            className={`dropdown-trigger ${pathname === '/brands' ? 'active' : ''}`}
          >
            <FaShoppingBag className="icon" />
            Бренды
            <FaChevronDown className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
          </Link>
          <div className={`dropdown-menu ${dropdownOpen ? 'visible' : ''}`}>
            <Link href="/brands" className={pathname === '/brands' ? 'active' : ''}>
              Все бренды
            </Link>
            {brands.map((brand, index) => (
              <Link
                key={index}
                href={brand.path}
                className={pathname === brand.path ? 'active' : ''}
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
        <Link href='/auth/login'>
          <FaSignInAlt className="icon" />
          Логин
        </Link>
      </div>
    </div>
  );
}