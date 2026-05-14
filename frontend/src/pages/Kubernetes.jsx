import { useDeployment } from "../context/DeploymentContext";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Kubernetes() {

  const { deployments,deployPod } = useDeployment();

  const navigate = useNavigate();

  return (

    <div className="bg-[#050816] min-h-screen text-white flex">

      <Sidebar />

      <div className="flex-1 p-8 overflow-y-auto">

        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 bg-[#0f172a] hover:bg-[#1e293b] p-3 rounded-xl transition"
        >
          <IoArrowBack className="text-2xl text-cyan-400" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold text-cyan-400 mb-3">
              Kubernetes Cluster
            </h1>

            <p className="text-gray-400 text-xl">
              Real-time orchestration and container monitoring
            </p>

          </div>

          <button
            onClick={() => {

              if (deployments.length === 0) {

                alert("No application deployment found");

                return;
              }

              deployPod();

          }}
          className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-bold transition"
          >
            Scale Deployment
          </button>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

          <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-5xl font-bold text-cyan-400">
              {deployments.reduce((acc, item) => acc + item.pods, 0)}
            </h2>

            <p className="text-gray-400 mt-4">
              Running Pods
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-5xl font-bold text-cyan-400">
              8
            </h2>

            <p className="text-gray-400 mt-4">
              Nodes Active
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-5xl font-bold text-cyan-400">
              {97 + deployments.length}%
            </h2>

            <p className="text-gray-400 mt-4">
              Cluster Health
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-5xl font-bold text-cyan-400">
              {deployments.length}
            </h2>

            <p className="text-gray-400 mt-4">
              Services Running
            </p>

          </div>

        </div>

        {/* Pod Table */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mb-10">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-bold">
              Cluster Pods
            </h2>

            <span className="text-green-400">
              Healthy
            </span>

          </div>

          <table className="w-full text-left">

            <thead>

              <tr className="border-b border-gray-800 text-gray-400">

                <th className="pb-4">Pod Name</th>
                <th className="pb-4">Namespace</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">CPU</th>

              </tr>

            </thead>

            <tbody>

              {deployments.map((deployment, index) => (

                <tr
                  key={index}
                  className="border-b border-gray-800"
                >

                  <td className="py-5">
                    {deployment.service.toLowerCase()}-pod
                  </td>

                  <td>
                    production
                  </td>

                  <td className="text-green-400">
                    {deployment.status}
                  </td>

                  <td>
                    {40 + index * 10}%
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Deployment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

          {deployments.map((deployment, index) => (

            <div
              key={index}
              className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8"
            >

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold text-cyan-400">
                  {deployment.service}
                </h2>

                <span className="text-green-400">
                  {deployment.status}
                </span>

              </div>

              <div className="space-y-4 text-gray-300">

                <p>
                  <span className="text-cyan-400">
                    Docker Image:
                  </span>{" "}
                  {deployment.image}
                </p>

                <p>
                  <span className="text-cyan-400">
                    Replicas:
                  </span>{" "}
                  {deployment.replicas}
                </p>

                <p>
                  <span className="text-cyan-400">
                    Running Pods:
                  </span>{" "}
                  {deployment.pods}
                </p>

                <p>
                  <span className="text-cyan-400">
                    Namespace:
                  </span>{" "}
                  production
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Resource Usage */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mt-10">

          <h2 className="text-3xl font-bold mb-8">
            Resource Usage
          </h2>

          <div className="space-y-8">

            <div>

              <div className="flex justify-between mb-2">

                <span>CPU Usage</span>

                <span>
                  {50 + deployments.length * 5}%
                </span>

              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">

                <div
                  className="bg-cyan-400 h-4 rounded-full"
                  style={{
                    width: `${50 + deployments.length * 5}%`,
                  }}
                ></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Memory Usage</span>

                <span>
                  {60 + deployments.length * 4}%
                </span>

              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">

                <div
                  className="bg-cyan-400 h-4 rounded-full"
                  style={{
                    width: `${60 + deployments.length * 4}%`,
                  }}
                ></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Kubernetes;