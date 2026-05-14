import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDeployment } from "../context/DeploymentContext";

function Sidebar() {

  const [showProfile, setShowProfile] = useState(false);

  const { deployments } = useDeployment();

  const totalPods = deployments.reduce(
    (acc, deployment) => acc + deployment.pods,
    0
  );

  const totalPipelines = deployments.reduce(
    (acc, deployment) =>
      acc +
      deployment.logs.filter((log) =>
        log.includes("Pipeline")
      ).length,
    0
  );

  return (

    <div className="w-[280px] bg-[#0f172a] border-r border-gray-800 p-8 hidden lg:flex flex-col justify-between">

      {/* Top Section */}
      <div>

        <h1 className="text-4xl font-bold text-cyan-400 mb-12">
          CloudOps
        </h1>

        <div className="space-y-6 text-lg">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block p-4 rounded-2xl transition ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "hover:bg-[#1e293b]"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/kubernetes"
            className={({ isActive }) =>
              `block p-4 rounded-2xl transition ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "hover:bg-[#1e293b]"
              }`
            }
          >
            Kubernetes
          </NavLink>

          <NavLink
            to="/cicd"
            className={({ isActive }) =>
              `block p-4 rounded-2xl transition ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "hover:bg-[#1e293b]"
              }`
            }
          >
            CI/CD Pipelines
          </NavLink>

          <NavLink
            to="/monitoring"
            className={({ isActive }) =>
              `block p-4 rounded-2xl transition ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "hover:bg-[#1e293b]"
              }`
            }
          >
            Monitoring
          </NavLink>

          <NavLink
            to="/security"
            className={({ isActive }) =>
              `block p-4 rounded-2xl transition ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "hover:bg-[#1e293b]"
              }`
            }
          >
            Security
          </NavLink>

        </div>

      </div>


      {/* Bottom Section */}
      <div>

        {/* Compact User Profile */}
        <div
          onClick={() => setShowProfile(true)}
          className="flex items-center gap-3 bg-[#111827] hover:bg-[#1e293b] p-4 rounded-2xl cursor-pointer transition mb-6"
        >

          <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold text-[#050816]">

            {localStorage
              .getItem("userName")
              ?.charAt(0)
              ?.toUpperCase()}

          </div>

          <div>

            <h2 className="text-cyan-400 font-bold">
              {localStorage.getItem("userName")}
            </h2>

            <p className="text-gray-400 text-sm">
              View Profile
            </p>

          </div>

        </div>


        {/* Logout Button */}
        <button
          onClick={() => {

            localStorage.removeItem("userName");

            window.location.href = "/";

          }}
          className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 p-4 rounded-2xl transition"
        >
          Logout
        </button>

      </div>


      {/* Profile Modal */}
      {showProfile && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 w-[400px]">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold text-cyan-400">
                Profile
              </h2>

              <button
                onClick={() => setShowProfile(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>

            </div>


            {/* Avatar */}
            <div className="flex flex-col items-center mb-8">

              <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-4xl font-bold text-[#050816] mb-4">

                {localStorage
                  .getItem("userName")
                  ?.charAt(0)
                  ?.toUpperCase()}

              </div>

              <h2 className="text-2xl font-bold text-cyan-400">

                {localStorage.getItem("userName")}

              </h2>

              <p className="text-gray-400 mt-2">
                Senior DevOps Engineer
              </p>

            </div>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">

              <div className="bg-[#111827] rounded-2xl p-4 text-center">

                <p className="text-gray-400 text-sm">
                  Deployments
                </p>

                <h2 className="text-cyan-400 text-2xl font-bold mt-2">
                  {deployments.length}
                </h2>

              </div>

              <div className="bg-[#111827] rounded-2xl p-4 text-center">

                <p className="text-gray-400 text-sm">
                  Pods
                </p>

                <h2 className="text-cyan-400 text-2xl font-bold mt-2">
                  {totalPods}
                </h2>

              </div>

              <div className="bg-[#111827] rounded-2xl p-4 text-center">

                <p className="text-gray-400 text-sm">
                  Pipelines
                </p>

                <h2 className="text-cyan-400 text-2xl font-bold mt-2">
                  {totalPipelines}
                </h2>

              </div>

            </div>


            {/* Activity */}
            <div>

              <h2 className="text-xl font-bold mb-4">
                Recent Activity
              </h2>

              <div className="space-y-4">

                <div className="bg-[#111827] p-4 rounded-2xl">
                  Deployed Kubernetes services
                </div>

                <div className="bg-[#111827] p-4 rounded-2xl">
                  Triggered Jenkins pipeline
                </div>

                <div className="bg-[#111827] p-4 rounded-2xl">
                  Ran security compliance scan
                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default Sidebar;