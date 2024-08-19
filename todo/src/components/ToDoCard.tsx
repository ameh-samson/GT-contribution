import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToDoProps } from "../types/toDoProps";

const ToDoCard = () => {
  const { theme } = useTheme();
  const [toDos, setToDos] = useState<ToDoProps[]>([]);

  useEffect(() => {
    axios
      .get("https://gt-todo-api.onrender.com/todos")
      .then((response) => setToDos(response.data))
      .catch((error) => console.log(error));
  }, [toDos]);

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-veryLightGray text-veryDarkGrayishBlue"
          : "bg-veryDarkGrayishBlueDarker text-veryLightGrayishBlue"
      } w-full max-w-lg p-6 rounded-md shadow-md`}
    >
      <ul>
        {toDos.map((item: ToDoProps, id: number) => {
          return (
            <li
              key={id}
              className={`flex items-center mb-5 border-b-[1px] ${
                theme === "dark" ? "border-b-veryDarkGrayishBlue" : ""
              }  p-[10px]`}
            >
              <span className="text-blue-500 mr-5">
                {item.completed ? (
                  <FaCircleCheck />
                ) : (
                  <MdOutlineRadioButtonUnchecked />
                )}
              </span>
              {item.title}
            </li>
          );
        })}
      </ul>{" "}
      <div className="flex justify-between border-t-[1px] p-[10px]">
        <span>5 items left</span>
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
        <span>Clear Completed</span>
      </div>
    </div>
  );
};

export default ToDoCard;
