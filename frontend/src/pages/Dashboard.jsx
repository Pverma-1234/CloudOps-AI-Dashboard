import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="bg-[#050816] min-h-screen text-white flex">

      {/* Sidebar */}
      <div className="w-[280px] bg-[#0f172a] border-r border-gray-800 p-8 hidden lg:block">

        <h1 className="text-4xl font-bold text-cyan-400 mb-12">
          CloudOps
        </h1>

        <div className="space-y-6 text-lg">

          <Link to="/dashboard">
            <div className="bg-cyan-500/20 text-cyan-400 p-4 rounded-2xl cursor-pointer">
              Dashboard
            </div>
          </Link>

          <Link to="/kubernetes">
            <div className="hover:bg-[#1e293b] p-4 rounded-2xl cursor-pointer transition">
              Kubernetes
            </div>
          </Link>

          <Link to="/cicd">
            <div className="hover:bg-[#1e293b] p-4 rounded-2xl cursor-pointer transition">
              CI/CD Pipelines
            </div>
          </Link>

          <Link to="/monitoring">
            <div className="hover:bg-[#1e293b] p-4 rounded-2xl cursor-pointer transition">
              Monitoring
            </div>
          </Link>

          <Link to="/security">
            <div className="hover:bg-[#1e293b] p-4 rounded-2xl cursor-pointer transition">
              Security
            </div>
          </Link>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-6">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              DevOps Dashboard
            </h1>

            <p className="text-gray-400 text-xl">
              Monitor infrastructure, deployments & Kubernetes clusters.
            </p>

          </div>

          <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-2xl text-lg font-bold transition hover:scale-105">
            New Deployment
          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 pb-16">
            <h2 className="text-5xl font-bold text-cyan-400">
              24
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Running Pods
            </p>
          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-cyan-400">
              12
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Active Services
            </p>
          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-cyan-400">
              99.9%
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Infrastructure Uptime
            </p>
          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-5xl font-bold text-cyan-400">
              1.2M
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

              <tr className="border-b border-gray-800">
                <td className="py-6">Frontend Service</td>
                <td>Production</td>
                <td className="text-green-400">Healthy</td>
                <td>v2.1.0</td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="py-6">Backend API</td>
                <td>Production</td>
                <td className="text-green-400">Healthy</td>
                <td>v1.8.2</td>
              </tr>

              <tr>
                <td className="py-6">Jenkins Pipeline</td>
                <td>CI/CD</td>
                <td className="text-cyan-400">Running</td>
                <td>v3.0.1</td>
              </tr>

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
<div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mt-10">

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

</div>

        </div>

      </div>

    
  );
}

export default Dashboard;