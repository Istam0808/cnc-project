import '../assets/styles/globals.scss';
import Header from './components/Nav';
import Footer from './components/Footer';

export const metadata = {
  title: 'Next.js CNC Project',
  description: 'Проект на Next.js с использованием JSX, SCSS и Firebase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <div className='page-container'>
          <main
            className='content-wrap'>
            {children}
          </main>
        <Footer />
        </div>
      </body>
    </html>
  )
}