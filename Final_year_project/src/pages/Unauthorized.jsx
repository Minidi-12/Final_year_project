import { useNavigate } from "react-router";
import { ShieldX, LogOut, ArrowLeft } from "lucide-react";

export default function Unauthorized() {
  const navigate = useNavigate();

  const userRole = localStorage.getItem("userRole");

  const handleGoHome = () => {
    if (userRole === "GN_OFFICER")  navigate("/verify");
    else if (userRole === "NGO_OFFICER") navigate("/dashboard");
    else navigate("/login");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center bg-white rounded-[3rem] p-14 shadow-[0_32px_64px_-16px_rgba(239,68,68,0.08)] border border-red-100/50">

        <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-red-100">
          <ShieldX className="w-10 h-10 text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          Access Denied
        </h1>
        <p className="text-sm text-gray-400 font-medium mb-10 leading-relaxed">
          You don't have permission to view this page. <br />
          This area is restricted to a different role.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoHome}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:opacity-90 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go to My Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-600 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all border border-gray-100"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}