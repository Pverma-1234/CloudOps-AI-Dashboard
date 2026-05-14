import { useDeployment } from "../context/DeploymentContext";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
function Security() {
  const { deployments,runSecurityScan } = useDeployment();
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
            Security & DevSecOps
          </h1>

          <p className="text-gray-400 text-xl">
            Vulnerability management, compliance & infrastructure security
          </p>

        </div>
          <button
            onClick={() => {

            if (deployments.length === 0) {

              alert("No deployments available for scanning");

              return;
            }

            runSecurityScan();

          }}
          className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-bold transition"
        >
          Run Security Scan
        </button>



      </div>

      {/* Security Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            {95 + deployments.length}%
          </h2>

          <p className="text-gray-400 mt-4">
            Security Score
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            {deployments.length * 2}
          </h2>

          <p className="text-gray-400 mt-4">
            Vulnerabilities Fixed
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            {deployments.length}
          </h2>

          <p className="text-gray-400 mt-4">
            Active Scanners
          </p>

        </div>

        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-cyan-400">
            {90 + deployments.length}%
          </h2>

          <p className="text-gray-400 mt-4">
            Compliance Rate
          </p>

        </div>

      </div>
      {/* Live Security Reports */}
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
            DevSecOps Security Report
          </p>

        </div>

        <span className="text-green-400">
          Secure
        </span>

      </div>

      <div className="space-y-4">

        <div className="bg-[#111827] p-4 rounded-2xl flex justify-between">

          <span>
            Container Vulnerability Scan
          </span>

          <span className="text-green-400">
            Passed
          </span>

        </div>

        <div className="bg-[#111827] p-4 rounded-2xl flex justify-between">

          <span>
            OWASP Security Check
          </span>

          <span className="text-green-400">
            Passed
          </span>

        </div>

        <div className="bg-[#111827] p-4 rounded-2xl flex justify-between">

          <span>
            Secrets Detection
          </span>

          <span className="text-yellow-400">
            Warning
          </span>

        </div>

        <div className="bg-[#111827] p-4 rounded-2xl flex justify-between">

          <span>
            Compliance Status
          </span>

          <span className="text-green-400">
            Compliant
          </span>

        </div>

      </div>

      {/* Risk Score */}
      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span>Risk Score</span>

          <span>
            {20 + index * 10}%
          </span>

        </div>

        <div className="w-full bg-gray-800 h-4 rounded-full">

          <div
            className="bg-cyan-400 h-4 rounded-full"
            style={{
              width: `${20 + index * 10}%`,
            }}
          ></div>

        </div>

      </div>

    </div>

  ))}

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
        {/* Live Security Logs */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 h-[500px] overflow-y-auto">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold">
            Security Logs
          </h2>

        <span className="text-cyan-400">
          Real-Time
        </span>

      </div>

      <div className="space-y-6">

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
            Secure
          </span>

        </div>

        <div className="space-y-3">

          {deployment.logs
            .filter(
              (log) =>

                log.includes("Security") ||

                log.includes("OWASP") ||

                log.includes("Compliance") ||

                log.includes("scan") ||

                log.includes("Scanning")
            )
            .map((log, i) => (

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
    </div>
  );
}

export default Security;