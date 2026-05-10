function Kubernetes() {
  return (
    <div className="bg-[#050816] min-h-screen text-white p-8">

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

        <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-bold transition">
          Deploy Pod
        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

        <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">
          <h2 className="text-5xl font-bold text-cyan-400">
            24
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
            99%
          </h2>

          <p className="text-gray-400 mt-4">
            Cluster Health
          </p>
        </div>

        <div className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl">
          <h2 className="text-5xl font-bold text-cyan-400">
            12
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

            <tr className="border-b border-gray-800">
              <td className="py-5">frontend-pod</td>
              <td>production</td>
              <td className="text-green-400">Running</td>
              <td>45%</td>
            </tr>

            <tr className="border-b border-gray-800">
              <td className="py-5">backend-pod</td>
              <td>production</td>
              <td className="text-green-400">Running</td>
              <td>58%</td>
            </tr>

            <tr>
              <td className="py-5">jenkins-agent</td>
              <td>devops</td>
              <td className="text-cyan-400">Deploying</td>
              <td>72%</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Resource Usage */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-8">
          Resource Usage
        </h2>

        <div className="space-y-8">

          <div>

            <div className="flex justify-between mb-2">
              <span>CPU Usage</span>
              <span>68%</span>
            </div>

            <div className="w-full bg-gray-800 h-4 rounded-full">
              <div className="bg-cyan-400 h-4 rounded-full w-[68%]"></div>
            </div>

          </div>

          <div>

            <div className="flex justify-between mb-2">
              <span>Memory Usage</span>
              <span>82%</span>
            </div>

            <div className="w-full bg-gray-800 h-4 rounded-full">
              <div className="bg-cyan-400 h-4 rounded-full w-[82%]"></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Kubernetes;