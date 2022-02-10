import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
// console.log(ThemeContext);

const initialTheme = JSON.parse(localStorage.getItem('theme')) || '';

const initialBtnIcon = JSON.parse(localStorage.getItem('btnIcon') || false);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);
  const [btnSvg, setBtnSvg] = useState(initialBtnIcon);

  const handleTheme = (e) => {
    if (btnSvg) {
      setTheme('light');
      setBtnSvg(!btnSvg);
    } else {
      setTheme('dark');
      setBtnSvg(!btnSvg);
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    localStorage.setItem('btnIcon', JSON.stringify(btnSvg));
  }, [theme, btnSvg]);

  const data = { theme, handleTheme, btnSvg };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };

export default ThemeContext;
