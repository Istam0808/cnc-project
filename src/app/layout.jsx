import '../assets/styles/globals.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { AuthProvider } from '../context/AuthContext';

export const metadata = {
  title: 'Next.js CNC Project',
  description: 'Проект на Next.js с использованием JSX, SCSS и Firebase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <AuthProvider>
          <Nav />
          <div className='page-container'>
            <main
              className='content-wrap'>
              {children}
            </main>
          <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}