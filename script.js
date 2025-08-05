// FUTA Courses Database
const futaCourses = [
    // School of Agriculture & Agricultural Technology (SAAT)
    {
        name: "Food Science and Technology",
        code: "FST",
        school: "School of Agriculture & Agricultural Technology (SAAT)",
        subjects: ["English", "Chemistry", "Biology", "Physics", "Mathematics", "Agric Science"],
        requiredSubjects: ["English", "Chemistry"],
        alternativeSubjects: [["Biology", "Agric Science"], ["Physics", "Mathematics"]],
        aggregateScore: 55
    },
    {
        name: "Agric Resources and Economics",
        code: "ARE",
        school: "School of Agriculture & Agricultural Technology (SAAT)",
        subjects: ["English", "Chemistry", "Biology", "Mathematics", "Agric Science"],
        requiredSubjects: ["English", "Chemistry", "Mathematics"],
        alternativeSubjects: [["Biology", "Agric Science"]],
        aggregateScore: 47
    },
    {
        name: "Agric Extension and Communication Technology",
        code: "AEC",
        school: "School of Agriculture & Agricultural Technology (SAAT)",
        subjects: ["English", "Chemistry", "Biology", "Mathematics", "Agric Science"],
        requiredSubjects: ["English", "Chemistry", "Mathematics"],
        alternativeSubjects: [["Biology", "Agric Science"]],
        aggregateScore: 47
    },
    {
        name: "Animal Production and Health",
        code: "APH",
        school: "School of Agriculture & Agricultural Technology (SAAT)",
        subjects: ["English", "Chemistry", "Biology", "Physics", "Mathematics", "Agric Science"],
        requiredSubjects: ["English", "Chemistry"],
        alternativeSubjects: [["Biology", "Agric Science"], ["Physics", "Mathematics"]],
        aggregateScore: 53
    },
    {
        name: "Crop, Soil and Pest Management",
        code: "CSP",
        school: "School of Agriculture & Agricultural Technology (SAAT)",
        subjects: ["English", "Chemistry", "Biology", "Physics", "Mathematics", "Agric Science"],
        requiredSubjects: ["English", "Chemistry"],
        alternativeSubjects: [["Biology", "Agric Science"], ["Physics", "Mathematics"]],
        aggregateScore: 47
    },
    {
        name: "Fisheries and Aquaculture Technology",
        code: "FAT",
        school: "School of Agriculture & Agricultural Technology (SAAT)",
        subjects: ["English", "Chemistry", "Biology", "Physics", "Mathematics", "Agric Science"],
        requiredSubjects: ["English", "Chemistry"],
        alternativeSubjects: [["Biology", "Agric Science"], ["Physics", "Mathematics"]],
        aggregateScore: 47
    },
    {
        name: "Forestry and Wood Technology",
        code: "FWT",
        school: "School of Agriculture & Agricultural Technology (SAAT)",
        subjects: ["English", "Chemistry", "Biology", "Physics", "Mathematics", "Agric Science"],
        requiredSubjects: ["English", "Chemistry"],
        alternativeSubjects: [["Biology", "Agric Science"], ["Physics", "Mathematics"]],
        aggregateScore: 47
    },
    {
        name: "Nutrition and Dietetics",
        code: "NDT",
        school: "School of Agriculture & Agricultural Technology (SAAT)",
        subjects: ["English", "Chemistry", "Biology", "Physics", "Mathematics"],
        requiredSubjects: ["English", "Chemistry", "Biology"],
        alternativeSubjects: [["Physics", "Mathematics"]],
        aggregateScore: 55
    },
    {
        name: "Ecotourism and Wildlife Management",
        code: "EWM",
        school: "School of Agriculture & Agricultural Technology (SAAT)",
        subjects: ["English", "Biology", "Chemistry", "Geography", "Mathematics"],
        requiredSubjects: ["English", "Biology", "Chemistry"],
        alternativeSubjects: [["Geography", "Mathematics"]],
        aggregateScore: 47
    },

    // School of Basic Medical Science (SBMS)
    {
        name: "Bachelor of Medicine and Surgery",
        code: "MBBS",
        school: "School of Basic Medical Science (SBMS)",
        subjects: ["English", "Physics", "Chemistry", "Biology"],
        requiredSubjects: ["English", "Physics", "Chemistry", "Biology"],
        alternativeSubjects: [],
        aggregateScore: 70
    },
    {
        name: "Public Health",
        code: "PBH",
        school: "School of Basic Medical Science (SBMS)",
        subjects: ["English", "Physics", "Chemistry", "Biology"],
        requiredSubjects: ["English", "Physics", "Chemistry", "Biology"],
        alternativeSubjects: [],
        aggregateScore: 65
    },
    {
        name: "Human Anatomy",
        code: "ANA",
        school: "School of Basic Medical Science (SBMS)",
        subjects: ["English", "Physics", "Chemistry", "Biology"],
        requiredSubjects: ["English", "Physics", "Chemistry", "Biology"],
        alternativeSubjects: [],
        aggregateScore: 58
    },
    {
        name: "Medical Laboratory Science",
        code: "MLS",
        school: "School of Basic Medical Science (SBMS)",
        subjects: ["English", "Physics", "Chemistry", "Biology"],
        requiredSubjects: ["English", "Physics", "Chemistry", "Biology"],
        alternativeSubjects: [],
        aggregateScore: 67
    },
    {
        name: "Physiology",
        code: "PHS",
        school: "School of Basic Medical Science (SBMS)",
        subjects: ["English", "Physics", "Chemistry", "Biology"],
        requiredSubjects: ["English", "Physics", "Chemistry", "Biology"],
        alternativeSubjects: [],
        aggregateScore: 58
    },

    // School of Earth and Mineral Science (SEMS)
    {
        name: "Applied Geophysics",
        code: "AGP",
        school: "School of Earth and Mineral Science (SEMS)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 47
    },
    {
        name: "Applied Geology",
        code: "GY",
        school: "School of Earth and Mineral Science (SEMS)",
        subjects: ["English", "Physics", "Chemistry", "Mathematics", "Biology"],
        requiredSubjects: ["English", "Physics", "Chemistry"],
        alternativeSubjects: [["Mathematics", "Biology"]],
        aggregateScore: 47
    },
    {
        name: "Marine Science and Technology",
        code: "MST",
        school: "School of Earth and Mineral Science (SEMS)",
        subjects: ["English", "Physics", "Chemistry", "Biology", "Mathematics"],
        requiredSubjects: ["English", "Physics", "Chemistry"],
        alternativeSubjects: [["Biology", "Mathematics"]],
        aggregateScore: 48
    },
    {
        name: "Remote Sensing and Geoscience",
        code: "RSG",
        school: "School of Earth and Mineral Science (SEMS)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry", "Geography"],
        requiredSubjects: ["English", "Physics", "Mathematics"],
        alternativeSubjects: [["Chemistry", "Geography"]],
        aggregateScore: 48
    },
    {
        name: "Meteorology and Climate Science",
        code: "MCS",
        school: "School of Earth and Mineral Science (SEMS)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry", "Geography"],
        requiredSubjects: ["English", "Physics", "Mathematics"],
        alternativeSubjects: [["Chemistry", "Geography"]],
        aggregateScore: 47
    },

    // School of Electrical Systems Engineering (SESE)
    {
        name: "Mechatronics Engineering",
        code: "MCE",
        school: "School of Electrical Systems Engineering (SESE)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 60
    },
    {
        name: "Computer Engineering",
        code: "CPE",
        school: "School of Electrical Systems Engineering (SESE)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 70
    },
    {
        name: "Electrical and Electronics Engineering",
        code: "EEE",
        school: "School of Electrical Systems Engineering (SESE)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 74
    },
    {
        name: "Information and Communication Engineering",
        code: "ICE",
        school: "School of Electrical Systems Engineering (SESE)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 54
    },
    {
        name: "Biomedical Engineering",
        code: "BME",
        school: "School of Electrical Systems Engineering (SESE)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry", "Biology"],
        requiredSubjects: ["English", "Physics", "Mathematics"],
        alternativeSubjects: [["Chemistry", "Biology"]],
        aggregateScore: 53
    },

    // School of Environmental Technology (SET)
    {
        name: "Architecture",
        code: "ARC",
        school: "School of Environmental Technology (SET)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry", "Geography"],
        requiredSubjects: ["English", "Physics", "Mathematics"],
        alternativeSubjects: [["Chemistry", "Geography"]],
        aggregateScore: 72
    },
    {
        name: "Building Technology",
        code: "BDG",
        school: "School of Environmental Technology (SET)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 55
    },
    {
        name: "Estate Management",
        code: "ESM",
        school: "School of Environmental Technology (SET)",
        subjects: ["English", "Mathematics", "Economics", "Geography", "Chemistry"],
        requiredSubjects: ["English", "Mathematics", "Economics"],
        alternativeSubjects: [["Geography", "Chemistry"]],
        aggregateScore: 48
    },
    {
        name: "Industrial Design",
        code: "IDD",
        school: "School of Environmental Technology (SET)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry", "Technical Drawing"],
        requiredSubjects: ["English", "Mathematics", "Physics"],
        alternativeSubjects: [["Chemistry", "Technical Drawing"]],
        aggregateScore: 53
    },
    {
        name: "Quantity Surveying",
        code: "QSV",
        school: "School of Environmental Technology (SET)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry", "Economics"],
        requiredSubjects: ["English", "Physics", "Mathematics"],
        alternativeSubjects: [["Chemistry", "Economics"]],
        aggregateScore: 57
    },
    {
        name: "Surveying and Geo-Informatics",
        code: "SVG",
        school: "School of Environmental Technology (SET)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry", "Geography"],
        requiredSubjects: ["English", "Physics", "Mathematics"],
        alternativeSubjects: [["Chemistry", "Geography"]],
        aggregateScore: 63
    },
    {
        name: "Urban and Regional Planning",
        code: "URP",
        school: "School of Environmental Technology (SET)",
        subjects: ["English", "Mathematics", "Geography", "Economics", "Chemistry"],
        requiredSubjects: ["English", "Mathematics", "Geography"],
        alternativeSubjects: [["Economics", "Chemistry"]],
        aggregateScore: 50
    },
    {
        name: "Textile Design Technology",
        code: "TDT",
        school: "School of Environmental Technology (SET)",
        subjects: ["English", "Chemistry", "Mathematics", "Physics", "Biology"],
        requiredSubjects: ["English", "Chemistry", "Mathematics"],
        alternativeSubjects: [["Physics", "Biology"]],
        aggregateScore: 50
    },

    // School of Infrastructure, Minerals and Manufacturing Engineering (SIMME)
    {
        name: "Mechanical Engineering",
        code: "MEE",
        school: "School of Infrastructure, Minerals and Manufacturing Engineering (SIMME)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 72
    },
    {
        name: "Civil Engineering",
        code: "CVE",
        school: "School of Infrastructure, Minerals and Manufacturing Engineering (SIMME)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 73
    },
    {
        name: "Metallurgical and Materials Engineering",
        code: "MME",
        school: "School of Infrastructure, Minerals and Manufacturing Engineering (SIMME)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 55
    },
    {
        name: "Industrial and Production Engineering",
        code: "IPE",
        school: "School of Infrastructure, Minerals and Manufacturing Engineering (SIMME)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 48
    },
    {
        name: "Chemical Engineering",
        code: "CEE",
        school: "School of Infrastructure, Minerals and Manufacturing Engineering (SIMME)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 50
    },
    {
        name: "Agricultural Engineering",
        code: "AGE",
        school: "School of Infrastructure, Minerals and Manufacturing Engineering (SIMME)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 54
    },
    {
        name: "Mining Engineering",
        code: "MNE",
        school: "School of Infrastructure, Minerals and Manufacturing Engineering (SIMME)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 53
    },

    // School of Logistics and Innovative Technology (SLIT)
    {
        name: "Entrepreneurship",
        code: "ENT",
        school: "School of Logistics and Innovative Technology (SLIT)",
        subjects: ["English", "Mathematics", "Economics", "Commerce", "Government"],
        requiredSubjects: ["English", "Mathematics", "Economics"],
        alternativeSubjects: [["Commerce", "Government"]],
        aggregateScore: 46.5
    },
    {
        name: "Business and Information Technology",
        code: "BIT",
        school: "School of Logistics and Innovative Technology (SLIT)",
        subjects: ["English", "Mathematics", "Economics", "Commerce", "Physics"],
        requiredSubjects: ["English", "Mathematics", "Economics"],
        alternativeSubjects: [["Commerce", "Physics"]],
        aggregateScore: 47
    },
    {
        name: "Logistics and Transport Technology",
        code: "LTT",
        school: "School of Logistics and Innovative Technology (SLIT)",
        subjects: ["English", "Mathematics", "Economics", "Geography", "Physics"],
        requiredSubjects: ["English", "Mathematics", "Economics"],
        alternativeSubjects: [["Geography", "Physics"]],
        aggregateScore: 47
    },
    {
        name: "Security and Information Management Technology",
        code: "SIMT",
        school: "School of Logistics and Innovative Technology (SLIT)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry", "Economics"],
        requiredSubjects: ["English", "Mathematics", "Physics"],
        alternativeSubjects: [["Chemistry", "Economics"]],
        aggregateScore: 47
    },
    {
        name: "Project Management Technology",
        code: "PMT",
        school: "School of Logistics and Innovative Technology (SLIT)",
        subjects: ["English", "Mathematics", "Economics", "Geography", "Chemistry"],
        requiredSubjects: ["English", "Mathematics", "Economics"],
        alternativeSubjects: [["Geography", "Chemistry"]],
        aggregateScore: 48
    },

    // School of Life Science (SLS)
    {
        name: "Biology",
        code: "BIO",
        school: "School of Life Science (SLS)",
        subjects: ["English", "Biology", "Chemistry", "Physics", "Mathematics"],
        requiredSubjects: ["English", "Biology", "Chemistry"],
        alternativeSubjects: [["Physics", "Mathematics"]],
        aggregateScore: 49
    },
    {
        name: "Microbiology",
        code: "MCB",
        school: "School of Life Science (SLS)",
        subjects: ["English", "Biology", "Chemistry", "Physics", "Mathematics"],
        requiredSubjects: ["English", "Biology", "Chemistry"],
        alternativeSubjects: [["Physics", "Mathematics"]],
        aggregateScore: 60
    },
    {
        name: "Biochemistry",
        code: "BCH",
        school: "School of Life Science (SLS)",
        subjects: ["English", "Biology", "Chemistry", "Physics", "Mathematics"],
        requiredSubjects: ["English", "Biology", "Chemistry"],
        alternativeSubjects: [["Physics", "Mathematics"]],
        aggregateScore: 63
    },
    {
        name: "Biotechnology",
        code: "BTH",
        school: "School of Life Science (SLS)",
        subjects: ["English", "Biology", "Chemistry", "Physics", "Mathematics"],
        requiredSubjects: ["English", "Biology", "Chemistry"],
        alternativeSubjects: [["Physics", "Mathematics"]],
        aggregateScore: 55
    },
    {
        name: "Animal and Environmental Biology",
        code: "AEB",
        school: "School of Life Science (SLS)",
        subjects: ["English", "Biology", "Chemistry", "Physics", "Mathematics"],
        requiredSubjects: ["English", "Biology", "Chemistry"],
        alternativeSubjects: [["Physics", "Mathematics"]],
        aggregateScore: 47
    },
    {
        name: "Plant Biology",
        code: "PLB",
        school: "School of Life Science (SLS)",
        subjects: ["English", "Biology", "Chemistry", "Physics", "Mathematics"],
        requiredSubjects: ["English", "Biology", "Chemistry"],
        alternativeSubjects: [["Physics", "Mathematics"]],
        aggregateScore: 47
    },

    // School of Computing (SOC)
    {
        name: "Information System",
        code: "IFS",
        school: "School of Computing (SOC)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry", "Economics"],
        requiredSubjects: ["English", "Mathematics", "Physics"],
        alternativeSubjects: [["Chemistry", "Economics"]],
        aggregateScore: 63
    },
    {
        name: "Cyber Security",
        code: "CYS",
        school: "School of Computing (SOC)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry"],
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 65
    },
    {
        name: "Information Technology",
        code: "IFT",
        school: "School of Computing (SOC)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry"],
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 63
    },
    {
        name: "Software Engineering",
        code: "SEN",
        school: "School of Computing (SOC)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry"],
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 64
    },
    {
        name: "Data Science",
        code: "DTS",
        school: "School of Computing (SOC)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry", "Economics"],
        requiredSubjects: ["English", "Mathematics", "Physics"],
        alternativeSubjects: [["Chemistry", "Economics"]],
        aggregateScore: 62
    },
    {
        name: "Computer Science",
        code: "CSC",
        school: "School of Computing (SOC)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry"],
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 66
    },

    // School of Physical Science (SPS)
    {
        name: "Mathematical Science",
        code: "MTS",
        school: "School of Physical Science (SPS)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry"],
        requiredSubjects: ["English", "Mathematics", "Physics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 57
    },
    {
        name: "Physics Electronics",
        code: "PHY",
        school: "School of Physical Science (SPS)",
        subjects: ["English", "Physics", "Mathematics", "Chemistry"],
        requiredSubjects: ["English", "Physics", "Mathematics", "Chemistry"],
        alternativeSubjects: [],
        aggregateScore: 48
    },
    {
        name: "Industrial Chemistry",
        code: "CHE",
        school: "School of Physical Science (SPS)",
        subjects: ["English", "Chemistry", "Mathematics", "Physics", "Biology"],
        requiredSubjects: ["English", "Chemistry", "Mathematics"],
        alternativeSubjects: [["Physics", "Biology"]],
        aggregateScore: 48
    },
    {
        name: "Statistics",
        code: "STA",
        school: "School of Physical Science (SPS)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry", "Economics"],
        requiredSubjects: ["English", "Mathematics", "Physics"],
        alternativeSubjects: [["Chemistry", "Economics"]],
        aggregateScore: 47
    },
    {
        name: "Library and Information Science",
        code: "LIS",
        school: "School of Physical Science (SPS)",
        subjects: ["English", "Mathematics", "Economics", "Literature", "Government"],
        requiredSubjects: ["English", "Mathematics", "Economics"],
        alternativeSubjects: [["Literature", "Government"]],
        aggregateScore: 47
    },
    {
        name: "Educational Technology",
        code: "EDT",
        school: "School of Physical Science (SPS)",
        subjects: ["English", "Mathematics", "Physics", "Chemistry", "Biology"],
        requiredSubjects: ["English", "Mathematics", "Physics"],
        alternativeSubjects: [["Chemistry", "Biology"]],
        aggregateScore: 47
    }
];

