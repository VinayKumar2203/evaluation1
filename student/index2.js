// Constructor function for Student details
function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
  
    // Function method to print top three subject names based on marks
    this.printTop3Subjects = function () {
      // Sort subjects based on marks
      const sortedSubjects = Object.keys(this.marks_of_5_subjects).sort(
        (a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]
      );
  
      // Print top three subjects
      console.log("Top 3 Subjects:");
      for (let i = 0; i < 3; i++) {
        console.log(sortedSubjects[i]);
      }
    };
  
    // Function method to print the report card
    this.printReportCard = function () {
      console.log("+--------------------+");
      console.log("|     REPORT CARD    |");
      console.log("+--------------------+");
      console.log(`| Name     - ${this.name} |`);
      console.log(`| Roll no. - ${this.roll_no}      |`);
      console.log(`| Class    - ${this.class}       |`);
      console.log(`| Section  - ${this.section}       |`);
  
      // Print marks of each subject
      Object.keys(this.marks_of_5_subjects).forEach((subject) => {
        console.log(`| ${subject}  - ${this.marks_of_5_subjects[subject]}      |`);
      });
  
      // Calculate and print the percentage
      const totalMarks =
        this.marks_of_5_subjects.science +
        this.marks_of_5_subjects.maths +
        this.marks_of_5_subjects.social_science +
        this.marks_of_5_subjects.english +
        this.marks_of_5_subjects.hindi;
      const percentage = (totalMarks / 500) * 100;
      console.log(`| Percentage - ${percentage.toFixed(1)} %  |`);
      console.log("+--------------------+");
    };
  }
  
  // Example usage:
  const student1 = new Student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67,
  });
  
  // Print top 3 subjects
  student1.printTop3Subjects();
  
  // Print the report card
  student1.printReportCard();
  