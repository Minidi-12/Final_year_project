import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Heart, ArrowLeft, ArrowRight, User, MapPin, FileText,
  Users, Briefcase, Wallet, Info, CheckCircle2, Upload,
  ShieldCheck, Stethoscope, AlertCircle,
} from "lucide-react";
import { useNavigate, Link } from "react-router";
import { useCreateb_reqMutation, useGetAllgn_divisionsQuery } from "@/lib/api";
import ImageInput from "@/components/ImageInput";
import { ChevronDown } from "lucide-react";

const Err = ({ msg }) =>
  msg ? (
    <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1.5 text-[11px] font-semibold text-red-500 mt-1.5 pl-1">
      <AlertCircle className="w-3 h-3 shrink-0" /> {msg}
    </motion.p>
  ) : null;

const STEPS = [
  { id: 1, label: "Identity",  icon: User       },
  { id: 2, label: "Location",  icon: MapPin     },
  { id: 3, label: "Financial", icon: Wallet     },
  { id: 4, label: "Health",    icon: Stethoscope},
  { id: 5, label: "Support",   icon: Briefcase  },
  { id: 6, label: "Review",    icon: FileText   },
];

export default function RequestSupport() {
  const navigate = useNavigate();
  const [step, setStep]           = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reqEvidence, setReqEvidence] = useState([]);
  const [errors, setErrors]       = useState({});

  const [formData, setFormData] = useState({
    name: "", nic: "", phone_no: "", age: "",
    gender: "male", address: "", gn_division: "",
    family_size: "", children_under_18: "0",
    monthly_income: "", employment_type: "Daily wage",
    GovtAllowance: [], otherIncomeSources: "",
    chronic_illness: { exists: false, description: "" },
    nearest_hospitalkm: "", disabilityInHousehold: false,
    highestEducationLevel: "O/Level", distanceToSchoolKm: "0",
    childrenDroppedOut: false, housing_type: "temporary",
    safewater_access: false, sanitation_access: false,
    electricity_access: false, support_types: [],
    support_description: "", selfrated_urgency: "",
  });

  const { data: gn_divisions, isLoading } = useGetAllgn_divisionsQuery();
  const [createB_req, { isLoading: isCreating }] = useCreateb_reqMutation();

  const set = (name, value) => {
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    set(name, type === "checkbox" ? checked : value);
  };

  const toggleArray = (field, value) => {
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
    setFormData((p) => {
      const arr = p[field] || [];
      return { ...p, [field]: arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value] };
    });
  };

  const validate = (s) => {
    const e = {};
    if (s === 1) {
      if (!formData.name.trim()) e.name = "Full name is required";
      if (!formData.nic.trim()) e.nic = "NIC number is required";
      else if (!/^([0-9]{9}[vVxX]|[0-9]{12})$/.test(formData.nic.trim()))
        e.nic = "Invalid NIC — use 12 digits or 9 digits + V/X";
      if (!formData.age) e.age = "Age is required";
      else if (Number(formData.age) <= 0 || Number(formData.age) > 100)
        e.age = "Age must be between 1 and 100";
      if (!formData.phone_no.trim()) e.phone_no = "Phone number is required";
      else if (!/^[0-9]{10}$/.test(formData.phone_no.trim()))
        e.phone_no = "Must be exactly 10 digits (e.g. 0771234567)";
    }
    if (s === 2) {
      if (!formData.address.trim()) e.address = "Address is required";
      if (!formData.gn_division) e.gn_division = "Please select your GN Division";
      if (!formData.family_size || Number(formData.family_size) < 1)
        e.family_size = "Family size must be at least 1";
      if (Number(formData.children_under_18) < 0)
        e.children_under_18 = "Cannot be negative";
    }
    if (s === 3) {
      if (formData.monthly_income === "" || formData.monthly_income === null)
        e.monthly_income = "Monthly income is required";
      else if (Number(formData.monthly_income) < 0)
        e.monthly_income = "Income cannot be negative";
      if (!formData.employment_type) e.employment_type = "Employment type is required";
    }
    if (s === 4) {
      if (formData.nearest_hospitalkm === "" || formData.nearest_hospitalkm === null)
        e.nearest_hospitalkm = "Distance to nearest hospital is required";
      else if (Number(formData.nearest_hospitalkm) < 0)
        e.nearest_hospitalkm = "Distance cannot be negative";
      if (!formData.highestEducationLevel) e.highestEducationLevel = "Education level is required";
      if (Number(formData.distanceToSchoolKm) < 0) e.distanceToSchoolKm = "Distance cannot be negative";
    }
    if (s === 5) {
      if (!formData.support_types || formData.support_types.length === 0)
        e.support_types = "Select at least one type of support";
      if (!formData.support_description.trim()) e.support_description = "Please describe your situation";
      else if (formData.support_description.trim().length < 10)
        e.support_description = "Minimum 10 characters required";
      if (!formData.selfrated_urgency) e.selfrated_urgency = "Please rate your urgency level";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => { if (validate(step)) { setStep((p) => p + 1); window.scrollTo(0, 0); } };
  const prevStep = () => { setErrors({}); setStep((p) => p - 1); window.scrollTo(0, 0); };

  const getGnName = (id) => {
    if (!id || !gn_divisions) return "Unknown";
    const d = gn_divisions.find((x) => String(x._id || x.id) === String(id));
    return d?.gn_division_Name || d?.name || "Unknown";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createB_req({
        b_profile: [{
          nic: formData.nic.trim(), name: formData.name.trim(),
          phone_no: formData.phone_no.trim(), age: Number(formData.age),
          gender: formData.gender, address: formData.address.trim(),
          gn_division: getGnName(formData.gn_division),
          family_size: Number(formData.family_size),
          children_under_18: Number(formData.children_under_18) || 0,
          monthly_income: Number(formData.monthly_income),
          employment_type: formData.employment_type,
          GovtAllowance: formData.GovtAllowance,
          otherIncomeSources: formData.otherIncomeSources || "",
          chronic_illness: { exists: formData.chronic_illness.exists, description: formData.chronic_illness.description || "" },
          nearest_hospitalkm: Number(formData.nearest_hospitalkm),
          disabilityInHousehold: formData.disabilityInHousehold,
          highestEducationLevel: formData.highestEducationLevel,
          distanceToSchoolKm: Number(formData.distanceToSchoolKm) || 0,
          childrenDroppedOut: formData.childrenDroppedOut,
          housing_type: formData.housing_type,
          safewater_access: formData.safewater_access,
          sanitation_access: formData.sanitation_access,
          electricity_access: formData.electricity_access,
          support_types: formData.support_types,
          support_description: formData.support_description.trim(),
          selfrated_urgency: String(formData.selfrated_urgency),
        }],
        req_evidence: reqEvidence,
        gn_division_Id: formData.gn_division,
      }).unwrap();
      setIsSuccess(true);
    } catch (err) {
      alert(`Submission failed: ${err.data?.message || err.message || "Unknown error"}`);
    }
  };

  const inputCls = (field) =>
    `w-full bg-slate-50 border rounded-xl px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-300 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
      errors[field] ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:ring-emerald-200 focus:border-emerald-400"
    }`;

  const labelCls = "text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5";

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl p-12 shadow-xl border border-emerald-100 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Application Submitted!</h1>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Your application has been received. Our team will coordinate with your local GN division for verification. You will receive WhatsApp updates.
          </p>
          <button onClick={() => navigate("/")}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm transition-all">
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-slate-900">HOPE<span className="text-emerald-600">LINK</span></span>
          </Link>
          <div className="flex items-center gap-1">
            {STEPS.map((s) => (
              <div key={s.id} className="flex items-center">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                  s.id < step ? "bg-emerald-600 text-white" :
                  s.id === step ? "bg-emerald-950 text-white ring-2 ring-emerald-300" :
                  "bg-slate-100 text-slate-400"
                }`}>
                  {s.id < step ? <CheckCircle2 className="w-3.5 h-3.5" /> : s.id}
                </div>
                {s.id < 6 && <div className={`w-5 h-0.5 mx-0.5 ${s.id < step ? "bg-emerald-600" : "bg-slate-200"}`} />}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-16 px-4 max-w-3xl mx-auto">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
            Step {step} of 6 — {STEPS[step - 1].label}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="p-8">
              <AnimatePresence mode="wait">

                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Personal Identity</h2>
                      <p className="text-sm text-slate-400 mt-1">Enter your legal identification details as they appear on your NIC.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Full Name <span className="text-red-400">*</span></label>
                        <input name="name" value={formData.name} onChange={handleInput} placeholder="As per your NIC" className={inputCls("name")} />
                        <Err msg={errors.name} />
                      </div>
                      <div>
                        <label className={labelCls}>NIC Number <span className="text-red-400">*</span></label>
                        <input name="nic" value={formData.nic} onChange={handleInput} placeholder="199012345678 or 901234567V" className={`${inputCls("nic")} uppercase`} />
                        <Err msg={errors.nic} />
                      </div>
                      <div>
                        <label className={labelCls}>Age <span className="text-red-400">*</span></label>
                        <input
                          name="age"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={formData.age}
                          onChange={handleInput}
                          placeholder="e.g. 35"
                          maxLength={3}
                          className={`${inputCls("age")} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                        />
                        <Err msg={errors.age} />
                      </div>
                      <div>
                        <label className={labelCls}>Gender <span className="text-red-400">*</span></label>
                        <div className="flex gap-3">
                          {["male", "female"].map((g) => (
                            <button key={g} type="button" onClick={() => set("gender", g)}
                              className={`flex-1 py-3.5 rounded-xl border text-sm font-semibold capitalize transition-all ${
                                formData.gender === g ? "bg-emerald-950 text-white border-emerald-950" : "bg-slate-50 text-slate-500 border-slate-200 hover:border-emerald-300"
                              }`}>{g}</button>
                          ))}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label className={labelCls}>Phone Number <span className="text-red-400">*</span></label>
                        <input
                          name="phone_no"
                          type="text"
                          inputMode="numeric"
                          value={formData.phone_no}
                          onChange={handleInput}
                          placeholder="e.g. 0771234567"
                          maxLength={10}
                          className={inputCls("phone_no")}
                        />
                        <p className="text-[11px] text-slate-400 mt-1 pl-1">Enter 10-digit Sri Lankan number starting with 07</p>
                        <Err msg={errors.phone_no} />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Location & Living</h2>
                      <p className="text-sm text-slate-400 mt-1">Your residential details help us assign the right GN Officer.</p>
                    </div>
                    <div>
                      <label className={labelCls}>Permanent Address <span className="text-red-400">*</span></label>
                      <textarea name="address" value={formData.address} onChange={handleInput} placeholder="House No, Street, Village, Town, City" rows={3} className={`${inputCls("address")} resize-none`} />
                      <Err msg={errors.address} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>GN Division <span className="text-red-400">*</span></label>
                        <select name="gn_division" value={formData.gn_division} onChange={handleInput} disabled={isLoading} className={`${inputCls("gn_division")} appearance-none`}>
                          <option value="">{isLoading ? "Loading..." : "Select your division"}</option>
                          {gn_divisions?.map((d) => (
                            <option key={d._id || d.id} value={d._id || d.id}>{d.gn_division_Name || d.name}</option>
                          ))}
                        </select>
                        <Err msg={errors.gn_division} />
                      </div>
                      <div>
                        <label className={labelCls}>Housing Type <span className="text-red-400">*</span></label>
                        <select name="housing_type" value={formData.housing_type} onChange={handleInput} className={`${inputCls("housing_type")} appearance-none`}>
                          <option value="own">Self Owned</option>
                          <option value="rent">Rented</option>
                          <option value="temporary">Temporary Shelter</option>
                          <option value="no-fixed_shelter">No Fixed Shelter</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Family Size <span className="text-red-400">*</span></label>
                        <input name="family_size" type="number" min="1" value={formData.family_size} onChange={handleInput} placeholder="Total members" className={inputCls("family_size")} />
                        <Err msg={errors.family_size} />
                      </div>
                      <div>
                        <label className={labelCls}>Children Under 18</label>
                        <input name="children_under_18" type="number" min="0" value={formData.children_under_18} onChange={handleInput} placeholder="0" className={inputCls("children_under_18")} />
                        <Err msg={errors.children_under_18} />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Utility Access <span className="text-slate-300">(check all that apply)</span></label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { name: "safewater_access", label: "Safe Water", emoji: "💧" },
                          { name: "sanitation_access", label: "Sanitation", emoji: "🚿" },
                          { name: "electricity_access", label: "Electricity", emoji: "⚡" },
                        ].map((u) => (
                          <label key={u.name} className={`flex flex-col items-center gap-2 p-4 rounded-xl border cursor-pointer transition-all text-center ${
                            formData[u.name] ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-slate-50 border-slate-200 text-slate-400 hover:border-slate-300"
                          }`}>
                            <input type="checkbox" name={u.name} checked={formData[u.name]} onChange={handleInput} className="sr-only" />
                            <span className="text-xl">{u.emoji}</span>
                            <span className="text-xs font-semibold">{u.label}</span>
                            {formData[u.name] && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Financial Status</h2>
                      <p className="text-sm text-slate-400 mt-1">Income details help us determine the right level of support.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Monthly Income <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400 pointer-events-none">LKR</span>
                          <input name="monthly_income" type="number" min="0" value={formData.monthly_income} onChange={handleInput} placeholder="0" className={`${inputCls("monthly_income")} pl-14`} />
                        </div>
                        <Err msg={errors.monthly_income} />
                      </div>
                      <div>
                        <label className={labelCls}>Employment Type <span className="text-red-400">*</span></label>
                        <select name="employment_type" value={formData.employment_type} onChange={handleInput} className={`${inputCls("employment_type")} appearance-none`}>
                          {["Government","Private","Self employed","Unemployed","Daily wage"].map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <Err msg={errors.employment_type} />
                      </div>
                      <div className="sm:col-span-2">
                        <label className={labelCls}>Other Income Sources <span className="text-slate-300">(optional)</span></label>
                        <input name="otherIncomeSources" value={formData.otherIncomeSources} onChange={handleInput} placeholder="e.g. Small garden, seasonal work..." className={inputCls("otherIncomeSources")} />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Government Allowances <span className="text-slate-300">(select all that apply)</span></label>
                      <div className="flex flex-wrap gap-2">
                        {["Samurdhi","Elderly Allowance","Disability Allowance","Ath Wasuma","Other"].map((a) => (
                          <button key={a} type="button" onClick={() => toggleArray("GovtAllowance", a)}
                            className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                              formData.GovtAllowance.includes(a) ? "bg-emerald-950 text-white border-emerald-950" : "bg-white text-slate-500 border-slate-200 hover:border-emerald-300 hover:text-emerald-700"
                            }`}>{a}</button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Health & Education</h2>
                      <p className="text-sm text-slate-400 mt-1">Health and education factors are key indicators for assessing support needs.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Distance to Nearest Hospital <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <input name="nearest_hospitalkm" type="number" min="0" step="0.1" value={formData.nearest_hospitalkm} onChange={handleInput} placeholder="0" className={`${inputCls("nearest_hospitalkm")} pr-12`} />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-300 font-medium pointer-events-none">km</span>
                        </div>
                        <Err msg={errors.nearest_hospitalkm} />
                      </div>
                      <div>
                        <label className={labelCls}>Highest Education Level <span className="text-red-400">*</span></label>
                        <select name="highestEducationLevel" value={formData.highestEducationLevel} onChange={handleInput} className={`${inputCls("highestEducationLevel")} appearance-none`}>
                          {[{val:"none",label:"No Formal Education"},{val:"1-10",label:"Grade 1 – 10"},{val:"O/Level",label:"O/Level"},{val:"A/Level",label:"A/Level"},{val:"degree",label:"Degree"},{val:"other",label:"Other"}].map((e) => <option key={e.val} value={e.val}>{e.label}</option>)}
                        </select>
                        <Err msg={errors.highestEducationLevel} />
                      </div>
                      <div>
                        <label className={labelCls}>Distance to School</label>
                        <div className="relative">
                          <input name="distanceToSchoolKm" type="number" min="0" step="0.1" value={formData.distanceToSchoolKm} onChange={handleInput} placeholder="0" className={`${inputCls("distanceToSchoolKm")} pr-12`} />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-300 font-medium pointer-events-none">km</span>
                        </div>
                        <Err msg={errors.distanceToSchoolKm} />
                      </div>
                    </div>
                    <div className={`p-5 rounded-xl border transition-all ${formData.chronic_illness.exists ? "bg-red-50 border-red-200" : "bg-slate-50 border-slate-200"}`}>
                      <label className="flex items-center gap-3 cursor-pointer" onClick={() => setFormData((p) => ({ ...p, chronic_illness: { ...p.chronic_illness, exists: !p.chronic_illness.exists } }))}>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all shrink-0 ${formData.chronic_illness.exists ? "bg-red-500 border-red-500" : "border-slate-300"}`}>
                          {formData.chronic_illness.exists && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Chronic Illness in Household</span>
                          <p className="text-[11px] text-slate-400">Diabetes, heart disease, cancer, etc.</p>
                        </div>
                      </label>
                      <AnimatePresence>
                        {formData.chronic_illness.exists && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-4">
                            <input value={formData.chronic_illness.description} onChange={(e) => setFormData((p) => ({ ...p, chronic_illness: { ...p.chronic_illness, description: e.target.value } }))} placeholder="Briefly describe the condition..." className="w-full bg-white border border-red-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-200" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { name: "disabilityInHousehold", label: "Disability in Household", sub: "Physical or mental disability" },
                        { name: "childrenDroppedOut", label: "Children Dropped Out", sub: "Due to financial reasons" },
                      ].map((item) => (
                        <label key={item.name} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData[item.name] ? "bg-amber-50 border-amber-200" : "bg-slate-50 border-slate-200 hover:border-slate-300"}`}>
                          <input type="checkbox" name={item.name} checked={formData[item.name]} onChange={handleInput} className="sr-only" />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${formData[item.name] ? "bg-amber-500 border-amber-500" : "border-slate-300"}`}>
                            {formData[item.name] && <CheckCircle2 className="w-3 h-3 text-white" />}
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-slate-700 block">{item.label}</span>
                            <span className="text-[11px] text-slate-400">{item.sub}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Support Request</h2>
                      <p className="text-sm text-slate-400 mt-1">Tell us what kind of help your family needs most.</p>
                    </div>
                    <div>
                      <label className={labelCls}>Type of Support Needed <span className="text-red-400">*</span></label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {[
                          { val: "financial", emoji: "💰", label: "Financial" },
                          { val: "medical", emoji: "🏥", label: "Medical" },
                          { val: "educational", emoji: "📚", label: "Educational" },
                          { val: "sanitation", emoji: "🚿", label: "Sanitation" },
                          { val: "pre-loved_items", emoji: "👕", label: "Pre-loved Items" },
                          { val: "counselling", emoji: "💬", label: "Counselling" },
                          { val: "other", emoji: "✨", label: "Other" },
                        ].map((t) => (
                          <button key={t.val} type="button" onClick={() => toggleArray("support_types", t.val)}
                            className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-left transition-all ${
                              formData.support_types.includes(t.val) ? "bg-emerald-950 text-white border-emerald-950 shadow-md" : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50"
                            }`}>
                            <span className="text-lg">{t.emoji}</span>
                            <span className="text-xs font-semibold">{t.label}</span>
                            {formData.support_types.includes(t.val) && <CheckCircle2 className="w-3.5 h-3.5 ml-auto text-emerald-300" />}
                          </button>
                        ))}
                      </div>
                      <Err msg={errors.support_types} />
                    </div>
                    <div>
                      <label className={labelCls}>Describe Your Situation <span className="text-red-400">*</span> <span className="text-slate-300 normal-case font-normal">(min 10 characters)</span></label>
                      <textarea name="support_description" value={formData.support_description} onChange={handleInput} placeholder="Describe your current living situation, the challenges you're facing, and what kind of help would make the most difference..." rows={5} className={`${inputCls("support_description")} resize-none`} />
                      <div className="flex items-center justify-between mt-1.5 px-1">
                        <Err msg={errors.support_description} />
                        <span className={`text-[11px] font-semibold ml-auto ${formData.support_description.length === 0 ? "text-slate-300" : formData.support_description.length < 10 ? "text-red-400" : "text-emerald-500"}`}>
                          {formData.support_description.length} / 10 min
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>How urgent is your situation? <span className="text-red-400">*</span></label>
                      <div className="grid grid-cols-5 gap-2">
                        {[
                          { val: "1", label: "Low" },
                          { val: "2", label: "Mild" },
                          { val: "3", label: "Moderate" },
                          { val: "4", label: "High" },
                          { val: "5", label: "Critical" },
                        ].map((r) => (
                          <button key={r.val} type="button" onClick={() => set("selfrated_urgency", r.val)}
                            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all ${
                              formData.selfrated_urgency === r.val ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105" : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                            }`}>
                            <span className="text-lg font-bold">{r.val}</span>
                            <span className="text-[10px] font-semibold">{r.label}</span>
                          </button>
                        ))}
                      </div>
                      <Err msg={errors.selfrated_urgency} />
                    </div>
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 border-dashed">
                      <div className="flex items-center gap-2 mb-3">
                        <Upload className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-semibold text-slate-600">Supporting Documents</span>
                        <span className="text-xs text-slate-400">(optional)</span>
                      </div>
                      <ImageInput onChange={(files) => {
                        const list = Array.isArray(files) ? files : [files];
                        setReqEvidence(list.filter(Boolean).map((f) => ({ fileUrl: f.url || f.preview || (typeof f === "string" ? f : ""), file_name: f.name || "upload", description: "", uploaded_at: new Date().toISOString() })));
                      }} multiple accept="image/*,.pdf" maxSizeMB={5} className="w-full" />
                      {reqEvidence.length > 0 && <p className="mt-2 text-[11px] font-semibold text-emerald-600">✓ {reqEvidence.length} file{reqEvidence.length > 1 ? "s" : ""} ready</p>}
                    </div>
                  </motion.div>
                )}

                {step === 6 && (
                  <motion.div key="s6" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Review & Submit</h2>
                      <p className="text-sm text-slate-400 mt-1">Verify everything before submitting. You cannot edit after submission.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[["Name",formData.name],["NIC",formData.nic.toUpperCase()],["Age",`${formData.age} years`],["Phone",formData.phone_no],["GN Division",getGnName(formData.gn_division)],["Income",`LKR ${Number(formData.monthly_income).toLocaleString()}/mo`],["Employment",formData.employment_type],["Housing",formData.housing_type]].map(([label,val]) => (
                        <div key={label} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-0.5">{label}</span>
                          <span className="text-sm font-semibold text-slate-800">{val || "—"}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                      <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block mb-2">Support Requested</span>
                      <div className="flex flex-wrap gap-2">
                        {formData.support_types.map((s) => <span key={s} className="px-3 py-1 bg-white text-emerald-700 rounded-lg text-xs font-semibold border border-emerald-200 capitalize">{s}</span>)}
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1.5">Situation Description</span>
                      <p className="text-sm text-slate-700 leading-relaxed">"{formData.support_description}"</p>
                    </div>
                    <div className="flex gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-800 font-medium leading-relaxed">By submitting, you confirm all information is truthful. Falsifying welfare documents is a punishable offense under Sri Lankan law.</p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}

              {step < 6 ? (
                <button type="button" onClick={nextStep} className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-emerald-200 active:scale-95">
                  {step === 5 ? "Review Application" : "Continue"} <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button type="submit" disabled={isCreating} className="flex items-center gap-2 px-8 py-2.5 bg-emerald-950 hover:bg-black text-white text-sm font-semibold rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50">
                  {isCreating ? <><span>Submitting...</span><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></> : <><CheckCircle2 className="w-4 h-4" /> Confirm & Submit</>}
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="mt-8 text-center flex items-center justify-center gap-2 text-slate-400">
          <ShieldCheck className="w-4 h-4" />
          <p className="text-xs font-medium">Your data is encrypted and securely stored. Used only for welfare assessment.</p>
        </div>
      </main>
    </div>
  );
}