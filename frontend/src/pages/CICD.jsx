import { useState } from "react";
import { useDeployment } from "../context/DeploymentContext";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function CICD() {
  const [pipelineStatus, setPipelineStatus] = useState("Idle");
  const [pipelineLogs, setPipelineLogs] = useState([]);
  const [activeStage, setActiveStage] = useState("");
  const { deployments,triggerPipeline } = useDeployment();

  const navigate = useNavigate();
  const startPipeline = () => {

  setPipelineStatus("Running");

  setPipelineLogs([
    "Connecting to GitHub Actions..."
  ]);

  setActiveStage("GitHub");

  setTimeout(() => {

    setPipelineLogs((prev) => [
      ...prev,
      "Terraform Init Started..."
    ]);

    setActiveStage("Terraform");

  }, 2000);

  setTimeout(() => {

    setPipelineLogs((prev) => [
      ...prev,
      "Terraform Apply Successful ✅"
    ]);

  }, 4000);

  setTimeout(() => {

    setPipelineLogs((prev) => [
      ...prev,
      "Docker Image Build Started..."
    ]);

    setActiveStage("Docker");

  }, 6000);

  setTimeout(() => {

    setPipelineLogs((prev) => [
      ...prev,
      "Kubernetes Deployment Started..."
    ]);

    setActiveStage("Kubernetes");

  }, 8000);

  setTimeout(() => {

    setPipelineLogs((prev) => [
      ...prev,
      "Production Deployment Successful 🚀"
    ]);

    setPipelineStatus("Success");

    setActiveStage("Production");

  }, 10000);

  };

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
              CI/CD Pipelines
            </h1>

            <p className="text-gray-400 text-xl">
              Automating build, testing & deployment workflows
            </p>

          </div>

          <button
            onClick={startPipeline}
              className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-bold"
            >
            Trigger Pipeline
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

          <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-5xl font-bold text-cyan-400">
              {deployments.length * 12}
            </h2>

            <p className="text-gray-400 mt-4">
              Successful Builds
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-5xl font-bold text-cyan-400">
              {Math.floor(deployments.length / 2)}
            </h2>

            <p className="text-gray-400 mt-4">
              Failed Deployments
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-5xl font-bold text-cyan-400">
              {deployments.length}
            </h2>

            <p className="text-gray-400 mt-4">
              Active Pipelines
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

            <h2 className="text-5xl font-bold text-cyan-400">
              {deployments.length + 3}m
            </h2>

            <p className="text-gray-400 mt-4">
              Avg Deployment Time
            </p>

          </div>

        </div>

        {/* Pipeline Workflow */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mb-12">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-3xl font-bold">
              Pipeline Workflow
            </h2>

            <span className="text-green-400">
              Running
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

            <div className="bg-[#111827] rounded-2xl p-6 text-center border border-gray-700">

              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                GitHub
              </h3>

              <p className="text-gray-400">
                Source Code
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center border border-gray-700">

              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                Jenkins
              </h3>

              <p className="text-gray-400">
                Build Pipeline
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center border border-gray-700">

              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                Docker
              </h3>

              <p className="text-gray-400">
                Containerization
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center border border-gray-700">

              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                Kubernetes
              </h3>

              <p className="text-gray-400">
                Orchestration
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center border border-gray-700">

              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                Production
              </h3>

              <p className="text-gray-400">
                Live Deployment
              </p>

            </div>

          </div>

        </div>
        <div className="mt-10 bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

  <div className="flex justify-between items-center mb-6">

    <h2 className="text-3xl font-bold text-white">
      Live Pipeline Status
    </h2>

    <span className={`font-bold ${
      pipelineStatus === "Running"
        ? "text-yellow-400"
        : "text-green-400"
    }`}>
      {pipelineStatus}
    </span>

  </div>

  <h3 className="text-cyan-400 text-xl mb-4">
    Active Stage: {activeStage}
  </h3>

  <div className="bg-black rounded-2xl p-6 h-[300px] overflow-y-auto">

    {pipelineLogs.map((log, index) => (

      <p
        key={index}
        className="text-green-400 mb-3 font-mono"
      >
        {log}
      </p>

    ))}

  </div>

</div>

        {/* Live Pipelines */}
        <div className="space-y-8 mt-10">

          {deployments.map((deployment, index) => (

            <div
              key={index}
              className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8"
            >

              <div className="flex items-center justify-between mb-6">

                <div>

                  <h2 className="text-3xl font-bold text-cyan-400">
                    {deployment.service}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Jenkins CI/CD Pipeline
                  </p>

                </div>

                <span className="text-green-400 font-bold">
                  {deployment.status}
                </span>

              </div>

              <div className="space-y-4">

                {deployment.logs.map((log, i) => (

                  <div
                    key={i}
                    className="bg-[#111827] p-4 rounded-2xl flex items-center justify-between"
                  >

                    <span>{log}</span>

                    <span className="text-cyan-400">
                      ✓
                    </span>

                  </div>

                ))}

              </div>

              {/* Progress Bar */}
              <div className="mt-8">

                <div className="flex justify-between mb-2">

                  <span>Pipeline Progress</span>

                  <span>
                    {deployment.status === "Healthy"
                      ? "100%"
                      : "70%"}
                  </span>

                </div>

                <div className="w-full bg-gray-800 h-4 rounded-full">

                  <div
                    className="bg-cyan-400 h-4 rounded-full transition-all duration-1000"
                    style={{
                      width:
                        deployment.status === "Healthy"
                          ? "100%"
                          : "70%",
                    }}
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default CICD;