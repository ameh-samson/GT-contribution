import bgDesktopLight from "../assets/jpg/bg-desktop-light.jpg";
import bgDesktopDark from "../assets/jpg/bg-desktop-dark.jpg";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import ToDoCard from "../components/ToDoCard";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col relative ${
        theme === "light" ? "bg-veryLightGray" : "bg-veryDarkBlue"
      }`}
    >
      <div className="flex-1">
        {theme === "dark" ? (
          <img
            src={bgDesktopDark}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={bgDesktopLight}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex-auto"></div>

      <div className="flex flex-col items-center mt-[-170px]  mb-14">
        <Title />
        <SearchBar />
        <ToDoCard />
      </div>
    </div>
  );
}
