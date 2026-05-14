import Sidebar from "../components/Sidebar";
import { useDeployment } from "../context/DeploymentContext";
import { useState } from "react";
function Dashboard() {
  
  const userName = localStorage.getItem("userName");
  const [showModal, setShowModal] = useState(false);

const [appName, setAppName] = useState("");
const { deployments, addDeployment } = useDeployment();

const handleDeployment = () => {

  if (!appName) return;

  addDeployment({
    service: appName,
    environment: "Production",
    version: "v1.0.0",
    replicas: 2,
    pods: 2,
    image: `${appName.toLowerCase()}:v1`,
  });

  setAppName("");

  setShowModal(false);
};

    

  
  return (
    <div className="bg-[#050816] min-h-screen text-white flex">

    <Sidebar />


      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-6">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              DevOps Dashboard
            </h1>
            <p className="text-cyan-400 text-xl mt-2">
              Welcome, {userName} 👋
            </p>

            <p className="text-gray-400 text-xl">
              Monitor infrastructure, deployments & Kubernetes clusters.
            </p>

          </div>

<button
  onClick={() => setShowModal(true)}
  className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-2xl text-lg font-bold transition hover:scale-105"
>
  New Deployment
</button>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 pb-16">
            <h2 className="text-5xl font-bold text-cyan-400">
              {deployments.length * 2}
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Running Pods
            </p>
          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-cyan-400">
              {deployments.length}
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Active Services
            </p>
          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-cyan-400">
              {99 + deployments.length / 10}%
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Infrastructure Uptime
            </p>
          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-cyan-400">
              {deployments.length * 100}K
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              API Requests
            </p>
          </div>

        </div>

        {/* Deployment Table */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mb-12 overflow-x-auto">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-bold">
              Active Deployments
            </h2>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
              Live
            </span>

          </div>

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-gray-800 text-gray-400">

                <th className="pb-4">Service</th>
                <th className="pb-4">Environment</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Version</th>

              </tr>

            </thead>

            <tbody>

  {deployments.map((deployment, index) => (

    <tr key={index} className="border-b border-gray-800">

      <td className="py-6">
        {deployment.service}
      </td>

      <td>
        {deployment.environment}
      </td>

      <td className="text-green-400">
        {deployment.status}
      </td>

      <td>
        {deployment.version}
      </td>

    </tr>

  ))}

</tbody>

          </table>

        </div>

{/* Analytics Section */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

  {/* Deployment Chart */}
<div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

    <div className="flex items-center justify-between mb-8">

      <h2 className="text-3xl font-bold">
        Deployment Trends
      </h2>

      <span className="text-cyan-400">
        Weekly
      </span>

    </div>

    <div className="flex items-end justify-between h-[220px] gap-4 mb-8">

      <div className="flex flex-col items-center w-full">
        <div className="bg-cyan-400 w-full rounded-t-xl h-[80px]"></div>
        <span className="mt-3 text-gray-400">Mon</span>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="bg-cyan-400 w-full rounded-t-xl h-[120px]"></div>
        <span className="mt-3 text-gray-400">Tue</span>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="bg-cyan-400 w-full rounded-t-xl h-[100px]"></div>
        <span className="mt-3 text-gray-400">Wed</span>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="bg-cyan-400 w-full rounded-t-xl h-[170px]"></div>
        <span className="mt-3 text-gray-400">Thu</span>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="bg-cyan-400 w-full rounded-t-xl h-[220px]"></div>
        <span className="mt-3 text-gray-400">Fri</span>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="bg-cyan-400 w-full rounded-t-xl h-[150px]"></div>
        <span className="mt-3 text-gray-400">Sat</span>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="bg-cyan-400 w-full rounded-t-xl h-[190px]"></div>
        <span className="mt-3 text-gray-400">Sun</span>
      </div>

    </div>

  </div>
  {/* Dynamic Deployment Trends
<div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

  <div className="flex items-center justify-between mb-8">
    <h2 className="text-white text-xl">
  Deployments: {deployments.length}
</h2>

    <h2 className="text-3xl font-bold">
      Deployment Trends
    </h2>

    <span className="text-cyan-400">
      Weekly
    </span>

  </div>

  {(() => {

    const days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    const currentDay = new Date().getDay();

    const deploymentData = [
      40,
      55,
      48,
      72,
      65,
      58,
      50,
    ];

    deploymentData[currentDay] +=
      deployments.length * 25;

    return (

      <div className="flex items-end justify-between h-[250px] gap-4">

        {deploymentData.map((height, index) => (

          <div
            key={index}
            className="flex flex-col items-center flex-1"
          >

            <div
              className={`w-full rounded-t-2xl transition-all duration-500 ${
                index === currentDay
                  ? "bg-cyan-400"
                  : "bg-cyan-700"
              }`}
              style={{
                height: `${height}%`,
              }}
            ></div>

            <span
              className={`mt-4 ${
                index === currentDay
                  ? "text-cyan-400"
                  : "text-gray-400"
              }`}
            >

              {days[index]}

            </span>

          </div>

        ))}

      </div>

    );

  })()}

</div> */}

  {/* Traffic Chart */}
  <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

    <div className="flex items-center justify-between mb-8">

      <h2 className="text-3xl font-bold">
        API Traffic Analytics
      </h2>

      <span className="text-green-400">
        Live
      </span>

    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">

      <div>

        <div className="flex justify-between mb-2">
          <span>1 PM</span>
          <span>2.4K</span>
        </div>

        <div className="w-full bg-gray-800 h-4 rounded-full">
          <div className="bg-cyan-400 h-4 rounded-full w-[45%]"></div>
        </div>

      </div>

      <div>

        <div className="flex justify-between mb-2">
          <span>2 PM</span>
          <span>3.2K</span>
        </div>

        <div className="w-full bg-gray-800 h-4 rounded-full">
          <div className="bg-cyan-400 h-4 rounded-full w-[60%]"></div>
        </div>

      </div>

      <div>

        <div className="flex justify-between mb-2">
          <span>3 PM</span>
          <span>4.1K</span>
        </div>

        <div className="w-full bg-gray-800 h-4 rounded-full">
          <div className="bg-cyan-400 h-4 rounded-full w-[75%]"></div>
        </div>

      </div>

      <div>

        <div className="flex justify-between mb-2">
          <span>4 PM</span>
          <span>5.2K</span>
        </div>

        <div className="w-full bg-gray-800 h-4 rounded-full">
          <div className="bg-cyan-400 h-4 rounded-full w-[90%]"></div>
        </div>

      </div>

    </div>

        </div>

    </div>

          {/* Deployment Activity */}
{/* <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mt-10">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-3xl font-bold">
      Deployment Activity
    </h2>

    <span className="text-green-400">
      Active
    </span>

  </div>

  <div className="space-y-5">

    <div className="flex items-center justify-between bg-[#111827] p-5 rounded-2xl">
      <span>Frontend Deployment</span>

      <span className="text-green-400">
        Successful
      </span>
    </div>

    <div className="flex items-center justify-between bg-[#111827] p-5 rounded-2xl">
      <span>Backend Deployment</span>

      <span className="text-cyan-400">
        Running
      </span>
    </div>

    <div className="flex items-center justify-between bg-[#111827] p-5 rounded-2xl">
      <span>Kubernetes Scaling</span>

      <span className="text-yellow-400">
        Pending
      </span>
    </div>

    <div className="flex items-center justify-between bg-[#111827] p-5 rounded-2xl">
      <span>Security Scan</span>

      <span className="text-green-400">
        Passed
      </span>
    </div>

  </div>

</div> */}
{/* Real Deployment Activity */}
<div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mt-10">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-3xl font-bold">
      Deployment Activity
    </h2>

    <span className="text-green-400">
      Live
    </span>

  </div>

  <div className="space-y-6">

    {deployments.map((deployment, index) => (

      <div
        key={index}
        className="bg-[#111827] p-6 rounded-2xl"
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-4">

          <div>

            <h2 className="text-cyan-400 text-xl font-bold">

              {deployment.service}

            </h2>

            <p className="text-gray-400 text-sm mt-1">

              {deployment.environment}

            </p>

          </div>

          <span
            className={`font-semibold ${
              deployment.status === "Healthy"
                ? "text-green-400"
                : "text-cyan-400"
            }`}
          >

            {deployment.status}

          </span>

        </div>


        {/* Recent Logs */}
        <div className="space-y-3">

          {deployment.logs
            .slice(-3)
            .reverse()
            .map((log, i) => (

              <div
                key={i}
                className="flex items-center justify-between bg-[#0f172a] p-3 rounded-xl"
              >

                <span className="text-gray-300">
                  {log}
                </span>

                <span className="text-gray-500 text-sm">

                  {i + 1} min ago

                </span>

              </div>

            ))}

        </div>

      </div>

    ))}

  </div>

</div>

        </div>
        {showModal && (

  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

    <div className="bg-[#0f172a] p-8 rounded-3xl w-[400px] border border-gray-700">

      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        New Deployment
      </h2>

      <input
        type="text"
        placeholder="Enter Application Name"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
        className="w-full p-4 rounded-2xl bg-black border border-gray-700 mb-6 outline-none"
      />

      <div className="flex gap-4">

        <button
          onClick={handleDeployment}
          className="flex-1 bg-cyan-500 hover:bg-cyan-400 p-4 rounded-2xl font-bold"
        >
          Deploy
        </button>

        <button
          onClick={() => setShowModal(false)}
          className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 p-4 rounded-2xl"
        >
          Cancel
        </button>

      </div>

    </div>

  </div>

)}

      </div>

    
  );
}

export default Dashboard;