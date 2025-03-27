import React, { useState } from "react";
import "./app.css";
import Dashboard from "./components/dashboard.jsx";
import ProfileView from "./components/profileView.jsx";
import dashboardIcon from "./assets/dashboard.png";
import userIcon from "./assets/user.png";

function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      <div className="flex">
        <div className="p-7 flex flex-col gap-5">
          <h1 className="px-4 py-3 text-white text-3xl font-semibold">ToDo</h1>
          <ul className="gap-2 flex flex-col">
            <li>
              <button
                className="button main"
                type="button"
                onClick={() => handleButtonClick("dashboard")}
              >
                <img src={dashboardIcon} alt="" className="icon default" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                className="button main"
                type="button"
                onClick={() => handleButtonClick("profile")}
              >
                <img src={userIcon} alt="" className="icon default" />
                Profile
              </button>
            </li>
          </ul>
        </div>
        <div className="overview flex-1">
          {currentView === "dashboard" && <Dashboard />}
          {currentView === "profile" && <ProfileView />}
        </div>
      </div>
    </>
  );
}

export default App;
