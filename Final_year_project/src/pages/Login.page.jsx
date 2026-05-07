import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  Heart, Lock, User, ChevronRight, 
  AlertCircle, Eye, EyeOff, ArrowLeft,
  Building2, Landmark
} from "lucide-react";
import { useNavigate, Link } from "react-router";

export default function Login() {
  const [role, setRole]               = useState("GN_OFFICER");
  const [email, setEmail]             = useState("");
  const [password, setPassword]       = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading]     = useState(false);
  const [error, setError]             = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save all user info to localStorage
      localStorage.setItem("token",       data.token);
      localStorage.setItem("userRole",    data.user.role);
      localStorage.setItem("userName",    data.user.name);
      localStorage.setItem("userId",      data.user.id);
      localStorage.setItem("gnDivision",  data.user.gnDivision  || "");
      localStorage.setItem("gnOfficerId", data.user.gnOfficerId || "");

      // Redirect based on role (only once)
      if (data.user.role === "GN_OFFICER") {
        navigate("/verify");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleSwitch = (newRole) => {
    setRole(newRole);
    setError(null);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col md:flex-row font-sans">

      <div className="hidden lg:flex w-[40%] bg-emerald-950 p-20 flex-col justify-between relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 mb-24 group">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-emerald-500/20">
              <Heart className="w-7 h-7 text-white fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white leading-none uppercase">
                HOPE<span className="text-emerald-400 italic">LINK</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-400 tracking-[0.3em] uppercase mt-1">Foundations</span>
            </div>
          </Link>

          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6 max-w-sm"
            >
              <h2 className="text-5xl font-bold text-white leading-[1.1] tracking-tight">
                {role === "GN_OFFICER" ? (
                  <>
                    Empowering <br />
                    <span className="text-emerald-400 font-serif italic font-medium">Community Service</span>
                  </>
                ) : (
                  <>
                    Restoring Hope <br />
                    <span className="text-emerald-400 font-serif italic font-medium">With Every Connection</span>
                  </>
                )}
              </h2>
              <p className="text-emerald-100/60 leading-relaxed italic font-serif text-lg">
                {role === "GN_OFFICER"
                  ? '"Your verification ensures that every rupee of support reaches the right family in your division."'
                  : '"Our secure portals provide a transparent bridge between community leaders, NGOs, and those who need it most."'}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 text-[10px] font-bold text-emerald-800 uppercase tracking-widest">
          © 2025 HopeLink Foundations · Secure Portal
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 md:p-20 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md my-auto"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex flex-col items-center mb-12">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-emerald-950 uppercase">
                HOPE<span className="text-emerald-500 italic">LINK</span>
              </span>
            </Link>
          </div>

          <div className="bg-white rounded-[3.5rem] p-8 md:p-14 shadow-[0_32px_64px_-16px_rgba(6,78,59,0.08)] border border-emerald-100/50">

            {/* Role Switcher */}
            <div className="flex bg-gray-50/80 p-2 rounded-2xl mb-10 border border-gray-100">
              <button
                onClick={() => handleRoleSwitch("GN_OFFICER")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                  role === "GN_OFFICER"
                    ? "bg-white text-emerald-600 shadow-sm border border-emerald-100"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Landmark className="w-4 h-4" /> GN Officer
              </button>
              <button
                onClick={() => handleRoleSwitch("NGO_OFFICER")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                  role === "NGO_OFFICER"
                    ? "bg-white text-emerald-600 shadow-sm border border-emerald-100"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Building2 className="w-4 h-4" /> NGO Support
              </button>
            </div>

            <div className="mb-10 text-center">
              <p className="text-gray-400 font-medium text-sm">
                Access your {role === "GN_OFFICER" ? "verification dashboard" : "NGO management portal"}
              </p>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-[13px] font-bold"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleLogin} className="space-y-6">

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest block pl-1 opacity-60">
                  {role === "GN_OFFICER" ? "GN Division Email" : "NGO Admin Email"}
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-300 group-focus-within:text-emerald-600 transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={role === "GN_OFFICER" ? "officer.gn@gov.lk" : "admin@hopelink.org"}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-5 py-4 text-sm focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-300 font-semibold"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest opacity-60">
                    Password
                  </label>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-300 group-focus-within:text-emerald-600 transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-12 py-4 text-sm focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-300 font-semibold"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-emerald-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full ${
                  role === "GN_OFFICER" ? "bg-emerald-600" : "bg-emerald-800"
                } hover:opacity-90 disabled:opacity-50 text-white py-5 rounded-[1.5rem] font-bold text-xs uppercase tracking-widest shadow-2xl transition-all flex items-center justify-center gap-2 group active:scale-95 mt-4`}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Secure Authentication
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-12 text-center pt-8 border-t border-gray-50">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-emerald-600 transition-all uppercase tracking-[0.2em]"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Public Home
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center px-4">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed opacity-60">
              {role === "GN_OFFICER" ? "Government Internal Portal" : "Partnership Network Protocol"} <br />
              <span className="text-emerald-600 italic">Secure Endpoint v2.8.4</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}