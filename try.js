// Paths to CSV files 
const csvFiles = {
    medications: 'medications.csv',
    description: 'description.csv',
    diets: 'diets.csv',
    precautions: 'precautions_df.csv',
    symptoms: 'Symptom-severity.csv',
    workouts: 'workout_df.csv'
};

let symptomsData = []; // Declare symptomsData globally

// Function to load CSV file and parse it
function loadCSV(file, callback) {
    Papa.parse(file, {
        download: true,
        header: true,  // Assuming your CSV has headers
        complete: function(results) {
            callback(results.data);  // CSV data is passed to the callback
        },
        error: function(error) {
            console.error("Error loading CSV:", error);
        }
    });
}

// Load and process each CSV
function loadAllCSVFiles() {
    loadCSV(csvFiles.symptoms, function(data) {
        console.log("Symptoms Data Loaded:", data);
        symptomsData = data; // Store symptoms data here
        document.getElementById('predictButton').disabled = false; // Enable button
    });
}

// Call the function to load all CSV files
loadAllCSVFiles();

// Disable the predict button initially
document.getElementById('predictButton').disabled = true;

// Event listener for the predict button
document.getElementById('predictButton').addEventListener('click', function() {
    const symptomsInput = document.getElementById('symptomInput').value.trim().toLowerCase();
    
    // Ensure symptoms are entered
    if (symptomsInput === "") {
        alert("Please enter symptoms before predicting.");
        return;
    }

    const enteredSymptoms = symptomsInput.split(',').map(symptom => symptom.trim());

    // Check if symptomsData is populated
    if (symptomsData.length === 0) {
        alert("Symptoms data is not loaded yet. Please wait.");
        return;
    }

    let matchedSymptoms = null;
    console.log("Checking against Symptoms Data..."); // Debug statement
    for (let i = 0; i < symptomsData.length; i++) {
        const csvSymptoms = symptomsData[i].symptoms.split(',').map(symptom => symptom.trim());

        // Check for matches
        const isMatch = enteredSymptoms.some(symptom => csvSymptoms.includes(symptom));
        if (isMatch) {
            matchedSymptoms = symptomsData[i];
            break;
        }
    }

    // Display results based on matched symptoms
    if (matchedSymptoms) {
        alert("Disease: " + matchedSymptoms.disease);
        // Add more alerts for other data as needed
    } else {
        alert("No matching disease found for the entered symptoms.");
    }
});
