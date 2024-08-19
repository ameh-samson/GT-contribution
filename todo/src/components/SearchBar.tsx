import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import axios from "axios";
import { ToDoProps } from "../types/toDoProps";

const SearchBar = () => {
  const { theme } = useTheme();

  const [toDo, setToDo] = useState<ToDoProps>({
    title: "",
    completed: false,
  });

  const createToDo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setToDo((prevToDo) => ({
      ...prevToDo,
      [name]: value,
    }));
  };

  const postToDo = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!toDo.title) {
      return alert("Can't add an empty field");
    }
    try {
      await axios.post("https://gt-todo-api.onrender.com/todos", {
        title: toDo.title,
        completed: toDo.completed,
      });

      setToDo({
        title: "",
        completed: toDo.completed,
      });
    } catch (error) {
      alert("Failed to add To Do");
    }
  };

  return (
    <div
      className={`flex items-center ${
        theme === "dark" ? "bg-veryDarkBlue" : "bg-veryLightGray "
      } w-full max-w-lg px-6 py-4 rounded-md shadow-md mb-6`}
    >
      <input
        type="text"
        name="title"
        value={toDo.title}
        onChange={createToDo}
        placeholder="Create a new todo..."
        className={`flex-1 bg-transparent  ${
          theme === "dark"
            ? " text-veryLightGrayishBlue"
            : "text-veryDarkGrayishBlue"
        } focus:outline-none`}
      />
      <button
        onClick={postToDo}
        className="ml-4 bg-veryDarkGrayishBlueDarker text-white p-2 rounded-md hover:bg-veryDarkGrayishBlueDark"
      >
        Add
      </button>
    </div>
  );
};

export default SearchBar;
