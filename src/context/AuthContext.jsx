import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Check for an existing session cookie when the app loads
  useEffect(() => {
    const session = Cookies.get('sarathi_session');
    if (session) {
      setUser(JSON.parse(session));
    }
  }, []);

  const login = (userData) => {
    // Set a cookie that expires in 7 days
    Cookies.set('sarathi_session', JSON.stringify(userData), { expires: 7 });
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('sarathi_session');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);