let grade = [];
for (var i =1; i <= 100; i++) {
    grade.push(i);
}

grade = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ];


 function getAverage() {
    return Math.floor((Math.random() * 100) + 1);
}

function getRandom() {
    console.log(grade.reduce(getAverage));    
}



/*const grades = [Math.floor((Math.random() * 100) + 1)];
getGrades(grades);*/


function getGrades() {
    let average = getAverage();
      console.log(`Student average is  ${average}`);


    if (average <= 19) {
      console.log('Student Grade', 'F', '');
    }else if (average >= 80 && average <= 100) {
        console.log('Student Grade', 'A');
    } else if (average >= 60 && average <= 79) {
        console.log('Student Grade', 'B');
    } else if (average >= 40 && average <= 59) {
        console.log('Student Grade', 'C');
    }  else if (average >= 20 && average <= 39) {
      console.log('Student Grade', 'D');
    } 
  }

  getGrades();