// Course matching logic
function checkSubjectMatch(userSubjects, course) {
    // Check if all required subjects are present
    for (let required of course.requiredSubjects) {
        if (!userSubjects.includes(required)) {
            return false;
        }
    }

    // Check alternative subjects
    for (let alternativeGroup of course.alternativeSubjects) {
        let hasAlternative = false;
        for (let alternative of alternativeGroup) {
            if (userSubjects.includes(alternative)) {
                hasAlternative = true;
                break;
            }
        }
        if (!hasAlternative) {
            return false;
        }
    }

    return true;
}

function findMatchingCourses(userSubjects, userAggregate) {
    const matchingCourses = [];

    for (let course of futaCourses) {
        // Check subject combination match
        if (checkSubjectMatch(userSubjects, course)) {
            // Check if user's aggregate meets the minimum requirement
            if (userAggregate >= course.aggregateScore) {
                matchingCourses.push(course);
            }
        }
    }

    // Sort by aggregate score (lower scores first, meaning easier to get into)
    matchingCourses.sort((a, b) => a.aggregateScore - b.aggregateScore);

    return matchingCourses;
}

function formatSubjectCombination(course) {
    let combination = [...course.requiredSubjects];
    
    for (let alternativeGroup of course.alternativeSubjects) {
        combination.push(alternativeGroup.join('/'));
    }
    
    return combination.join(', ');
}

