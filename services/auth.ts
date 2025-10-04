
import { User } from '../types';

// --- MOCK FIREBASE AUTH ---
// This is a placeholder for actual Firebase authentication.

let currentUser: User | null = null;
const listeners: ((user: User | null) => void)[] = [];

const mockUser: User = {
  id: 'uid-123',
  email: 'business@loyalfly.com',
  businessName: 'The Coffee Spot'
};

const notifyListeners = () => {
  listeners.forEach(listener => listener(currentUser));
};

export const authService = {
  login: async (email: string, pass: string): Promise<User | null> => {
    console.log(`Attempting login for ${email}`);
    return new Promise(resolve => {
      setTimeout(() => {
        // Simulate a successful login with specific credentials
        if (email === 'business@loyalfly.com' && pass === 'password123') {
          currentUser = mockUser;
          notifyListeners();
          resolve(mockUser);
        } else {
          resolve(null);
        }
      }, 1000);
    });
  },
  logout: async (): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        currentUser = null;
        notifyListeners();
        resolve();
      }, 500);
    });
  }
};

export const onAuthStateChanged = (callback: (user: User | null) => void): (() => void) => {
  listeners.push(callback);
  // Immediately call with current state
  callback(currentUser);

  // Return an unsubscribe function
  return () => {
    const index = listeners.indexOf(callback);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
};
