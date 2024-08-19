import moonIcon from "../assets/svg/icon-moon.svg";
import sunIcon from "../assets/svg/icon-sun.svg";
import { useTheme } from "../hooks/useTheme";

const Title = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const isLightTheme = theme === "light";
  return (
    <div className="w-full max-w-lg flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold">TODO</h1>

      <button onClick={() => setTheme(isLightTheme ? "dark" : "light")}>
        <img src={isLightTheme ? moonIcon : sunIcon} alt="" />
      </button>
    </div>
  );
};

export default Title;
