export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type QuestionBank = {
  [category: string]: {
    [level: string]: Question[];
  };
};

export const questionsData: QuestionBank = {
  // Medicine Questions
  Medicine: {
    Easy: [
      {
        question: "What is the normal human body temperature?",
        options: ["36°C", "37°C", "38°C", "39°C"],
        answer: "37°C",
      },
      {
        question: "Which vitamin is produced by sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D",
      },
      {
        question: "How many chambers does the human heart have?",
        options: ["2", "3", "4", "5"],
        answer: "4",
      },
      {
        question: "What is the main function of red blood cells?",
        options: [
          "Fight infection",
          "Carry oxygen",
          "Clot blood",
          "Digest food",
        ],
        answer: "Carry oxygen",
      },
      {
        question: "Which organ pumps blood?",
        options: ["Lungs", "Brain", "Heart", "Kidney"],
        answer: "Heart",
      },
      {
        question: "What is the basic unit of life?",
        options: ["Tissue", "Cell", "Organ", "System"],
        answer: "Cell",
      },
      {
        question: "Which organ is responsible for breathing?",
        options: ["Heart", "Liver", "Lungs", "Stomach"],
        answer: "Lungs",
      },
      {
        question: "What color is oxygenated blood?",
        options: ["Blue", "Dark red", "Bright red", "Black"],
        answer: "Bright red",
      },
      {
        question: "Which bone protects the brain?",
        options: ["Rib", "Skull", "Spine", "Pelvis"],
        answer: "Skull",
      },
      {
        question: "What is the normal pulse site at the wrist called?",
        options: ["Carotid", "Femoral", "Radial", "Brachial"],
        answer: "Radial",
      },
      {
        question: "Which system controls body movement?",
        options: ["Digestive", "Nervous", "Muscular", "Respiratory"],
        answer: "Muscular",
      },
      {
        question: "What is urine produced by?",
        options: ["Liver", "Lungs", "Kidneys", "Heart"],
        answer: "Kidneys",
      },
      {
        question: "Which blood cells fight infections?",
        options: ["RBC", "WBC", "Platelets", "Plasma"],
        answer: "WBC",
      },
      {
        question: "What is the normal blood pH?",
        options: ["6.8", "7.4", "8.0", "7.0"],
        answer: "7.4",
      },
      {
        question: "Which organ stores bile?",
        options: ["Liver", "Gallbladder", "Pancreas", "Stomach"],
        answer: "Gallbladder",
      },
      {
        question: "What is the main function of the stomach?",
        options: ["Absorption", "Digestion", "Respiration", "Circulation"],
        answer: "Digestion",
      },
      {
        question: "How many lungs does a human have?",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        question: "Which sense organ is responsible for hearing?",
        options: ["Eye", "Ear", "Nose", "Skin"],
        answer: "Ear",
      },
      {
        question: "What is the liquid part of blood called?",
        options: ["Serum", "Plasma", "Lymph", "Water"],
        answer: "Plasma",
      },
      {
        question: "Which organ filters toxins from blood?",
        options: ["Heart", "Liver", "Lung", "Brain"],
        answer: "Liver",
      },
    ],

    Medium: [
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Heart", "Kidney"],
        answer: "Skin",
      },
      {
        question: "Which blood type is the universal donor?",
        options: ["A", "B", "AB", "O"],
        answer: "O",
      },
      {
        question: "What part of the nephron filters blood?",
        options: ["Loop of Henle", "Glomerulus", "Collecting duct", "Tubule"],
        answer: "Glomerulus",
      },
      {
        question: "Which nerve controls vision?",
        options: [
          "Optic nerve",
          "Vagus nerve",
          "Facial nerve",
          "Auditory nerve",
        ],
        answer: "Optic nerve",
      },
      {
        question: "What hormone regulates blood sugar?",
        options: ["Insulin", "Adrenaline", "Thyroxine", "Cortisol"],
        answer: "Insulin",
      },
      {
        question: "What is the normal respiratory rate for adults?",
        options: ["5–10", "12–20", "25–30", "30–40"],
        answer: "12–20",
      },
      {
        question: "Which enzyme starts digestion of carbohydrates?",
        options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
        answer: "Amylase",
      },
      {
        question: "Which chamber of the heart pumps blood to the body?",
        options: [
          "Right atrium",
          "Left atrium",
          "Right ventricle",
          "Left ventricle",
        ],
        answer: "Left ventricle",
      },
      {
        question: "What is anemia mainly caused by?",
        options: ["Low WBC", "Low platelets", "Low hemoglobin", "High glucose"],
        answer: "Low hemoglobin",
      },
      {
        question: "Which gas is exchanged in the lungs?",
        options: ["Nitrogen", "Carbon monoxide", "Oxygen", "Helium"],
        answer: "Oxygen",
      },
      {
        question: "What is the function of platelets?",
        options: [
          "Oxygen transport",
          "Immunity",
          "Blood clotting",
          "Digestion",
        ],
        answer: "Blood clotting",
      },
      {
        question: "Which organ produces insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Stomach"],
        answer: "Pancreas",
      },
      {
        question: "What type of muscle is the heart?",
        options: ["Skeletal", "Smooth", "Cardiac", "Voluntary"],
        answer: "Cardiac",
      },
      {
        question: "Which vitamin is essential for blood clotting?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        answer: "Vitamin K",
      },
      {
        question: "Which artery carries blood from the heart to the body?",
        options: ["Pulmonary artery", "Aorta", "Coronary", "Carotid"],
        answer: "Aorta",
      },
      {
        question: "What is the main role of the cerebrum?",
        options: ["Balance", "Breathing", "Thinking", "Heart rate"],
        answer: "Thinking",
      },
      {
        question: "Which organ regulates calcium levels?",
        options: ["Thyroid", "Parathyroid", "Adrenal", "Pituitary"],
        answer: "Parathyroid",
      },
      {
        question: "What is the basic functional unit of the kidney?",
        options: ["Neuron", "Nephron", "Alveolus", "Hepatocyte"],
        answer: "Nephron",
      },
      {
        question: "Which blood vessels carry blood to the heart?",
        options: ["Arteries", "Veins", "Capillaries", "Aorta"],
        answer: "Veins",
      },
      {
        question: "What is the function of bile?",
        options: [
          "Protein digestion",
          "Fat digestion",
          "Carbohydrate digestion",
          "Absorption",
        ],
        answer: "Fat digestion",
      },
    ],

    Hard: [
      {
        question: "Which part of the brain regulates balance?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
        answer: "Cerebellum",
      },
      {
        question: "What is the normal adult heart rate (bpm)?",
        options: ["50–70", "60–100", "80–120", "100–140"],
        answer: "60–100",
      },
      {
        question: "Which cells produce antibodies?",
        options: ["T cells", "B cells", "NK cells", "Macrophages"],
        answer: "B cells",
      },
      {
        question: "What is the pacemaker of the heart?",
        options: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
        answer: "SA node",
      },
      {
        question: "Which acid is secreted by the stomach?",
        options: ["Sulfuric", "Nitric", "Hydrochloric", "Acetic"],
        answer: "Hydrochloric",
      },
      {
        question: "Which lung lobe is largest?",
        options: ["Left upper", "Left lower", "Right upper", "Right lower"],
        answer: "Right lower",
      },
      {
        question: "What is the function of the loop of Henle?",
        options: [
          "Filtration",
          "Reabsorption of water",
          "Secretion",
          "Urine storage",
        ],
        answer: "Reabsorption of water",
      },
      {
        question: "Which hormone increases heart rate?",
        options: ["Insulin", "Adrenaline", "Glucagon", "Estrogen"],
        answer: "Adrenaline",
      },
      {
        question: "What is the normal arterial blood pH range?",
        options: ["7.0–7.2", "7.2–7.3", "7.35–7.45", "7.5–7.6"],
        answer: "7.35–7.45",
      },
      {
        question: "Which vessel supplies oxygen to the myocardium?",
        options: ["Aorta", "Pulmonary vein", "Coronary arteries", "Vena cava"],
        answer: "Coronary arteries",
      },
      {
        question: "Which organ produces clotting factors?",
        options: ["Kidney", "Spleen", "Liver", "Bone marrow"],
        answer: "Liver",
      },
      {
        question: "What is the function of macrophages?",
        options: [
          "Produce antibodies",
          "Phagocytosis",
          "Clot blood",
          "Carry oxygen",
        ],
        answer: "Phagocytosis",
      },
      {
        question: "Which cranial nerve controls eye movement?",
        options: ["II", "III", "V", "VIII"],
        answer: "III",
      },
      {
        question: "Which structure separates thorax and abdomen?",
        options: ["Ribs", "Diaphragm", "Sternum", "Pleura"],
        answer: "Diaphragm",
      },
      {
        question: "What is the function of aldosterone?",
        options: [
          "Decrease BP",
          "Increase sodium retention",
          "Lower glucose",
          "Increase calcium",
        ],
        answer: "Increase sodium retention",
      },
      {
        question: "Which blood test measures long-term glucose?",
        options: ["Fasting glucose", "HbA1c", "Insulin", "C-peptide"],
        answer: "HbA1c",
      },
      {
        question: "Which part of ECG represents ventricular depolarization?",
        options: ["P wave", "QRS complex", "T wave", "PR interval"],
        answer: "QRS complex",
      },
      {
        question: "What is the function of surfactant?",
        options: [
          "Increase pressure",
          "Reduce alveolar collapse",
          "Transport oxygen",
          "Clean lungs",
        ],
        answer: "Reduce alveolar collapse",
      },
      {
        question: "Which organ is affected in cirrhosis?",
        options: ["Kidney", "Heart", "Liver", "Pancreas"],
        answer: "Liver",
      },
      {
        question: "Which vitamin deficiency causes rickets?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D",
      },
    ],
  },

  // Pharmacy Questions
  Pharmacy: {
    Easy: [
      {
        question: "What is pharmacology?",
        options: [
          "Study of diseases",
          "Study of drugs",
          "Study of cells",
          "Study of organs",
        ],
        answer: "Study of drugs",
      },
      {
        question: "Which form is a solid drug?",
        options: ["Syrup", "Injection", "Tablet", "Suspension"],
        answer: "Tablet",
      },
      {
        question: "What does mg stand for?",
        options: ["Milligram", "Microgram", "Megagram", "Milliliter"],
        answer: "Milligram",
      },
      {
        question: "Which route is oral?",
        options: ["Injection", "Inhalation", "By mouth", "Skin"],
        answer: "By mouth",
      },
      {
        question: "What is a capsule?",
        options: [
          "Liquid drug",
          "Gas drug",
          "Solid drug in shell",
          "Injection",
        ],
        answer: "Solid drug in shell",
      },
      {
        question: "Which organ metabolizes most drugs?",
        options: ["Kidney", "Liver", "Heart", "Lung"],
        answer: "Liver",
      },
      {
        question: "What is a prescription?",
        options: [
          "Drug label",
          "Doctor’s order",
          "Drug factory",
          "Dosage form",
        ],
        answer: "Doctor’s order",
      },
      {
        question: "Which is a liquid dosage form?",
        options: ["Tablet", "Capsule", "Syrup", "Powder"],
        answer: "Syrup",
      },
      {
        question: "What is the role of a pharmacist?",
        options: [
          "Diagnose diseases",
          "Prescribe drugs",
          "Prepare and dispense drugs",
          "Operate patients",
        ],
        answer: "Prepare and dispense drugs",
      },
      {
        question: "Which drug reduces pain?",
        options: ["Antibiotic", "Analgesic", "Antiseptic", "Antiviral"],
        answer: "Analgesic",
      },
      {
        question: "What does OTC mean?",
        options: [
          "Only To Clinics",
          "Over The Counter",
          "On The Counter",
          "Official Treatment Code",
        ],
        answer: "Over The Counter",
      },
      {
        question: "Which form is injected?",
        options: ["Tablet", "Injection", "Capsule", "Syrup"],
        answer: "Injection",
      },
      {
        question: "Which drug fights bacteria?",
        options: ["Antiviral", "Antibiotic", "Antifungal", "Analgesic"],
        answer: "Antibiotic",
      },
      {
        question: "What is dosage?",
        options: ["Drug color", "Drug price", "Amount of drug", "Drug shape"],
        answer: "Amount of drug",
      },
      {
        question: "Which symbol means prescription-only?",
        options: ["OTC", "Rx", "mg", "ml"],
        answer: "Rx",
      },
      {
        question: "Which drug form dissolves in mouth?",
        options: ["Tablet", "Effervescent tablet", "Capsule", "Injection"],
        answer: "Effervescent tablet",
      },
      {
        question: "Which is a semi-solid form?",
        options: ["Cream", "Tablet", "Syrup", "Injection"],
        answer: "Cream",
      },
      {
        question: "What does ml measure?",
        options: ["Weight", "Volume", "Temperature", "Time"],
        answer: "Volume",
      },
      {
        question: "Which drug lowers fever?",
        options: ["Antipyretic", "Analgesic", "Antibiotic", "Antiseptic"],
        answer: "Antipyretic",
      },
      {
        question: "Where are drugs stored?",
        options: ["Laboratory", "Pharmacy", "Hospital room", "Office"],
        answer: "Pharmacy",
      },
    ],

    Medium: [
      {
        question: "What is pharmacokinetics?",
        options: [
          "Drug effects on body",
          "Body effects on drug",
          "Drug synthesis",
          "Drug toxicity",
        ],
        answer: "Body effects on drug",
      },
      {
        question: "Which process removes drugs from the body?",
        options: ["Absorption", "Distribution", "Metabolism", "Excretion"],
        answer: "Excretion",
      },
      {
        question: "Which organ excretes most drugs?",
        options: ["Liver", "Lungs", "Kidneys", "Heart"],
        answer: "Kidneys",
      },
      {
        question: "What does bioavailability measure?",
        options: [
          "Drug toxicity",
          "Drug absorption",
          "Drug metabolism",
          "Drug excretion",
        ],
        answer: "Drug absorption",
      },
      {
        question: "What is a generic drug?",
        options: [
          "More expensive",
          "Same as brand drug",
          "Illegal drug",
          "Herbal drug",
        ],
        answer: "Same as brand drug",
      },
      {
        question: "Which route avoids first-pass metabolism?",
        options: ["Oral", "Rectal", "Sublingual", "Gastric"],
        answer: "Sublingual",
      },
      {
        question: "What is half-life?",
        options: [
          "Time for drug action",
          "Time to eliminate half drug",
          "Time to absorb drug",
          "Time to metabolize drug",
        ],
        answer: "Time to eliminate half drug",
      },
      {
        question: "Which drug class kills bacteria?",
        options: ["Bacteriostatic", "Antipyretic", "Bactericidal", "Analgesic"],
        answer: "Bactericidal",
      },
      {
        question: "What is drug interaction?",
        options: [
          "Drug color change",
          "Drug taste change",
          "Effect of one drug on another",
          "Drug packaging",
        ],
        answer: "Effect of one drug on another",
      },
      {
        question: "Which solvent is common in syrups?",
        options: ["Alcohol", "Oil", "Water", "Ether"],
        answer: "Water",
      },
      {
        question: "What does ADME stand for?",
        options: [
          "Absorption Distribution Metabolism Excretion",
          "Action Dose Method Effect",
          "Administration Dose Metabolism Effect",
          "Absorption Dose Metabolism Elimination",
        ],
        answer: "Absorption Distribution Metabolism Excretion",
      },
      {
        question: "Which drug treats fungal infections?",
        options: ["Antibiotic", "Antiviral", "Antifungal", "Antipyretic"],
        answer: "Antifungal",
      },
      {
        question: "What is contraindication?",
        options: [
          "Recommended use",
          "Forbidden use",
          "Drug dose",
          "Drug benefit",
        ],
        answer: "Forbidden use",
      },
      {
        question: "Which dosage form is sterile?",
        options: ["Tablet", "Cream", "Injection", "Syrup"],
        answer: "Injection",
      },
      {
        question: "What is excipient?",
        options: [
          "Active drug",
          "Inactive substance",
          "Toxic compound",
          "Preservative only",
        ],
        answer: "Inactive substance",
      },
      {
        question: "Which drug reduces inflammation?",
        options: ["NSAIDs", "Antibiotics", "Antivirals", "Antifungals"],
        answer: "NSAIDs",
      },
      {
        question: "What is pharmacodynamics?",
        options: [
          "Drug synthesis",
          "Drug effects on body",
          "Drug excretion",
          "Drug storage",
        ],
        answer: "Drug effects on body",
      },
      {
        question: "Which drug lowers blood pressure?",
        options: ["Antibiotic", "Antihypertensive", "Antipyretic", "Analgesic"],
        answer: "Antihypertensive",
      },
      {
        question: "What is stability testing?",
        options: [
          "Drug taste test",
          "Drug color test",
          "Drug shelf-life study",
          "Drug toxicity test",
        ],
        answer: "Drug shelf-life study",
      },
      {
        question: "Which form releases drug slowly?",
        options: [
          "Immediate release",
          "Sustained release",
          "Injection",
          "Syrup",
        ],
        answer: "Sustained release",
      },
    ],

    Hard: [
      {
        question: "What is first-pass metabolism?",
        options: [
          "Drug excretion by kidney",
          "Drug metabolism in liver before circulation",
          "Drug absorption in intestine",
          "Drug distribution to tissues",
        ],
        answer: "Drug metabolism in liver before circulation",
      },
      {
        question: "Which enzyme family metabolizes most drugs?",
        options: ["ATPase", "Cytochrome P450", "Lipase", "Amylase"],
        answer: "Cytochrome P450",
      },
      {
        question: "What is therapeutic index?",
        options: [
          "Effective dose / toxic dose",
          "Toxic dose / effective dose",
          "Absorbed dose",
          "Eliminated dose",
        ],
        answer: "Toxic dose / effective dose",
      },
      {
        question: "Which drug causes enzyme induction?",
        options: ["Rifampicin", "Paracetamol", "Aspirin", "Penicillin"],
        answer: "Rifampicin",
      },
      {
        question: "What is pharmacovigilance?",
        options: [
          "Drug production",
          "Drug safety monitoring",
          "Drug synthesis",
          "Drug marketing",
        ],
        answer: "Drug safety monitoring",
      },
      {
        question: "Which compartment receives drug first after IV injection?",
        options: ["Peripheral", "Central", "Fat", "Muscle"],
        answer: "Central",
      },
      {
        question: "What is clearance?",
        options: [
          "Drug absorption rate",
          "Volume of plasma cleared per time",
          "Drug dose",
          "Drug potency",
        ],
        answer: "Volume of plasma cleared per time",
      },
      {
        question: "Which drug is narrow therapeutic index?",
        options: ["Paracetamol", "Digoxin", "Ibuprofen", "Amoxicillin"],
        answer: "Digoxin",
      },
      {
        question: "What is polymorphism in pharmacology?",
        options: [
          "Drug shape change",
          "Genetic variation in drug metabolism",
          "Drug solubility change",
          "Drug color change",
        ],
        answer: "Genetic variation in drug metabolism",
      },
      {
        question: "Which route gives 100% bioavailability?",
        options: ["Oral", "IM", "SC", "IV"],
        answer: "IV",
      },
      {
        question: "What is prodrug?",
        options: [
          "Inactive drug converted in body",
          "Toxic drug",
          "Expired drug",
          "Herbal drug",
        ],
        answer: "Inactive drug converted in body",
      },
      {
        question: "Which test checks sterility?",
        options: [
          "Dissolution test",
          "Sterility test",
          "Stability test",
          "Hardness test",
        ],
        answer: "Sterility test",
      },
      {
        question: "What is volume of distribution?",
        options: [
          "Amount of drug in body",
          "Dose administered",
          "Theoretical volume for drug distribution",
          "Elimination rate",
        ],
        answer: "Theoretical volume for drug distribution",
      },
      {
        question: "Which factor increases drug toxicity?",
        options: [
          "Low dose",
          "Fast metabolism",
          "Drug accumulation",
          "Short half-life",
        ],
        answer: "Drug accumulation",
      },
      {
        question: "What is drug synergy?",
        options: [
          "Reduced effect",
          "No effect",
          "Combined increased effect",
          "Opposite effect",
        ],
        answer: "Combined increased effect",
      },
      {
        question: "Which study focuses on drug formulation?",
        options: [
          "Pharmacology",
          "Pharmaceutics",
          "Toxicology",
          "Microbiology",
        ],
        answer: "Pharmaceutics",
      },
      {
        question: "What is dissolution test?",
        options: [
          "Drug breakdown test",
          "Drug release test",
          "Drug toxicity test",
          "Drug purity test",
        ],
        answer: "Drug release test",
      },
      {
        question: "Which drug crosses BBB easily?",
        options: ["Hydrophilic", "Ionized", "Lipophilic", "Large molecules"],
        answer: "Lipophilic",
      },
      {
        question: "What is tachyphylaxis?",
        options: [
          "Slow drug action",
          "Rapid loss of response",
          "Drug toxicity",
          "Drug accumulation",
        ],
        answer: "Rapid loss of response",
      },
      {
        question: "Which authority regulates drugs in Algeria?",
        options: ["WHO", "FDA", "Ministry of Health", "UNICEF"],
        answer: "Ministry of Health",
      },
    ],
  },

  // Dentistry Questions
  Dentistry: {
    Easy: [
      {
        question: "What is dentistry?",
        options: [
          "Study of teeth and oral cavity",
          "Study of bones",
          "Study of eyes",
          "Study of skin",
        ],
        answer: "Study of teeth and oral cavity",
      },
      {
        question: "How many teeth does an adult normally have?",
        options: ["20", "24", "28", "32"],
        answer: "32",
      },
      {
        question: "What are baby teeth called?",
        options: ["Permanent", "Deciduous", "Canines", "Molars"],
        answer: "Deciduous",
      },
      {
        question: "Which tooth is used for cutting food?",
        options: ["Molar", "Premolar", "Incisor", "Canine"],
        answer: "Incisor",
      },
      {
        question: "What is the hard outer layer of the tooth?",
        options: ["Dentin", "Pulp", "Enamel", "Cementum"],
        answer: "Enamel",
      },
      {
        question: "Which part of the tooth contains nerves?",
        options: ["Enamel", "Dentin", "Pulp", "Cementum"],
        answer: "Pulp",
      },
      {
        question: "What is dental caries?",
        options: [
          "Tooth decay",
          "Gum inflammation",
          "Tooth fracture",
          "Bad breath",
        ],
        answer: "Tooth decay",
      },
      {
        question: "Which tooth is the longest?",
        options: ["Incisor", "Canine", "Premolar", "Molar"],
        answer: "Canine",
      },
      {
        question: "What does plaque consist of?",
        options: ["Minerals", "Bacteria", "Blood", "Saliva only"],
        answer: "Bacteria",
      },
      {
        question: "Which instrument is used for examination?",
        options: ["Forceps", "Mirror", "Scaler", "Elevator"],
        answer: "Mirror",
      },
      {
        question: "What is gingiva?",
        options: ["Tooth root", "Jaw bone", "Gum tissue", "Tongue"],
        answer: "Gum tissue",
      },
      {
        question: "Which tooth type has two cusps?",
        options: ["Incisor", "Canine", "Premolar", "Molar"],
        answer: "Premolar",
      },
      {
        question: "What is halitosis?",
        options: ["Tooth pain", "Bad breath", "Gum bleeding", "Jaw pain"],
        answer: "Bad breath",
      },
      {
        question: "Which mineral strengthens enamel?",
        options: ["Iron", "Fluoride", "Calcium", "Magnesium"],
        answer: "Fluoride",
      },
      {
        question: "What is the function of saliva?",
        options: [
          "Dry mouth",
          "Lubrication and protection",
          "Tooth decay",
          "Bone growth",
        ],
        answer: "Lubrication and protection",
      },
      {
        question: "Which teeth erupt first in infants?",
        options: ["Molars", "Canines", "Incisors", "Premolars"],
        answer: "Incisors",
      },
      {
        question: "What is calculus?",
        options: ["Soft plaque", "Hardened plaque", "Tooth enamel", "Jaw bone"],
        answer: "Hardened plaque",
      },
      {
        question: "Which part anchors tooth to bone?",
        options: ["Enamel", "Pulp", "Cementum", "Dentin"],
        answer: "Cementum",
      },
      {
        question: "What is occlusion?",
        options: [
          "Tooth decay",
          "Tooth alignment",
          "Contact between teeth",
          "Gum disease",
        ],
        answer: "Contact between teeth",
      },
      {
        question: "Which disease affects gums?",
        options: ["Caries", "Periodontitis", "Pulpitis", "Abscess"],
        answer: "Periodontitis",
      },
    ],

    Medium: [
      {
        question: "What is periodontology?",
        options: [
          "Study of teeth",
          "Study of gums and supporting tissues",
          "Study of dental materials",
          "Study of oral surgery",
        ],
        answer: "Study of gums and supporting tissues",
      },
      {
        question: "Which bacteria is mainly responsible for caries?",
        options: [
          "Streptococcus mutans",
          "Staphylococcus aureus",
          "E. coli",
          "Lactobacillus only",
        ],
        answer: "Streptococcus mutans",
      },
      {
        question: "What is the function of dentin?",
        options: [
          "Protection only",
          "Support of enamel",
          "Nerve supply",
          "Blood supply",
        ],
        answer: "Support of enamel",
      },
      {
        question: "What does DMFT index measure?",
        options: [
          "Gum health",
          "Caries experience",
          "Tooth color",
          "Plaque amount",
        ],
        answer: "Caries experience",
      },
      {
        question: "Which nerve supplies maxillary teeth?",
        options: [
          "Mandibular nerve",
          "Maxillary nerve",
          "Facial nerve",
          "Glossopharyngeal nerve",
        ],
        answer: "Maxillary nerve",
      },
      {
        question: "What is pulpitis?",
        options: [
          "Inflammation of pulp",
          "Gum infection",
          "Bone loss",
          "Enamel erosion",
        ],
        answer: "Inflammation of pulp",
      },
      {
        question: "Which radiograph shows entire tooth?",
        options: ["Bitewing", "Periapical", "Occlusal", "Panoramic"],
        answer: "Periapical",
      },
      {
        question: "What is the function of periodontal ligament?",
        options: [
          "Attach tooth to bone",
          "Protect enamel",
          "Supply blood",
          "Produce saliva",
        ],
        answer: "Attach tooth to bone",
      },
      {
        question: "Which tooth has the strongest root?",
        options: ["Incisor", "Canine", "Premolar", "Molar"],
        answer: "Canine",
      },
      {
        question: "What is gingivitis?",
        options: [
          "Reversible gum inflammation",
          "Irreversible bone loss",
          "Tooth decay",
          "Root fracture",
        ],
        answer: "Reversible gum inflammation",
      },
      {
        question: "Which material is commonly used for fillings?",
        options: ["Gold", "Composite resin", "Steel", "Plastic"],
        answer: "Composite resin",
      },
      {
        question: "What is orthodontics?",
        options: [
          "Tooth extraction",
          "Teeth alignment",
          "Root canal treatment",
          "Gum surgery",
        ],
        answer: "Teeth alignment",
      },
      {
        question: "Which structure is radiolucent?",
        options: ["Enamel", "Dentin", "Pulp", "Bone"],
        answer: "Pulp",
      },
      {
        question: "What is xerostomia?",
        options: ["Dry mouth", "Bad breath", "Tooth pain", "Jaw locking"],
        answer: "Dry mouth",
      },
      {
        question: "Which tooth is most commonly impacted?",
        options: ["Canine", "Premolar", "Third molar", "Incisor"],
        answer: "Third molar",
      },
      {
        question: "What is dental erosion?",
        options: [
          "Bacterial decay",
          "Chemical loss of enamel",
          "Mechanical wear",
          "Bone resorption",
        ],
        answer: "Chemical loss of enamel",
      },
      {
        question: "Which anesthetic is commonly used in dentistry?",
        options: ["Lidocaine", "Morphine", "Paracetamol", "Ibuprofen"],
        answer: "Lidocaine",
      },
      {
        question: "What is the function of bitewing radiograph?",
        options: [
          "Detect caries",
          "Detect fractures",
          "Show TMJ",
          "Show sinuses",
        ],
        answer: "Detect caries",
      },
      {
        question: "Which disease causes bone loss around teeth?",
        options: ["Gingivitis", "Periodontitis", "Caries", "Pulpitis"],
        answer: "Periodontitis",
      },
      {
        question: "What is endodontics?",
        options: [
          "Gum treatment",
          "Root canal treatment",
          "Tooth alignment",
          "Tooth replacement",
        ],
        answer: "Root canal treatment",
      },
    ],

    Hard: [
      {
        question: "What is the primary etiology of periodontitis?",
        options: [
          "Trauma",
          "Plaque biofilm",
          "Genetics only",
          "Occlusal forces",
        ],
        answer: "Plaque biofilm",
      },
      {
        question: "Which nerve block anesthetizes mandibular teeth?",
        options: [
          "Posterior superior alveolar",
          "Inferior alveolar",
          "Mental",
          "Infraorbital",
        ],
        answer: "Inferior alveolar",
      },
      {
        question: "What is the function of cementoblasts?",
        options: ["Form enamel", "Form dentin", "Form cementum", "Resorb bone"],
        answer: "Form cementum",
      },
      {
        question: "Which tooth has two roots in maxilla?",
        options: ["First premolar", "Canine", "Central incisor", "Third molar"],
        answer: "First premolar",
      },
      {
        question: "What is the main component of enamel?",
        options: ["Collagen", "Hydroxyapatite", "Keratin", "Elastin"],
        answer: "Hydroxyapatite",
      },
      {
        question: "Which radiograph shows both jaws?",
        options: ["Periapical", "Bitewing", "Panoramic", "Occlusal"],
        answer: "Panoramic",
      },
      {
        question: "What is apical periodontitis?",
        options: [
          "Pulp infection",
          "Inflammation around root apex",
          "Gum inflammation",
          "Bone fracture",
        ],
        answer: "Inflammation around root apex",
      },
      {
        question: "Which instrument is used for scaling?",
        options: ["Mirror", "Explorer", "Scaler", "Forceps"],
        answer: "Scaler",
      },
      {
        question: "What is the ideal occlusion concept?",
        options: [
          "Angle Class I",
          "Angle Class II",
          "Angle Class III",
          "Open bite",
        ],
        answer: "Angle Class I",
      },
      {
        question: "Which structure is lost first in periodontitis?",
        options: ["Enamel", "Dentin", "Periodontal ligament", "Pulp"],
        answer: "Periodontal ligament",
      },
      {
        question: "What is the main cause of tooth hypersensitivity?",
        options: [
          "Pulp necrosis",
          "Exposed dentin",
          "Enamel caries",
          "Periodontal abscess",
        ],
        answer: "Exposed dentin",
      },
      {
        question: "Which impression material is elastic?",
        options: ["ZOE", "Alginate", "Plaster", "Wax"],
        answer: "Alginate",
      },
      {
        question: "What is osteitis?",
        options: [
          "Bone inflammation",
          "Tooth inflammation",
          "Gum disease",
          "Nerve damage",
        ],
        answer: "Bone inflammation",
      },
      {
        question: "Which canal is usually curved?",
        options: [
          "Maxillary central incisor",
          "Mandibular molar mesial canal",
          "Canine",
          "Premolar",
        ],
        answer: "Mandibular molar mesial canal",
      },
      {
        question: "What is the function of fluoride at high concentration?",
        options: [
          "Remineralization",
          "Bactericidal effect",
          "Enamel formation",
          "Dentin formation",
        ],
        answer: "Bactericidal effect",
      },
      {
        question: "Which condition contraindicates extraction?",
        options: [
          "Uncontrolled diabetes",
          "Caries",
          "Mobile tooth",
          "Periodontitis",
        ],
        answer: "Uncontrolled diabetes",
      },
      {
        question: "What is TMJ?",
        options: [
          "Temporomandibular joint",
          "Tooth maxillary junction",
          "Tongue muscle joint",
          "Temporal muscle junction",
        ],
        answer: "Temporomandibular joint",
      },
      {
        question: "Which lesion is premalignant?",
        options: ["Leukoplakia", "Caries", "Gingivitis", "Pulpitis"],
        answer: "Leukoplakia",
      },
      {
        question: "What is the purpose of root canal obturation?",
        options: [
          "Remove pulp",
          "Seal canal",
          "Clean enamel",
          "Strengthen crown",
        ],
        answer: "Seal canal",
      },
      {
        question: "Which bone supports maxillary teeth?",
        options: ["Mandible", "Maxilla", "Zygomatic", "Temporal"],
        answer: "Maxilla",
      },
    ],
  },
};
