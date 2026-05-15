import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { 
  FileText, 
  Download, 
  Calendar, 
  Search,
  Layers,
  Sparkles
} from "lucide-react";

const REPORTS = [
  {
    id: 1,
    type: "annual",
    year: "2023",
    title: "Annual Impact Report 2023",
    description:
      "A comprehensive review of our programmes, financial stewardship, and measurable outcomes across all provincial initiatives in Sri Lanka for the fiscal year 2023.",
    content: `ANNUAL IMPACT REPORT 2023
=====================================

Organisation: Systemic Change Initiative - Sri Lanka
Period: January 2023 - December 2023
Published: June 2024

EXECUTIVE SUMMARY
-----------------
This report documents the systemic transformations achieved across Sri Lanka's
provincial governance structures during 2023. Total beneficiaries reached: 1,24,500.
Programme expenditure: LKR 487 million. Fund utilisation efficiency: 94.2 %.

KEY PROGRAMME OUTCOMES
-----------------------
1. Education Reform Pilot – Northern Province
   • 340 schools integrated into the new curriculum framework.
   • Teacher training workshops conducted: 1,200 sessions.
   • Student literacy improvement: +18 % year-on-year.

2. Rural Healthcare Access
   • 48 mobile clinic units deployed across 9 districts.
   • Patients served: 82,000+.
   • Maternal mortality rate reduced by 11 % in target zones.

3. Agricultural Livelihood Support
   • 6,800 smallholder farmers enrolled in subsidy programme.
   • Average household income increase: 22 %.

FINANCIAL SUMMARY
-----------------
Total Revenue:        LKR 512,000,000
Programme Costs:      LKR 487,000,000
Administrative Costs: LKR  18,500,000
Reserve Fund:         LKR   6,500,000

METHODOLOGY
-----------
Data sourced from district government offices, independent auditors (KPMG Sri Lanka),
and field survey teams. All figures verified against National Census baselines.

ACKNOWLEDGEMENTS
----------------
We thank our regional partners, the Ministry of Provincial Councils, and all
community volunteers whose dedication made this work possible.

© 2024 Systemic Change Initiative. All rights reserved.
`,
  },
  {
    id: 2,
    type: "annual",
    year: "2022",
    title: "Annual Impact Report 2022",
    description:
      "Documenting the foundation year of our expanded mandate — outlining early wins, operational pivots, and lessons learned across community-led development programmes.",
    content: `ANNUAL IMPACT REPORT 2022
=====================================

Organisation: Systemic Change Initiative - Sri Lanka
Period: January 2022 - December 2022
Published: June 2023

EXECUTIVE SUMMARY
-----------------
2022 marked our organisation's strategic expansion into three new provinces.
Despite the national economic crisis, programme continuity was maintained through
decentralised fund management and community co-financing models.

Total beneficiaries reached: 78,300.
Programme expenditure: LKR 295 million. Fund utilisation efficiency: 91.7 %.

KEY PROGRAMME OUTCOMES
-----------------------
1. Crisis Response - Food Security
   • Emergency food parcels distributed: 45,000 households.
   • Community kitchen networks established: 67.

2. Youth Skills Development
   • Vocational training centres opened: 12.
   • Graduates placed in employment: 2,340.
   • Partner employers: 180 SMEs.

3. Water & Sanitation
   • Clean-water well rehabilitation: 310 wells.
   • Households with improved sanitation access: 14,200.

FINANCIAL SUMMARY
-----------------
Total Revenue:        LKR 318,000,000
Programme Costs:      LKR 295,000,000
Administrative Costs: LKR  16,000,000
Reserve Fund:         LKR   7,000,000

METHODOLOGY
-----------
Data compiled in partnership with district Divisional Secretariats and validated
by the Centre for Poverty Analysis (CEPA), Colombo.

ACKNOWLEDGEMENTS
----------------
Special thanks to international donor partners and local community councils
for sustained support throughout an extraordinary year.

© 2023 Systemic Change Initiative. All rights reserved.
`,
  },
  {
    id: 3,
    type: "research",
    year: "2024",
    title: "Governance Gaps & Civic Participation in Post-Crisis Sri Lanka",
    description:
      "An independent research paper examining the structural barriers to citizen engagement at the local government level and proposing evidence-based policy interventions.",
    content: `RESEARCH PAPER
=====================================
Title:   Governance Gaps & Civic Participation in Post-Crisis Sri Lanka
Authors: Dr. Nimalka Fernando, Dr. Ruwan Jayasuriya
Institution: Centre for Policy Alternatives, Colombo
Published: March 2024
DOI: 10.0000/cpa.lk.2024.001

ABSTRACT
--------
This paper investigates the structural and socio-political factors that suppress
civic participation at the Pradeshiya Sabha level across six districts following
the 2022 economic crisis. Using a mixed-methods approach—combining 1,800 household
surveys, 42 key-informant interviews, and administrative data—we identify three
principal governance gaps: informational asymmetry, resource centralisation, and
gender exclusion in committee representation.

1. INTRODUCTION
---------------
Sri Lanka's local governance framework, established under the Pradeshiya Sabhas
Act No. 15 of 1987, mandates devolved decision-making. In practice, fiscal
authority remains concentrated at the national level. The 2022 crisis exacerbated
this tension, as municipal budgets were cut by an average of 34 %, limiting
councils' ability to respond to constituent needs.

2. METHODOLOGY
--------------
2.1 Quantitative Survey
    • Sample: 1,800 households, stratified by district and urban/rural classification.
    • Tool: Structured questionnaire (Civic Engagement Index, adapted from UNDP 2019).
    • Analysis: Logistic regression; p < 0.05 threshold.

2.2 Qualitative Interviews
    • 42 key informants: elected officials, civil society leaders, women's groups.
    • Method: Semi-structured interviews; thematic analysis.

3. KEY FINDINGS
---------------
Finding 1 - Informational Asymmetry
    68 % of respondents were unaware of their council's annual budget allocation.
    Transparency portal adoption: only 3 of 22 surveyed councils.

Finding 2 - Resource Centralisation
    Districts forwarded 71 % of collected tax revenue to central coffers.
    Local discretionary spending averaged LKR 1,200 per capita (vs. national
    average of LKR 4,800 for comparable regional economies).

Finding 3 - Gender Exclusion
    Women hold 6.4 % of decision-making committee seats (constitutional quota: 25 %).
    Barrier analysis identifies mobility constraints and social norms as primary drivers.

4. POLICY RECOMMENDATIONS
--------------------------
R1. Mandate quarterly open-budget meetings at Pradeshiya Sabha level.
R2. Introduce a fiscal equalisation transfer mechanism (similar to India's Finance
    Commission model) to correct revenue-sharing imbalances.
R3. Enforce gender quota legislation with penalties and capacity-building grants.

5. CONCLUSION
-------------
Closing governance gaps requires both legislative reform and sustained civil society
pressure. The evidence presented here provides a baseline for measuring progress
against the National Governance Improvement Plan 2025-2030.

REFERENCES
----------
[1] UNDP. (2019). Civic Engagement Index Methodology. New York: UNDP.
[2] Ministry of Local Government. (2023). Annual Statistical Compendium. Colombo.
[3] Jayawardena, K. (2021). Devolution and Democracy in Sri Lanka. Colombo: SSA.

© 2024 Centre for Policy Alternatives. All rights reserved.
`,
  },{
    id: 4,
    type: "research",
    year: "2023",
    title: "Climate Vulnerability & Agrarian Livelihoods in the Dry Zone",
    description:
      "A field-based research study assessing how shifting rainfall patterns are reshaping subsistence farming communities in Sri Lanka's North Central Province.",
    content: `RESEARCH PAPER
=====================================
Title:   Climate Vulnerability & Agrarian Livelihoods in the Dry Zone
Authors: Prof. Saman Attapattu, Ms. Dilini Wickramasinghe
Institution: University of Peradeniya, Faculty of Agriculture
Published: September 2023
DOI: 10.0000/up.ag.2023.017

ABSTRACT
--------
This study examines the compounding effects of climate variability on smallholder
paddy and chena cultivation in Sri Lanka's North Central Province. Drawing on
five seasons of crop-yield data (2018-2023), meteorological records, and 620
farm-household interviews, we quantify yield losses attributable to erratic monsoon
patterns and rising temperatures, and evaluate the adaptive capacity of farming
communities under current policy conditions.

1. INTRODUCTION
---------------
The Dry Zone accounts for approximately 40 % of Sri Lanka's paddy output. Over
the past decade, the Maha and Yala seasonal rainfall indices have shown a
statistically significant downward trend (-12 mm/season, p < 0.01), while mean
daytime temperatures have risen by 0.8 °C. These shifts threaten the livelihoods
of an estimated 620,000 farming households.

2. DATA & METHODS
-----------------
2.1 Crop Yield Database
    • Source: Department of Agriculture district reports (2018-2023).
    • Crops: Paddy (primary), green gram, sesame (secondary).
    • Panel regression controlling for input costs and irrigation access.

2.2 Household Survey
    • 620 households; districts: Anuradhapura, Polonnaruwa, Vavuniya.
    • Livelihood Vulnerability Index (LVI-IPCC framework).

2.3 Meteorological Data
    • Department of Meteorology stations (daily records, 2000-2023).

3. RESULTS
----------
3.1 Yield Trends
    Paddy yield declined by an average 14.3 % over the study period in rain-fed
    plots. Irrigated plots showed a smaller decline of 5.8 %, confirming irrigation
    as a key buffer.

3.2 Vulnerability Index
    • High vulnerability (LVI ≥ 0.65): 38 % of surveyed households.
    • Moderate (0.40-0.64): 44 %.
    • Low (< 0.40): 18 %.
    Households with < 0.5 ha of irrigated land and no off-farm income ranked
    highest on the vulnerability scale.

3.3 Adaptive Strategies Observed
    • Crop diversification: 29 % of households.
    • Migration (seasonal labour): 41 %.
    • Savings/credit use: 54 %; 22 % reported over-indebtedness.

4. DISCUSSION
-------------
The data reveal a growing dependency on informal credit markets as a coping
mechanism—a pattern that increases household debt burden without addressing
underlying productivity losses. Government-subsidised crop insurance penetration
remains below 8 % in the study area.

5. RECOMMENDATIONS
------------------
R1. Expand minor irrigation rehabilitation to rain-fed priority zones.
R2. Scale crop insurance uptake through Grama Niladhari-level awareness campaigns.
R3. Introduce drought-tolerant paddy varieties (e.g., At 405) through
    subsidised seed distribution.
R4. Establish climate early-warning SMS networks at Agrarian Services Centre level.

6. CONCLUSION
-------------
Without targeted policy intervention, climate-induced yield losses will push
a significant proportion of Dry Zone farming households below the poverty line
within a decade. Immediate investment in adaptive infrastructure is essential.

REFERENCES
----------
[1] IPCC. (2022). Sixth Assessment Report - Impacts, Adaptation and Vulnerability.
[2] Department of Agriculture. (2023). Statistical Handbook. Colombo.
[3] Bandara, J.S. & Cai, Y. (2014). The impact of climate change on food crop
    productivity in South Asia. Economic Modelling, 36, 477-485.

© 2023 University of Peradeniya. All rights reserved.
`,
  },
];

