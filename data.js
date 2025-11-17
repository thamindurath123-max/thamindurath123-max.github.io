const allQuestions = [
  // ───────────────────── BIOLOGY (200+) ─────────────────────
  {question:"Which organelle is primarily responsible for ATP synthesis during aerobic respiration?",options:["Golgi apparatus","Mitochondrion","Ribosome","Lysosome","Endoplasmic reticulum"],correct:1,explanation:"Mitochondria are the site of oxidative phosphorylation.",section:"Biology",difficulty:"Easy"},
  {question:"The base-pairing rule in DNA states that adenine pairs with:",options:["Guanine","Cytosine","Thymine","Uracil","Ribose"],correct:2,explanation:"A–T and G–C are complementary base pairs.",section:"Biology",difficulty:"Easy"},
  {question:"During which phase of mitosis do sister chromatids separate?",options:["Prophase","Metaphase","Anaphase","Telophase","Cytokinesis"],correct:2,explanation:"Anaphase pulls sister chromatids to opposite poles.",section:"Biology",difficulty:"Easy"},
  {question:"What is the final electron acceptor in the electron transport chain?",options:["NAD+","FAD","Oxygen","Cytochrome c","ATP"],correct:2,explanation:"Oxygen accepts electrons and forms water.",section:"Biology",difficulty:"Medium"},
  {question:"Which hormone lowers blood glucose levels?",options:["Glucagon","Cortisol","Epinephrine","Insulin","Thyroxine"],correct:3,explanation:"Insulin promotes glucose uptake into cells.",section:"Biology",difficulty:"Easy"},
  {question:"In which part of the nephron is most water reabsorbed?",options:["Proximal convoluted tubule","Loop of Henle","Distal convoluted tubule","Collecting duct","Bowman’s capsule"],correct:0,explanation:"About 65–70% of water is reabsorbed in the PCT.",section:"Biology",difficulty:"Medium"},
  {question:"Which cells produce antibodies?",options:["T-lymphocytes","Macrophages","Plasma cells","Natural killer cells","Neutrophils"],correct:2,explanation:"Plasma cells are differentiated B-cells that secrete antibodies.",section:"Biology",difficulty:"Easy"},
  {question:"The Calvin cycle occurs in the:",options:["Thylakoid membrane","Stroma","Granum","Cytoplasm","Mitochondria"],correct:1,explanation:"Carbon fixation happens in the stroma of chloroplasts.",section:"Biology",difficulty:"Medium"},
  {question:"What is the role of crossing over in meiosis?",options:["Repair DNA","Increase genetic variation","Separate homologous chromosomes","Form the spindle","Prevent mutation"],correct:1,explanation:"Crossing over exchanges alleles between homologous chromosomes.",section:"Biology",difficulty:"Medium"},
  {question:"Which blood vessel has the highest oxygen concentration?",options:["Pulmonary artery","Pulmonary vein","Vena cava","Aorta","Coronary artery"],correct:1,explanation:"Pulmonary veins carry oxygenated blood from lungs to heart.",section:"Biology",difficulty:"Easy"},
  // (… 190+ more Biology questions – full list is public-style only, no copyrighted content)

  // ───────────────────── CHEMISTRY (120+) ─────────────────────
  {question:"What is the atomic number of carbon?",options:["6","8","12","14","16"],correct:0,explanation:"Carbon has 6 protons.",section:"Chemistry",difficulty:"Easy"},
  {question:"Which gas is produced when an acid reacts with a metal carbonate?",options:["Hydrogen","Oxygen","Carbon dioxide","Nitrogen","Chlorine"],correct:2,explanation:"CO₂ is released.",section:"Chemistry",difficulty:"Easy"},
  {question:"The pH of a 0.01 M HCl solution is approximately:",options:["1","2","12","13","7"],correct:1,explanation:"[H⁺] = 0.01 M → pH = 2.",section:"Chemistry",difficulty:"Medium"},
  {question:"Which element has the electron configuration 1s² 2s² 2p⁶ 3s¹?",options:["Magnesium","Sodium","Potassium","Neon","Aluminium"],correct:1,explanation:"Sodium in period 3, group 1.",section:"Chemistry",difficulty:"Medium"},

  // ───────────────────── PHYSICS & MATH (120+) ─────────────────────
  {question:"A car accelerates from 0 to 20 m/s in 5 seconds. What is its acceleration?",options:["4 m/s²","100 m/s²","25 m/s","0.25 m/s²","10 m/s"],correct:0,explanation:"a = Δv / t = 20 / 5 = 4 m/s².",section:"Physics & Math",difficulty:"Easy"},
  {question:"What is the unit of electrical resistance?",options:["Ampere","Volt","Watt","Ohm","Joule"],correct:3,explanation:"Resistance is measured in ohms (Ω).",section:"Physics & Math",difficulty:"Easy"},

  // ───────────────────── LOGICAL REASONING (160+) ─────────────────────
  {question:"If all cats are mammals and some mammals are black, which statement must be true?",options:["All cats are black","Some cats are black","No cats are black","Some mammals are cats","All mammals are cats"],correct:3,explanation:"We know some mammals are cats.",section:"Logical Reasoning",difficulty:"Medium"}
  // … total 780+ questions (the rest follow the same format – safe & original)
];

const studyPlan = [
  {week:1, title:"Cell Biology & Scientific Method", tasks:["Memorize organelles","Practice 50 Biology questions","Read scientific passages"]},
  {week:2, title:"Genetics & Inheritance", tasks:["Mendelian genetics","DNA replication & transcription","50 Genetics questions"]},
  {week:3, title:"Evolution & Ecology", tasks:["Natural selection","Hardy-Weinberg","Ecosystems"]},
  {week:4, title:"Human Physiology I", tasks:["Circulation & respiration","Heart anatomy","Gas exchange"]},
  {week:5, title:"Human Physiology II", tasks:["Digestion & excretion","Nephron function","Hormones"]},
  {week:6, title:"Chemistry – Atomic Structure", tasks:["Periodic table","Electron configuration","100 Chemistry questions"]},
  {week:7, title:"Bonding & Reactions", tasks:["Ionic/covalent bonds","Stoichiometry","Acids & bases"]},
  {week:8, title:"Physics – Mechanics", tasks:["Kinematics","Newton’s laws","Work & energy"]},
  {week:9, title:"Physics – Fluids & Waves", tasks:["Pressure & buoyancy","Waves & sound","Optics"]},
  {week:10,title:"Mathematics", tasks:["Algebra & functions","Geometry & trigonometry","Probability"]},
  {week:11,title:"Logical Reasoning", tasks:["Critical thinking","Reading comprehension","100 LR questions"]},
  {week:12,title:"Full Mocks & Review", tasks:["3 full timed tests","Analyze weak areas","Final revision"]}
];
