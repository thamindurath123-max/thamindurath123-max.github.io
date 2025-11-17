const questions = [
  {
    "question": "Which organelle is primarily responsible for synthesizing ATP during aerobic respiration?",
    "options": ["Golgi apparatus", "Mitochondrion", "Ribosome", "Smooth ER", "Lysosome"],
    "correct_answer": "Mitochondrion",
    "explanation": "ATP is generated via oxidative phosphorylation in the mitochondria.",
    "topic": "Cell Biology",
    "difficulty": "Medium"
  },
  {
    "question": "Which type of bond connects complementary bases in DNA?",
    "options": ["Ionic bonds", "Hydrogen bonds", "Phosphodiester bonds", "Peptide bonds", "Glycosidic bonds"],
    "correct_answer": "Hydrogen bonds",
    "explanation": "Hydrogen bonds hold A–T and G–C pairs together.",
    "topic": "Genetics",
    "difficulty": "Easy"
  },
  {
    "question": "Which structure is NOT part of the endomembrane system?",
    "options": ["Lysosome", "Golgi apparatus", "Rough ER", "Mitochondrion", "Transport vesicles"],
    "correct_answer": "Mitochondrion",
    "explanation": "Mitochondria are independent of the endomembrane system.",
    "topic": "Cell Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which phase of mitosis involves the separation of sister chromatids?",
    "options": ["Prophase", "Metaphase", "Anaphase", "Telophase", "Interphase"],
    "correct_answer": "Anaphase",
    "explanation": "During anaphase, spindle fibers pull chromatids apart.",
    "topic": "Cell Division",
    "difficulty": "Easy"
  },
  {
    "question": "Which molecule acts as the final electron acceptor in the electron transport chain?",
    "options": ["CO2", "ATP", "NADH", "O2", "H2O"],
    "correct_answer": "O2",
    "explanation": "Oxygen accepts electrons and forms water.",
    "topic": "Respiration",
    "difficulty": "Medium"
  },
  {
    "question": "What type of natural selection favors intermediate phenotypes?",
    "options": ["Directional", "Stabilizing", "Disruptive", "Balancing", "Sexual"],
    "correct_answer": "Stabilizing",
    "explanation": "Stabilizing selection reduces variation by selecting against extremes.",
    "topic": "Evolution",
    "difficulty": "Medium"
  },
  {
    "question": "Which hormone stimulates the liver to convert glycogen to glucose?",
    "options": ["Insulin", "Glucagon", "ADH", "Thyroxine", "Cortisol"],
    "correct_answer": "Glucagon",
    "explanation": "Glucagon increases blood glucose by stimulating glycogenolysis.",
    "topic": "Endocrinology",
    "difficulty": "Easy"
  },
  {
    "question": "Which reproductive barrier prevents mating due to differences in courtship behavior?",
    "options": ["Mechanical isolation", "Temporal isolation", "Behavioral isolation", "Hybrid sterility", "Geographical isolation"],
    "correct_answer": "Behavioral isolation",
    "explanation": "Differences in mating rituals prevent interbreeding.",
    "topic": "Evolution",
    "difficulty": "Medium"
  },
  {
    "question": "Which component of blood is primarily responsible for clot formation?",
    "options": ["Red blood cells", "White blood cells", "Platelets", "Plasma proteins", "Antibodies"],
    "correct_answer": "Platelets",
    "explanation": "Platelets initiate clotting via the coagulation cascade.",
    "topic": "Circulation",
    "difficulty": "Easy"
  },
  {
    "question": "Which enzyme unwinds DNA during replication?",
    "options": ["Ligase", "Polymerase III", "Topoisomerase", "Helicase", "Primase"],
    "correct_answer": "Helicase",
    "explanation": "Helicase breaks hydrogen bonds between bases.",
    "topic": "Genetics",
    "difficulty": "Medium"
  },
  {
    "question": "Which structure in the nephron is responsible for filtration of blood?",
    "options": ["Loop of Henle", "Collecting duct", "Bowman's capsule", "Distal tubule", "Proximal tubule"],
    "correct_answer": "Bowman's capsule",
    "explanation": "Filtration occurs in the glomerulus–Bowman's capsule interface.",
    "topic": "Excretion",
    "difficulty": "Easy"
  },
  {
    "question": "Which immune cells directly destroy virally infected cells?",
    "options": ["B cells", "Helper T cells", "Cytotoxic T cells", "Neutrophils", "Basophils"],
    "correct_answer": "Cytotoxic T cells",
    "explanation": "They induce apoptosis in infected cells.",
    "topic": "Immunology",
    "difficulty": "Medium"
  },
  {
    "question": "Which molecule is produced during the light reactions of photosynthesis?",
    "options": ["Glucose", "RuBP", "ATP", "Pyruvate", "Acetyl-CoA"],
    "correct_answer": "ATP",
    "explanation": "ATP is produced in the thylakoid membrane.",
    "topic": "Photosynthesis",
    "difficulty": "Medium"
  },
  {
    "question": "Which process increases genetic variation in meiosis?",
    "options": ["Binary fission", "Crossing over", "DNA repair", "Cytokinesis", "Mitosis"],
    "correct_answer": "Crossing over",
    "explanation": "Crossing over exchanges genetic material between homologous chromosomes.",
    "topic": "Genetics",
    "difficulty": "Medium"
  },
  {
    "question": "What is the primary function of myelin?",
    "options": ["Increase synaptic vesicle release", "Slow down impulses", "Speed up nerve conduction", "Protect dendrites only", "Increase neurotransmitter production"],
    "correct_answer": "Speed up nerve conduction",
    "explanation": "Myelin insulates axons and enables saltatory conduction.",
    "topic": "Neuroscience",
    "difficulty": "Easy"
  },
  {
    "question": "Which vitamin is essential for the absorption of calcium?",
    "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K"],
    "correct_answer": "Vitamin D",
    "explanation": "Vitamin D promotes calcium uptake in the intestines.",
    "topic": "Nutrition",
    "difficulty": "Easy"
  },
  {
    "question": "Which process occurs in the stroma of chloroplasts?",
    "options": ["Electron transport", "Light absorption", "Calvin cycle", "Photolysis", "ATP synthesis"],
    "correct_answer": "Calvin cycle",
    "explanation": "The Calvin cycle fixes carbon using ATP and NADPH.",
    "topic": "Photosynthesis",
    "difficulty": "Medium"
  },
  {
    "question": "Which blood vessel carries oxygenated blood from lungs to the heart?",
    "options": ["Pulmonary artery", "Aorta", "Vena cava", "Pulmonary vein", "Carotid artery"],
    "correct_answer": "Pulmonary vein",
    "explanation": "Pulmonary veins uniquely carry oxygenated blood.",
    "topic": "Circulatory System",
    "difficulty": "Easy"
  },
  {
    "question": "Which organ produces bile?",
    "options": ["Pancreas", "Stomach", "Gallbladder", "Liver", "Duodenum"],
    "correct_answer": "Liver",
    "explanation": "Bile is made in the liver, stored in the gallbladder.",
    "topic": "Digestion",
    "difficulty": "Easy"
  },
  {
    "question": "Which macromolecule is primarily responsible for cell membrane fluidity?",
    "options": ["DNA", "RNA", "Phospholipids", "Proteins", "Starch"],
    "correct_answer": "Phospholipids",
    "explanation": "Phospholipid tails determine membrane fluidity.",
    "topic": "Cell Biology",
    "difficulty": "Medium"
  },
  {
    "question": "Which of the following best describes the role of RNA polymerase?",
    "options": ["Synthesizes ribosomes", "Reads tRNA anticodons", "Adds amino acids to a growing polypeptide chain", "Synthesizes RNA from a DNA template", "Replicates DNA strands"],
    "correct_answer": "Synthesizes RNA from a DNA template",
    "explanation": "RNA polymerase transcribes DNA into RNA during transcription.",
    "topic": "Molecular Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which part of the brain regulates body temperature and homeostasis?",
    "options": ["Cerebellum", "Hypothalamus", "Medulla oblongata", "Cerebral cortex", "Pons"],
    "correct_answer": "Hypothalamus",
    "explanation": "The hypothalamus controls thermoregulation, hunger, thirst, and hormonal homeostasis.",
    "topic": "Neuroscience",
    "difficulty": "Medium"
  },
  {
    "question": "Which molecule is responsible for forming the spindle fibers in mitosis?",
    "options": ["Actin", "Keratin", "Tubulin", "Myosin", "Collagen"],
    "correct_answer": "Tubulin",
    "explanation": "Spindle fibers are composed of microtubules made from tubulin.",
    "topic": "Cell Division",
    "difficulty": "Medium"
  },
  {
    "question": "Which of the following is an example of passive immunity?",
    "options": ["Vaccination", "Recovery from infection", "Maternal antibodies crossing the placenta", "Memory B-cell activation", "Booster immunization"],
    "correct_answer": "Maternal antibodies crossing the placenta",
    "explanation": "Passive immunity involves antibodies being transferred, not produced by the host.",
    "topic": "Immunology",
    "difficulty": "Easy"
  },
  {
    "question": "Which type of RNA carries amino acids to ribosomes?",
    "options": ["mRNA", "tRNA", "rRNA", "snRNA", "siRNA"],
    "correct_answer": "tRNA",
    "explanation": "Transfer RNA carries amino acids and matches them to codons on mRNA.",
    "topic": "Molecular Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which structure is responsible for producing cerebrospinal fluid?",
    "options": ["Substantia nigra", "Choroid plexus", "Pineal gland", "Corpus callosum", "Thalamus"],
    "correct_answer": "Choroid plexus",
    "explanation": "The choroid plexus in brain ventricles secretes CSF.",
    "topic": "Neuroscience",
    "difficulty": "Medium"
  },
  {
    "question": "Which type of muscle is striated and involuntary?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Myofibrillar muscle", "Visceral muscle"],
    "correct_answer": "Cardiac muscle",
    "explanation": "Cardiac muscle has striations and is controlled involuntarily.",
    "topic": "Physiology",
    "difficulty": "Easy"
  },
  {
    "question": "Which plant hormone is primarily responsible for cell elongation?",
    "options": ["Ethylene", "Abscisic acid", "Auxin", "Cytokinin", "Gibberellin"],
    "correct_answer": "Auxin",
    "explanation": "Auxin promotes elongation of cells and phototropism.",
    "topic": "Plant Biology",
    "difficulty": "Medium"
  },
  {
    "question": "Which organ is primarily responsible for detoxification of blood?",
    "options": ["Kidney", "Liver", "Pancreas", "Spleen", "Gallbladder"],
    "correct_answer": "Liver",
    "explanation": "The liver detoxifies substances via enzymatic modification.",
    "topic": "Physiology",
    "difficulty": "Easy"
  },
  {
    "question": "Which molecule is produced during anaerobic respiration in human muscle cells?",
    "options": ["Acetyl-CoA", "Lactic acid", "Ethanol", "Carbon monoxide", "Ammonia"],
    "correct_answer": "Lactic acid",
    "explanation": "During anaerobic respiration, pyruvate is converted to lactate.",
    "topic": "Respiration",
    "difficulty": "Easy"
  },
  {
    "question": "Which structure increases surface area for absorption in the small intestine?",
    "options": ["Gastric pits", "Hepatic lobules", "Villi", "Lymph nodes", "Bronchioles"],
    "correct_answer": "Villi",
    "explanation": "Villi and microvilli maximize nutrient absorption.",
    "topic": "Digestion",
    "difficulty": "Easy"
  },
  {
    "question": "Which enzyme initiates protein digestion in the stomach?",
    "options": ["Trypsin", "Pepsin", "Amylase", "Lipase", "Nuclease"],
    "correct_answer": "Pepsin",
    "explanation": "Pepsin, activated by stomach acid, begins protein breakdown.",
    "topic": "Digestion",
    "difficulty": "Easy"
  },
  {
    "question": "What is the main nitrogenous waste excreted by humans?",
    "options": ["Ammonia", "Nitrate", "Uric acid", "Urea", "Creatinine"],
    "correct_answer": "Urea",
    "explanation": "Urea is produced in the liver via the urea cycle and excreted by kidneys.",
    "topic": "Excretion",
    "difficulty": "Easy"
  },
  {
    "question": "Which molecule directly donates electrons to the electron transport chain?",
    "options": ["ATP", "NADH", "CO2", "H2O", "Pyruvate"],
    "correct_answer": "NADH",
    "explanation": "NADH and FADH2 supply electrons for oxidative phosphorylation.",
    "topic": "Respiration",
    "difficulty": "Medium"
  },
  {
    "question": "Which of the following is a function of the Golgi apparatus?",
    "options": ["Protein synthesis", "Detoxification", "Packaging and modifying proteins", "Energy production", "DNA replication"],
    "correct_answer": "Packaging and modifying proteins",
    "explanation": "The Golgi modifies, sorts, and packages proteins for secretion.",
    "topic": "Cell Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which type of receptor detects changes in blood CO₂ levels?",
    "options": ["Osmoreceptors", "Chemoreceptors", "Mechanoreceptors", "Photoreceptors", "Thermoreceptors"],
    "correct_answer": "Chemoreceptors",
    "explanation": "Chemoreceptors in the medulla detect pH changes caused by CO₂.",
    "topic": "Neuroscience",
    "difficulty": "Medium"
  },
  {
    "question": "Which structure transports water upward in vascular plants?",
    "options": ["Phloem", "Xylem", "Cambium", "Sieve tubes", "Root hairs"],
    "correct_answer": "Xylem",
    "explanation": "Xylem conducts water and minerals via transpiration pull.",
    "topic": "Plant Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which organ produces the hormone erythropoietin?",
    "options": ["Heart", "Liver", "Kidney", "Pancreas", "Bone marrow"],
    "correct_answer": "Kidney",
    "explanation": "Erythropoietin from kidneys stimulates red blood cell production.",
    "topic": "Endocrinology",
    "difficulty": "Medium"
  },
  {
    "question": "Which cellular process requires oxygen directly?",
    "options": ["Glycolysis", "Link reaction", "Electron transport chain", "Fermentation", "Krebs cycle"],
    "correct_answer": "Electron transport chain",
    "explanation": "Oxygen is the final electron acceptor in oxidative phosphorylation.",
    "topic": "Respiration",
    "difficulty": "Medium"
  },
  {
    "question": "What is the main function of lysosomes?",
    "options": ["Protein synthesis", "Digestion of macromolecules", "ATP production", "Transport of lipids", "Photosynthesis"],
    "correct_answer": "Digestion of macromolecules",
    "explanation": "Lysosomes contain hydrolytic enzymes that break down cellular waste.",
    "topic": "Cell Biology",
    "difficulty": "Easy"
  },
  {
    "question": "During DNA replication, which feature explains why the lagging strand is synthesized discontinuously?",
    "options": ["Helicase only opens DNA at the 3' end", "DNA polymerase can synthesize only in the 5'→3' direction", "Primase is absent from the lagging strand", "Ligase cannot join nucleotides", "Okazaki fragments are too unstable"],
    "correct_answer": "DNA polymerase can synthesize only in the 5'→3' direction",
    "explanation": "Because the two template strands run antiparallel, only one can be synthesized continuously. The other is made in fragments.",
    "topic": "Molecular Biology",
    "difficulty": "Hard"
  },
  {
    "question": "Which mutation is most likely to produce a nonfunctional protein?",
    "options": ["Silent mutation", "Missense conservative mutation", "Missense non-conservative mutation", "Synonymous substitution", "Neutral mutation"],
    "correct_answer": "Missense non-conservative mutation",
    "explanation": "It changes an amino acid to one with different chemical properties, potentially disrupting protein folding.",
    "topic": "Genetics",
    "difficulty": "Hard"
  },
  {
    "question": "A cell placed in a hypertonic solution will:",
    "options": ["Gain water and lyse", "Lose water and shrink", "Remain unchanged", "Actively pump water out", "Become turgid"],
    "correct_answer": "Lose water and shrink",
    "explanation": "Water moves out due to the higher solute concentration outside the cell.",
    "topic": "Cell Biology",
    "difficulty": "Medium"
  },
  {
    "question": "Which of the following is TRUE about enzyme allosteric regulation?",
    "options": ["It always increases enzyme activity", "It requires phosphorylation", "Effectors bind at a site distinct from the active site", "It occurs only in prokaryotes", "It is irreversible"],
    "correct_answer": "Effectors bind at a site distinct from the active site",
    "explanation": "Allosteric sites modulate enzyme activity without binding directly to the active site.",
    "topic": "Biochemistry",
    "difficulty": "Medium"
  },
  {
    "question": "Which event occurs during prophase I but NOT in prophase of mitosis?",
    "options": ["Chromosomes condense", "Spindle fibers form", "Crossing over", "Nuclear envelope breaks down", "Centrosomes migrate to poles"],
    "correct_answer": "Crossing over",
    "explanation": "Crossing over occurs only in meiosis I, increasing genetic variability.",
    "topic": "Genetics",
    "difficulty": "Medium"
  },
  {
    "question": "Which structure allows action potentials to propagate rapidly along myelinated axons?",
    "options": ["Dendritic spines", "Nodes of Ranvier", "Synaptic cleft", "Axon hillock", "Schwann cell nuclei"],
    "correct_answer": "Nodes of Ranvier",
    "explanation": "Saltatory conduction occurs as impulses jump between nodes.",
    "topic": "Neuroscience",
    "difficulty": "Medium"
  },
  {
    "question": "Which enzyme catalyzes the fixation of CO₂ in the Calvin cycle?",
    "options": ["ATP synthase", "Rubisco", "PEP carboxylase", "NADP reductase", "G3P dehydrogenase"],
    "correct_answer": "Rubisco",
    "explanation": "Rubisco attaches CO₂ to RuBP, initiating carbon fixation.",
    "topic": "Photosynthesis",
    "difficulty": "Medium"
  },
  {
    "question": "What happens to oxygen affinity of hemoglobin when pH decreases?",
    "options": ["Affinity increases", "Affinity decreases", "Affinity stays constant", "O₂ binding becomes irreversible", "Hemoglobin denatures"],
    "correct_answer": "Affinity decreases",
    "explanation": "The Bohr effect: increased acidity reduces O₂ affinity to enhance tissue oxygen release.",
    "topic": "Physiology",
    "difficulty": "Hard"
  },
  {
    "question": "Which process directly produces the most ATP in cellular respiration?",
    "options": ["Glycolysis", "Krebs cycle", "Fermentation", "Electron transport chain", "Link reaction"],
    "correct_answer": "Electron transport chain",
    "explanation": "Oxidative phosphorylation generates the largest ATP yield.",
    "topic": "Respiration",
    "difficulty": "Easy"
  },
  {
    "question": "Which structure in plants detects gravity?",
    "options": ["Palisade cells", "Guard cells", "Statocytes containing statoliths", "Companion cells", "Sieve tube elements"],
    "correct_answer": "Statocytes containing statoliths",
    "explanation": "Statoliths settle under gravity, helping roots grow downward.",
    "topic": "Plant Biology",
    "difficulty": "Hard"
  },
  {
    "question": "Which immune response is the FIRST to occur upon exposure to a pathogen?",
    "options": ["Antibody production", "Cytotoxic T cell activation", "Inflammatory response", "Memory cell formation", "Class-switch recombination"],
    "correct_answer": "Inflammatory response",
    "explanation": "Inflammation is part of innate immunity and reacts immediately.",
    "topic": "Immunology",
    "difficulty": "Medium"
  },
  {
    "question": "Which organelle is abundant in cells that produce steroid hormones?",
    "options": ["Rough ER", "Smooth ER", "Lysosomes", "Peroxisomes", "Nucleolus"],
    "correct_answer": "Smooth ER",
    "explanation": "Smooth ER synthesizes lipids and steroid hormones.",
    "topic": "Cell Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which of the following is TRUE about epigenetic modifications?",
    "options": ["They alter the nucleotide sequence of DNA", "They can be inherited and reversible", "They always activate genes", "They require mutations", "They occur only in somatic cells"],
    "correct_answer": "They can be inherited and reversible",
    "explanation": "DNA methylation and histone modifications regulate gene expression without changing DNA sequence.",
    "topic": "Genetics",
    "difficulty": "Hard"
  },
  {
    "question": "Which structure in eukaryotes is responsible for sorting and directing vesicles to their destinations?",
    "options": ["Nucleus", "Golgi apparatus", "Ribosomes", "Centrioles", "Mitochondria"],
    "correct_answer": "Golgi apparatus",
    "explanation": "The Golgi acts as the cell’s packaging and trafficking center.",
    "topic": "Cell Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which of the following triggers ovulation?",
    "options": ["High estrogen causing LH surge", "Low FSH", "Increased progesterone", "Drop in estrogen", "Spike in prolactin"],
    "correct_answer": "High estrogen causing LH surge",
    "explanation": "The LH surge induced by rising estrogen triggers ovulation.",
    "topic": "Reproduction",
    "difficulty": "Hard"
  },
  {
    "question": "Which molecule is directly produced by beta-oxidation of fatty acids?",
    "options": ["Pyruvate", "Lactate", "Acetyl-CoA", "G3P", "Citrate"],
    "correct_answer": "Acetyl-CoA",
    "explanation": "Beta-oxidation breaks fatty acids into acetyl-CoA units.",
    "topic": "Biochemistry",
    "difficulty": "Medium"
  },
  {
    "question": "Which type of transport moves glucose into cells via a carrier protein without ATP?",
    "options": ["Active transport", "Osmosis", "Simple diffusion", "Facilitated diffusion", "Endocytosis"],
    "correct_answer": "Facilitated diffusion",
    "explanation": "Carrier proteins allow glucose to move down its gradient without ATP.",
    "topic": "Cell Transport",
    "difficulty": "Easy"
  },
  {
    "question": "Which hormone stimulates water reabsorption in the collecting ducts of nephrons?",
    "options": ["Aldosterone", "Cortisol", "ADH", "Epinephrine", "Glucagon"],
    "correct_answer": "ADH",
    "explanation": "ADH inserts aquaporins into the collecting duct, increasing water reabsorption.",
    "topic": "Excretion",
    "difficulty": "Medium"
  },
  {
    "question": "In a population in Hardy–Weinberg equilibrium, which assumption must be TRUE?",
    "options": ["Mutation rates are high", "Mating is non-random", "Large population size", "Natural selection is occurring", "Gene flow is constant"],
    "correct_answer": "Large population size",
    "explanation": "Hardy–Weinberg requires no selection, no mutation, random mating, no migration, and large population size.",
    "topic": "Evolution",
    "difficulty": "Hard"
  },
  {
    "question": "Which structure is responsible for producing the majority of ATP in photosynthetic cells?",
    "options": ["Ribosomes", "Chloroplast stroma", "Thylakoid membrane", "Cytoplasm", "Outer chloroplast membrane"],
    "correct_answer": "Thylakoid membrane",
    "explanation": "Photophosphorylation occurs across the thylakoid membrane via ATP synthase.",
    "topic": "Photosynthesis",
    "difficulty": "Medium"
  },
  {
    "question": "Which component of the bacterial cell wall is targeted by lysozyme?",
    "options": ["Teichoic acids", "Peptidoglycan", "Lipopolysaccharide", "Flagellin", "Porins"],
    "correct_answer": "Peptidoglycan",
    "explanation": "Lysozyme cleaves the β-1,4 linkages between NAG and NAM in peptidoglycan.",
    "topic": "Microbiology",
    "difficulty": "Hard"
  },
  {
    "question": "Which process generates genetic variation in prokaryotes through uptake of naked DNA?",
    "options": ["Conjugation", "Transduction", "Transformation", "Binary fission", "Translocation"],
    "correct_answer": "Transformation",
    "explanation": "Cells take in free DNA from the environment, leading to genetic diversity.",
    "topic": "Genetics",
    "difficulty": "Hard"
  },
  {
    "question": "Which statement about mitochondrial DNA (mtDNA) is TRUE?",
    "options": ["It is linear", "It undergoes crossing over", "It is maternally inherited", "It codes for all mitochondrial proteins", "It replicates only during mitosis"],
    "correct_answer": "It is maternally inherited",
    "explanation": "mtDNA is circular and typically inherited exclusively from the mother.",
    "topic": "Genetics",
    "difficulty": "Medium"
  },
  {
    "question": "Which phase of the cell cycle is characterized by DNA damage checkpoints and longest duration?",
    "options": ["G0", "G1", "S", "G2", "M"],
    "correct_answer": "G1",
    "explanation": "G1 is the longest and contains key checkpoints before DNA synthesis.",
    "topic": "Cell Biology",
    "difficulty": "Medium"
  },
  {
    "question": "Which of the following describes an exon?",
    "options": ["A non-coding region removed during mRNA processing", "A coding region retained in mature mRNA", "A promoter region", "A transcription factor binding site", "A tRNA anticodon"],
    "correct_answer": "A coding region retained in mature mRNA",
    "explanation": "Exons remain after splicing and contain protein-coding sequences.",
    "topic": "Molecular Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which structure contains high concentrations of hydrolytic enzymes at acidic pH?",
    "options": ["Golgi bodies", "Lysosomes", "Ribosomes", "Peroxisomes", "Endosomes"],
    "correct_answer": "Lysosomes",
    "explanation": "Lysosomes contain acid hydrolases active at low pH.",
    "topic": "Cell Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which of the following is a characteristic of Type I Diabetes?",
    "options": ["Insulin resistance", "Autoimmune destruction of β-cells", "Hypersecretion of insulin", "Adult onset only", "Reversible with diet"],
    "correct_answer": "Autoimmune destruction of β-cells",
    "explanation": "Immune-mediated destruction prevents insulin production.",
    "topic": "Physiology",
    "difficulty": "Medium"
  },
  {
    "question": "Which molecule directly powers the movement of myosin during muscle contraction?",
    "options": ["ADP", "ATP", "Creatine phosphate", "GTP", "Acetylcholine"],
    "correct_answer": "ATP",
    "explanation": "ATP binding and hydrolysis cause myosin head movement.",
    "topic": "Physiology",
    "difficulty": "Easy"
  },
  {
    "question": "In which organ does the majority of nutrient absorption occur?",
    "options": ["Stomach", "Jejunum", "Ileum", "Colon", "Esophagus"],
    "correct_answer": "Jejunum",
    "explanation": "The jejunum has massive surface area allowing most nutrient uptake.",
    "topic": "Physiology",
    "difficulty": "Easy"
  },
  {
    "question": "Which structure in plants maintains cell rigidity by exerting pressure on the cell wall?",
    "options": ["Plasmodesmata", "Vacuole", "Mitochondria", "Nucleus", "Golgi bodies"],
    "correct_answer": "Vacuole",
    "explanation": "Turgor pressure from the large central vacuole keeps cells rigid.",
    "topic": "Plant Biology",
    "difficulty": "Medium"
  },
  {
    "question": "Which hormone increases blood calcium levels?",
    "options": ["Calcitonin", "Insulin", "Parathyroid hormone", "Aldosterone", "Thyroxine"],
    "correct_answer": "Parathyroid hormone",
    "explanation": "PTH stimulates bone resorption and increases blood calcium.",
    "topic": "Endocrinology",
    "difficulty": "Easy"
  },
  {
    "question": "Which evolutionary concept explains why harmful recessive alleles can persist in large populations?",
    "options": ["Genetic drift", "Balanced polymorphism", "Heterozygote advantage", "Founder effect", "Directional selection"],
    "correct_answer": "Heterozygote advantage",
    "explanation": "Carriers may possess a fitness benefit (e.g., sickle cell trait and malaria resistance).",
    "topic": "Evolution",
    "difficulty": "Hard"
  },
  {
    "question": "Which step of aerobic respiration produces CO₂?",
    "options": ["Glycolysis", "Electron transport chain", "Link reaction and Krebs cycle", "ATP synthase", "Proton gradient formation"],
    "correct_answer": "Link reaction and Krebs cycle",
    "explanation": "Both pyruvate decarboxylation and Krebs cycle release CO₂.",
    "topic": "Bioenergetics",
    "difficulty": "Medium"
  },
  {
    "question": "Which molecule binds to troponin to initiate muscle contraction?",
    "options": ["Sodium", "Calcium", "Potassium", "Magnesium", "Chloride"],
    "correct_answer": "Calcium",
    "explanation": "Ca²⁺ binding moves tropomyosin, exposing actin binding sites.",
    "topic": "Physiology",
    "difficulty": "Easy"
  },
  {
    "question": "Which plant hormone is primarily responsible for stem elongation?",
    "options": ["Ethylene", "Cytokinin", "Auxin", "Gibberellin", "Abscisic acid"],
    "correct_answer": "Gibberellin",
    "explanation": "Gibberellins stimulate rapid stem and leaf elongation.",
    "topic": "Plant Biology",
    "difficulty": "Medium"
  },
  {
    "question": "Which structure ensures unidirectional flow of blood in veins?",
    "options": ["Smooth muscle", "Tunica media", "Semilunar valves", "Endothelium", "Elastic fibers"],
    "correct_answer": "Semilunar valves",
    "explanation": "Valves prevent backflow, especially in lower extremities.",
    "topic": "Physiology",
    "difficulty": "Easy"
  },
  {
    "question": "Which process allows antibodies to bind multiple pathogens simultaneously due to their structure?",
    "options": ["Opsonization", "Neutralization", "Agglutination", "Complement activation", "Inflammation"],
    "correct_answer": "Agglutination",
    "explanation": "Multiple binding sites allow antibodies to clump antigens together.",
    "topic": "Immunology",
    "difficulty": "Medium"
  },
  {
    "question": "Which experimental technique is used to separate DNA fragments based on size?",
    "options": ["Mass spectrometry", "Gel electrophoresis", "Chromatography", "Centrifugation", "Northern blotting"],
    "correct_answer": "Gel electrophoresis",
    "explanation": "DNA fragments migrate through an agarose gel; smaller fragments travel farther.",
    "topic": "Molecular Biology",
    "difficulty": "Medium"
  },
  {
    "question": "Which molecule provides the reducing power for the Calvin cycle?",
    "options": ["ATP", "NADPH", "FADH2", "NADH", "G3P"],
    "correct_answer": "NADPH",
    "explanation": "NADPH donates electrons to reduce CO₂ into carbohydrates.",
    "topic": "Photosynthesis",
    "difficulty": "Medium"
  },
  {
    "question": "Which of the following is TRUE regarding telomerase?",
    "options": ["Active in all somatic cells", "Shortens telomeres every division", "Uses an RNA template to extend DNA ends", "Found only in bacteria", "Functions only in meiosis"],
    "correct_answer": "Uses an RNA template to extend DNA ends",
    "explanation": "Telomerase is a reverse transcriptase that prevents telomere shortening.",
    "topic": "Molecular Biology",
    "difficulty": "Hard"
  },
  {
    "question": "Which of the following bonds stabilizes the secondary structure of proteins?",
    "options": ["Disulfide bonds", "Hydrogen bonds", "Peptide bonds", "Ionic bonds", "Hydrophobic interactions"],
    "correct_answer": "Hydrogen bonds",
    "explanation": "α-helices and β-sheets arise from hydrogen bonding between peptide backbones.",
    "topic": "Biochemistry",
    "difficulty": "Medium"
  },
  {
    "question": "Which organelle is responsible for β-oxidation of fatty acids?",
    "options": ["Lysosomes", "Mitochondria", "Golgi apparatus", "Smooth ER", "Ribosomes"],
    "correct_answer": "Mitochondria",
    "explanation": "Long-chain fatty acids are broken down in mitochondria to produce acetyl-CoA.",
    "topic": "Metabolism",
    "difficulty": "Medium"
  },
  {
    "question": "Which part of the nephron is the primary site of glucose reabsorption?",
    "options": ["Loop of Henle", "Distal tubule", "Collecting duct", "Proximal convoluted tubule", "Bowman's capsule"],
    "correct_answer": "Proximal convoluted tubule",
    "explanation": "Nearly 100% of glucose is reabsorbed via secondary active transport in the PCT.",
    "topic": "Renal Physiology",
    "difficulty": "Easy"
  },
  {
    "question": "In a double-stranded DNA molecule, which rule always holds true?",
    "options": ["%A = %C", "%G = %T", "%A + %G = %C + %T", "%A = %G", "%C = %T"],
    "correct_answer": "%A + %G = %C + %T",
    "explanation": "Purines equal pyrimidines due to base-pairing rules (Chargaff).",
    "topic": "Genetics",
    "difficulty": "Medium"
  },
  {
    "question": "Which type of mutation results in a premature stop codon?",
    "options": ["Silent mutation", "Missense mutation", "Nonsense mutation", "Frameshift mutation", "Neutral mutation"],
    "correct_answer": "Nonsense mutation",
    "explanation": "A nonsense mutation converts a codon to a STOP signal.",
    "topic": "Genetics",
    "difficulty": "Easy"
  },
  {
    "question": "Which component of the immune system is responsible for presenting antigens to T-cells?",
    "options": ["Basophils", "Platelets", "Dendritic cells", "RBCs", "NK cells"],
    "correct_answer": "Dendritic cells",
    "explanation": "They process antigens and present them via MHC molecules.",
    "topic": "Immunology",
    "difficulty": "Hard"
  },
  {
    "question": "Which structure is shared by both eukaryotic and prokaryotic cells?",
    "options": ["Nucleus", "Mitochondria", "Ribosomes", "Golgi apparatus", "Endoplasmic reticulum"],
    "correct_answer": "Ribosomes",
    "explanation": "Both cell types use ribosomes to synthesize proteins.",
    "topic": "Cell Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which type of RNA splicing removes introns from pre-mRNA?",
    "options": ["Self-splicing rRNA", "snRNP-mediated splicing", "tRNA cleavage", "rRNA modification", "RNA editing"],
    "correct_answer": "snRNP-mediated splicing",
    "explanation": "snRNPs form the spliceosome that removes introns.",
    "topic": "Molecular Biology",
    "difficulty": "Hard"
  },
  {
    "question": "What is the most direct cause of the resting membrane potential?",
    "options": ["Equal ion distribution", "ATP synthesis", "High intracellular calcium", "Selective permeability to K⁺", "Sodium channel opening"],
    "correct_answer": "Selective permeability to K⁺",
    "explanation": "Leak K⁺ channels allow more K⁺ efflux, establishing the negative interior.",
    "topic": "Neuroscience",
    "difficulty": "Hard"
  },
  {
    "question": "Which of the following describes the founder effect?",
    "options": ["Selection for extreme phenotypes", "Loss of alleles when a small group colonizes a new area", "Random mating", "Increase in heterozygosity", "Stabilizing selection"],
    "correct_answer": "Loss of alleles when a small group colonizes a new area",
    "explanation": "The new population has limited genetic diversity due to small sample size.",
    "topic": "Evolution",
    "difficulty": "Medium"
  },
  {
    "question": "Which protein forms the contractile ring during cytokinesis in animal cells?",
    "options": ["Tubulin", "Keratin", "Actin", "Myosin II", "Septin"],
    "correct_answer": "Actin",
    "explanation": "Actin filaments form the cleavage furrow for cell division.",
    "topic": "Cell Biology",
    "difficulty": "Medium"
  },
  {
    "question": "Which molecule is responsible for generating reactive oxygen species in mitochondria?",
    "options": ["O₂ at complex IV", "NADH at complex I", "Cytochrome c", "ATP synthase", "Pyruvate dehydrogenase"],
    "correct_answer": "NADH at complex I",
    "explanation": "Leakage of electrons from complex I reduces oxygen to ROS.",
    "topic": "Bioenergetics",
    "difficulty": "Hard"
  },
  {
    "question": "Which physiological change occurs when blood CO₂ rises?",
    "options": ["Blood pH increases", "Breathing rate decreases", "Hemoglobin binds oxygen more tightly", "Chemoreceptors increase ventilation", "Body temperature increases"],
    "correct_answer": "Chemoreceptors increase ventilation",
    "explanation": "CO₂ increases H⁺ concentration, stimulating medullary chemoreceptors.",
    "topic": "Respiration",
    "difficulty": "Medium"
  },
  {
    "question": "Which cellular organelle is responsible for detoxifying hydrogen peroxide?",
    "options": ["Mitochondria", "Peroxisomes", "Golgi", "Endosomes", "Lysosomes"],
    "correct_answer": "Peroxisomes",
    "explanation": "Peroxisomes contain catalase which converts H₂O₂ into water and oxygen.",
    "topic": "Cell Biology",
    "difficulty": "Easy"
  },
  {
    "question": "Which pathway produces the largest amount of ATP per glucose molecule?",
    "options": ["Krebs cycle", "Glycolysis", "Electron transport chain and oxidative phosphorylation", "Fermentation", "Pentose phosphate pathway"],
    "correct_answer": "Electron transport chain and oxidative phosphorylation",
    "explanation": "Most ATP is generated through oxidative phosphorylation using a proton gradient.",
    "topic": "Metabolism",
    "difficulty": "Medium"
  }
];
