'use client';

import Link from 'next/link';
import './not-found.scss';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует или была перемещена.</p>
      <Link href="/explore" className="back-button">
        Вернуться на главную
      </Link>
    </div>
  );
}