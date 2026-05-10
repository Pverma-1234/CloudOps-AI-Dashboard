function Monitoring() {
  return (
    <div className="bg-[#050816] min-h-screen text-white p-8">

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

        <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-bold transition">
          View Logs
        </button>

      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            99.9%
          </h2>

          <p className="text-gray-400 mt-4">
            System Uptime
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            1.2M
          </h2>

          <p className="text-gray-400 mt-4">
            API Requests
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            68%
          </h2>

          <p className="text-gray-400 mt-4">
            CPU Usage
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            82%
          </h2>

          <p className="text-gray-400 mt-4">
            Memory Usage
          </p>

        </div>

      </div>

      {/* Infrastructure Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">

        {/* CPU Analytics */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-bold">
              CPU Analytics
            </h2>

            <span className="text-green-400">
              Live
            </span>

          </div>

          <div className="space-y-8">

            <div>

              <div className="flex justify-between mb-2">
                <span>Node-1</span>
                <span>68%</span>
              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">
                <div className="bg-cyan-400 h-4 rounded-full w-[68%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span>Node-2</span>
                <span>82%</span>
              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">
                <div className="bg-cyan-400 h-4 rounded-full w-[82%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span>Node-3</span>
                <span>74%</span>
              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">
                <div className="bg-cyan-400 h-4 rounded-full w-[74%]"></div>
              </div>

            </div>

          </div>

        </div>

        {/* Traffic Analytics */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-bold">
              API Traffic
            </h2>

            <span className="text-cyan-400">
              Prometheus
            </span>

          </div>

          <div className="space-y-8">

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

      {/* Logs Section */}
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

          <div className="bg-[#111827] rounded-2xl p-5 flex items-center justify-between">

            <span>
              Kubernetes pod scaled successfully
            </span>

            <span className="text-gray-400">
              2 min ago
            </span>

          </div>

          <div className="bg-[#111827] rounded-2xl p-5 flex items-center justify-between">

            <span>
              Jenkins deployment pipeline triggered
            </span>

            <span className="text-gray-400">
              5 min ago
            </span>

          </div>

          <div className="bg-[#111827] rounded-2xl p-5 flex items-center justify-between">

            <span>
              Prometheus metrics collected
            </span>

            <span className="text-gray-400">
              8 min ago
            </span>

          </div>

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

    </div>
  );
}

export default Monitoring;