function handleDownload(report) {
  const blob = new Blob([report.content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${report.title.replace(/\s+/g, "_")}_${report.year}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function ReportsResearches() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloading, setDownloading] = useState(null);

  const filteredReports = REPORTS.filter((report) => {
    const matchesFilter = filter === "all" ? true : report.type === filter;
    const matchesSearch =
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const onDownload = (e, report) => {
    e.preventDefault();
    setDownloading(report.id);
    setTimeout(() => {
      handleDownload(report);
      setDownloading(null);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 pt-20">
      <section className="bg-emerald-950 py-32 md:py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000"
            alt="Research and documentation"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-800/20 rounded-full blur-3xl opacity-50 z-0" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl opacity-30 z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight max-w-4xl"
          >
            <span className="text-white">
              Evidence-Based <br />
              <span className="text-emerald-400 font-serif italic font-medium">
                Research
              </span>{" "}
              &amp; Insights
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100/60 max-w-2xl leading-relaxed font-serif italic mb-12"
          >
            Access our comprehensive archive of annual reports and independent
            research papers documenting the systemic changes across Sri Lanka.
          </motion.p>

          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400/80">
            <Link to="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white">REPORTS &amp; RESEARCH</span>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-gray-50 bg-white sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto invisible-scrollbar">
              {["all", "annual", "research"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                    filter === type
                      ? "bg-emerald-950 text-white shadow-xl shadow-emerald-950/20"
                      : "bg-gray-50 text-gray-400 hover:text-emerald-900 border border-transparent hover:border-emerald-100"
                  }`}
                >
                  {type === "all"
                    ? "A-Z Documents"
                    : type === "annual"
                    ? "Annual Reports"
                    : "Research Papers"}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
              <input
                type="text"
                placeholder="SEARCH ARCHIVE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-transparent rounded-2xl py-4 pl-14 pr-6 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-600/10 focus:bg-white focus:border-emerald-100 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          {filteredReports.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-[3rem] p-10 flex gap-8 border border-transparent hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all"
                >
                  <div className="hidden sm:flex flex-col items-center justify-center w-24 h-32 bg-emerald-50 rounded-2xl shrink-0 group-hover:bg-emerald-950 transition-colors">
                    <FileText className="w-10 h-10 text-emerald-600 group-hover:text-emerald-400 transition-colors" />
                    <div className="mt-2 text-[8px] font-black text-emerald-950 uppercase tracking-tighter group-hover:text-white/40">
                      {report.type === "annual" ? "PDF / REPORT" : "PDF / PAPER"}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[9px] font-bold rounded-lg uppercase tracking-widest border border-emerald-100">
                        {report.type === "annual" ? "Annual" : "Research"}
                      </span>
                      <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                        <Calendar className="w-3 h-3 text-emerald-400" />{" "}
                        {report.year}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-emerald-950 mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                      {report.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-auto border-l border-emerald-100 pl-6 font-medium">
                      {report.description}
                    </p>

                    <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-start">
                      <button
                        onClick={(e) => onDownload(e, report)}
                        disabled={downloading === report.id}
                        className="inline-flex items-center gap-3 text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] hover:text-emerald-950 transition-colors group/link disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Download
                          className={`w-4 h-4 transition-transform ${
                            downloading === report.id
                              ? "animate-bounce"
                              : "group-hover/link:translate-y-0.5"
                          }`}
                        />
                        {downloading === report.id
                          ? "Preparing…"
                          : "Download Full Access"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-40">
              <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Search className="w-10 h-10 text-emerald-200" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4 tracking-tight">
                No documents matching your search
              </h3>
              <p className="text-emerald-900/40 font-serif italic">
                Try adjusting your filters or refining your keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-32 rounded-t-[5rem] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-12 tracking-tight">
            Academic Integrity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-[#FAFAFA] p-10 rounded-[3rem]">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Layers className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-lg font-bold text-emerald-950 mb-4 uppercase tracking-widest text-[10px]">
                Data Sourcing
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Our research is compiled in partnership with regional government
                offices and independent verification audits.
              </p>
            </div>
            <div className="bg-[#FAFAFA] p-10 rounded-[3rem]">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-lg font-bold text-emerald-950 mb-4 uppercase tracking-widest text-[10px]">
                Annual Review
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Financial and impact transparency reports are released every
                June following our comprehensive annual audit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}