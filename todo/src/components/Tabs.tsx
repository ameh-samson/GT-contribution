import { useState } from "react";

const Tabs = () => {

  const [activeTab, setActiveTab] = useState("tab1");


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>

      <div className="tabs flex justify-around gap-[90px]">
        <button
          className={activeTab === "tab1" ? "text-slate-500" : "text-slate-900"}
          onClick={() => handleTabClick("tab1")}
        >
          Complete
        </button>
        <button
          className={activeTab === "tab2" ? "text-slate-500" : " text-slate-900"}
          onClick={() => handleTabClick("tab2")}
        >
          Uncompleted
        </button>
        <button
          className={activeTab === "tab3" ? "text-slate-500" : " text-slate-900"}
          onClick={() => handleTabClick("tab3")}
        >
          All
        </button>
      </div>

      {/* Tab info */}
      <div className="mt-[20px] ">
        <div>
          {activeTab === "tab1" && (
            <div className="text-slate-500">Content for Tab 1</div>
          )}
        </div>
        <div>
          {activeTab === "tab2" && (
            <div className="text-slate-500">Content for Tab 2</div>
          )}
        </div>
        <div>
          {activeTab === "tab3" && (
            <div className="text-slate-500">Content for Tab 3</div>
          )}
        </div>


      </div>
    </div>
  );
};

export default Tabs;
