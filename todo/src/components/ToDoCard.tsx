import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToDoProps } from "../types/toDoProps";

const ToDoCard = () => {
  const { theme } = useTheme();
  const [toDos, setToDos] = useState<ToDoProps[]>([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    axios
      .get("https://gt-todo-api.onrender.com/todos")
      .then((response) => setToDos(response.data))
      .catch((error) => console.log(error));
  }, [count]);



  function markToBeUnCompleted(obj: ToDoProps, id: string | undefined) {
    const objParam = { ...obj, completed: false };
    console.log(objParam, "objParam1");

    fetch(`https://gt-todo-api.onrender.com/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objParam)
    })
      .then((res) => res.json())
      .then((result) => {
        setToDos(result);
        setCount(count + 1);
      })
      .catch((err) => console.log(err, "err"));
  }

  function markToBeCompleted(obj: ToDoProps, id: string | undefined) {
    const objParam = { ...obj, completed: true };
    console.log(objParam, "objParam2");

   fetch(`https://gt-todo-api.onrender.com/todos/${id}`, {
    method: "PUT",
    headers: {
       "Content-Type": "application/json"
    },
     body: JSON.stringify(objParam)
   })
    .then((res) => res.json())
     .then((result) => {
       setToDos(result);
       setCount(count + 1);
     })
     .catch((err) => console.log(err, "err"));
}




  return (
    <div
      className={`${
        theme === "light"
          ? "bg-veryLightGray text-veryDarkGrayishBlue"
          : "bg-veryDarkGrayishBlueDarker text-veryLightGrayishBlue"
      } w-full max-w-lg p-6 rounded-md shadow-md`}>
      <ul>
        {Array.isArray(toDos) &&
          toDos?.map((item: ToDoProps) => {
            return (
              <li
                key={item._id}
                className={`flex items-center mb-5 border-b-[1px] ${
                  theme === "dark" ? "border-b-veryDarkGrayishBlue" : ""
                }  p-[10px]`}>
                <span className="text-blue-500 mr-5 ">
                  {item.completed === true ? (
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
                  className={`${
                    item.completed === true ? "line-through" : ""
                  }`}>
                  {item.title}
                </span>
              </li>
            );
          })}
      </ul>{" "}
      <div className="flex justify-between border-t-[1px] p-[10px]">
        <button className="cursor-pointer">5 items left</button>
        <button   className="cursor-pointer">All</button>
        <button  className="cursor-pointer">Active</button>
        <button   className="cursor-pointer">Completed</button>
        <button className="cursor-pointer">Clear Completed</button>
      </div>

    </div>
  );
};

export default ToDoCard;
