import { useDeployment } from "../context/DeploymentContext";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Monitoring() {

  const { deployments,generateLogs } = useDeployment();

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
              Monitoring & Observability
            </h1>

            <p className="text-gray-400 text-xl">
              Infrastructure metrics, logs & real-time analytics
            </p>

          </div>

          <button
            onClick={() => {

            if (deployments.length === 0) {

              alert("No infrastructure logs available");

              return;
            }

            generateLogs();

            }}
            className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-bold transition"
          >
          View Logs
          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-cyan-400">
              {99 + deployments.length / 10}%
            </h2>

            <p className="text-gray-400 mt-4">
              System Uptime
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-cyan-400">
              {deployments.length * 100}K
            </h2>

            <p className="text-gray-400 mt-4">
              API Requests
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-cyan-400">
              {50 + deployments.length * 5}%
            </h2>

            <p className="text-gray-400 mt-4">
              CPU Usage
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-cyan-400">
              {60 + deployments.length * 4}%
            </h2>

            <p className="text-gray-400 mt-4">
              Memory Usage
            </p>

          </div>

        </div>

        {/* Live Infrastructure Monitoring */}
        <div className="space-y-8 mt-10 mb-12">

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
                    Live Infrastructure Monitoring
                  </p>

                </div>

                <span className="text-green-400">
                  {deployment.status}
                </span>

              </div>

              <div className="space-y-6">

                {/* CPU */}
                <div>

                  <div className="flex justify-between mb-2">

                    <span>CPU Usage</span>

                    <span>
                      {40 + index * 10}%
                    </span>

                  </div>

                  <div className="w-full bg-gray-800 h-4 rounded-full">

                    <div
                      className="bg-cyan-400 h-4 rounded-full"
                      style={{
                        width: `${40 + index * 10}%`,
                      }}
                    ></div>

                  </div>

                </div>

                {/* Memory */}
                <div>

                  <div className="flex justify-between mb-2">

                    <span>Memory Usage</span>

                    <span>
                      {50 + index * 8}%
                    </span>

                  </div>

                  <div className="w-full bg-gray-800 h-4 rounded-full">

                    <div
                      className="bg-cyan-400 h-4 rounded-full"
                      style={{
                        width: `${50 + index * 8}%`,
                      }}
                    ></div>

                  </div>

                </div>

                {/* Traffic */}
                <div>

                  <div className="flex justify-between mb-2">

                    <span>Traffic</span>

                    <span>
                      {(index + 1) * 120}MB/s
                    </span>

                  </div>

                  <div className="w-full bg-gray-800 h-4 rounded-full">

                    <div
                      className="bg-cyan-400 h-4 rounded-full"
                      style={{
                        width: `${55 + index * 5}%`,
                      }}
                    ></div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Recent Logs */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mb-12">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-bold">
              Recent Logs
            </h2>

            <span className="text-green-400">
              Healthy
            </span>

          </div>

          <div className="space-y-5">

            {deployments.map((deployment, index) => (

              <div
                key={index}
                className="bg-[#111827] rounded-2xl p-5"
              >

                <div className="flex items-center justify-between mb-4">

                  <span className="text-cyan-400 font-bold">
                    {deployment.service}
                  </span>

                  <span className="text-gray-400">
                    Live
                  </span>

                </div>

                <div className="space-y-3">

                  {deployment.logs.map((log, i) => (

                    <div
                      key={i}
                      className="flex items-center justify-between"
                    >

                      <span>{log}</span>

                      <span className="text-gray-400">
                        {i + 1} min ago
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Monitoring Stack */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Monitoring Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="bg-[#111827] rounded-2xl p-6 text-center">

              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                Prometheus
              </h3>

              <p className="text-gray-400">
                Metrics Collection
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center">

              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                Grafana
              </h3>

              <p className="text-gray-400">
                Visualization
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center">

              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                Loki
              </h3>

              <p className="text-gray-400">
                Log Aggregation
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center">

              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                AlertManager
              </h3>

              <p className="text-gray-400">
                Alerting
              </p>

            </div>

          </div>

        </div>
        {/* Grafana Dashboard */}
<div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mt-10">

  <div className="flex items-center justify-between mb-6">

    <h2 className="text-3xl font-bold">
      Grafana Monitoring
    </h2>

    <span className="text-green-400">
      Live Metrics
    </span>

  </div>

  <iframe
    src="http://localhost:3000/d/rYdddlPWk/node-exporter-full?orgId=1&from=now-24h&to=now&timezone=browser&var-ds_prometheus=prometheus&var-job=node-exporter&var-nodename=d3d0566916b7&var-node=host.docker.internal:9100&refresh=1m&kiosk"
    width="100%"
    height="700"
    frameBorder="0"
    className="rounded-2xl"
  ></iframe>

</div>

      </div>

    </div>
  );
}

export default Monitoring;