function Security() {
  return (
    <div className="bg-[#050816] min-h-screen text-white p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-bold text-cyan-400 mb-3">
            Security & DevSecOps
          </h1>

          <p className="text-gray-400 text-xl">
            Vulnerability management, compliance & infrastructure security
          </p>

        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-bold transition">
          Run Security Scan
        </button>

      </div>

      {/* Security Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            97%
          </h2>

          <p className="text-gray-400 mt-4">
            Security Score
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            12
          </h2>

          <p className="text-gray-400 mt-4">
            Vulnerabilities Fixed
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            4
          </h2>

          <p className="text-gray-400 mt-4">
            Active Scanners
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            99.9%
          </h2>

          <p className="text-gray-400 mt-4">
            Compliance Rate
          </p>

        </div>

      </div>

      {/* Vulnerability Overview */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mb-12">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">
            Vulnerability Overview
          </h2>

          <span className="text-green-400">
            Protected
          </span>

        </div>

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-gray-800 text-gray-400">

              <th className="pb-4">Service</th>
              <th className="pb-4">Risk Level</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Last Scan</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-gray-800">

              <td className="py-5">Frontend Container</td>
              <td className="text-green-400">
                Low
              </td>
              <td>Secure</td>
              <td>2 min ago</td>

            </tr>

            <tr className="border-b border-gray-800">

              <td className="py-5">Backend API</td>
              <td className="text-yellow-400">
                Medium
              </td>
              <td>Monitoring</td>
              <td>5 min ago</td>

            </tr>

            <tr>

              <td className="py-5">Kubernetes Cluster</td>
              <td className="text-green-400">
                Low
              </td>
              <td>Protected</td>
              <td>10 min ago</td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* Security Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">

        {/* Scan Progress */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Security Scan Progress
          </h2>

          <div className="space-y-8">

            <div>

              <div className="flex justify-between mb-2">
                <span>Container Scanning</span>
                <span>100%</span>
              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">
                <div className="bg-cyan-400 h-4 rounded-full w-full"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span>OWASP Checks</span>
                <span>82%</span>
              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">
                <div className="bg-cyan-400 h-4 rounded-full w-[82%]"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span>Kubernetes Policies</span>
                <span>74%</span>
              </div>

              <div className="w-full bg-gray-800 h-4 rounded-full">
                <div className="bg-cyan-400 h-4 rounded-full w-[74%]"></div>
              </div>

            </div>

          </div>

        </div>

        {/* Security Logs */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-bold">
              Security Logs
            </h2>

            <span className="text-cyan-400">
              Real-Time
            </span>

          </div>

          <div className="space-y-5">

            <div className="bg-[#111827] rounded-2xl p-5 flex items-center justify-between">

              <span>
                Trivy container scan completed
              </span>

              <span className="text-gray-400">
                2 min ago
              </span>

            </div>

            <div className="bg-[#111827] rounded-2xl p-5 flex items-center justify-between">

              <span>
                Kubernetes RBAC policy verified
              </span>

              <span className="text-gray-400">
                7 min ago
              </span>

            </div>

            <div className="bg-[#111827] rounded-2xl p-5 flex items-center justify-between">

              <span>
                Dependency vulnerability resolved
              </span>

              <span className="text-gray-400">
                10 min ago
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Security Stack */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-8">
          DevSecOps Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-[#111827] rounded-2xl p-6 text-center">

            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              Trivy
            </h3>

            <p className="text-gray-400">
              Container Scanning
            </p>

          </div>

          <div className="bg-[#111827] rounded-2xl p-6 text-center">

            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              SonarQube
            </h3>

            <p className="text-gray-400">
              Code Analysis
            </p>

          </div>

          <div className="bg-[#111827] rounded-2xl p-6 text-center">

            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              OWASP
            </h3>

            <p className="text-gray-400">
              Security Testing
            </p>

          </div>

          <div className="bg-[#111827] rounded-2xl p-6 text-center">

            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
              RBAC
            </h3>

            <p className="text-gray-400">
              Access Control
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Security;