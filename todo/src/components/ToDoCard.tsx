import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";

const ToDoCard = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-veryLightGray text-veryDarkGrayishBlue"
          : "bg-veryDarkGrayishBlueDarker text-veryLightGrayishBlue"
      } w-full max-w-lg p-6 rounded-md shadow-md`}
    >
      <ul>
        <li
          className={`flex items-center mb-5 border-b-[1px] ${
            theme === "dark" ? "border-b-veryDarkGrayishBlue" : ""
          }  p-[10px]`}
        >
          <span className="text-blue-500 mr-5">
            {" "}
            <FaCircleCheck />
          </span>
          Complete online JavaScript course
        </li>
        <li className="flex items-center mb-5 border-b-[1px] p-[10px]">
          <span className="text-blue-500 mr-5">
            {" "}
            <FaCircleCheck />
          </span>
          Complete online JavaScript course
        </li>
        <li className="flex items-center mb-5 border-b-[1px] p-[10px] ">
          <span className="text-lightGrayishBlueDark mr-5">
            {" "}
            <MdOutlineRadioButtonUnchecked />
          </span>
          Complete online JavaScript course
        </li>
        <li className="flex items-center mb-5 border-b-[1px] p-[10px]">
          <span className="text-lightGrayishBlueDark mr-5">
            {" "}
            <MdOutlineRadioButtonUnchecked />
          </span>
          Complete online JavaScript course
        </li>
        <li className="flex items-center mb-5 p-[10px]">
          <span className="text-lightGrayishBlueDark mr-5">
            <MdOutlineRadioButtonUnchecked />
          </span>
          Complete online JavaScript course
        </li>
        <li className="flex items-center mb-5 p-[10px]">
          <span className="text-lightGrayishBlueDark mr-5">
            <MdOutlineRadioButtonUnchecked />
          </span>
          Complete online JavaScript course
        </li>
      </ul>

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