function displayResults(courses) {
    const resultsDiv = document.getElementById('results');
    const noResultsDiv = document.getElementById('noResults');
    const coursesListDiv = document.getElementById('coursesList');

    if (courses.length === 0) {
        resultsDiv.style.display = 'none';
        noResultsDiv.style.display = 'block';
        noResultsDiv.classList.add('fade-in');
        return;
    }

    noResultsDiv.style.display = 'none';
    coursesListDiv.innerHTML = '';

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        courseCard.innerHTML = `
            <div class="course-name">${course.name}</div>
            <div class="course-code">${course.code}</div>
            <div class="course-info">
                <div class="school-name">${course.school}</div>
                <div class="aggregate-info">Minimum Aggregate: ~${course.aggregateScore}</div>
            </div>
            <div class="subject-combination">
                <h4>Required Subject Combination:</h4>
                <div class="subjects">${formatSubjectCombination(course)}</div>
            </div>
        `;
        
        coursesListDiv.appendChild(courseCard);
    });

    resultsDiv.style.display = 'block';
    resultsDiv.classList.add('fade-in');
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

function validateForm() {
    const subjects = [
        document.getElementById('subject1').value,
        document.getElementById('subject2').value,
        document.getElementById('subject3').value,
        document.getElementById('subject4').value
    ];

    const aggregate = document.getElementById('aggregate').value;

    // Check if all subjects are selected
    if (subjects.some(subject => subject === '')) {
        alert('Please select all four subjects.');
        return false;
    }

    // Check for duplicate subjects
    const uniqueSubjects = new Set(subjects);
    if (uniqueSubjects.size !== subjects.length) {
        alert('Please select four different subjects. You cannot select the same subject twice.');
        return false;
    }

    // Check if aggregate is provided
    if (!aggregate || aggregate < 0 || aggregate > 100) {
        alert('Please enter a valid aggregate score between 0 and 100.');
        return false;
    }

    return true;
}

