function CICD() {
  return (
    <div className="bg-[#050816] min-h-screen text-white p-8">

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

        <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-bold transition">
          Trigger Pipeline
        </button>

      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

        <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

          <h2 className="text-5xl font-bold text-cyan-400">
            128
          </h2>

          <p className="text-gray-400 mt-4">
            Successful Builds
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

          <h2 className="text-5xl font-bold text-cyan-400">
            9
          </h2>

          <p className="text-gray-400 mt-4">
            Failed Deployments
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

          <h2 className="text-5xl font-bold text-cyan-400">
            14
          </h2>

          <p className="text-gray-400 mt-4">
            Active Pipelines
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">

          <h2 className="text-5xl font-bold text-cyan-400">
            6m
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

      {/* Build History */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mb-12">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">
            Build History
          </h2>

          <span className="text-cyan-400">
            Jenkins
          </span>

        </div>

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-gray-800 text-gray-400">

              <th className="pb-4">Build</th>
              <th className="pb-4">Branch</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Duration</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-gray-800">

              <td className="py-5">#142</td>
              <td>main</td>
              <td className="text-green-400">
                Success
              </td>
              <td>5m 12s</td>

            </tr>

            <tr className="border-b border-gray-800">

              <td className="py-5">#141</td>
              <td>feature/auth</td>
              <td className="text-yellow-400">
                Running
              </td>
              <td>2m 44s</td>

            </tr>

            <tr>

              <td className="py-5">#140</td>
              <td>main</td>
              <td className="text-red-400">
                Failed
              </td>
              <td>1m 33s</td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* Deployment Progress */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-8">
          Deployment Progress
        </h2>

        <div className="space-y-8">

          <div>

            <div className="flex justify-between mb-2">
              <span>Frontend Deployment</span>
              <span>100%</span>
            </div>

            <div className="w-full bg-gray-800 h-4 rounded-full">
              <div className="bg-cyan-400 h-4 rounded-full w-full"></div>
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Backend Deployment</span>
              <span>82%</span>
            </div>

            <div className="w-full bg-gray-800 h-4 rounded-full">
              <div className="bg-cyan-400 h-4 rounded-full w-[82%]"></div>
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Kubernetes Rollout</span>
              <span>64%</span>
            </div>

            <div className="w-full bg-gray-800 h-4 rounded-full">
              <div className="bg-cyan-400 h-4 rounded-full w-[64%]"></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CICD;