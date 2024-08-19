import { useTheme } from "../hooks/useTheme";

const SearchBar = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex items-center ${
        theme === "dark" ? "bg-veryDarkBlue" : "bg-veryLightGray "
      } w-full max-w-lg px-6 py-4 rounded-md shadow-md mb-6`}
    >
      <input
        type="text"
        placeholder="Create a new todo..."
        className={`flex-1 bg-transparent  ${
          theme === "dark"
            ? " text-veryLightGrayishBlue"
            : "text-veryDarkGrayishBlue"
        } focus:outline-none`}
      />
      <button className="ml-4 bg-veryDarkGrayishBlueDarker text-white p-2 rounded-md hover:bg-veryDarkGrayishBlueDark">
        Add
      </button>
    </div>
  );
};

export default SearchBar;