// Aggregate Calculator Functions
function calculateFUTAAggregate(utmeScore, olevelGrades) {
    // UTME calculation (75%)
    const utmePercentage = (utmeScore / 400) * 75;
    
    // O'Level calculation (25%)
    const olevelSum = olevelGrades.reduce((sum, grade) => sum + grade, 0);
    const olevelAverage = olevelSum / 5;
    const olevelPercentage = (olevelAverage / 100) * 25;
    
    // Final aggregate
    const aggregate = utmePercentage + olevelPercentage;
    
    return {
        utmePercentage: utmePercentage.toFixed(3),
        olevelPercentage: olevelPercentage.toFixed(3),
        aggregate: aggregate.toFixed(3)
    };
}

function validateCalculatorForm() {
    const utmeScore = document.getElementById('utmeScore').value;
    const grades = [
        document.getElementById('english').value,
        document.getElementById('mathematics').value,
        document.getElementById('subject3Grade').value,
        document.getElementById('subject4Grade').value,
        document.getElementById('subject5Grade').value
    ];

    // Check UTME score
    if (!utmeScore || utmeScore < 0 || utmeScore > 400) {
        alert('Please enter a valid UTME score between 0 and 400.');
        return false;
    }

    // Check if all grades are selected
    if (grades.some(grade => grade === '')) {
        alert('Please select grades for all 5 O\'Level subjects.');
        return false;
    }

    return true;
}

