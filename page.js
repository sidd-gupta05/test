const responses = {
    "data": [
        {
            "symptoms": "cold, fever",
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
        }
    ]
};

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
    const enteredSymptoms = symptomsInput.split(',').map(symptom => symptom.trim());

    // Find matching symptoms from the responses object
    let matchedSymptoms = null;
    for (let i = 0; i < responses.data.length; i++) {
        const keySymptoms = responses.data[i].symptoms.split(',').map(symptom => symptom.trim());
        
        // Check if any entered symptoms match the ones in the key
        const isMatch = enteredSymptoms.some(symptom => keySymptoms.includes(symptom));
        if (isMatch) {
            matchedSymptoms = responses.data[i];
            break;
        }
    }

    // Add click listeners for each mini button
    if (matchedSymptoms) {
        document.getElementById('diseaseButton').onclick = function() {
            alert("Disease: " + matchedSymptoms.disease);
        };
        document.getElementById('descriptionButton').onclick = function() {
            alert("Description: " + matchedSymptoms.description);
        };
        document.getElementById('precautionButton').onclick = function() {
            alert("Precaution: " + matchedSymptoms.precaution);
        };
        document.getElementById('medicationButton').onclick = function() {
            alert("Medication: " + matchedSymptoms.medication);
        };
        document.getElementById('workoutButton').onclick = function() {
            alert("Workout: " + matchedSymptoms.workout);
        };
        document.getElementById('dietsButton').onclick = function() {
            alert("Diets: " + matchedSymptoms.diets);
        };
    } else {
        alert("No data available for the entered symptoms.");
    }
});

    // Check if the user is logged in
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'sign.html'; // Redirect to sign.html if not logged in
    }
    

