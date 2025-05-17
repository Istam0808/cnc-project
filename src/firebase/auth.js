import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "./config";

// Регистрация пользователя
export const registerUser = async (email, password, name, avatar = null) => {
  try {
    // Создание пользователя
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Обновление профиля пользователя
    const updateData = { displayName: name };
    
    // Если есть аватар, загружаем его
    if (avatar) {
      const avatarRef = ref(storage, `avatars/${user.uid}`);
      await uploadBytes(avatarRef, avatar);
      const avatarUrl = await getDownloadURL(avatarRef);
      updateData.photoURL = avatarUrl;
    }
    
    await updateProfile(user, updateData);
    
    // Возвращаем данные пользователя
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      avatar: user.photoURL
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Вход пользователя
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Возвращаем данные пользователя
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      avatar: user.photoURL
    };
  } catch (error) {
    console.error("Login error:", error.code, error.message);
    // Provide more specific error messages based on error code
    if (error.code === 'auth/invalid-credential') {
      throw new Error('Неверный email или пароль. Пожалуйста, проверьте введенные данные.');
    } else if (error.code === 'auth/user-disabled') {
      throw new Error('Этот аккаунт был отключен. Пожалуйста, свяжитесь с администратором.');
    } else if (error.code === 'auth/user-not-found') {
      throw new Error('Пользователь с таким email не найден.');
    } else if (error.code === 'auth/wrong-password') {
      throw new Error('Неверный пароль.');
    } else {
      throw new Error(error.message);
    }
  }
};

// Вход через Google
export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      avatar: user.photoURL
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Вход через Facebook
export const loginWithFacebook = async () => {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      avatar: user.photoURL
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Выход пользователя
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Получение текущего пользователя
export const getCurrentUser = () => {
  return auth.currentUser;
};