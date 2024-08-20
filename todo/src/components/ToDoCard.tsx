import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToDoProps } from "../types/toDoProps";
import { Filters, initialFilters } from "../types";
const ToDoCard = () => {
  const { theme } = useTheme();
  const [toDos, setToDos] = useState<ToDoProps[]>([]);
  const [count, setCount] = useState(0);

  const [filter, setFilter] = useState<Filters>(initialFilters);

  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const response = await axios.get(
          "https://gt-todo-api.onrender.com/todos"
        );
        setToDos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchToDos();
  }, []);

  function markToBeUnCompleted(
    item: ToDoProps,
    _id: string | undefined,
  ) {
    const updatedTodo = { ...item, completed: false };

    fetch(`https://gt-todo-api.onrender.com/todos/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        setToDos((prevToDos) => {
          return prevToDos.map((item) => {
            if (item._id === updatedItem._id) {
              return updatedItem;
            } else {
              return item;
            }
          });
        });
      })

      .catch((err) => console.log("Error updating todo:", err));
  }

  function markToBeCompleted(
    item: ToDoProps,
    _id: string | undefined,
  ) {
    const updatedTodo = { ...item, completed: !item.completed };

    fetch(`https://gt-todo-api.onrender.com/todos/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        setToDos((prevToDos) => {
          return prevToDos.map((item) => {
            if (item._id === updatedItem._id) {
              return updatedItem;
            } else {
              return item;
            }
          });
        });
      })

      .catch((err) => console.log("Error updating todo:", err));
  }

  const filteredData = toDos.filter((item) => {
    if (filter.types === "all") {
      return item;
    } else if (filter.types === "completed") {
      return item.completed === true;
    } else if (filter.types === "uncompleted") {
      return item.completed === false;
    }
    return false;
  });

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-veryLightGray text-veryDarkGrayishBlue"
          : "bg-veryDarkGrayishBlueDarker text-veryLightGrayishBlue"
      } w-full max-w-lg p-6 rounded-md shadow-md`}
    >
      <ul>
        {filteredData.map((item, index) => {
          return (
            <li
              key={index}
              className={`flex items-center mb-5 border-b-[1px] ${
                theme === "dark" ? "border-b-veryDarkGrayishBlue" : ""
              }  p-[10px]`}
            >
              <span className="text-blue-500 mr-5 ">
                {item.completed ? (
                  <FaCircleCheck
                    className="cursor-pointer"
                    onClick={() => markToBeUnCompleted(item, item._id)}
                  />
                ) : (
                  <MdOutlineRadioButtonUnchecked
                    className="cursor-pointer"
                    onClick={() => markToBeCompleted(item, item._id)}
                  />
                )}
              </span>
              <span
                className={`${item.completed === true ? "line-through" : ""}`}
              >
                {item.title}
              </span>
            </li>
          );
        })}
      </ul>{" "}
      <div className="flex justify-between border-t-[1px] p-[10px]">
        <button className="cursor-pointer">{toDos.length} items left</button>
        <button
          onClick={() => setFilter({ types: "all" })}
          className="cursor-pointer"
        >
          All
        </button>
        <button
          onClick={() => setFilter({ types: "completed" })}
          className="cursor-pointer"
        >
          Completed
        </button>
        <button
          onClick={() => setFilter({ types: "uncompleted" })}
          className="cursor-pointer"
        >
          Incompleted
        </button>
      </div>
    </div>
  );
};

export default ToDoCard;
