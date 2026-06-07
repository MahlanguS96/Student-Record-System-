const studentName = "Sabelo Mahlangu";
const studentID = "SD-2026-001";
const age = 30;
let gradeLevel = 12;
const isEnrolled = true;
let homeTown = "Soshanguve";
const guardianName = "Phumzile Mahlangu";
let previousSchool;

console.log(studentName);
console.log(studentID);
console.log(age);
console.log(gradeLevel);
console.log(isEnrolled);
console.log(homeTown);
console.log(guardianName);
console.log(previousSchool);

console.log('---DATA TYPES ---');
console.log(typeof studentName);
console.log(typeof studentID);
console.log(typeof age);
console.log(typeof gradeLevel);
console.log(typeof isEnrolled);
console.log(typeof homeTown);
console.log(typeof guardianName);
console.log(typeof previousSchool);


let marksMaths = 54;
let marksEnglish = 80;
let marksHistory = 48;
let marksCoding = 69;
let marksScience = 77;

const totalMarks = marksMaths + marksEnglish + marksHistory + marksCoding + marksScience;
const averageMark = totalMarks /5;
const highestMark = Math.max(marksMaths,marksEnglish,marksHistory,marksCoding,marksScience);
const lowestMark = Math.min(marksMaths,marksEnglish,marksHistory,marksCoding,marksScience);
const markRange = highestMark - lowestMark;
const roundedAverage = Math.round(averageMark); 

console.log(`Total marks: ${totalMarks}`);
console.log(`Average: ${averageMark}`);
console.log(`Highest mark: ${highestMark}`);
console.log(`Lowest mark: ${lowestMark}`);
console.log(`Mark range: ${markRange}`);
console.log(`Rounded average: ${roundedAverage}`);


console.log('Maths before rerwite: ' +marksMaths );
marksMaths += 8;
console.log ('Maths after writing: ' +marksMaths );

const isPassing = averageMark >= 50;
const isDusk = averageMark >= 80;
const needsSupport = averageMark < 50;
const hasPerfectScore = highestMark === 100;
const isOfAge = age >= 18;
const isHighSchool = gradeLevel >= 10 && gradeLevel <= 12;


console.log('Is the student passing? ' + isPassing);
console.log('Is the student doing well? ' + isDusk);
console.log('Does the student need support? ' + needsSupport);
console.log('Does the student have a perfect score? ' + hasPerfectScore);
console.log('Is the student of age? ' + isOfAge);
console.log('Is the student in high school? ' + isHighSchool);

const canGetPrize = isPassing && isDusk;
const needsIntervene = needsSupport || lowestMark <40;
const notPassing     = !isPassing;
const fullEligibility = isEnrolled && isHighSchool && isPassing;



console.log('Can the student get a prize? ' + canGetPrize);
console.log('Does the student need intervention? ' + needsIntervene);
console.log('Is the student not passing? ' + notPassing);
console.log('Is the student fully eligible? ' + fullEligibility);

console.log(`=========================`);
console.log(`Student Name: ${studentName.toUpperCase()} | ID: ${studentID}`);
console.log(`==========================`);

console.log(`PERSONAL DETAILS:`);
console.log(`Age: ${age}`);
console.log(`Grade Level: ${gradeLevel}`);
console.log(`Home Town: ${homeTown}`);
console.log(`Enrolled: ${isEnrolled}`);

console.log(`--------------------------`);
console.log(`SUBJECT MARKS:`);
console.log(`Maths: ${marksMaths}`);
console.log(`English: ${marksEnglish}`);
console.log(`History: ${marksHistory}`);
console.log(`Coding: ${marksCoding}`);
console.log(`Science: ${marksScience}`);

console.log(`--------------------------`);

console.log(`ACADEMIC PERFORMANCE:`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Original Average Mark: ${averageMark}`);
console.log(`Rounded Average Mark: ${roundedAverage}`);
console.log(`Highest Mark: ${highestMark}`);
console.log(`Lowest Mark: ${lowestMark}`);
console.log(`Mark Range: ${markRange}`);
console.log(`--------------------------`);

console.log(`CONDITIONAL EVALUATIONS:`);
console.log(`isPassing: ${isPassing}`);
console.log(`isDusk: ${isDusk}`);
console.log(`needsSupport: ${needsSupport}`);
console.log(`fullEligibility: ${fullEligibility}`);

console.log(`==========================`);

console.log(`FOOTER - DATA TYPES`)
console.log(`Type of studentName: ${typeof studentName}`);
console.log(`Type of age: ${typeof age}`);
console.log(`Type of isEnrolled: ${typeof isEnrolled}`);

console.log(`============================`);
