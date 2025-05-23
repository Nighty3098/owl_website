import { useState, useEffect } from "react";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // При загрузке компонента проверяем сохраненную тему
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  // Функция для переключения темы
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleTheme };
};

export default useTheme;
