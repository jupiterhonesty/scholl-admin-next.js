const updatedUser = {
  id: '1232',
  active: false,
  studentInformation: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    gender: 'Male',
  },
  contactInformation: {
    phone: '7865645859',
    addressLine1: '1234 Test Lane',
    addressLine2: '',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757',
  },
  emailAddress: {
    email: 'test@email.com',
  },
  location: {
    locations: [
      {
        locationNickname: 'Disneyworld  Tutoring',
        locationName: 'House Of Mouse',
      },
      {
        locationNickname: 'TutorZone Austin',
        locationName: 'We Teach Real Good',
      },
      {
        locationNickname: 'TutorZone Miami',
        locationName: 'We Teach Even Better',
      },
    ],
  },
  instructor: {
    instructors: [
      {
        firstName: 'John',
        lastName: 'Jackson',
        email: 'john-jackson@email.com',
      },
      {
        firstName: 'Jennifer',
        lastName: 'Ownerson',
        email: 'jennifern@ownerson.com',
      },
    ],
  },
  course: {
    classes: [],
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1234',
    highSchool: 'Everglades High',
    graduationYear: '2018',
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false,
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017',
  },
  accountType: {
    licenseType: 'classMember',
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '77',
    improvement: '82',
    lessons: '73',
    instruction: '68',
    practiceTests: '47',
  },
  overdueWork: {
    lessons: '12',
    worksheets: '3',
    quizzes: '1',
    practiceTests: '5',
  },
  summary: {
    questionsAnswered: '791',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77',
  },
  testScores: {
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218',
    },
    subjectScores: {
      reading: '28',
      writing: '34',
      math: '29',
      composite: '195',
      totalPossible: '40',
    },
    totalScore: '1480',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800',
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8',
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15',
    },
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12',
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12',
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13',
        },
      },
    },
    mathCalculator: {
      sampleAnswers: [
        {
          id: 11,
          topic: 'topic1',
          problem: 1,
          answer: "A",
          studentChoice: "B",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: true,
          tutorNotes: "work and study hard",
        },
        {
          id: 12,
          topic: 'topic2',
          problem: 1,
          answer: "B",
          studentChoice: "B",
          correct: true,
          status: 'E',
          flagged: false,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 13,
          topic: 'topic3',
          problem: 1,
          answer: "C",
          studentChoice: "",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 14,
          topic: 'topic4',
          problem: 1,
          answer: "D",
          studentChoice: "A",
          correct: true,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 21,
          topic: 'topic1',
          problem: 1,
          answer: "A",
          studentChoice: "B",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: true,
          tutorNotes: "work and study hard",
        },
        {
          id: 22,
          topic: 'topic2',
          problem: 1,
          answer: "B",
          studentChoice: "B",
          correct: true,
          status: 'E',
          flagged: false,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 23,
          topic: 'topic3',
          problem: 1,
          answer: "C",
          studentChoice: "",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 24,
          topic: 'topic4',
          problem: 1,
          answer: "D",
          studentChoice: "A",
          correct: true,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 25,
          topic: 'topic4',
          problem: 1,
          answer: "D",
          studentChoice: "",
          correct: true,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
      ],
    },
    mathNoCalc: {
      sampleAnswers: [
        {
          id: 11,
          topic: 'topic1',
          problem: 1,
          answer: "B",
          studentChoice: "A",
          correct: false,
          status: 'E',
          flagged: false,
          reviewed: true,
          tutorNotes: "work and study hard",
        },
        {
          id: 12,
          topic: 'topic2',
          problem: 1,
          answer: "A",
          studentChoice: "",
          correct: true,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 13,
          topic: 'topic3',
          problem: 1,
          answer: "C",
          studentChoice: "",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 14,
          topic: 'topic4',
          problem: 1,
          answer: "D",
          studentChoice: "D",
          correct: true,
          status: 'E',
          flagged: false,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 21,
          topic: 'topic1',
          problem: 1,
          answer: "A",
          studentChoice: "B",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: true,
          tutorNotes: "work and study hard",
        },
        {
          id: 22,
          topic: 'topic2',
          problem: 1,
          answer: "B",
          studentChoice: "B",
          correct: true,
          status: 'E',
          flagged: false,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 23,
          topic: 'topic3',
          problem: 1,
          answer: "C",
          studentChoice: "",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 24,
          topic: 'topic4',
          problem: 1,
          answer: "D",
          studentChoice: "A",
          correct: true,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 25,
          topic: 'topic4',
          problem: 1,
          answer: "D",
          studentChoice: "",
          correct: true,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
      ],
    },
    writing: {
      sampleAnswers: [
        {
          id: 11,
          numeric: false,
          topic: 'writing',
          problem: 1,
          answer: "B",
          studentChoice: "",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 12,
          numeric: false,
          topic: 'writing',
          problem: 2,
          answer: "D",
          studentChoice: "D",
          correct: true,
          status: 'M',
          flagged: false,
          reviewed: false,
          studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
          tutorNotes: "work and study hard",
        },
        {
          id: 13,
          numeric: true,
          topic: 'writing',
          problem: 3,
          answer: 1492,
          studentChoice: 1492,
          correct: true,
          status: 'M',
          flagged: false,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 14,
          numeric: true,
          topic: 'writing',
          problem: 4,
          answer: 1.25,
          studentChoice: 5.71,
          correct: false,
          status: 'E  ',
          flagged: false,
          reviewed: false,
          tutorNotes: "work and study hard",
        },{
          id: 21,
          numeric: false,

          topic: 'topic1',
          problem: 1,
          answer: "A",
          studentChoice: "B",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: true,
          tutorNotes: "work and study hard",
        },
        {
          id: 22,
          numeric: false,
          topic: 'topic2',
          problem: 1,
          answer: "B",
          studentChoice: "B",
          correct: true,
          status: 'E',
          flagged: false,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 23,
          numeric: false,
          topic: 'topic3',
          problem: 1,
          answer: "C",
          studentChoice: "",
          correct: false,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 24,
          numeric: false,
          topic: 'topic4',
          problem: 1,
          answer: "D",
          studentChoice: "A",
          correct: true,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
        {
          id: 25,
          numeric: false,
          opic: 'topic4',
          problem: 1,
          answer: "D",
          studentChoice: "",
          correct: true,
          status: 'E',
          flagged: true,
          reviewed: false,
          tutorNotes: "work and study hard",
        },
      ],
    },
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52',
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52',
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52',
    },
  },
  lessons: [
    {
      subject: 'Reading',
      unitNumber: '2',
      lessonName: 'Reading Something 1',
      assigned: false,
      alerts: [],
      lessonType: 'Challenge + Practice',
      totalProblems: '20',
      solvedProblems: '',
      passage: '128',
      dueDate: '4/2/2019',
      dueTime: '4:20 PM',
      completed: false,
      availableDate: '',
      completionDate: '',
      completionTime: '',
      completedLate: false,
      overdue: false,
    },
    {
      subject: 'Math',
      unitNumber: '4',
      lessonName: 'Pythagorean Theorem',
      assigned: true,
      alerts: [],
      lessonType: 'Challenge + Practice',
      totalProblems: '16',
      solvedProblems: '3',
      passage: '132',
      dueDate: '4/2/2019',
      dueTime: '4:00 PM',
      completed: true,
      availableDate: '',
      completionDate: '12/01/18',
      completionTime: '2:21 PM',
      completedLate: true,
      overdue: false,
    },
    {
      subject: 'Reading',
      unitNumber: '3',
      lessonName: 'More Reading Stuff',
      assigned: true,
      alerts: [{}, {}, {}, {}, {}],
      lessonType: 'Read from the Book',
      totalProblems: '20',
      solvedProblems: '10',
      passage: '141',
      dueDate: '4/2/2019',
      dueTime: '4:00 PM',
      completed: true,
      availableDate: '',
      completionDate: '04/15/19',
      completionTime: '7:34 PM',
      completedLate: true,
      overdue: false,
    },
    {
      subject: 'Reading',
      unitNumber: '6',
      lessonName: 'Reading Someing 7',
      assigned: false,
      alerts: [],
      lessonType: 'Challenge + Practice',
      totalProblems: '17',
      solvedProblems: '',
      passage: '127',
      dueDate: '12/4/2018',
      dueTime: '',
      completed: false,
      availableDate: '11/30/2018',
      completionDate: '',
      completionTime: '',
      completedLate: false,
      overdue: false,
    },
    {
      subject: 'Reading',
      unitNumber: '4',
      lessonName: 'Reading Someing 4',
      assigned: false,
      alerts: [],
      lessonType: 'Challenge + Practice',
      totalProblems: '19',
      solvedProblems: '',
      passage: '120',
      dueDate: '12/4/2018',
      dueTime: '',
      completed: false,
      availableDate: '',
      completionDate: '',
      completionTime: '',
      completedLate: false,
      overdue: true,
    },
    {
      subject: 'Reading',
      unitNumber: '9',
      lessonName: 'Reading Someing 9',
      assigned: false,
      alerts: [],
      lessonType: 'Challenge + Practice',
      totalProblems: '22',
      solvedProblems: '',
      passage: '141',
      dueDate: '12/23/2018',
      dueTime: '',
      completed: false,
      availableDate: '',
      completionDate: '',
      completionTime: '',
      completedLate: false,
      overdue: false,
    },
    {
      subject: 'Reading',
      unitNumber: '1',
      lessonName: 'Reading Someing 1',
      assigned: false,
      alerts: [],
      lessonType: 'Challenge + Practice',
      totalProblems: '29',
      solvedProblems: '',
      passage: '136',
      dueDate: '',
      dueTime: '',
      completed: false,
      availableDate: '',
      completionDate: '',
      completionTime: '',
      completedLate: false,
      overdue: false,
    },
    {
      subject: 'Writing',
      unitNumber: '5',
      lessonName: 'Writing Lesson 5',
      assigned: true,
      alerts: [{}, {}],
      lessonType: 'Drill',
      totalProblems: '14',
      solvedProblems: '14',
      passage: '117',
      dueDate: '11/23/18',
      dueTime: '',
      completed: true,
      availableDate: '',
      completionDate: '11/23/18',
      completionTime: '4:21 PM',
      completedLate: false,
      overdue: false,
    },
  ],
};

export default updatedUser;
