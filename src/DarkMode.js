import { useEffect } from "react"

export const DarkMode = (mode, setMode) => {
    const parent =  document.querySelector('.body')

    useEffect(() => {
        if(parent.classList.contains('dark')){
          setMode(true)
        }else{
          setMode(false)
        }
      },[mode])
  
      // 1. Проверка темной темы на уровне системных настроек
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
          parent.classList.add("dark");
      }
      
      // 2. Проверка темной темы в localStorage
      if (localStorage.getItem('darkMode') === 'dark') {
          parent.classList.add("dark");
      } else if (localStorage.getItem("darkMode") === "light") {
          parent.classList.remove("dark");
      }
      
      // Если меняются системные настройки, меняем тему
      window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", (event) => {
              const newColorScheme = event.matches ? "dark" : "light";
          if (newColorScheme === "dark") {
      
            parent.classList.add("dark");
            localStorage.setItem("darkMode", "dark");
          } else {
            parent.remove("dark");
            localStorage.setItem("darkMode", "light");
          }
          });     
}