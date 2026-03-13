import { useState } from "react";

const ThemeChange = () => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    console.log("Theme changed");
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    document.body.style.backgroundColor = theme === "dark" ? "black" : "white";
    document.body.style.color = theme === "dark" ? "white" : "black";
  };

  console.log(theme);

  return (
    <section>
      <h1>Theme Change Task</h1>

      <button onClick={handleTheme}>{theme}</button>
    </section>
  );
};

export default ThemeChange;
