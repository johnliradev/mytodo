import arrowRight from "../assets/right-arrow.png";
import task from "../assets/task.png";
import user from "../assets/user.png";

function Dashboard() {
  return (
    <>
      <div className="max-w-[90%] m-auto">
        <ul className="breadcrums nav bg-">
          <img src={task} alt="" className="icon default" />
          <img src={arrowRight} alt="" className="icon default" />
          <li className="breadcrums items">Dashboard</li>
          <img src={arrowRight} alt="" className="icon default" />
          <li className="breadcrums items set">
            <p>Overview</p>
          </li>
        </ul>
      </div>
      <hr className="hr-dashboard" />

      <div className="flex items-center justify-between max-w-[90%] m-auto">
        <h1 className="px-4 py-3 text-4xl font-semibold">My todo</h1>
        <div className="flex gap-5">
          <button type="button" className="button alternative">
            New task
          </button>
          <button type="button" className="button profile">
            <img src={user} alt="Ícone" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="overview-tasks">
        <div className="list-tasks">
          <div>
            <p className="dot bg-[#17A2B8]"></p>
            <p>To Start</p>
          </div>
        </div>
        <div className="list-tasks">
          <div>
            <p className="dot bg-[#FFC107]"></p>
            <p>In Progress</p>
          </div>
        </div>
        <div className="list-tasks ">
          <div>
            <p className="dot bg-[#8BC34A]"></p>
            <p>Completed</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
