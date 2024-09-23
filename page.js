const responses = {
    "data": [
        {
            "symptoms": "cold, fever, ",
            "disease": "Common Cold or Flu",
            "description": "A viral infection affecting the nose and throat.",
            "precaution": "Rest, drink plenty of fluids, and avoid cold exposure.",
            "medication": "Paracetamol for fever, nasal sprays for congestion.",
            "workout": "Light stretching, avoid strenuous exercises.",
            "diets": "Warm soups, herbal teas, and vitamin C-rich foods."
        },
        {
            "symptoms": "headache, nausea",
            "disease": "Migraine",
            "description": "A severe headache, often accompanied by nausea.",
            "precaution": "Avoid bright lights and loud noises, rest in a quiet room.",
            "medication": "Pain relievers such as ibuprofen, anti-nausea medications.",
            "workout": "Light yoga, avoid high-impact exercises.",
            "diets": "Hydrate well, avoid caffeine and processed foods."
        },
        {
            "symptoms": "sore throat, cough",
            "disease": "Throat Infection",
            "description": "An infection causing soreness and discomfort in the throat.",
            "precaution": "Gargle with warm salt water, drink fluids, avoid cold drinks.",
            "medication": "Cough syrup, throat lozenges, pain relievers like ibuprofen.",
            "workout": "Rest and avoid strenuous activities until recovery.",
            "diets": "Warm teas, soups, and soft foods."
        },
        {
            "symptoms": "fatigue, dizziness",
            "disease": "Anemia",
            "description": "A condition where you lack enough healthy red blood cells to carry oxygen.",
            "precaution": "Rest, avoid overexertion, maintain a balanced diet.",
            "medication": "Iron supplements, vitamin B12 injections if needed.",
            "workout": "Light walking or yoga to improve circulation.",
            "diets": "Iron-rich foods like spinach, beans, and fortified cereals."
        },
        {
            "symptoms": "fever, rash",
            "disease": "Chickenpox",
            "description": "A highly contagious viral infection causing an itchy rash.",
            "precaution": "Stay isolated, avoid scratching, use calamine lotion for relief.",
            "medication": "Antiviral drugs, pain relievers like acetaminophen.",
            "workout": "Rest; avoid physical activities during the contagious period.",
            "diets": "Stay hydrated, eat soft, non-irritating foods."
        },
        {
            "disease": "Maple Syrup Urine Disease",
            "symptoms": "sweet-smelling urine, poor feeding, lethargy",
            "description": "A metabolic disorder affecting the body's ability to process certain amino acids.",
            "precaution": "Strict dietary management from early infancy.",
            "medication": "Special formulas low in branched-chain amino acids.",
            "workout": "Regular physical activity as tolerated.",
            "diets": "Diet specifically tailored to limit certain amino acids."
        },
        {
            "symptoms": "chest pain, shortness of breath",
            "disease": "Heart Attack",
            "description": "A medical emergency where blood flow to the heart is blocked.",
            "precaution": "Seek immediate medical attention, avoid physical exertion.",
            "medication": "Aspirin, nitroglycerin, or prescribed heart medications.",
            "workout": "Rest and avoid exercises until cleared by a doctor.",
            "diets": "Heart-healthy foods like fruits, vegetables, and whole grains."
        },
        {
            "symptoms": "joint pain, swelling",
            "disease": "Arthritis",
            "description": "Inflammation of the joints causing pain and stiffness.",
            "precaution": "Stay active but avoid overexertion, apply heat or cold to the affected area.",
            "medication": "Anti-inflammatory drugs like ibuprofen, physical therapy.",
            "workout": "Low-impact exercises like swimming or walking.",
            "diets": "Anti-inflammatory foods like fish, olive oil, and leafy greens."
        },
        {
            "symptoms": "runny nose, itchy eyes, itching",
            "disease": "Allergies",
            "description": "An immune response to allergens like pollen, dust, or pets.",
            "precaution": "Avoid known allergens, keep windows closed during high pollen seasons.",
            "medication": "Antihistamines, decongestants, and eye drops.",
            "workout": "Exercise indoors during high allergen seasons.",
            "diets": "Foods rich in antioxidants like berries and leafy greens."
        },
        {
            "symptoms": "stomach pain, vomiting",
            "disease": "Food Poisoning",
            "description": "An illness caused by consuming contaminated food or water.",
            "precaution": "Avoid solid foods until symptoms subside, stay hydrated.",
            "medication": "Anti-diarrheal drugs, rehydration solutions.",
            "workout": "Rest, avoid physical activities until fully recovered.",
            "diets": "Broth, crackers, and bland foods like rice and toast."
        },
        {
            "symptoms": "high fever, headache, muscle pain",
            "disease": "Dengue Fever",
            "description": "A mosquito-borne viral infection causing high fever and severe muscle pain.",
            "precaution": "Avoid mosquito bites, rest, and stay hydrated.",
            "medication": "Pain relievers like paracetamol, avoid aspirin.",
            "workout": "Rest is essential; avoid exercise during recovery.",
            "diets": "Fluids, fruit juices, and easily digestible foods."
        },
        {
            "symptoms": "itching",
            "disease": "Allergic Reaction",
            "description": "An immune response to allergens causing skin irritation.",
            "precaution": "Avoid known allergens and irritants.",
            "medication": "Antihistamines and topical creams.",
            "workout": "Light exercise, avoid strenuous activities.",
            "diets": "Hydrating foods and anti-inflammatory diets."
        },
        {
            "symptoms": "skinrash",
            "disease": "Dermatitis",
            "description": "Inflammation of the skin characterized by rashes.",
            "precaution": "Keep the area clean and avoid scratching.",
            "medication": "Corticosteroids and topical ointments.",
            "workout": "Avoid activities that cause sweating.",
            "diets": "Foods rich in omega-3 fatty acids."
        },
        {
            "symptoms": "nodal skin eruptions",
            "disease": "Hives",
            "description": "Raised, itchy welts on the skin caused by an allergic reaction.",
            "precaution": "Identify and avoid triggers.",
            "medication": "Antihistamines and corticosteroids.",
            "workout": "Avoid overheating.",
            "diets": "Balanced diet avoiding allergens."
        },
        {
            "symptoms": "continuous sneezing",
            "disease": "Allergic Rhinitis",
            "description": "An allergic response causing sneezing and nasal congestion.",
            "precaution": "Avoid allergens and keep living areas dust-free.",
            "medication": "Antihistamines and nasal sprays.",
            "workout": "Indoors during high pollen seasons.",
            "diets": "Antioxidant-rich foods."
        },
        {
            "symptoms": "shivering",
            "disease": "Hypothermia",
            "description": "A condition caused by prolonged exposure to cold.",
            "precaution": "Dress warmly and avoid prolonged exposure to cold.",
            "medication": "Warm fluids and blankets.",
            "workout": "Avoid outdoor exercises in cold weather.",
            "diets": "Warm, nutritious foods."
        },
        {
            "symptoms": "chills",
            "disease": "Fever",
            "description": "A temporary increase in body temperature often due to infection.",
            "precaution": "Stay hydrated and rest.",
            "medication": "Antipyretics like paracetamol.",
            "workout": "Rest, avoid strenuous activities.",
            "diets": "Light meals, plenty of fluids."
        },
        {
            "symptoms": "joint pain",
            "disease": "Arthritis",
            "description": "Inflammation of joints causing pain and stiffness.",
            "precaution": "Stay active but avoid overexertion.",
            "medication": "Anti-inflammatory drugs.",
            "workout": "Low-impact exercises.",
            "diets": "Anti-inflammatory foods."
        },
        {
            "symptoms": "stomach pain",
            "disease": "Gastritis",
            "description": "Inflammation of the stomach lining causing pain.",
            "precaution": "Avoid spicy and acidic foods.",
            "medication": "Antacids and proton pump inhibitors.",
            "workout": "Gentle walking is okay.",
            "diets": "Bland foods and plenty of fluids."
        },
        {
            "symptoms": "acidity",
            "disease": "Acid Reflux",
            "description": "A digestive condition where stomach acid flows back into the esophagus.",
            "precaution": "Avoid lying down after meals.",
            "medication": "Antacids and proton pump inhibitors.",
            "workout": "Light walking is encouraged.",
            "diets": "Avoid spicy and fatty foods."
        },
        {
            "symptoms": "ulcers on tongue",
            "disease": "Canker Sores",
            "description": "Small, painful lesions that develop in the mouth.",
            "precaution": "Avoid spicy and acidic foods.",
            "medication": "Topical anesthetics and antiseptic mouthwash.",
            "workout": "No specific restrictions.",
            "diets": "Soft foods and plenty of fluids."
        },
        {
            "symptoms": "muscle wasting",
            "disease": "Cachexia",
            "description": "A complex syndrome associated with an underlying illness causing ongoing muscle loss.",
            "precaution": "Manage underlying conditions.",
            "medication": "Nutritional supplements.",
            "workout": "Light strength training.",
            "diets": "High-protein diet."
        },
        {
            "symptoms": "vomiting",
            "disease": "Gastroenteritis",
            "description": "Inflammation of the stomach and intestines causing vomiting and diarrhea.",
            "precaution": "Stay hydrated and avoid solid foods initially.",
            "medication": "Anti-nausea medications.",
            "workout": "Rest until recovery.",
            "diets": "Bland foods like rice and bananas."
        },
        {
            "symptoms": "burning micturition",
            "disease": "Urinary Tract Infection (UTI)",
            "description": "An infection in the urinary system causing painful urination.",
            "precaution": "Stay hydrated and avoid irritants.",
            "medication": "Antibiotics.",
            "workout": "Gentle activities; avoid high-impact workouts.",
            "diets": "Cranberry juice and plenty of water."
        },
        {
            "symptoms": "spotting urination",
            "disease": "UTI or Kidney Stones",
            "description": "Blood or discoloration in urine indicating possible infection or stones.",
            "precaution": "Seek medical attention.",
            "medication": "Depends on diagnosis.",
            "workout": "Rest and avoid strenuous activities.",
            "diets": "Hydration and a balanced diet."
        },
        {
            "symptoms": "weight gain",
            "disease": "Hypothyroidism",
            "description": "A condition where the thyroid does not produce enough hormones, leading to weight gain.",
            "precaution": "Regular check-ups with a doctor.",
            "medication": "Thyroid hormone replacement therapy.",
            "workout": "Regular exercise to manage weight.",
            "diets": "Balanced diet focusing on metabolism-boosting foods."
        },
        {
            "symptoms": "anxiety",
            "disease": "Generalized Anxiety Disorder",
            "description": "A mental health disorder characterized by persistent and excessive worry.",
            "precaution": "Practice relaxation techniques.",
            "medication": "Antidepressants and therapy.",
            "workout": "Yoga and meditation.",
            "diets": "Omega-3 rich foods and leafy greens."
        },
        {
            "symptoms": "cold hands and feets",
            "disease": "Poor Circulation",
            "description": "Reduced blood flow to the extremities, causing cold sensations.",
            "precaution": "Keep warm and manage underlying conditions.",
            "medication": "Vasodilators if prescribed.",
            "workout": "Gentle exercises to improve circulation.",
            "diets": "Foods that promote good circulation."
        },
        {
            "symptoms": "mood swings",
            "disease": "Bipolar Disorder",
            "description": "A mental health condition marked by extreme mood changes.",
            "precaution": "Follow a treatment plan.",
            "medication": "Mood stabilizers and therapy.",
            "workout": "Regular exercise to stabilize mood.",
            "diets": "Balanced diet with omega-3 fatty acids."
        },
        {
            "symptoms": "weight loss",
            "disease": "Hyperthyroidism",
            "description": "A condition where the thyroid is overactive, leading to weight loss.",
            "precaution": "Regular monitoring and treatment.",
            "medication": "Antithyroid medications.",
            "workout": "Regular exercise to maintain health.",
            "diets": "High-calorie, nutritious foods."
        },
        {
            "symptoms": "restlessness",
            "disease": "Restless Leg Syndrome",
            "description": "An urge to move the legs, often accompanied by uncomfortable sensations.",
            "precaution": "Avoid caffeine and alcohol.",
            "medication": "Dopaminergic agents.",
            "workout": "Regular movement and stretching.",
            "diets": "Balanced diet with magnesium-rich foods."
        },
        {
            "symptoms": "lethargy",
            "disease": "Depression",
            "description": "A mood disorder causing persistent feelings of sadness and loss of interest.",
            "precaution": "Seek professional help.",
            "medication": "Antidepressants.",
            "workout": "Regular exercise can help improve mood.",
            "diets": "Healthy, balanced diet."
        },
        {
            "symptoms": "patches in throat",
            "disease": "Tonsillitis",
            "description": "Inflammation of the tonsils often due to infection.",
            "precaution": "Stay hydrated and rest.",
            "medication": "Pain relievers and antibiotics if bacterial.",
            "workout": "Rest until recovery.",
            "diets": "Soft foods and warm liquids."
        },
        {
            "symptoms": "difficulty in breathing",
            "disease": "Asthma",
            "description": "A condition that affects the airways, causing difficulty in breathing.",
            "precaution": "Avoid triggers and allergens.",
            "medication": "Inhalers and anti-inflammatory drugs.",
            "workout": "Low-impact exercises.",
            "diets": "Foods that support lung health."
        },
        {
            "symptoms": "swelling joints",
            "disease": "Rheumatoid Arthritis",
            "description": "An autoimmune disorder causing joint inflammation and pain.",
            "precaution": "Avoid strenuous activities.",
            "medication": "Disease-modifying antirheumatic drugs (DMARDs).",
            "workout": "Low-impact exercises.",
            "diets": "Anti-inflammatory foods."
        },
        {
            "symptoms": "sore throat",
            "disease": "Pharyngitis",
            "description": "Inflammation of the pharynx causing throat pain.",
            "precaution": "Stay hydrated and avoid irritants.",
            "medication": "Pain relievers and throat lozenges.",
            "workout": "Rest until recovery.",
            "diets": "Soft foods and warm liquids."
        },
        {
            "symptoms": "runny nose",
            "disease": "Common Cold",
            "description": "A viral infection causing nasal congestion and runny nose.",
            "precaution": "Rest and stay hydrated.",
            "medication": "Decongestants and antihistamines.",
            "workout": "Light activities as tolerated.",
            "diets": "Nutrient-rich foods to support immune health."
        },
        {
            "symptoms": "fever",
            "disease": "Infection",
            "description": "A temporary increase in body temperature, often due to an underlying infection.",
            "precaution": "Stay hydrated and rest.",
            "medication": "Antipyretics.",
            "workout": "Rest until fever resolves.",
            "diets": "Light meals and fluids."
        },
        {
            "symptoms": "sweating",
            "disease": "Hyperhidrosis",
            "description": "Excessive sweating in certain areas of the body.",
            "precaution": "Wear breathable clothing.",
            "medication": "Antiperspirants and oral medications.",
            "workout": "Stay hydrated during exercise.",
            "diets": "Avoid spicy foods."
        },
        {
            "symptoms": "heartburn",
            "disease": "GERD (Gastroesophageal Reflux Disease)",
            "description": "A digestive disorder where stomach acid flows back into the esophagus.",
            "precaution": "Avoid large meals and lying down after eating.",
            "medication": "Proton pump inhibitors.",
            "workout": "Gentle activities; avoid high-impact workouts.",
            "diets": "Avoid trigger foods and large meals."
        },
        {
            "symptoms": "nausea",
            "disease": "Motion Sickness",
            "description": "A condition that causes dizziness and nausea due to motion.",
            "precaution": "Avoid reading while in motion.",
            "medication": "Antihistamines and anti-nausea medications.",
            "workout": "Avoid strenuous activities until symptoms resolve.",
            "diets": "Ginger tea and light snacks."
        },
        {
            "symptoms": "headache",
            "disease": "Migraine",
            "description": "A severe headache often accompanied by nausea and sensitivity to light.",
            "precaution": "Identify and avoid triggers.",
            "medication": "Pain relievers and triptans.",
            "workout": "Gentle activities; rest in a dark room.",
            "diets": "Stay hydrated and maintain regular meals."
        },
        {
            "symptoms": "dry cough",
            "disease": "Allergies or Asthma",
            "description": "A persistent cough without mucus, often due to allergens.",
            "precaution": "Avoid allergens and irritants.",
            "medication": "Cough suppressants and inhalers.",
            "workout": "Low-impact exercises as tolerated.",
            "diets": "Avoid dairy and sugary foods."
        },
        {
            "symptoms": "chest pain",
            "disease": "Angina or Heart Attack",
            "description": "Pain or discomfort in the chest that may signal heart problems.",
            "precaution": "Seek immediate medical attention if severe.",
            "medication": "Nitrates and aspirin.",
            "workout": "Rest; avoid physical exertion.",
            "diets": "Heart-healthy foods low in saturated fat."
        },
        {
            "symptoms": "diarrhea",
            "disease": "Irritable Bowel Syndrome (IBS)",
            "description": "A disorder causing abdominal pain and changes in bowel habits.",
            "precaution": "Identify trigger foods.",
            "medication": "Antidiarrheals and fiber supplements.",
            "workout": "Gentle walking may help.",
            "diets": "Low-FODMAP diet to identify triggers."
        },
        {
            "symptoms": "puffiness around eyes",
            "disease": "Allergies or Sinus Infection",
            "description": "Swelling around the eyes due to fluid retention.",
            "precaution": "Avoid allergens and get enough sleep.",
            "medication": "Antihistamines or decongestants.",
            "workout": "No specific restrictions.",
            "diets": "Reduce salt intake."
        },
        {
            "symptoms": "excessive thirst",
            "disease": "Diabetes Mellitus",
            "description": "Increased thirst due to high blood sugar levels.",
            "precaution": "Monitor blood sugar levels.",
            "medication": "Insulin or oral hypoglycemics.",
            "workout": "Regular exercise helps manage blood sugar.",
            "diets": "Balanced diet with low glycemic index foods."
        },
        {
            "symptoms": "hair loss",
            "disease": "Alopecia Areata",
            "description": "An autoimmune condition that causes hair loss.",
            "precaution": "Avoid stress and harsh hair treatments.",
            "medication": "Topical corticosteroids.",
            "workout": "No specific restrictions.",
            "diets": "Nutrient-rich diet with vitamins A, C, and E."
        },
        {
            "symptoms": "night sweats",
            "disease": "Menopause or Infection",
            "description": "Episodes of excessive sweating during sleep.",
            "precaution": "Stay cool and wear breathable fabrics.",
            "medication": "Hormone replacement therapy if needed.",
            "workout": "Light activities to help regulate body temperature.",
            "diets": "Avoid spicy foods and caffeine."
        },
        {
            "symptoms": "sudden weight gain",
            "disease": "Cushing's Syndrome",
            "description": "Weight gain caused by excess cortisol.",
            "precaution": "Seek medical evaluation.",
            "medication": "Medications to control cortisol production.",
            "workout": "Regular exercise to maintain health.",
            "diets": "Balanced diet to support metabolic health."
        },
        {
            "symptoms": "tingling in hands",
            "disease": "Carpal Tunnel Syndrome",
            "description": "Nerve compression in the wrist leading to tingling sensations.",
            "precaution": "Take regular breaks from repetitive activities.",
            "medication": "Wrist splints and anti-inflammatory medications.",
            "workout": "Gentle stretching exercises.",
            "diets": "Foods rich in vitamins B6 and B12."
        },
        {
            "symptoms": "blurry vision",
            "disease": "Diabetic Retinopathy",
            "description": "Damage to the retina due to diabetes affecting vision.",
            "precaution": "Regular eye examinations.",
            "medication": "Laser treatment if necessary.",
            "workout": "No specific restrictions.",
            "diets": "Balanced diet with low sugar intake."
        },
        {
            "symptoms": "migratory joint pain",
            "disease": "Lupus",
            "description": "An autoimmune disease that can cause joint pain and inflammation.",
            "precaution": "Manage stress and get regular check-ups.",
            "medication": "Nonsteroidal anti-inflammatory drugs (NSAIDs).",
            "workout": "Low-impact exercises are encouraged.",
            "diets": "Anti-inflammatory diet rich in omega-3 fatty acids."
        },
        {
            "symptoms": "fainting",
            "disease": "Vasovagal Syncope",
            "description": "A common cause of fainting due to a drop in heart rate.",
            "precaution": "Avoid standing for long periods.",
            "medication": "Increase fluid and salt intake if needed.",
            "workout": "Avoid sudden changes in position.",
            "diets": "Stay hydrated and eat balanced meals."
        },
        {
            "symptoms": "sensitive teeth",
            "disease": "Tooth Sensitivity",
            "description": "Pain or discomfort in teeth when exposed to certain stimuli.",
            "precaution": "Avoid very hot or cold foods.",
            "medication": "Desensitizing toothpaste.",
            "workout": "No specific restrictions.",
            "diets": "Avoid sugary and acidic foods."
        },
        {
            "symptoms": "throat clearing",
            "disease": "Post-Nasal Drip",
            "description": "Mucus dripping down the back of the throat, causing discomfort.",
            "precaution": "Stay hydrated and avoid irritants.",
            "medication": "Decongestants or antihistamines.",
            "workout": "No specific restrictions.",
            "diets": "Warm liquids to soothe throat."
        },
        {
            "symptoms": "chronic fatigue",
            "disease": "Sleep Apnea",
            "description": "A disorder that causes breathing interruptions during sleep.",
            "precaution": "Seek medical evaluation and treatment.",
            "medication": "Continuous positive airway pressure (CPAP) therapy.",
            "workout": "Regular, gentle exercises.",
            "diets": "Balanced diet to support overall health."
        },
        {
            "symptoms": "numbness",
            "disease": "Multiple Sclerosis",
            "description": "A disease that affects the central nervous system, causing numbness and other symptoms.",
            "precaution": "Regular follow-ups with a healthcare provider.",
            "medication": "Disease-modifying therapies.",
            "workout": "Adaptive exercises as tolerated.",
            "diets": "Balanced diet with a focus on whole foods."
        },
        {
            "symptoms": "pain in chest",
            "disease": "Pneumonia",
            "description": "An infection that inflames the air sacs in one or both lungs.",
            "precaution": "Seek medical attention; rest and stay hydrated.",
            "medication": "Antibiotics or antiviral medications, depending on the cause.",
            "workout": "Rest until cleared by a doctor.",
            "diets": "Warm fluids and nutritious meals."
        },
        {
            "symptoms": "extreme fatigue",
            "disease": "Chronic Fatigue Syndrome",
            "description": "A complex disorder characterized by extreme fatigue that doesn’t improve with rest.",
            "precaution": "Pace activities and prioritize rest.",
            "medication": "Supportive care and symptom management.",
            "workout": "Gentle, low-impact activities.",
            "diets": "Balanced diet rich in nutrients."
        },
        {
            "symptoms": "difficulty swallowing",
            "disease": "Esophagitis",
            "description": "Inflammation of the esophagus causing pain and difficulty swallowing.",
            "precaution": "Avoid irritants like alcohol and spicy foods.",
            "medication": "Proton pump inhibitors or steroids.",
            "workout": "No specific restrictions.",
            "diets": "Soft, easy-to-swallow foods."
        },
        {
            "symptoms": "red spots on skin",
            "disease": "Petechiae",
            "description": "Small, pinpoint red spots that can indicate bleeding under the skin.",
            "precaution": "Seek medical evaluation if persistent.",
            "medication": "Depends on underlying cause; may include steroids.",
            "workout": "No high-impact activities until evaluated.",
            "diets": "Balanced diet to support blood health."
        },
        {
            "symptoms": "ringing in ears",
            "disease": "Tinnitus",
            "description": "A ringing or buzzing noise in the ears not caused by external sound.",
            "precaution": "Avoid loud noises and manage stress.",
            "medication": "Hearing aids or sound therapy.",
            "workout": "No specific restrictions.",
            "diets": "Reduce caffeine and alcohol intake."
        },
        {
            "symptoms": "weight loss",
            "disease": "Hyperthyroidism",
            "description": "A condition where the thyroid gland is overactive, leading to weight loss.",
            "precaution": "Regular monitoring and follow-ups.",
            "medication": "Antithyroid medications or radioactive iodine.",
            "workout": "Regular exercise to maintain health.",
            "diets": "Balanced diet to support metabolism."
        },
        {
            "symptoms": "bruising",
            "disease": "Vitamin K Deficiency",
            "description": "A lack of vitamin K leading to easy bruising.",
            "precaution": "Consult a healthcare provider.",
            "medication": "Vitamin K supplements.",
            "workout": "No high-risk activities that could cause injury.",
            "diets": "Leafy greens and other vitamin K-rich foods."
        },
        {
            "symptoms": "swelling in legs",
            "disease": "Venous Insufficiency",
            "description": "A condition where veins struggle to send blood from the legs back to the heart.",
            "precaution": "Elevate legs and wear compression stockings.",
            "medication": "Venoactive drugs and diuretics.",
            "workout": "Walking is encouraged to improve circulation.",
            "diets": "Low-salt diet to reduce fluid retention."
        },
        {
            "symptoms": "burning pain in hands",
            "disease": "Peripheral Neuropathy",
            "description": "Damage to the peripheral nerves causing burning or tingling sensations.",
            "precaution": "Manage underlying conditions like diabetes.",
            "medication": "Pain relievers and anticonvulsants.",
            "workout": "Gentle exercises to maintain mobility.",
            "diets": "Balanced diet with vitamins B1, B6, and B12."
        },
        {
            "symptoms": "sudden blindness",
            "disease": "Retinal Detachment",
            "description": "A medical emergency where the retina separates from the back of the eye.",
            "precaution": "Seek immediate medical attention.",
            "medication": "Surgical intervention may be necessary.",
            "workout": "Avoid activities that strain the eyes.",
            "diets": "Maintain overall eye health with a balanced diet."
        },
        {
            "symptoms": "memory loss",
            "disease": "Alzheimer’s Disease",
            "description": "A progressive disease that destroys memory and other important mental functions.",
            "precaution": "Engage in mental exercises and stay socially active.",
            "medication": "Cognitive enhancers and supportive care.",
            "workout": "Regular physical activity is beneficial.",
            "diets": "Mediterranean diet for brain health."
        },
        {
            "symptoms": "dark colored stool",
            "disease": "Gastrointestinal Bleeding",
            "description": "Dark stool can indicate bleeding in the upper GI tract.",
            "precaution": "Seek immediate medical evaluation.",
            "medication": "Depends on the underlying cause; may require hospitalization.",
            "workout": "Rest until evaluated.",
            "diets": "Avoid irritants until cleared by a doctor."
        },
        {
            "symptoms": "frequent headaches",
            "disease": "Tension Headaches",
            "description": "A common type of headache caused by muscle tension.",
            "precaution": "Practice stress management techniques.",
            "medication": "Over-the-counter pain relievers.",
            "workout": "Regular light exercise can help.",
            "diets": "Stay hydrated and maintain regular meals."
        },
        {
            "symptoms": "painful urination",
            "disease": "Urinary Tract Infection (UTI)",
            "description": "An infection in any part of the urinary system causing pain and discomfort.",
            "precaution": "Stay hydrated and practice good hygiene.",
            "medication": "Antibiotics as prescribed.",
            "workout": "Avoid strenuous activities until treated.",
            "diets": "Cranberry juice may help prevent UTIs."
        },
        {
            "symptoms": "swollen gums",
            "disease": "Gingivitis",
            "description": "Inflammation of the gums due to plaque buildup.",
            "precaution": "Maintain good oral hygiene.",
            "medication": "Antiseptic mouthwash and dental cleanings.",
            "workout": "No specific restrictions.",
            "diets": "Avoid sugary foods that contribute to plaque."
        },
         {
                "symptoms": "pain in chest",
                "disease": "Pneumonia",
                "description": "An infection that inflames the air sacs in one or both lungs.",
                "precaution": "Seek medical attention; rest and stay hydrated.",
                "medication": "Antibiotics or antiviral medications, depending on the cause.",
                "workout": "Rest until cleared by a doctor.",
                "diets": "Warm fluids and nutritious meals."
            },
            {
                "symptoms": "extreme fatigue",
                "disease": "Chronic Fatigue Syndrome",
                "description": "A complex disorder characterized by extreme fatigue that doesn’t improve with rest.",
                "precaution": "Pace activities and prioritize rest.",
                "medication": "Supportive care and symptom management.",
                "workout": "Gentle, low-impact activities.",
                "diets": "Balanced diet rich in nutrients."
            },
            {
                "symptoms": "difficulty swallowing",
                "disease": "Esophagitis",
                "description": "Inflammation of the esophagus causing pain and difficulty swallowing.",
                "precaution": "Avoid irritants like alcohol and spicy foods.",
                "medication": "Proton pump inhibitors or steroids.",
                "workout": "No specific restrictions.",
                "diets": "Soft, easy-to-swallow foods."
            },
            {
                "symptoms": "red spots on skin",
                "disease": "Petechiae",
                "description": "Small, pinpoint red spots that can indicate bleeding under the skin.",
                "precaution": "Seek medical evaluation if persistent.",
                "medication": "Depends on underlying cause; may include steroids.",
                "workout": "No high-impact activities until evaluated.",
                "diets": "Balanced diet to support blood health."
            },
            {
                "symptoms": "ringing in ears",
                "disease": "Tinnitus",
                "description": "A ringing or buzzing noise in the ears not caused by external sound.",
                "precaution": "Avoid loud noises and manage stress.",
                "medication": "Hearing aids or sound therapy.",
                "workout": "No specific restrictions.",
                "diets": "Reduce caffeine and alcohol intake."
            },
            {
                "symptoms": "weight loss",
                "disease": "Hyperthyroidism",
                "description": "A condition where the thyroid gland is overactive, leading to weight loss.",
                "precaution": "Regular monitoring and follow-ups.",
                "medication": "Antithyroid medications or radioactive iodine.",
                "workout": "Regular exercise to maintain health.",
                "diets": "Balanced diet to support metabolism."
            },
            {
                "symptoms": "bruising",
                "disease": "Vitamin K Deficiency",
                "description": "A lack of vitamin K leading to easy bruising.",
                "precaution": "Consult a healthcare provider.",
                "medication": "Vitamin K supplements.",
                "workout": "No high-risk activities that could cause injury.",
                "diets": "Leafy greens and other vitamin K-rich foods."
            },
            {
                "symptoms": "swelling in legs",
                "disease": "Venous Insufficiency",
                "description": "A condition where veins struggle to send blood from the legs back to the heart.",
                "precaution": "Elevate legs and wear compression stockings.",
                "medication": "Venoactive drugs and diuretics.",
                "workout": "Walking is encouraged to improve circulation.",
                "diets": "Low-salt diet to reduce fluid retention."
            },
            {
                "symptoms": "burning pain in hands",
                "disease": "Peripheral Neuropathy",
                "description": "Damage to the peripheral nerves causing burning or tingling sensations.",
                "precaution": "Manage underlying conditions like diabetes.",
                "medication": "Pain relievers and anticonvulsants.",
                "workout": "Gentle exercises to maintain mobility.",
                "diets": "Balanced diet with vitamins B1, B6, and B12."
            },
            {
                "symptoms": "sudden blindness",
                "disease": "Retinal Detachment",
                "description": "A medical emergency where the retina separates from the back of the eye.",
                "precaution": "Seek immediate medical attention.",
                "medication": "Surgical intervention may be necessary.",
                "workout": "Avoid activities that strain the eyes.",
                "diets": "Maintain overall eye health with a balanced diet."
            },
            {
                "symptoms": "memory loss",
                "disease": "Alzheimer’s Disease",
                "description": "A progressive disease that destroys memory and other important mental functions.",
                "precaution": "Engage in mental exercises and stay socially active.",
                "medication": "Cognitive enhancers and supportive care.",
                "workout": "Regular physical activity is beneficial.",
                "diets": "Mediterranean diet for brain health."
            },
            {
                "symptoms": "dark colored stool",
                "disease": "Gastrointestinal Bleeding",
                "description": "Dark stool can indicate bleeding in the upper GI tract.",
                "precaution": "Seek immediate medical evaluation.",
                "medication": "Depends on the underlying cause; may require hospitalization.",
                "workout": "Rest until evaluated.",
                "diets": "Avoid irritants until cleared by a doctor."
            },
            {
                "symptoms": "frequent headaches",
                "disease": "Tension Headaches",
                "description": "A common type of headache caused by muscle tension.",
                "precaution": "Practice stress management techniques.",
                "medication": "Over-the-counter pain relievers.",
                "workout": "Regular light exercise can help.",
                "diets": "Stay hydrated and maintain regular meals."
            },
            {
                "symptoms": "painful urination",
                "disease": "Urinary Tract Infection (UTI)",
                "description": "An infection in any part of the urinary system causing pain and discomfort.",
                "precaution": "Stay hydrated and practice good hygiene.",
                "medication": "Antibiotics as prescribed.",
                "workout": "Avoid strenuous activities until treated.",
                "diets": "Cranberry juice may help prevent UTIs."
            },
            {
                "symptoms": "swollen gums",
                "disease": "Gingivitis",
                "description": "Inflammation of the gums due to plaque buildup.",
                "precaution": "Maintain good oral hygiene.",
                "medication": "Antiseptic mouthwash and dental cleanings.",
                "workout": "No specific restrictions.",
                "diets": "Avoid sugary foods that contribute to plaque."
            },
            {
                "symptoms": "chronic cough",
                "disease": "Chronic Bronchitis",
                "description": "Long-term inflammation of the bronchi leading to cough and mucus production.",
                "precaution": "Avoid irritants like smoke and pollution.",
                "medication": "Bronchodilators and anti-inflammatory medications.",
                "workout": "Moderate exercise can be beneficial.",
                "diets": "Stay hydrated and eat a balanced diet."
            },
            {
                "symptoms": "heavy sweating",
                "disease": "Hyperhidrosis",
                "description": "Excessive sweating that can interfere with daily activities.",
                "precaution": "Keep the affected areas clean and dry.",
                "medication": "Antiperspirants or prescription medications.",
                "workout": "Regular exercise can help manage symptoms.",
                "diets": "Stay hydrated and avoid spicy foods."
            },
            {
                "symptoms": "tingling in feet",
                "disease": "Diabetic Neuropathy",
                "description": "Nerve damage due to diabetes leading to tingling and pain in extremities.",
                "precaution": "Manage blood sugar levels carefully.",
                "medication": "Pain relievers and medications for nerve pain.",
                "workout": "Low-impact exercises like swimming or walking.",
                "diets": "Balanced diet with low sugar intake."
            },
            {
                "symptoms": "shortness of breath",
                "disease": "Asthma",
                "description": "A condition that causes difficulty breathing due to narrowed airways.",
                "precaution": "Avoid triggers and carry rescue inhalers.",
                "medication": "Inhalers and anti-inflammatory medications.",
                "workout": "Exercise is encouraged, but avoid triggers.",
                "diets": "Maintain a healthy diet and stay hydrated."
            },
            {
                "symptoms": "pain in joints",
                "disease": "Rheumatoid Arthritis",
                "description": "An autoimmune condition causing inflammation in the joints.",
                "precaution": "Manage stress and maintain a healthy weight.",
                "medication": "Disease-modifying antirheumatic drugs (DMARDs).",
                "workout": "Low-impact exercises to maintain mobility.",
                "diets": "Anti-inflammatory diet with omega-3 fatty acids."
            },
            {
                "symptoms": "frequent thirst",
                "disease": "Diabetes Mellitus",
                "description": "A chronic condition characterized by high blood sugar levels.",
                "precaution": "Monitor blood sugar levels regularly.",
                "medication": "Insulin or oral hypoglycemic agents.",
                "workout": "Regular physical activity to maintain weight.",
                "diets": "Low-sugar, balanced diet with whole grains."
            },
            {
                "symptoms": "numbness in hands",
                "disease": "Carpal Tunnel Syndrome",
                "description": "A condition that causes numbness and tingling in the hand due to pressure on the median nerve.",
                "precaution": "Take breaks during repetitive tasks.",
                "medication": "Wrist splints and anti-inflammatory drugs.",
                "workout": "Gentle stretching and strengthening exercises.",
                "diets": "Balanced diet rich in vitamins B6 and B12."
            },
            {
                "symptoms": "sudden weight gain",
                "disease": "Cushing's Syndrome",
                "description": "A condition caused by high cortisol levels leading to weight gain.",
                "precaution": "Regular check-ups with a healthcare provider.",
                "medication": "Medications to lower cortisol levels.",
                "workout": "Moderate exercise as tolerated.",
                "diets": "Balanced diet low in refined sugars."
            },
            {
                "symptoms": "bloating",
                "disease": "Irritable Bowel Syndrome",
                "description": "A gastrointestinal disorder causing bloating, cramping, and changes in bowel habits.",
                "precaution": "Identify and avoid trigger foods.",
                "medication": "Antispasmodics and dietary adjustments.",
                "workout": "Regular light exercise can help.",
                "diets": "High-fiber diet with adequate hydration."
            },
            {
                "symptoms": "sensitivity to light",
                "disease": "Migraine",
                "description": "A severe headache often accompanied by sensitivity to light and sound.",
                "precaution": "Avoid known triggers and bright lights.",
                "medication": "Pain relievers and preventive medications.",
                "workout": "Gentle activities during non-attack periods.",
                "diets": "Maintain hydration and avoid trigger foods."
            },
            {
                "symptoms": "ringing in ears",
                "disease": "Tinnitus",
                "description": "A condition characterized by ringing or buzzing noises in the ears.",
                "precaution": "Limit exposure to loud noises.",
                "medication": "Sound therapy and hearing aids if necessary.",
                "workout": "No specific restrictions.",
                "diets": "Healthy diet with limited caffeine and alcohol."
            },
            {
                "symptoms": "skin discoloration",
                "disease": "Liver Disease",
                "description": "Conditions affecting the liver can lead to jaundice, causing skin discoloration.",
                "precaution": "Avoid alcohol and monitor liver function.",
                "medication": "Depends on the underlying condition.",
                "workout": "Consult a doctor before starting an exercise routine.",
                "diets": "Low-fat diet rich in fruits and vegetables."
            },
            {
                "symptoms": "frequent urination at night",
                "disease": "Nocturia",
                "description": "The need to wake up during the night to urinate.",
                "precaution": "Limit fluid intake before bedtime.",
                "medication": "Medications to reduce urine production.",
                "workout": "Gentle exercises to improve overall health.",
                "diets": "Balanced diet with reduced caffeine and alcohol."
            },
            {
                "symptoms": "decreased appetite",
                "disease": "Depression",
                "description": "A mood disorder that can affect appetite and overall wellbeing.",
                "precaution": "Seek counseling and support.",
                "medication": "Antidepressants as prescribed.",
                "workout": "Regular physical activity can help improve mood.",
                "diets": "Balanced diet to support mental health."
            },
            {
                "symptoms": "persistent bad breath",
                "disease": "Halitosis",
                "description": "Chronic bad breath often caused by dental issues.",
                "precaution": "Maintain good oral hygiene.",
                "medication": "Mouthwashes or treatments for underlying conditions.",
                "workout": "No specific restrictions.",
                "diets": "Avoid foods that contribute to bad breath."
            },
            {
                "disease": "Asthma",
                "symptoms": "wheezing, shortness of breath, chest tightness, coughing",
                "description": "A chronic respiratory condition that causes difficulty in breathing due to airway inflammation.",
                "precaution": "Avoid known triggers such as smoke, pollen, and strong odors.",
                "medication": "Inhalers (bronchodilators and corticosteroids), leukotriene modifiers.",
                "workout": "Engage in low-impact exercises; avoid strenuous activities during flare-ups.",
                "diets": "Healthy diet rich in fruits and vegetables, omega-3 fatty acids."
            },
            {
                "disease": "Osteoporosis",
                "symptoms": "bone fractures, back pain, loss of height",
                "description": "A condition that causes bones to become weak and brittle.",
                "precaution": "Avoid smoking and excessive alcohol consumption; maintain a healthy weight.",
                "medication": "Calcium and vitamin D supplements, bisphosphonates.",
                "workout": "Weight-bearing exercises and resistance training are beneficial.",
                "diets": "Calcium-rich foods such as dairy, leafy greens, and fortified foods."
            },
            {
                "disease": "Chronic Kidney Disease",
                "symptoms": "fatigue, swollen ankles, changes in urination",
                "description": "A gradual loss of kidney function over time.",
                "precaution": "Regular monitoring of kidney function, managing blood sugar and blood pressure.",
                "medication": "Medications to manage symptoms, such as antihypertensives.",
                "workout": "Moderate exercise as tolerated; consult a healthcare provider.",
                "diets": "Low-protein, low-sodium diet, rich in fruits and vegetables."
            },
            {
                "disease": "Hyperthyroidism",
                "symptoms": "weight loss, rapid heartbeat, sweating, nervousness",
                "description": "A condition where the thyroid gland produces too much thyroid hormone.",
                "precaution": "Regular monitoring of thyroid levels, manage stress.",
                "medication": "Antithyroid medications, beta-blockers.",
                "workout": "Regular exercise is encouraged, but avoid excessive fatigue.",
                "diets": "Balanced diet; avoid excessive iodine intake."
            },
            {
                "disease": "Fibromyalgia",
                "symptoms": "widespread pain, fatigue, sleep disturbances",
                "description": "A chronic disorder characterized by widespread musculoskeletal pain.",
                "precaution": "Stress management techniques and regular sleep patterns.",
                "medication": "Pain relievers, antidepressants, anti-seizure medications.",
                "workout": "Low-impact exercises like swimming, yoga, and walking.",
                "diets": "Balanced diet with anti-inflammatory foods, and adequate hydration."
            },
            {
                "disease": "Psoriasis",
                "symptoms": "red patches, silvery scales, itching",
                "description": "An autoimmune condition that causes rapid skin cell production.",
                "precaution": "Avoid triggers such as stress, smoking, and heavy alcohol use.",
                "medication": "Topical treatments, phototherapy, systemic medications.",
                "workout": "Gentle exercises; avoid skin irritation.",
                "diets": "Anti-inflammatory diet rich in omega-3 fatty acids."
            },
            {
                "disease": "Anxiety Disorders",
                "symptoms": "excessive worry, restlessness, fatigue",
                "description": "A group of mental health disorders characterized by excessive fear or worry.",
                "precaution": "Practice relaxation techniques and stress management.",
                "medication": "Antidepressants, anti-anxiety medications.",
                "workout": "Regular physical activity helps alleviate symptoms.",
                "diets": "Balanced diet; consider omega-3 and magnesium-rich foods."
            },
            {
                "disease": "Chronic Fatigue Syndrome",
                "symptoms": "extreme fatigue, sleep problems, cognitive difficulties",
                "description": "A complex disorder characterized by extreme fatigue that doesn't improve with rest.",
                "precaution": "Manage stress and avoid overexertion.",
                "medication": "Symptom management medications; no specific cure.",
                "workout": "Gradual increase in activity; avoid overexertion.",
                "diets": "Balanced diet with adequate hydration."
            },
            {
                "disease": "Kawasaki Disease",
                "symptoms": "high fever, rash, swollen lymph nodes, red eyes",
                "description": "A rare childhood illness causing inflammation of blood vessels.",
                "precaution": "Early diagnosis is crucial to prevent heart complications.",
                "medication": "Intravenous immunoglobulin (IVIG), aspirin.",
                "workout": "Moderate activity as tolerated; avoid strenuous exercise.",
                "diets": "Balanced diet with adequate hydration."
            },
            {
                "disease": "Ehlers-Danlos Syndrome",
                "symptoms": "hyperflexible joints, skin that bruises easily, chronic pain",
                "description": "A genetic disorder affecting connective tissues, leading to joint hypermobility.",
                "precaution": "Avoid activities that put excessive strain on joints.",
                "medication": "Pain management medications; physical therapy.",
                "workout": "Low-impact exercises to maintain joint stability.",
                "diets": "Balanced diet with adequate nutrients for joint health."
            },
            {
                "disease": "Stiff Person Syndrome",
                "symptoms": "muscle stiffness, muscle spasms, impaired mobility",
                "description": "A rare neurological disorder causing stiffness and spasms in the muscles.",
                "precaution": "Regular monitoring and adjustment of treatment.",
                "medication": "Muscle relaxants, immunotherapy.",
                "workout": "Gentle stretching and low-impact exercises.",
                "diets": "Nutrient-rich diet to support overall health."
            },
            {
                "disease": "Behçet's Disease",
                "symptoms": "mouth sores, eye inflammation, skin lesions",
                "description": "A rare autoimmune disorder causing inflammation in blood vessels.",
                "precaution": "Regular check-ups to monitor symptoms.",
                "medication": "Immunosuppressants, corticosteroids.",
                "workout": "Moderate exercise can help maintain overall health.",
                "diets": "Balanced diet rich in antioxidants."
            },
            {
                "disease": "Friedreich's Ataxia",
                "symptoms": "progressive loss of coordination, muscle weakness, scoliosis",
                "description": "A genetic degenerative disease affecting the nervous system and the heart.",
                "precaution": "Regular follow-ups for monitoring heart health.",
                "medication": "Symptomatic treatment and physical therapy.",
                "workout": "Low-impact activities to improve coordination.",
                "diets": "Nutrient-dense foods to support overall health."
            },
            {
                "disease": "Hypereosinophilia",
                "symptoms": "fever, rash, fatigue, shortness of breath",
                "description": "A condition characterized by an excessive number of eosinophils in the blood.",
                "precaution": "Regular blood tests to monitor eosinophil levels.",
                "medication": "Corticosteroids and other immunosuppressive therapies.",
                "workout": "Light to moderate exercise as tolerated.",
                "diets": "Balanced diet focusing on overall health."
            },
            {
                "disease": "Gaucher's Disease",
                "symptoms": "fatigue, bone pain, enlarged spleen or liver",
                "description": "A genetic disorder that affects the body's ability to break down certain fats.",
                "precaution": "Regular monitoring of organ function.",
                "medication": "Enzyme replacement therapy, pain management.",
                "workout": "Moderate exercise to maintain strength.",
                "diets": "Nutrient-rich diet to support overall health."
            },
            {
                "disease": "Scleroderma",
                "symptoms": "thickened skin, joint pain, Raynaud's phenomenon",
                "description": "An autoimmune disease that causes hardening and tightening of the skin and connective tissues.",
                "precaution": "Avoid cold exposure and manage stress.",
                "medication": "Immunosuppressants, medications for symptom relief.",
                "workout": "Gentle exercises to maintain mobility.",
                "diets": "Anti-inflammatory diet rich in omega-3 fatty acids."
            },
            {
                "disease": "Acromegaly",
                "symptoms": "enlarged hands and feet, facial changes, joint pain",
                "description": "A hormonal disorder caused by excess growth hormone, often due to a pituitary tumor.",
                "precaution": "Regular monitoring of hormone levels and pituitary function.",
                "medication": "Somatostatin analogs, growth hormone receptor antagonists.",
                "workout": "Moderate exercise to maintain joint health.",
                "diets": "Balanced diet rich in nutrients, avoiding excess sugars."
            },
            {
                "disease": "Lymphangioleiomyomatosis (LAM)",
                "symptoms": "shortness of breath, cough, chest pain",
                "description": "A rare lung disease that primarily affects women and involves abnormal smooth muscle growth.",
                "precaution": "Avoid respiratory irritants; monitor lung function regularly.",
                "medication": "Mtor inhibitors, bronchodilators.",
                "workout": "Light to moderate aerobic exercise as tolerated.",
                "diets": "Healthy diet rich in antioxidants."
            },
            {
                "disease": "Sturge-Weber Syndrome",
                "symptoms": "port-wine stain, seizures, developmental delays",
                "description": "A neurological condition associated with a facial birthmark and vascular malformations.",
                "precaution": "Regular neurological evaluations.",
                "medication": "Anticonvulsants for seizure management.",
                "workout": "Gentle physical activities to support motor skills.",
                "diets": "Balanced diet with focus on overall health."
            },
            {
                "disease": "Cystic Fibrosis",
                "symptoms": "persistent cough, lung infections, difficulty breathing",
                "description": "A genetic disorder that affects the lungs and digestive system, leading to thick mucus production.",
                "precaution": "Regular check-ups to monitor lung function.",
                "medication": "Mucus thinners, pancreatic enzymes, antibiotics.",
                "workout": "Regular physical activity to improve lung function.",
                "diets": "High-calorie, nutrient-rich diet with sufficient salt intake."
            },
            {
                "disease": "Hereditary Angioedema",
                "symptoms": "swelling of the face, extremities, abdominal pain",
                "description": "A genetic condition causing recurrent episodes of severe swelling due to a deficiency of C1 inhibitor protein.",
                "precaution": "Carry emergency medication for acute attacks.",
                "medication": "C1 inhibitor replacement therapy, androgens.",
                "workout": "Moderate exercise; avoid extreme physical strain.",
                "diets": "Balanced diet to support overall health."
            },
            {
                "disease": "Hyper IgM Syndrome",
                "symptoms": "recurrent infections, swollen lymph nodes, fatigue",
                "description": "An immunodeficiency disorder where the body can't produce certain antibodies effectively.",
                "precaution": "Regular immunological assessments and vaccinations.",
                "medication": "Immunoglobulin replacement therapy.",
                "workout": "Regular, light exercise to boost immunity.",
                "diets": "Nutrient-dense diet with adequate hydration."
            },
            {
                "disease": "Rett Syndrome",
                "symptoms": "loss of purposeful hand skills, speech difficulties, seizures",
                "description": "A genetic neurological disorder that primarily affects girls, leading to developmental issues.",
                "precaution": "Regular developmental assessments.",
                "medication": "Antiepileptic drugs for seizures; supportive therapies.",
                "workout": "Physical therapy to enhance mobility and coordination.",
                "diets": "Balanced diet to support nutritional needs."
            },
            {
                "disease": "Churg-Strauss Syndrome",
                "symptoms": "asthma, sinusitis, skin rashes, neuropathy",
                "description": "A rare autoimmune condition that causes inflammation of blood vessels.",
                "precaution": "Regular monitoring for organ involvement.",
                "medication": "Corticosteroids and immunosuppressive agents.",
                "workout": "Gentle exercises to maintain fitness.",
                "diets": "Anti-inflammatory diet to support overall health."
            },
            {
                "disease": "Hypertrichosis",
                "symptoms": "excessive hair growth, abnormal hair distribution",
                "description": "A rare condition characterized by excessive hair growth in areas where hair is normally absent.",
                "precaution": "Consult a dermatologist for management options.",
                "medication": "Laser therapy or other hair removal methods.",
                "workout": "No specific restrictions; engage in regular physical activity.",
                "diets": "Balanced diet to maintain overall health."
            },
            {
                "disease": "Apert Syndrome",
                "symptoms": "craniosynostosis, fusion of fingers and toes, intellectual disability",
                "description": "A genetic disorder affecting skull shape and limb development.",
                "precaution": "Regular monitoring of growth and developmental milestones.",
                "medication": "Pain management as needed; surgery for craniosynostosis.",
                "workout": "Physical therapy to improve mobility.",
                "diets": "Balanced diet to support overall health and development."
            },
            {
                "disease": "Chédiak-Higashi Syndrome",
                "symptoms": "recurrent infections, albinism, neurological problems",
                "description": "A rare genetic disorder that affects the immune system and pigmentation.",
                "precaution": "Regular medical check-ups to monitor infections.",
                "medication": "Antibiotics for infections; stem cell transplant may be necessary.",
                "workout": "Gentle exercises to maintain physical strength.",
                "diets": "Nutrient-rich diet to support immune function."
            },
            {
                "disease": "Cyclic Vomiting Syndrome",
                "symptoms": "recurrent episodes of severe vomiting, nausea, abdominal pain",
                "description": "A disorder characterized by recurring bouts of vomiting with no clear cause.",
                "precaution": "Identify and avoid known triggers.",
                "medication": "Antiemetics, medications to prevent nausea.",
                "workout": "Light activities as tolerated; avoid strenuous exercise during episodes.",
                "diets": "Small, bland meals to minimize gastrointestinal distress."
            },
            {
                "disease": "Fibrodysplasia Ossificans Progressiva (FOP)",
                "symptoms": "progressive loss of mobility, formation of bone in muscles, tendons",
                "description": "A rare genetic disorder that causes soft tissues to turn into bone.",
                "precaution": "Avoid injuries; any trauma can trigger bone formation.",
                "medication": "Pain management; no effective cure currently available.",
                "workout": "Physical therapy to maintain as much mobility as possible.",
                "diets": "Nutrient-rich diet to support overall health."
            },
            {
                "disease": "Pachyonychia Congenita",
                "symptoms": "thickened nails, palmoplantar keratoderma, oral leukokeratosis",
                "description": "A rare genetic skin disorder characterized by thickened nails and skin.",
                "precaution": "Regular dermatological care to manage symptoms.",
                "medication": "Topical treatments for skin lesions; pain relief as needed.",
                "workout": "Gentle exercises to maintain mobility.",
                "diets": "Balanced diet to support skin health."
            },
            {
                "disease": "Hyper IgE Syndrome",
                "symptoms": "recurrent infections, eczema, high IgE levels",
                "description": "A rare immunodeficiency disorder characterized by elevated IgE levels and skin issues.",
                "precaution": "Regular monitoring for infections and skin care.",
                "medication": "Antibiotics for infections; antihistamines for allergic symptoms.",
                "workout": "Moderate exercise to maintain overall health.",
                "diets": "Nutrient-rich diet focusing on overall wellness."
            },
            {
                "disease": "Primary Ciliary Dyskinesia",
                "symptoms": "chronic respiratory infections, fertility issues, situs inversus",
                "description": "A genetic disorder affecting the cilia, leading to respiratory problems and organ reversal.",
                "precaution": "Regular lung function tests and monitoring for infections.",
                "medication": "Bronchodilators, antibiotics as needed.",
                "workout": "Regular physical activity to improve lung function.",
                "diets": "Healthy diet rich in antioxidants and hydration."
            },
            {
                "disease": "Situs Inversus",
                "symptoms": "reversed organ placement, potential heart and digestive issues",
                "description": "A condition where the major visceral organs are reversed or mirrored from their normal positions.",
                "precaution": "Regular medical evaluations to monitor for associated complications.",
                "medication": "Depends on associated symptoms; may require surgical interventions.",
                "workout": "Normal physical activity as tolerated.",
                "diets": "Balanced diet to support digestive health."
            },
            {
                "symptoms": "eczema, recurrent infections, low platelet count",
                "description": "A genetic immunodeficiency disorder affecting primarily males, characterized by eczema and bleeding issues.",
                "precaution": "Regular medical follow-ups and vaccinations.",
                "medication": "Immunoglobulin replacement therapy; treatment for eczema.",
                "workout": "Light physical activities to maintain strength.",
                "diets": "Balanced diet rich in nutrients."
            },
            {
                "disease": "Ehlers-Danlos Syndrome",
                "symptoms": "hyperflexible joints, skin that bruises easily, chronic pain",
                "description": "A group of disorders affecting connective tissues, leading to hypermobility and fragile skin.",
                "precaution": "Avoid activities that strain joints; regular monitoring for joint issues.",
                "medication": "Pain management as needed; physical therapy for joint stability.",
                "workout": "Gentle exercises to maintain joint function.",
                "diets": "Balanced diet to support overall connective tissue health."
            },
            {
                "disease": "Maffucci Syndrome",
                "symptoms": "multiple enchondromas, hemangiomas, skeletal deformities",
                "description": "A rare disorder characterized by benign cartilage tumors and vascular malformations.",
                "precaution": "Regular monitoring for potential complications; avoid trauma.",
                "medication": "Pain management; surgical intervention for problematic tumors.",
                "workout": "Moderate exercise; avoid activities that may lead to injury.",
                "diets": "Nutrient-rich diet to support overall health."
            },
            {
                "disease": "Stiff Person Syndrome",
                "symptoms": "muscle stiffness, spasms, increased sensitivity to stimuli",
                "description": "A rare neurological disorder characterized by stiffness in the muscles of the trunk and limbs.",
                "precaution": "Avoid triggers that exacerbate stiffness; regular neurological evaluations.",
                "medication": "Muscle relaxants, anti-anxiety medications.",
                "workout": "Gentle stretching and flexibility exercises.",
                "diets": "Balanced diet to support overall muscle function."
            },
            {
                "disease": "Keratoconus",
                "symptoms": "distorted vision, sensitivity to light, eye irritation",
                "description": "A progressive eye disorder where the cornea thins and bulges into a cone shape.",
                "precaution": "Regular eye exams to monitor progression; avoid eye rubbing.",
                "medication": "Contact lenses or corneal cross-linking therapy.",
                "workout": "Normal physical activities; protect eyes from trauma.",
                "diets": "Healthy diet rich in antioxidants to support eye health."
            },
            {
                "disease": "Niemann-Pick Disease",
                "symptoms": "enlarged liver and spleen, neurological decline, difficulty swallowing",
                "description": "A group of inherited metabolic disorders that affect lipid metabolism.",
                "precaution": "Regular monitoring of organ function and developmental milestones.",
                "medication": "Supportive care and symptom management; no specific cure.",
                "workout": "Gentle physical activities to maintain mobility.",
                "diets": "Balanced diet to support overall health."
            },
            {
                "disease": "Chronic Fatigue Syndrome (CFS)",
                "symptoms": "extreme fatigue, sleep disturbances, muscle pain",
                "description": "A complex disorder characterized by profound fatigue not improved by rest.",
                "precaution": "Manage stress and avoid overexertion; establish a regular sleep schedule.",
                "medication": "Pain relievers, antidepressants for mood management.",
                "workout": "Light exercise to improve stamina; avoid intense workouts.",
                "diets": "Balanced diet focusing on whole foods to support energy levels."
            },
            {
                "disease": "Osteogenesis Imperfecta",
                "symptoms": "brittle bones, blue sclera, hearing loss",
                "description": "A genetic disorder characterized by fragile bones that break easily.",
                "precaution": "Avoid high-impact activities; regular monitoring of bone health.",
                "medication": "Bisphosphonates to increase bone density.",
                "workout": "Low-impact exercises to strengthen muscles.",
                "diets": "Calcium and vitamin D-rich diet to support bone health."
            },
            {
                "disease": "Hereditary Spastic Paraplegia",
                "symptoms": "progressive weakness in the legs, muscle stiffness, difficulty walking",
                "description": "A group of genetic disorders characterized by progressive weakness and stiffness of the legs.",
                "precaution": "Regular neurological evaluations and physical therapy.",
                "medication": "Muscle relaxants and physical therapy for symptom management.",
                "workout": "Gentle exercises to maintain mobility and strength.",
                "diets": "Balanced diet to support overall health."
            },
            {
                "disease": "Progeria (Hutchinson-Gilford Progeria Syndrome)",
                "symptoms": "growth failure, hair loss, skin changes, cardiovascular problems",
                "description": "A genetic disorder that causes rapid aging in children.",
                "precaution": "Regular cardiovascular monitoring; supportive care.",
                "medication": "No cure; treatment focuses on managing symptoms.",
                "workout": "Gentle physical activity as tolerated.",
                "diets": "Nutrient-dense diet to support growth and health."
            },
            {
                "disease": "Huntington's Disease",
                "symptoms": "involuntary movements, cognitive decline, emotional disturbances",
                "description": "A genetic disorder that causes the progressive breakdown of nerve cells in the brain.",
                "precaution": "Regular neurological assessments and supportive care.",
                "medication": "Medications to manage movement disorders and psychiatric symptoms.",
                "workout": "Physical therapy to maintain mobility and strength.",
                "diets": "Balanced diet to support overall health."
            },
            {
                "disease": "Alkaptonuria",
                "symptoms": "dark urine, arthritis, heart disease, skin deposits",
                "description": "A genetic disorder that causes a buildup of homogentisic acid in the body.",
                "precaution": "Regular monitoring for arthritis and other complications.",
                "medication": "Supportive treatment for symptoms; dietary changes to reduce phenylalanine.",
                "workout": "Gentle exercises to maintain joint function.",
                "diets": "Low-protein diet to reduce phenylalanine intake."
            },
            {
                "disease": "Maple Syrup Urine Disease",
                "symptoms": "sweet-smelling urine, poor feeding, vomiting, developmental delays",
                "description": "A metabolic disorder affecting the breakdown of certain amino acids.",
                "precaution": "Regular monitoring of blood and urine levels.",
                "medication": "Dietary management to restrict certain amino acids.",
                "workout": "Normal activities as tolerated; avoid strenuous exertion.",
                "diets": "Specialized low-protein diet to prevent buildup of toxic substances."
            },
            {
                "disease": "Kniest Dysplasia",
                "symptoms": "short stature, joint problems, ocular issues",
                "description": "A genetic disorder affecting bone growth and development.",
                "precaution": "Regular orthopedic evaluations and monitoring of vision.",
                "medication": "Supportive care; orthopedic surgery if necessary.",
                "workout": "Gentle exercises to improve flexibility.",
                "diets": "Nutrient-rich diet to support bone health."
            },
            {
                "disease": "Bardet-Biedl Syndrome",
                "symptoms": "obesity, vision loss, kidney abnormalities, polydactyly",
                "description": "A genetic disorder that affects multiple body systems, including obesity and vision.",
                "precaution": "Regular monitoring for complications; dietary management for obesity.",
                "medication": "Supportive care for symptoms; no specific treatment.",
                "workout": "Encourage physical activity to manage weight.",
                "diets": "Balanced, calorie-controlled diet."
            },
            {
                "disease": "Hyper IgM Syndrome",
                "symptoms": "recurrent infections, low white blood cell counts, skin rashes",
                "description": "An immunodeficiency disorder where the body can't produce certain antibodies effectively.",
                "precaution": "Regular monitoring and vaccinations.",
                "medication": "Immunoglobulin replacement therapy.",
                "workout": "Light exercises to maintain overall health.",
                "diets": "Nutrient-rich diet to support immune function."
            },
            {
                "disease": "Aicardi Syndrome",
                "symptoms": "absence of a corpus callosum, seizures, developmental delays",
                "description": "A rare genetic disorder affecting the brain, primarily in females.",
                "precaution": "Regular neurological evaluations.",
                "medication": "Antiepileptic drugs for seizure control.",
                "workout": "Physical therapy to enhance motor skills.",
                "diets": "Balanced diet to support development."
            },
            {
                "disease": "Cystic Fibrosis",
                "symptoms": "persistent cough, frequent lung infections, difficulty breathing",
                "description": "A genetic disorder that affects the lungs and digestive system, causing thick mucus buildup.",
                "precaution": "Regular pulmonary function tests; avoid respiratory infections.",
                "medication": "Mucus thinners, antibiotics, pancreatic enzyme supplements.",
                "workout": "Moderate aerobic exercises to improve lung function.",
                "diets": "High-calorie, high-protein diet to support nutritional needs."
            },
            {
                "disease": "Amyotrophic Lateral Sclerosis (ALS)",
                "symptoms": "muscle weakness, twitching, difficulty speaking and swallowing",
                "description": "A progressive neurodegenerative disease affecting nerve cells in the brain and spinal cord.",
                "precaution": "Regular monitoring by a neurologist; adaptive devices for mobility.",
                "medication": "Riluzole to slow progression; symptom management medications.",
                "workout": "Gentle stretching and low-impact exercises as tolerated.",
                "diets": "Balanced diet with appropriate texture modifications for swallowing difficulties."
            },
            {
                "disease": "Multiple Sclerosis (MS)",
                "symptoms": "numbness, vision problems, muscle weakness, fatigue",
                "description": "An autoimmune disorder affecting the central nervous system, leading to communication issues between the brain and body.",
                "precaution": "Avoid extreme temperatures; manage stress effectively.",
                "medication": "Disease-modifying therapies; corticosteroids for flare-ups.",
                "workout": "Regular low-impact aerobic exercise to maintain mobility.",
                "diets": "Diet rich in antioxidants, omega-3 fatty acids, and vitamin D."
            },
            {
                "disease": "",
                "symptoms": "tall stature, long limbs, heart problems, eye issues",
                "description": "A genetic disorder affecting connective tissue, leading to features like long limbs and cardiovascular issues.",
                "precaution": "Regular cardiovascular evaluations; avoid high-impact sports.",
                "medication": "Beta-blockers to manage heart-related symptoms; surgery if needed.",
                "workout": "Low-impact exercises; regular physical therapy.",
                "diets": "Balanced diet to support overall connective tissue health."
            },
            {
                "disease": "Wilson's Disease",
                "symptoms": "liver dysfunction, neurological symptoms, psychiatric issues",
                "description": "A genetic disorder that leads to excessive copper accumulation in the body.",
                "precaution": "Regular monitoring of liver function and copper levels.",
                "medication": "Chelating agents to remove excess copper; zinc supplements.",
                "workout": "Moderate exercise to maintain overall health.",
                "diets": "Low-copper diet; avoid shellfish, nuts, and chocolate."
            },
            {
                "disease": "Graves' Disease",
                "symptoms": "hyperthyroidism, anxiety, weight loss, heat intolerance",
                "description": "An autoimmune disorder that leads to overactivity of the thyroid gland.",
                "precaution": "Regular thyroid function tests; manage stress levels.",
                "medication": "Antithyroid medications; radioactive iodine therapy.",
                "workout": "Regular exercise to maintain a healthy weight.",
                "diets": "Balanced diet; avoid excessive iodine intake."
            },
            {
                "disease": "Myasthenia Gravis",
                "symptoms": "muscle weakness, fatigue, drooping eyelids",
                "description": "An autoimmune disorder that leads to weakness in the skeletal muscles.",
                "precaution": "Regular monitoring by a neurologist; avoid extreme temperatures.",
                "medication": "Anticholinesterase medications; immunosuppressants.",
                "workout": "Light physical therapy to improve muscle strength.",
                "diets": "Nutrient-rich diet to support overall health."
            },
            {
                "disease": "Behçet's Disease",
                "symptoms": "oral ulcers, skin lesions, eye inflammation",
                "description": "A rare autoimmune disorder causing blood vessel inflammation throughout the body.",
                "precaution": "Regular check-ups; manage stress and avoid triggers.",
                "medication": "Corticosteroids and immunosuppressants for flare management.",
                "workout": "Regular light to moderate exercise as tolerated.",
                "diets": "Balanced diet to support overall immune function."
            },
            {
                "symptoms": "high fever, chills",
                "disease": "Malaria",
                "description": "A mosquito-borne infectious disease causing fever and flu-like symptoms.",
                "precaution": "Use mosquito nets and repellents, take antimalarial medication when traveling.",
                "medication": "Antimalarial drugs like artemisinin-based combination therapies.",
                "workout": "Rest; avoid strenuous activity until fully recovered.",
                "diets": "Stay hydrated, eat nutritious foods to support recovery."
            },
            {
                "symptoms": "persistent cough, weight loss",
                "disease": "Tuberculosis",
                "description": "A bacterial infection that primarily affects the lungs.",
                "precaution": "Avoid close contact with others until cleared by a doctor.",
                "medication": "Antibiotics for several months, as prescribed by a healthcare professional.",
                "workout": "Light activities, but avoid exertion until cleared.",
                "diets": "Nutritious foods to help rebuild strength."
            },
            {
                "symptoms": "painful urination, frequent urge to urinate",
                "disease": "Urinary Tract Infection (UTI)",
                "description": "An infection in any part of the urinary system.",
                "precaution": "Stay hydrated, practice good hygiene.",
                "medication": "Antibiotics as prescribed by a doctor.",
                "workout": "Rest; avoid strenuous activities until symptoms improve.",
                "diets": "Cranberry juice may help prevent UTIs; stay hydrated."
            },
            {
                "symptoms": "abdominal pain, bloating",
                "disease": "Irritable Bowel Syndrome (IBS)",
                "description": "A gastrointestinal disorder causing cramps, bloating, and diarrhea or constipation.",
                "precaution": "Manage stress, avoid trigger foods.",
                "medication": "Antispasmodics, laxatives, or anti-diarrheal medications as needed.",
                "workout": "Regular moderate exercise can help reduce symptoms.",
                "diets": "High-fiber foods, low-FODMAP diet may help."
            },
            {
                "symptoms": "severe fatigue, mood changes",
                "disease": "Chronic Fatigue Syndrome",
                "description": "A complex disorder characterized by extreme fatigue that doesn't improve with rest.",
                "precaution": "Pace activities to avoid overexertion.",
                "medication": "No specific treatment; symptom management with counseling and medications.",
                "workout": "Gentle stretching and walking; avoid high-intensity workouts.",
                "diets": "Balanced diet rich in fruits, vegetables, and whole grains."
            },
            {
                "symptoms": "skin rashes, joint pain",
                "disease": "Lupus",
                "description": "An autoimmune disease that can affect multiple organs and cause various symptoms.",
                "precaution": "Avoid sun exposure, manage stress.",
                "medication": "Immunosuppressants, anti-inflammatory drugs.",
                "workout": "Low-impact exercises like swimming or yoga.",
                "diets": "Anti-inflammatory foods like fish, nuts, and leafy greens."
            },
            {
                "symptoms": "rapid heartbeat, anxiety",
                "disease": "Hyperthyroidism",
                "description": "An overactive thyroid that produces excess hormones.",
                "precaution": "Regular monitoring and managing stress levels.",
                "medication": "Antithyroid medications or beta-blockers.",
                "workout": "Moderate exercise is encouraged; avoid excessive activity.",
                "diets": "Balanced diet; avoid excessive iodine intake."
            },
            {
                "symptoms": "joint stiffness, fatigue",
                "disease": "Rheumatoid Arthritis",
                "description": "An autoimmune disorder that primarily affects joints.",
                "precaution": "Avoid high-impact activities that stress the joints.",
                "medication": "Disease-modifying antirheumatic drugs (DMARDs), pain relievers.",
                "workout": "Low-impact exercises like swimming or cycling.",
                "diets": "Omega-3 fatty acids and antioxidants can be beneficial."
            },
            {
                "symptoms": "severe skin irritation, red patches",
                "disease": "Psoriasis",
                "description": "A chronic autoimmune condition that speeds up the growth cycle of skin cells.",
                "precaution": "Moisturize regularly and avoid triggers like stress.",
                "medication": "Topical treatments, phototherapy, systemic medications.",
                "workout": "Gentle exercises; avoid activities that irritate the skin.",
                "diets": "Anti-inflammatory foods and a balanced diet."
            },
            {
                "symptoms": "muscle weakness, fatigue",
                "disease": "Myasthenia Gravis",
                "description": "An autoimmune disorder that affects nerve signals to muscles.",
                "precaution": "Avoid excessive heat and stress.",
                "medication": "Anticholinesterase medications and immunosuppressants.",
                "workout": "Gentle exercises to maintain muscle strength.",
                "diets": "Balanced diet with adequate protein intake."
            },
            {
                "symptoms": "severe headaches, visual disturbances",
                "disease": "Idiopathic Intracranial Hypertension",
                "description": "Increased pressure within the skull without a clear cause.",
                "precaution": "Monitor symptoms and seek immediate care for severe headaches.",
                "medication": "Diuretics to reduce pressure, pain relievers.",
                "workout": "Avoid activities that exacerbate headaches.",
                "diets": "Low-sodium diet to help reduce fluid retention."
            },
            {
                "symptoms": "uncontrollable movements, cognitive decline",
                "disease": "Huntington's Disease",
                "description": "A hereditary condition causing the breakdown of nerve cells in the brain.",
                "precaution": "Genetic counseling is recommended for families.",
                "medication": "Medications for managing symptoms (e.g., mood swings).",
                "workout": "Low-impact exercise to maintain mobility.",
                "diets": "Balanced diet; consult a nutritionist for specific needs."
            },
            {
                "symptoms": "skin lesions, respiratory issues",
                "disease": "Ehlers-Danlos Syndrome",
                "description": "A group of disorders affecting connective tissues, leading to skin elasticity and joint hypermobility.",
                "precaution": "Avoid high-impact activities that stress joints.",
                "medication": "Pain management and physical therapy.",
                "workout": "Gentle exercises like swimming or stretching.",
                "diets": "Balanced diet; consider supplementation for joint health."
            },
            {
                "symptoms": "fatigue, weight loss, joint pain",
                "disease": "Systemic Lupus Erythematosus",
                "description": "An autoimmune disease that can affect various organs and systems.",
                "precaution": "Regular check-ups to monitor organ function.",
                "medication": "Immunosuppressants and anti-inflammatory drugs.",
                "workout": "Low-impact exercises; avoid overexertion.",
                "diets": "Anti-inflammatory foods rich in omega-3 fatty acids."
            },
            {
                "symptoms": "thickened skin, joint pain",
                "disease": "Scleroderma",
                "description": "An autoimmune condition that causes the skin and connective tissues to harden.",
                "precaution": "Protect skin from the sun and avoid extreme temperatures.",
                "medication": "Medications to manage symptoms and complications.",
                "workout": "Gentle stretching to maintain mobility.",
                "diets": "Balanced diet with plenty of fluids to stay hydrated."
            },
            {
                "symptoms": "episodic pain, swelling in limbs",
                "disease": "Complex Regional Pain Syndrome",
                "description": "A chronic pain condition usually affecting an arm or leg.",
                "precaution": "Avoid activities that trigger pain.",
                "medication": "Pain relievers, nerve blocks, or anticonvulsants.",
                "workout": "Physical therapy to improve mobility and function.",
                "diets": "Balanced diet; consider anti-inflammatory foods."
            },
            {
                "symptoms": "muscle cramps, seizures",
                "disease": "Stiff Person Syndrome",
                "description": "A rare neurological disorder characterized by stiffness and spasms.",
                "precaution": "Avoid sudden movements; manage stress.",
                "medication": "Muscle relaxants and immunotherapy.",
                "workout": "Gentle stretching and low-impact exercises.",
                "diets": "Balanced diet; consult a dietitian for specific recommendations."
            },
            {
                "symptoms": "skin pigmentation changes, muscle weakness",
                "disease": "Addison's Disease",
                "description": "A disorder where the adrenal glands don't produce enough hormones.",
                "precaution": "Regular monitoring and avoid stress.",
                "medication": "Hormone replacement therapy.",
                "workout": "Light exercises; avoid extreme fatigue.",
                "diets": "Adequate salt intake; balanced nutrition."
            },
            {
                "symptoms": "persistent dry cough, weight loss",
                "disease": "Pulmonary Fibrosis",
                "description": "A lung disease that occurs when lung tissue becomes damaged and scarred.",
                "precaution": "Avoid smoking and environmental pollutants.",
                "medication": "Medications to slow disease progression; oxygen therapy.",
                "workout": "Gentle breathing exercises; avoid strenuous activities.",
                "diets": "Balanced diet to support lung health."
            },
            {
                "symptoms": "painful swelling, recurrent infections",
                "disease": "Chronic Granulomatous Disease",
                "description": "A genetic disorder affecting the immune system, making patients more susceptible to certain infections.",
                "precaution": "Avoid exposure to certain bacteria and fungi.",
                "medication": "Antibiotics and antifungal medications, interferon-gamma.",
                "workout": "Moderate exercise; avoid high-risk activities.",
                "diets": "Balanced diet rich in vitamins and minerals."
            },
            {
                "symptoms": "progressive muscle weakness, respiratory failure",
                "disease": "Amyotrophic Lateral Sclerosis (ALS)",
                "description": "A progressive neurodegenerative disease affecting nerve cells in the brain and spinal cord.",
                "precaution": "Maintain a safe environment to prevent falls.",
                "medication": "Riluzole to slow progression; supportive care.",
                "workout": "Physical therapy to maintain mobility.",
                "diets": "High-calorie diet to maintain weight."
            },
            {
                "symptoms": "numbness, tingling, pain in hands and feet",
                "disease": "Charcot-Marie-Tooth Disease",
                "description": "A hereditary disorder affecting the peripheral nerves.",
                "precaution": "Regular monitoring and physical therapy.",
                "medication": "Pain management as needed.",
                "workout": "Low-impact exercises to maintain strength.",
                "diets": "Balanced diet; ensure adequate vitamin intake."
            },
            {
                "symptoms": "abnormal skin growths, digestive issues",
                "disease": "Neurofibromatosis",
                "description": "A genetic disorder that causes tumors to grow on nerves and skin.",
                "precaution": "Regular check-ups to monitor growths.",
                "medication": "Pain management and surgery for significant tumors.",
                "workout": "Gentle exercise to maintain overall health.",
                "diets": "Healthy, balanced diet rich in fruits and vegetables."
            },
            {
                "symptoms": "fatigue, joint pain, skin rash",
                "disease": "Dermatomyositis",
                "description": "An inflammatory condition causing muscle weakness and skin rash.",
                "precaution": "Sun protection to avoid rash flare-ups.",
                "medication": "Corticosteroids and immunosuppressants.",
                "workout": "Physical therapy to improve muscle strength.",
                "diets": "Anti-inflammatory diet rich in omega-3 fatty acids."
            },
            {
                "symptoms": "chronic diarrhea, weight loss",
                "disease": "Whipple's Disease",
                "description": "A rare bacterial infection that affects the digestive system.",
                "precaution": "Early diagnosis and treatment are crucial.",
                "medication": "Antibiotics for an extended period.",
                "workout": "Moderate exercise as tolerated.",
                "diets": "High-protein diet to support recovery."
            },
            {
                "symptoms": "severe cognitive decline, behavioral changes",
                "disease": "Frontotemporal Dementia",
                "description": "A group of disorders caused by progressive degeneration of the temporal and frontal lobes.",
                "precaution": "Create a safe environment to prevent accidents.",
                "medication": "Symptomatic treatment for mood and behavior.",
                "workout": "Engagement in stimulating activities and light exercise.",
                "diets": "Balanced diet; consider cognitive-friendly foods."
            },
            {
                "symptoms": "muscle rigidity, tremors",
                "disease": "Dystonia",
                "description": "A movement disorder causing involuntary muscle contractions.",
                "precaution": "Avoid stressful situations that can trigger symptoms.",
                "medication": "Botulinum toxin injections, anticholinergic drugs.",
                "workout": "Physical therapy to improve mobility.",
                "diets": "Balanced nutrition; consult a dietitian for specific needs."
            },
            {
                "symptoms": "red, scaly skin patches, itching",
                "disease": "Ichthyosis",
                "description": "A family of genetic disorders characterized by dry, scaly skin.",
                "precaution": "Moisturize regularly to manage symptoms.",
                "medication": "Topical retinoids and emollients.",
                "workout": "Regular gentle exercise to promote circulation.",
                "diets": "Hydration and omega-3 fatty acids to support skin health."
            },
            {
                "symptoms": "persistent fever, unexplained weight loss",
                "disease": "Castleman Disease",
                "description": "A rare lymphoproliferative disorder that can affect lymph nodes.",
                "precaution": "Regular monitoring and follow-up care.",
                "medication": "Immunotherapy and steroids.",
                "workout": "Gentle activities; avoid overexertion.",
                "diets": "Nutrient-rich diet to support overall health."
            },
            {
                "symptoms": "joint pain, skin rash, photosensitivity",
                "disease": "Systemic Lupus Erythematosus",
                "description": "An autoimmune disease affecting multiple organs, characterized by inflammation.",
                "precaution": "Sun protection and regular monitoring.",
                "medication": "Immunosuppressants and corticosteroids.",
                "workout": "Gentle exercise; avoid overexertion.",
                "diets": "Anti-inflammatory diet rich in fruits and vegetables."
            },
            {
                "symptoms": "muscle cramps, excessive thirst",
                "disease": "Diabetes Insipidus",
                "description": "A rare disorder causing an imbalance of fluids in the body.",
                "precaution": "Maintain hydration and avoid dehydration.",
                "medication": "Desmopressin to reduce urine output.",
                "workout": "Regular moderate exercise; stay hydrated.",
                "diets": "Balanced diet with adequate water intake."
            },
            {
                "symptoms": "skin lesions, intense itching",
                "disease": "Erythema Multiforme",
                "description": "A condition that causes red patches or spots on the skin and sometimes mucous membranes.",
                "precaution": "Avoid known triggers like infections or medications.",
                "medication": "Antihistamines and topical steroids.",
                "workout": "Low-impact exercises; avoid heat and sweat.",
                "diets": "Hydrating foods to soothe skin."
            },
            {
                "symptoms": "severe fatigue, swollen lymph nodes",
                "disease": "Kawasaki Disease",
                "description": "A condition that causes inflammation in the walls of blood vessels, primarily in children.",
                "precaution": "Early diagnosis and treatment are critical.",
                "medication": "Intravenous immunoglobulin (IVIG) and aspirin.",
                "workout": "Gentle activities as tolerated.",
                "diets": "Nutrient-rich foods to support recovery."
            },
            {
                "symptoms": "recurrent infections, failure to thrive",
                "disease": "Severe Combined Immunodeficiency (SCID)",
                "description": "A group of rare genetic disorders characterized by a complete absence of immune function.",
                "precaution": "Strict hygiene measures to prevent infections.",
                "medication": "Gene therapy or bone marrow transplant.",
                "workout": "Minimal exercise to avoid infections.",
                "diets": "High-calorie diet to support growth."
            },
            {
                "symptoms": "memory loss, personality changes",
                "disease": "Frontotemporal Dementia",
                "description": "A type of dementia that affects the frontal and temporal lobes of the brain.",
                "precaution": "Create a safe environment.",
                "medication": "Symptomatic treatment for mood and behavior.",
                "workout": "Engagement in stimulating activities.",
                "diets": "Balanced nutrition; consider cognitive-friendly foods."
            },
            {
                "symptoms": "skin blistering, sensitivity to sunlight",
                "disease": "Epidermolysis Bullosa",
                "description": "A group of rare genetic conditions that cause fragile skin that blisters easily.",
                "precaution": "Avoid friction and sun exposure.",
                "medication": "Wound care and pain management.",
                "workout": "Low-impact activities to avoid skin trauma.",
                "diets": "High-calorie diet to promote healing."
            },
            {
                "symptoms": "severe abdominal pain, vomiting",
                "disease": "Porphyria",
                "description": "A group of disorders resulting from a buildup of natural chemicals that produce porphyrin in the body.",
                "precaution": "Avoid triggers like certain medications and sunlight.",
                "medication": "Pain relief and management of symptoms.",
                "workout": "Gentle exercise as tolerated.",
                "diets": "Avoid alcohol and certain foods that may trigger symptoms."
            },
            {
                "symptoms": "muscle stiffness, trembling",
                "disease": "Dystonia",
                "description": "A movement disorder causing abnormal muscle contractions.",
                "precaution": "Avoid triggers that worsen symptoms.",
                "medication": "Botulinum toxin injections or anticholinergic drugs.",
                "workout": "Physical therapy to maintain mobility.",
                "diets": "Balanced nutrition; consult a dietitian for dietary needs."
            },
            {
                "symptoms": "joint pain, skin rash, fever",
                "disease": "Still's Disease",
                "description": "A rare type of juvenile idiopathic arthritis that causes joint inflammation and systemic symptoms.",
                "precaution": "Regular monitoring by a rheumatologist.",
                "medication": "Nonsteroidal anti-inflammatory drugs (NSAIDs) and corticosteroids.",
                "workout": "Gentle range-of-motion exercises.",
                "diets": "Anti-inflammatory diet rich in omega-3 fatty acids."
            },
            {
                "symptoms": "abnormal growths, skin lesions",
                "disease": "Nevoid Basal Cell Carcinoma Syndrome (Gorlin Syndrome)",
                "description": "A genetic condition that leads to the development of multiple basal cell carcinomas and other abnormalities.",
                "precaution": "Regular skin checks to monitor for new lesions.",
                "medication": "Surgical removal of tumors as needed.",
                "workout": "Moderate physical activity; avoid sun exposure.",
                "diets": "Healthy diet to support skin health."
            },
            {
                "symptoms": "weakness, seizures, developmental delays",
                "disease": "Bardet-Biedl Syndrome",
                "description": "A genetic disorder that affects many parts of the body, leading to obesity, retinal degeneration, and kidney problems.",
                "precaution": "Regular check-ups for kidney function and eye health.",
                "medication": "Symptomatic treatment for associated conditions.",
                "workout": "Physical therapy for motor skills.",
                "diets": "Balanced diet to manage weight and overall health."
            },
            {
                "symptoms": "persistent cough, lung infections",
                "disease": "Cystic Fibrosis",
                "description": "A genetic disorder that affects the lungs and digestive system, leading to thick mucus buildup.",
                "precaution": "Regular pulmonary function tests and chest physiotherapy.",
                "medication": "Mucus thinners and antibiotics for infections.",
                "workout": "Exercise to improve lung function.",
                "diets": "High-calorie diet to meet increased energy needs."
            },
            {
                "symptoms": "skin lesions, fatigue, muscle weakness",
                "disease": "Dermatomyositis",
                "description": "An inflammatory disease characterized by muscle weakness and a distinctive skin rash.",
                "precaution": "Avoid sun exposure; regular monitoring for complications.",
                "medication": "Corticosteroids and immunosuppressants.",
                "workout": "Gentle stretching and strengthening exercises.",
                "diets": "Nutrient-rich foods to support muscle health."
            },
            {
                "symptoms": "fever, rash, muscle pain",
                "disease": "Still's Disease",
                "description": "A form of arthritis that causes persistent high fevers and a distinctive rash.",
                "precaution": "Close monitoring and regular doctor visits.",
                "medication": "NSAIDs and biologics.",
                "workout": "Gentle exercises to maintain flexibility.",
                "diets": "Balanced diet with an emphasis on anti-inflammatory foods."
            },
            {
                "symptoms": "recurrent infections, stunted growth",
                "disease": "Severe Combined Immunodeficiency (SCID)",
                "description": "A group of rare, inherited disorders that impair the immune system.",
                "precaution": "Avoid exposure to infections; maintain good hygiene.",
                "medication": "Bone marrow transplant and gene therapy.",
                "workout": "Minimal exercise; focus on gentle movements.",
                "diets": "Nutrient-rich foods to support overall health."
            },
            {
                "symptoms": "difficulty concentrating, mood swings",
                "disease": "Wilson's Disease",
                "description": "A genetic disorder that leads to excessive copper accumulation in the body.",
                "precaution": "Regular liver function tests and monitoring.",
                "medication": "Copper chelators and zinc supplements.",
                "workout": "Moderate exercise to maintain overall health.",
                "diets": "Low-copper diet to reduce copper intake."
            },
            {
                "symptoms": "poor wound healing, skin discoloration",
                "disease": "Ehlers-Danlos Syndrome",
                "description": "A group of disorders affecting connective tissues, leading to hypermobility and skin elasticity.",
                "precaution": "Avoid high-impact activities to prevent injury.",
                "medication": "Pain management and physical therapy.",
                "workout": "Low-impact exercises to build strength.",
                "diets": "Balanced diet with adequate hydration."
            },
            {
                "symptoms": "muscle cramps, high blood pressure",
                "disease": "Liddle Syndrome",
                "description": "A rare genetic disorder that causes hypertension due to overactive sodium channels in the kidneys.",
                "precaution": "Regular blood pressure monitoring.",
                "medication": "Potassium-sparing diuretics.",
                "workout": "Regular exercise to help manage blood pressure.",
                "diets": "Low-sodium diet to support blood pressure management."
            },
            {
                "symptoms": "light sensitivity, severe headaches",
                "disease": "Migraine with Aura",
                "description": "A type of migraine that involves visual disturbances before the headache.",
                "precaution": "Avoid known triggers such as stress and certain foods.",
                "medication": "Triptans for acute treatment; preventive medications may be needed.",
                "workout": "Gentle exercises like walking or yoga.",
                "diets": "Maintain a balanced diet and stay hydrated."
            },
            {
                "symptoms": "loss of sensation, muscle weakness",
                "disease": "Charcot-Marie-Tooth Disease",
                "description": "A hereditary disorder affecting the peripheral nerves, leading to muscle weakness and atrophy.",
                "precaution": "Physical therapy and regular monitoring.",
                "medication": "Pain management and physical therapy.",
                "workout": "Strength training and balance exercises.",
                "diets": "Nutrient-rich diet to support nerve health."
            },
            {
                "symptoms": "unexplained bruising, prolonged bleeding",
                "disease": "Von Willebrand Disease",
                "description": "A bleeding disorder caused by a deficiency of von Willebrand factor, affecting blood clotting.",
                "precaution": "Avoid activities that could cause injury.",
                "medication": "Desmopressin and clotting factor concentrates.",
                "workout": "Low-impact exercises; avoid contact sports.",
                "diets": "Vitamin K-rich foods to support blood clotting."
            },
            {
                "symptoms": "cognitive decline, personality changes",
                "disease": "Frontotemporal Dementia",
                "description": "A group of disorders caused by progressive degeneration of the frontal and temporal lobes of the brain.",
                "precaution": "Regular monitoring and supportive care.",
                "medication": "Medications to manage symptoms; no cure available.",
                "workout": "Mental exercises and social activities to engage the brain.",
                "diets": "Nutrient-rich foods for brain health."
            },
            {
                "symptoms": "sudden vision loss, floaters",
                "disease": "Retinal Detachment",
                "description": "A serious condition where the retina pulls away from its normal position, leading to vision loss.",
                "precaution": "Immediate medical attention is necessary.",
                "medication": "Surgery is often required to repair the retina.",
                "workout": "Limit strenuous activities to prevent further damage.",
                "diets": "Healthy diet with antioxidants for eye health."
            },
            {
                "symptoms": "frequent nosebleeds, gum bleeding",
                "disease": "Hereditary Hemorrhagic Telangiectasia (HHT)",
                "description": "A genetic disorder that leads to abnormal blood vessel formation, causing bleeding.",
                "precaution": "Regular monitoring for potential complications.",
                "medication": "Iron supplements for anemia; treatment for bleeding.",
                "workout": "Moderate activities; avoid high-risk sports.",
                "diets": "Iron-rich foods to support overall health."
            },
            {
                "symptoms": "dysphagia, food regurgitation",
                "disease": "Achalasia",
                "description": "A disorder of the esophagus that makes it difficult to swallow food.",
                "precaution": "Eat small meals and avoid large bites.",
                "medication": "Medications to relax the lower esophageal sphincter.",
                "workout": "Gentle exercise; avoid heavy lifting.",
                "diets": "Soft foods that are easy to swallow."
            },
            {
                "symptoms": "numbness, tingling in extremities",
                "disease": "Peripheral Neuropathy",
                "description": "Damage to the peripheral nerves, causing weakness and pain, often due to diabetes or other conditions.",
                "precaution": "Manage underlying conditions and avoid injury.",
                "medication": "Pain relievers and medications for nerve pain.",
                "workout": "Physical therapy to improve strength and balance.",
                "diets": "Balanced diet rich in vitamins B1, B6, and B12."
            },
            {
                "symptoms": "skin changes, sensitivity to cold",
                "disease": "Raynaud's Disease",
                "description": "A condition that causes some areas of the body, usually fingers and toes, to feel numb and cold in response to stress or cold temperatures.",
                "precaution": "Avoid cold exposure and manage stress.",
                "medication": "Calcium channel blockers to improve blood flow.",
                "workout": "Moderate exercise to improve circulation.",
                "diets": "Healthy diet to support cardiovascular health."
            },
            {
                "symptoms": "difficulty breathing, wheezing, chest tightness",
                "disease": "Lupus",
                "description": "An autoimmune disease where the body’s immune system attacks its own tissues, leading to inflammation.",
                "precaution": "Avoid sunlight and stress; regular check-ups.",
                "medication": "Immunosuppressants and anti-inflammatory drugs.",
                "workout": "Moderate exercise; avoid overexertion.",
                "diets": "Anti-inflammatory diet rich in omega-3 fatty acids."
            },
            {
                "symptoms": "skin discoloration, joint pain",
                "disease": "Ehlers-Danlos Syndrome",
                "description": "A group of connective tissue disorders causing hyper-flexible joints and fragile skin.",
                "precaution": "Avoid high-impact activities; support joints.",
                "medication": "Pain management and physical therapy.",
                "workout": "Low-impact exercises to strengthen muscles.",
                "diets": "Nutrient-rich diet for connective tissue health."
            },
            {
                "symptoms": "flushing, rapid heartbeat, abdominal pain",
                "disease": "Carcinoid Syndrome",
                "description": "A rare condition caused by a carcinoid tumor, leading to hormone release causing various symptoms.",
                "precaution": "Monitor symptoms closely; avoid triggers like certain foods.",
                "medication": "Somatostatin analogs to control symptoms.",
                "workout": "Light to moderate exercise as tolerated.",
                "diets": "Avoid high-tyramine foods that may trigger symptoms."
            },
            {
                "symptoms": "confusion, severe headaches, vision problems",
                "disease": "Cerebral Venous Sinus Thrombosis",
                "description": "A rare form of stroke caused by a blood clot in the brain's venous sinuses.",
                "precaution": "Seek immediate medical attention for symptoms.",
                "medication": "Anticoagulants to prevent further clots.",
                "workout": "Light activities; avoid strenuous exercise until cleared.",
                "diets": "Hydration and a balanced diet to support brain health."
            },
            {
                "symptoms": "numbness, tingling, muscle weakness",
                "disease": "Multiple Sclerosis",
                "description": "A chronic disease that affects the central nervous system, leading to a wide range of symptoms.",
                "precaution": "Regular follow-ups and manage stress.",
                "medication": "Disease-modifying therapies and symptom management.",
                "workout": "Tailored exercise programs to maintain mobility.",
                "diets": "Anti-inflammatory diet; omega-3 supplements may help."
            },
            {
                "symptoms": "persistent dry cough, chest pain",
                "disease": "Pulmonary Fibrosis",
                "description": "A lung disease that occurs when lung tissue becomes damaged and scarred.",
                "precaution": "Avoid smoking and pollutants; monitor symptoms.",
                "medication": "Antifibrotic medications to slow progression.",
                "workout": "Pulmonary rehabilitation to improve lung function.",
                "diets": "Nutrient-rich foods to support lung health."
            },
            {
                "symptoms": "increased thirst, dry mouth, frequent urination",
                "disease": "Diabetes Mellitus",
                "description": "A metabolic disorder characterized by high blood sugar levels over a prolonged period.",
                "precaution": "Regular monitoring of blood sugar levels.",
                "medication": "Insulin therapy and/or oral hypoglycemics.",
                "workout": "Regular physical activity to help control blood sugar.",
                "diets": "Low glycemic index foods and balanced meals."
            },
            {
                "symptoms": "cramps, weakness, severe sweating",
                "disease": "Hyperhidrosis",
                "description": "A condition characterized by excessive sweating, often without triggers.",
                "precaution": "Avoid known triggers and wear breathable clothing.",
                "medication": "Antiperspirants, medications, or botulinum toxin injections.",
                "workout": "Exercise as tolerated; stay hydrated.",
                "diets": "Avoid caffeine and spicy foods that may trigger sweating."
            },
            {
                "symptoms": "difficulty swallowing, chest pain, heartburn",
                "disease": "Achalasia",
                "description": "A rare disorder affecting the esophagus, leading to difficulty in swallowing food.",
                "precaution": "Eat slowly and avoid large meals.",
                "medication": "Medications to relax the esophagus; possible surgery.",
                "workout": "Gentle physical activities; avoid heavy lifting.",
                "diets": "Soft foods that are easier to swallow."
            },
            {
                "symptoms": "skin rash, fatigue",
                "disease": "Lupus",
                "description": "An autoimmune disease that can affect various parts of the body.",
                "precaution": "Sun protection and regular check-ups.",
                "medication": "Immunosuppressants and anti-inflammatory drugs.",
                "workout": "Low-impact exercises like walking.",
                "diets": "Anti-inflammatory diet rich in omega-3s."
            },
            {
                "symptoms": "muscle weakness, skin rash",
                "disease": "Dermatomyositis",
                "description": "An inflammatory condition affecting the skin and muscles.",
                "precaution": "Avoid sun exposure and manage stress.",
                "medication": "Corticosteroids and immunosuppressants.",
                "workout": "Physical therapy and gentle exercises.",
                "diets": "Rich in fruits and vegetables."
            },
            {
                "symptoms": "weight loss, abdominal pain",
                "disease": "Celiac Disease",
                "description": "An autoimmune disorder triggered by gluten consumption.",
                "precaution": "Strict gluten-free diet.",
                "medication": "Nutritional supplements if needed.",
                "workout": "Regular physical activity as tolerated.",
                "diets": "Gluten-free grains and fresh foods."
            },
            {
                "symptoms": "dizziness, fainting",
                "disease": "Vasovagal Syncope",
                "description": "A common cause of fainting due to sudden drops in heart rate and blood pressure.",
                "precaution": "Avoid triggers such as standing for long periods.",
                "medication": "In some cases, medications to regulate blood pressure.",
                "workout": "Strengthening exercises for the legs.",
                "diets": "Adequate salt and fluid intake."
            },
            {
                "symptoms": "abdominal pain, weight loss",
                "disease": "Crohn's Disease",
                "description": "A type of inflammatory bowel disease (IBD) that affects the digestive tract.",
                "precaution": "Diet management and avoiding triggers.",
                "medication": "Anti-inflammatory drugs and immunosuppressants.",
                "workout": "Gentle exercises, avoiding intense workouts during flare-ups.",
                "diets": "High-fiber diet and hydration."
            },
            {
                "symptoms": "muscle cramps, fatigue",
                "disease": "Multiple Sclerosis",
                "description": "A disease that affects the central nervous system, causing a wide range of symptoms.",
                "precaution": "Regular monitoring and avoidance of stress.",
                "medication": "Disease-modifying therapies and symptom management.",
                "workout": "Adapted physical activities like swimming.",
                "diets": "Mediterranean diet rich in healthy fats."
            },
            {
                "symptoms": "fever, skin lesions",
                "disease": "Tuberculosis",
                "description": "A bacterial infection that primarily affects the lungs.",
                "precaution": "Vaccination and avoiding close contact with infected individuals.",
                "medication": "Antibiotics for an extended period.",
                "workout": "Gradual return to normal activities post-treatment.",
                "diets": "Nutrient-rich foods to support recovery."
            },
            {
                "symptoms": "numbness, tingling",
                "disease": "Diabetic Neuropathy",
                "description": "A type of nerve damage that can occur with diabetes.",
                "precaution": "Regular blood sugar monitoring.",
                "medication": "Pain relief medications and blood sugar control.",
                "workout": "Regular moderate exercises like walking.",
                "diets": "Low-sugar, balanced meals."
            },
            {
                "symptoms": "bloating, diarrhea",
                "disease": "Irritable Bowel Syndrome (IBS)",
                "description": "A gastrointestinal disorder causing symptoms like bloating and abdominal pain.",
                "precaution": "Dietary management and stress reduction.",
                "medication": "Medications to relieve symptoms.",
                "workout": "Regular physical activity to reduce symptoms.",
                "diets": "Low-FODMAP diet may help."
            },
            {
                "symptoms": "excessive thirst, frequent urination",
                "disease": "Diabetes Mellitus",
                "description": "A chronic condition that affects how the body processes blood sugar.",
                "precaution": "Regular monitoring of blood sugar levels.",
                "medication": "Insulin or oral medications.",
                "workout": "Regular exercise as recommended.",
                "diets": "Balanced diet with controlled carbohydrate intake."
            },
            {
                "symptoms": "swollen joints, pain",
                "disease": "Rheumatoid Arthritis",
                "description": "An autoimmune disorder that primarily affects joints.",
                "precaution": "Early treatment and physical therapy.",
                "medication": "Disease-modifying antirheumatic drugs (DMARDs).",
                "workout": "Low-impact exercises to maintain joint flexibility.",
                "diets": "Anti-inflammatory diet with omega-3 fatty acids."
            },
            {
                "symptoms": "chronic cough, wheezing",
                "disease": "Asthma",
                "description": "A condition that affects the airways, causing breathing difficulties.",
                "precaution": "Avoid triggers like allergens and smoke.",
                "medication": "Inhalers and other asthma medications.",
                "workout": "Regular exercise, avoid during attacks.",
                "diets": "Balanced diet, avoiding food allergens."
            },
            {
                "symptoms": "difficulty swallowing, heartburn",
                "disease": "Achalasia",
                "description": "A condition in which the esophagus has trouble moving food into the stomach.",
                "precaution": "Eat smaller, more frequent meals.",
                "medication": "Medications to relax the esophageal muscles.",
                "workout": "Gentle exercises to maintain health.",
                "diets": "Soft diet to aid swallowing."
            },
            {
                "symptoms": "visual disturbances, headache",
                "disease": "Migraine with Aura",
                "description": "A type of migraine that is preceded by visual disturbances.",
                "precaution": "Avoid known triggers like stress and certain foods.",
                "medication": "Pain relief and preventive medications.",
                "workout": "Low-intensity exercises during non-attack periods.",
                "diets": "Hydration and balanced meals."
            },
            {
                "symptoms": "sensitivity to light, headache",
                "disease": "Cluster Headaches",
                "description": "Severe headaches that occur in cycles or clusters.",
                "precaution": "Avoid alcohol and smoking during cycles.",
                "medication": "Abortive medications and oxygen therapy.",
                "workout": "Light stretching to relieve tension.",
                "diets": "Regular meals to avoid triggers."
            },
            {
                "symptoms": "memory loss, confusion",
                "disease": "Alzheimer’s Disease",
                "description": "A progressive brain disorder that affects memory and cognitive function.",
                "precaution": "Mental stimulation and social engagement.",
                "medication": "Medications to slow progression.",
                "workout": "Regular physical activity to maintain function.",
                "diets": "Diets rich in antioxidants."
            },
            {
                "symptoms": "skin lesions, fatigue",
                "disease": "Psoriasis",
                "description": "An autoimmune disease that causes rapid skin cell growth.",
                "precaution": "Moisturize and avoid triggers.",
                "medication": "Topical treatments and systemic medications.",
                "workout": "Low-impact activities to maintain skin health.",
                "diets": "Omega-3 fatty acids and low-sugar diet."
            },
            {
                "symptoms": "chronic pain, fatigue",
                "disease": "Fibromyalgia",
                "description": "A condition characterized by widespread musculoskeletal pain.",
                "precaution": "Stress management and regular sleep.",
                "medication": "Pain relievers and antidepressants.",
                "workout": "Gentle exercises like yoga.",
                "diets": "Anti-inflammatory diet."
            },
            {
                "symptoms": "pale skin, fatigue",
                "disease": "Anemia",
                "description": "A condition where you lack enough healthy red blood cells.",
                "precaution": "Diet rich in iron and vitamins.",
                "medication": "Iron supplements or vitamin B12 shots.",
                "workout": "Moderate exercise to improve energy.",
                "diets": "Iron-rich foods like spinach and beans."
            },
            {
                "symptoms": "muscle weakness, mood changes",
                "disease": "Myasthenia Gravis",
                "description": "A chronic autoimmune disorder affecting muscle communication.",
                "precaution": "Avoid extreme temperatures.",
                "medication": "Anticholinesterase medications.",
                "workout": "Low-impact activities as tolerated.",
                "diets": "Balanced nutrition with adequate vitamins."
            },
            {
                "symptoms": "nausea, abdominal pain",
                "disease": "Gastritis",
                "description": "Inflammation of the stomach lining.",
                "precaution": "Avoid spicy foods and alcohol.",
                "medication": "Antacids and acid blockers.",
                "workout": "Gentle walking after meals.",
                "diets": "Easily digestible foods."
            },
            {
                "symptoms": "dry mouth, bad breath",
                "disease": "Halitosis",
                "description": "Persistent bad breath often due to poor oral hygiene.",
                "precaution": "Maintain good dental hygiene.",
                "medication": "Mouth rinses and treatments for underlying causes.",
                "workout": "Regular oral health check-ups.",
                "diets": "Hydration and avoiding strong-smelling foods."
            },
            {
                "symptoms": "swollen lymph nodes, fatigue",
                "disease": "Lymphoma",
                "description": "A type of cancer that begins in the lymphatic system.",
                "precaution": "Regular check-ups for early detection.",
                "medication": "Chemotherapy and radiation therapy.",
                "workout": "Consult a doctor for appropriate activity levels.",
                "diets": "Healthy, nutrient-rich diet."
            },
            {
                "symptoms": "numbness, tingling",
                "disease": "Peripheral Neuropathy",
                "description": "A result of damage to the peripheral nerves.",
                "precaution": "Manage underlying conditions like diabetes.",
                "medication": "Pain relief and topical treatments.",
                "workout": "Gentle exercises to maintain mobility.",
                "diets": "Balanced diet for nerve health."
            },
            {
                "symptoms": "weight loss, fever",
                "disease": "HIV/AIDS",
                "description": "A virus that attacks the immune system.",
                "precaution": "Safe practices to avoid transmission.",
                "medication": "Antiretroviral therapy.",
                "workout": "Regular physical activity for immune support.",
                "diets": "Healthy, balanced nutrition."
            },
            {
                "symptoms": "tingling, prickling",
                "disease": "Raynaud's Disease",
                "description": "A condition where blood flow is restricted to certain parts of the body.",
                "precaution": "Avoid cold exposure.",
                "medication": "Medications to dilate blood vessels.",
                "workout": "Moderate exercise to improve circulation.",
                "diets": "Warm meals and hydration."
            },
            {
                "symptoms": "chronic cough, fatigue",
                "disease": "Chronic Bronchitis",
                "description": "A long-term inflammation of the bronchial tubes.",
                "precaution": "Avoid smoking and pollutants.",
                "medication": "Bronchodilators and steroids.",
                "workout": "Breathing exercises and gentle workouts.",
                "diets": "Hydration and nutrient-rich foods."
            },
            {
                "symptoms": "muscle stiffness, spasms",
                "disease": "Dystonia",
                "description": "A movement disorder causing involuntary muscle contractions.",
                "precaution": "Regular movement and therapy.",
                "medication": "Botulinum toxin injections and muscle relaxants.",
                "workout": "Physical therapy exercises.",
                "diets": "Balanced diet with vitamins."
            },
            {
                "symptoms": "severe headache, visual changes",
                "disease": "Tension Headaches",
                "description": "A common type of headache often linked to stress.",
                "precaution": "Stress management techniques.",
                "medication": "Over-the-counter pain relievers.",
                "workout": "Regular physical activity to reduce tension.",
                "diets": "Hydration and regular meals."
            },
            {
                "symptoms": "coughing, difficulty breathing",
                "disease": "Chronic Obstructive Pulmonary Disease (COPD)",
                "description": "A group of lung diseases that block airflow.",
                "precaution": "Avoid smoking and respiratory irritants.",
                "medication": "Bronchodilators and steroids.",
                "workout": "Regular exercise to maintain lung function.",
                "diets": "Healthy diet to support lung health."
            },
            {
                "symptoms": "pale skin, weakness",
                "disease": "Iron Deficiency Anemia",
                "description": "A common type of anemia that occurs when your body doesn't have enough iron.",
                "precaution": "Diet rich in iron and vitamins.",
                "medication": "Iron supplements.",
                "workout": "Regular moderate exercise.",
                "diets": "Iron-rich foods like red meat and beans."
            },
            {
                "symptoms": "nausea, fatigue",
                "disease": "Cirrhosis",
                "description": "Severe scarring of the liver caused by many forms of liver diseases.",
                "precaution": "Avoid alcohol and maintain a healthy weight.",
                "medication": "Medications for managing symptoms.",
                "workout": "Consult a doctor before starting exercises.",
                "diets": "Low-sodium diet."
            },
            {
                "symptoms": "persistent pain, swelling",
                "disease": "Carpal Tunnel Syndrome",
                "description": "A condition that causes numbness and tingling in the hand.",
                "precaution": "Ergonomic adjustments in workspaces.",
                "medication": "Pain relievers and wrist braces.",
                "workout": "Stretching and strengthening exercises for the wrist.",
                "diets": "Anti-inflammatory foods."
            },
            {
                "symptoms": "thinning hair, fatigue",
                "disease": "Alopecia Areata",
                "description": "An autoimmune condition that causes hair loss.",
                "precaution": "Stress management and healthy lifestyle.",
                "medication": "Corticosteroids and topical treatments.",
                "workout": "Gentle exercise to reduce stress.",
                "diets": "Balanced diet for hair health."
            },
            {
                "symptoms": "painful sores, fatigue",
                "disease": "Canker Sores",
                "description": "Small, painful ulcers that occur in the mouth.",
                "precaution": "Avoid irritants like spicy foods.",
                "medication": "Topical treatments and pain relievers.",
                "workout": "Consult a doctor for safe activities.",
                "diets": "Soft, soothing foods."
            },
            {
                "symptoms": "extreme fatigue, muscle weakness",
                "disease": "Chronic Fatigue Syndrome",
                "description": "A complex disorder characterized by extreme fatigue.",
                "precaution": "Adequate rest and stress management.",
                "medication": "Pain relievers and antidepressants.",
                "workout": "Gentle stretching and low-impact exercises.",
                "diets": "Balanced diet with adequate hydration."
            },
            {
                "symptoms": "painful joint swelling",
                "disease": "Osteoarthritis",
                "description": "A degenerative joint disease causing pain and stiffness.",
                "precaution": "Maintain a healthy weight.",
                "medication": "Pain relievers and anti-inflammatory drugs.",
                "workout": "Low-impact exercises to maintain mobility.",
                "diets": "Anti-inflammatory diet."
            },
            {
                "symptoms": "dizziness, fainting",
                "disease": "Postural Orthostatic Tachycardia Syndrome (POTS)",
                "description": "A condition that affects circulation.",
                "precaution": "Avoid prolonged standing.",
                "medication": "Fludrocortisone and beta-blockers.",
                "workout": "Gradual increase in physical activity.",
                "diets": "High-salt diet to increase blood volume."
            },
            {
                "symptoms": "red, itchy patches",
                "disease": "Eczema",
                "description": "A condition that makes your skin red and inflamed.",
                "precaution": "Avoid skin irritants.",
                "medication": "Topical corticosteroids.",
                "workout": "Gentle exercise to promote circulation.",
                "diets": "Hydrating foods and healthy fats."
            },
            {
                "symptoms": "persistent, itchy rash",
                "disease": "Contact Dermatitis",
                "description": "A skin rash caused by contact with a substance.",
                "precaution": "Identify and avoid irritants.",
                "medication": "Topical corticosteroids.",
                "workout": "Gentle stretching to maintain flexibility.",
                "diets": "Nutrient-rich foods for skin health."
            },
            {
                "symptoms": "swelling, redness",
                "disease": "Gout",
                "description": "A form of arthritis characterized by severe pain and swelling.",
                "precaution": "Avoid purine-rich foods.",
                "medication": "Non-steroidal anti-inflammatory drugs (NSAIDs).",
                "workout": "Low-impact activities as tolerated.",
                "diets": "Hydration and low-purine foods."
            },
            {
                "symptoms": "skin rash, blisters",
                "disease": "Shingles",
                "description": "A viral infection causing a painful rash.",
                "precaution": "Vaccination and avoid close contact.",
                "medication": "Antiviral medications and pain relievers.",
                "workout": "Gentle stretching and relaxation techniques.",
                "diets": "Balanced diet for immune support."
            },
            {
                "symptoms": "developmental delays, respiratory issues",
                "disease": "Zellweger Spectrum Disorders",
                "description": "A group of inherited conditions affecting brain and organ development due to peroxisomal dysfunction.",
                "precaution": "Regular developmental assessments.",
                "medication": "Supportive treatments for symptoms.",
                "workout": "Tailored physical therapy.",
                "diets": "Nutritional support as needed."
            },
            {
                "symptoms": "burning sensation, redness",
                "disease": "Rosacea",
                "description": "A chronic skin condition causing redness and visible blood vessels.",
                "precaution": "Avoid triggers like sun and spicy foods.",
                "medication": "Topical and oral medications.",
                "workout": "Gentle exercise to maintain health.",
                "diets": "Balanced diet with hydration."
            },
            {
                "symptoms": "frequent headaches, dizziness",
                "disease": "Hypertension",
                "description": "A condition that can lead to serious health problems if not treated.",
                "precaution": "Regular monitoring and stress management.",
                "medication": "Antihypertensive medications.",
                "workout": "Regular aerobic exercise.",
                "diets": "Low-sodium and heart-healthy diet."
            },
            {
                "symptoms": "persistent fatigue, muscle pain",
                "disease": "Hypothyroidism",
                "description": "A condition where the thyroid gland doesn't produce enough hormones.",
                "precaution": "Regular thyroid function tests.",
                "medication": "Thyroid hormone replacement therapy.",
                "workout": "Regular moderate exercise.",
                "diets": "Iodine-rich foods and balanced diet."
            }
           
    ]
};

function getLevenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
            }
        }
    }

    return matrix[b.length][a.length];
}

// Function to correct symptoms using Levenshtein distance
function correctSpelling(symptom, validSymptoms) {
    let closestMatch = validSymptoms[0];
    let minDistance = getLevenshteinDistance(symptom, validSymptoms[0]);

    for (let i = 1; i < validSymptoms.length; i++) {
        const distance = getLevenshteinDistance(symptom, validSymptoms[i]);
        if (distance < minDistance) {
            minDistance = distance;
            closestMatch = validSymptoms[i];
        }
    }

    return closestMatch;
}

document.getElementById('predictButton').addEventListener('click', function() {
    const symptomsInput = document.getElementById('symptomInput').value.trim().toLowerCase();

    // Check if symptoms are entered
    if (symptomsInput !== "") {
        document.getElementById('miniButtonContainer').style.display = 'flex';
    } else {
        alert("Please enter symptoms before predicting.");
        return;
    }

    // Split the input symptoms into an array
    let enteredSymptoms = symptomsInput.split(',').map(symptom => symptom.trim());

    // Get all valid symptoms from the responses object
    let validSymptoms = [];
    responses.data.forEach(response => {
        validSymptoms = validSymptoms.concat(response.symptoms.split(',').map(s => s.trim().toLowerCase()));
    });

    // Correct the spelling of each entered symptom
    enteredSymptoms = enteredSymptoms.map(symptom => correctSpelling(symptom, validSymptoms));

    let bestMatch = null;
    let maxMatches = 0;

    // Find matching symptoms from the responses object
    responses.data.forEach(response => {
        const keySymptoms = response.symptoms.split(',').map(symptom => symptom.trim());

        // Count how many symptoms match
        let matchCount = enteredSymptoms.filter(symptom => keySymptoms.includes(symptom)).length;

        // Prioritize diseases with more matching symptoms
        if (matchCount > 0 && matchCount > maxMatches) {
            maxMatches = matchCount;
            bestMatch = response;
        }
    });

    // Add click listeners for each mini button if there's a match
    if (bestMatch) {
        document.getElementById('diseaseButton').onclick = function() {
            alert("Disease: " + bestMatch.disease);
        };
        document.getElementById('descriptionButton').onclick = function() {
            alert("Description: " + bestMatch.description);
        };
        document.getElementById('precautionButton').onclick = function() {
            alert("Precaution: " + bestMatch.precaution);
        };
        document.getElementById('medicationButton').onclick = function() {
            alert("Medication: " + bestMatch.medication);
        };
        document.getElementById('workoutButton').onclick = function() {
            alert("Workout: " + bestMatch.workout);
        };
        document.getElementById('dietsButton').onclick = function() {
            alert("Diets: " + bestMatch.diets);
        };
    }
});

// Check if the user is logged in
if (!sessionStorage.getItem('loggedIn')) {
    window.location.href = 'sign.html'; // Redirect to sign.html if not logged in
}