function displayCalculatorResult(result) {
    const resultDiv = document.getElementById('calculatorResult');
    const utmePercentageSpan = document.getElementById('utmePercentage');
    const olevelPercentageSpan = document.getElementById('olevelPercentage');
    const finalAggregateSpan = document.getElementById('finalAggregate');

    utmePercentageSpan.textContent = result.utmePercentage + '%';
    olevelPercentageSpan.textContent = result.olevelPercentage + '%';
    finalAggregateSpan.textContent = result.aggregate + '%';

    resultDiv.style.display = 'block';
    resultDiv.classList.add('fade-in');
    
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    // Calculator form handler
    const calculatorForm = document.getElementById('aggregateCalculatorForm');
    
    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateCalculatorForm()) {
            return;
        }

        // Show loading state
        const calculateBtn = document.querySelector('.calculate-btn');
        const originalText = calculateBtn.textContent;
        calculateBtn.innerHTML = '<span class="loading"></span>Calculating...';
        calculateBtn.disabled = true;

        // Simulate loading delay for better UX
        setTimeout(() => {
            const utmeScore = parseFloat(document.getElementById('utmeScore').value);
            const olevelGrades = [
                parseFloat(document.getElementById('english').value),
                parseFloat(document.getElementById('mathematics').value),
                parseFloat(document.getElementById('subject3Grade').value),
                parseFloat(document.getElementById('subject4Grade').value),
                parseFloat(document.getElementById('subject5Grade').value)
            ];

            const result = calculateFUTAAggregate(utmeScore, olevelGrades);
            displayCalculatorResult(result);

            // Reset button
            calculateBtn.textContent = originalText;
            calculateBtn.disabled = false;
        }, 1000);
    });

    // Use calculated score button handler
    document.getElementById('useCalculatedScore').addEventListener('click', function() {
        const finalAggregate = document.getElementById('finalAggregate').textContent;
        const aggregateValue = parseFloat(finalAggregate.replace('%', ''));
        
        // Set the aggregate input in the course finder form
        document.getElementById('aggregate').value = aggregateValue;
        
        // Scroll to course finder form
        document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
        
        // Optional: Add visual feedback
        const aggregateInput = document.getElementById('aggregate');
        aggregateInput.style.border = '2px solid #2ecc71';
        aggregateInput.style.boxShadow = '0 0 0 3px rgba(46, 204, 113, 0.2)';
        
        setTimeout(() => {
            aggregateInput.style.border = '2px solid #e0e6ed';
            aggregateInput.style.boxShadow = 'none';
        }, 2000);
    });

    // Course finder form handler
    const form = document.getElementById('courseFinderForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // Show loading state
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span>Finding Courses...';
        submitBtn.disabled = true;

        // Simulate loading delay for better UX
        setTimeout(() => {
            const userSubjects = [
                document.getElementById('subject1').value,
                document.getElementById('subject2').value,
                document.getElementById('subject3').value,
                document.getElementById('subject4').value
            ];

            const userAggregate = parseFloat(document.getElementById('aggregate').value);

            const matchingCourses = findMatchingCourses(userSubjects, userAggregate);
            displayResults(matchingCourses);

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });

    // Subject selection change handlers to prevent duplicates
    const subjectSelects = ['subject1', 'subject2', 'subject3', 'subject4'];
    
    subjectSelects.forEach(selectId => {
        document.getElementById(selectId).addEventListener('change', function() {
            updateSubjectOptions();
        });
    });
});

function updateSubjectOptions() {
    const selects = ['subject1', 'subject2', 'subject3', 'subject4'];
    const selectedValues = selects.map(id => document.getElementById(id).value);
    
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        const currentValue = select.value;
        const options = select.querySelectorAll('option');
        
        options.forEach(option => {
            if (option.value === '') return; // Skip the default option
            
            if (selectedValues.includes(option.value) && option.value !== currentValue) {
                option.disabled = true;
                option.style.color = '#ccc';
            } else {
                option.disabled = false;
                option.style.color = '';
            }
        });
    });
}