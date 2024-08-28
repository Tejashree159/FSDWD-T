let myResume = {
  "basics": {
    "name": "Tejashree C",
    "email": "tejashreechandraprakash@gmail.com",
    "phone": 6369880133,
    "degree": "B.E",
    "location": {
      "address": "K.K.Nagar",
      "postalCode": 600078,
      "city": "Chennai",
      "state": "Tamilnadu",
      "country": "India"
    }
  },
  "education": [
    {
      "institution": "Easwari Engineering College",
      "department": "MComputer Science",
      "studyType": "fulltime",
      "batch start year": 2020,
      "batch end year": 2024,
      "gpa": 8.6
    }
  ],
  "skills": [
    {
      "name": "python,c",
      "level": "beginner",
      "project": [
        "ATM and POS Security"
      ]
    }
  ],
  "languages": [
    {
      "language": "Tamil,English"
    }
  ],
  "interests": [
    {
      "name": "Singing, Drawing"
    }
  ]
};

// Using `for` loop for `education`
console.log("Using `for` loop:");
for (let i = 0; i < myResume.education.length; i++) {
  const edu = myResume.education[i];
  console.log(`Institution: ${edu.institution}`);
  console.log(`Department: ${edu.department}`);
  console.log(`Study Type: ${edu.studyType}`);
  console.log(`Batch Start Year: ${edu["batch start year"]}`);
  console.log(`Batch End Year: ${edu["batch end year"]}`);
  console.log(`GPA: ${edu.gpa}`);
}

// Using `forEach` method for `skills`
console.log("\nUsing `forEach` method:");
myResume.skills.forEach(skill => {
  console.log(`Skill Name: ${skill.name}`);
  console.log(`Skill Level: ${skill.level}`);
  skill.project.forEach(proj => console.log(`Project: ${proj}`));
});

// Using `for...in` loop for `basics`
console.log("\nUsing `for...in` loop:");
for (let key in myResume.basics) {
  if (key === 'location') {
    console.log(`${key}:`);
    for (let locKey in myResume.basics[key]) {
      console.log(`  ${locKey}: ${myResume.basics[key][locKey]}`);
    }
  } else {
    console.log(`${key}: ${myResume.basics[key]}`);
  }
}

// Using `for...of` loop for `languages`
console.log("\nUsing `for...of` loop:");
for (const lang of myResume.languages) {
  console.log(`Language: ${lang.language}`);
}
