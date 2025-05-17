import { auth } from './config';
import { onAuthStateChanged } from 'firebase/auth';

/**
 * Проверяет, авторизован ли пользователь через Firebase
 * @returns {Promise<Object|null>} Объект пользователя или null, если пользователь не авторизован
 */
export const checkAuthState = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, 
      (user) => {
        unsubscribe();
        if (user) {
          resolve({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            avatar: user.photoURL
          });
        } else {
          resolve(null);
        }
      }, 
      (error) => {
        unsubscribe();
        reject(error);
      }
    );
  });
};

/**
 * Получает текущего пользователя из Firebase
 * @returns {Object|null} Объект пользователя или null
 */
export const getCurrentUser = () => {
  const user = auth.currentUser;
  if (!user) return null;
  
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    avatar: user.photoURL
  };
};