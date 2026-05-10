import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]"></div>

      <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] left-[-100px]"></div>

      {/* Signup Card */}
      <div className="relative bg-[#0f172a]/90 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 w-full max-w-md shadow-2xl">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-cyan-400 mb-3">
            Create Account
          </h1>

          <p className="text-gray-400 text-lg">
            Join the CloudOps DevSecOps Platform
          </p>

        </div>

        <div className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-4 rounded-2xl bg-black border border-gray-700 focus:border-cyan-400 outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-2xl bg-black border border-gray-700 focus:border-cyan-400 outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full p-4 rounded-2xl bg-black border border-gray-700 focus:border-cyan-400 outline-none transition"
            />
          </div>

          <button className="w-full bg-cyan-500 hover:bg-cyan-400 p-4 rounded-2xl text-lg font-bold transition hover:scale-105">
            Create Account
          </button>

        </div>

        <div className="mt-8 text-center text-gray-400">

          Already have an account?

          <Link
            to="/"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Signup;