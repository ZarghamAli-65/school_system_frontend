import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Part 1...");

  /* ---------------------------------------------------
      SUBJECTS
  ---------------------------------------------------- */

  const subjects = await Promise.all([
    prisma.subject.create({
      data: { name: "Math" },
    }),
    prisma.subject.create({
      data: { name: "Geometry" },
    }),
    prisma.subject.create({
      data: { name: "Physics" },
    }),
    prisma.subject.create({
      data: { name: "Chemistry" },
    }),
    prisma.subject.create({
      data: { name: "Biology" },
    }),
    prisma.subject.create({
      data: { name: "History" },
    }),
    prisma.subject.create({
      data: { name: "Music" },
    }),
    prisma.subject.create({
      data: { name: "English" },
    }),
    prisma.subject.create({
      data: { name: "Science" },
    }),
    prisma.subject.create({
      data: { name: "Social Studies" },
    }),
    prisma.subject.create({
      data: { name: "Art" },
    }),
  ]);

  const subjectMap = Object.fromEntries(
    subjects.map((s) => [s.name, s])
  );

  /* ---------------------------------------------------
      TEACHERS
  ---------------------------------------------------- */

  const zargham = await prisma.teacher.create({
    data: {
      teacherId: "1234567890-1",
      name: "Zargham Ali",
      email: "zarghamali065@gmail.com",
      phone: "1234567890",
      address: "Karachi",
      photo:
        "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  });

  const abdullah = await prisma.teacher.create({
    data: {
      teacherId: "1234567890-2",
      name: "Abdullah",
      email: "abdullah@gmail.com",
      phone: "1234567890",
      address: "Karachi",
      photo:
        "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  });

  const asad = await prisma.teacher.create({
    data: {
      teacherId: "1234567890-3",
      name: "Asad",
      email: "asad@gmail.com",
      phone: "1234567890",
      address: "Karachi",
      photo:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  });

  const hammad = await prisma.teacher.create({
    data: {
      teacherId: "1234567890-4",
      name: "Hammad",
      email: "hammad@gmail.com",
      phone: "1234567890",
      address: "Karachi",
      photo:
        "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  });

  const hassnain = await prisma.teacher.create({
    data: {
      teacherId: "1234567890-5",
      name: "Hassnain",
      email: "hassnain@gmail.com",
      phone: "1234567890",
      address: "Karachi",
      photo:
        "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  });

  /* ---------------------------------------------------
      CLASSES
  ---------------------------------------------------- */

  const class1A = await prisma.class.create({
    data: {
      name: "1A",
      capacity: 20,
      grade: 1,
      supervisor: "Zargham Ali",
    },
  });

  const class2B = await prisma.class.create({
    data: {
      name: "2B",
      capacity: 22,
      grade: 2,
      supervisor: "Aslam",
    },
  });

  const class3C = await prisma.class.create({
    data: {
      name: "3C",
      capacity: 20,
      grade: 3,
      supervisor: "Hunain",
    },
  });

  const class4B = await prisma.class.create({
    data: {
      name: "4B",
      capacity: 18,
      grade: 4,
      supervisor: "Ahmed",
    },
  });

  const class5A = await prisma.class.create({
    data: {
      name: "5A",
      capacity: 16,
      grade: 5,
      supervisor: "Ishtiaq",
    },
  });

  const class5B = await prisma.class.create({
    data: {
      name: "5B",
      capacity: 20,
      grade: 5,
      supervisor: "Sarfaraz",
    },
  });

  /* ---------------------------------------------------
      TEACHER SUBJECTS
  ---------------------------------------------------- */

  await prisma.teacherSubject.createMany({
    data: [
      {
        teacherId: zargham.id,
        subjectId: subjectMap["Math"].id,
      },
      {
        teacherId: zargham.id,
        subjectId: subjectMap["Geometry"].id,
      },

      {
        teacherId: abdullah.id,
        subjectId: subjectMap["Physics"].id,
      },
      {
        teacherId: abdullah.id,
        subjectId: subjectMap["Chemistry"].id,
      },

      {
        teacherId: asad.id,
        subjectId: subjectMap["Biology"].id,
      },

      {
        teacherId: hammad.id,
        subjectId: subjectMap["History"].id,
      },

      {
        teacherId: hassnain.id,
        subjectId: subjectMap["Music"].id,
      },
      {
        teacherId: hassnain.id,
        subjectId: subjectMap["History"].id,
      },
    ],
  });

  /* ---------------------------------------------------
      TEACHER CLASSES
  ---------------------------------------------------- */

  await prisma.teacherClass.createMany({
    data: [
      {
        teacherId: zargham.id,
        classId: class1A.id,
      },
      {
        teacherId: zargham.id,
        classId: class2B.id,
      },
      {
        teacherId: zargham.id,
        classId: class3C.id,
      },

      {
        teacherId: abdullah.id,
        classId: class5A.id,
      },
      {
        teacherId: abdullah.id,
        classId: class4B.id,
      },
      {
        teacherId: abdullah.id,
        classId: class3C.id,
      },

      {
        teacherId: asad.id,
        classId: class5A.id,
      },
      {
        teacherId: asad.id,
        classId: class4B.id,
      },
      {
        teacherId: asad.id,
        classId: class3C.id,
      },

      {
        teacherId: hammad.id,
        classId: class5A.id,
      },
      {
        teacherId: hammad.id,
        classId: class4B.id,
      },
      {
        teacherId: hammad.id,
        classId: class3C.id,
      },

      {
        teacherId: hassnain.id,
        classId: class5A.id,
      },
      {
        teacherId: hassnain.id,
        classId: class4B.id,
      },
      {
        teacherId: hassnain.id,
        classId: class3C.id,
      },
    ],
  });

  console.log("✅ Part 1 Seeded Successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  /* =====================================================
   PART 2A - PARENTS
===================================================== */

const parents = await Promise.all([
  prisma.parent.create({
    data: {
      name: "Zain",
      email: "zain@gmail.com",
      phone: "1234567890",
      address: "Karachi",
    },
  }),

  prisma.parent.create({
    data: {
      name: "Aslam",
      email: "aslam@gmail.com",
      phone: "1234567890",
      address: "Karachi",
    },
  }),

  prisma.parent.create({
    data: {
      name: "Minahil",
      email: "minahil@gmail.com",
      phone: "1234567890",
      address: "Karachi",
    },
  }),

  prisma.parent.create({
    data: {
      name: "Javeria",
      email: "javeria@gmail.com",
      phone: "1234567890",
      address: "Karachi",
    },
  }),

  prisma.parent.create({
    data: {
      name: "Amna",
      email: "amna@gmail.com",
      phone: "1234567890",
      address: "Karachi",
    },
  }),
]);

const parentMap = Object.fromEntries(
  parents.map((parent) => [parent.name, parent])
);

/* =====================================================
   CLASS LOOKUP
===================================================== */

const classes = await prisma.class.findMany();

const classMap = Object.fromEntries(
  classes.map((cls) => [cls.name, cls])
);

console.log("✅ Parents Created");

parentMap["Zain"]
parentMap["Aslam"]
parentMap["Minahil"]
parentMap["Javeria"]
parentMap["Amna"]

classMap["1A"]
classMap["2B"]
classMap["3C"]
classMap["4B"]
classMap["5A"]
classMap["5B"]



/* =====================================================
   PART 2B - STUDENTS
===================================================== */

await prisma.student.createMany({
  data: [
    {
      studentId: "STU001",
      name: "Ahmed",
      email: "ahmed@gmail.com",
      photo:
        "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      address: "Karachi",
      classId: classMap["1A"].id,
      parentId: parentMap["Zain"].id,
    },

    {
      studentId: "STU002",
      name: "Aslam",
      email: "aslam.student@gmail.com",
      photo:
        "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      address: "Karachi",
      classId: classMap["5A"].id,
      parentId: parentMap["Aslam"].id,
    },

    {
      studentId: "STU003",
      name: "Suhail",
      email: "suhail@gmail.com",
      photo:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      address: "Karachi",
      classId: classMap["5A"].id,
      parentId: parentMap["Minahil"].id,
    },

    {
      studentId: "STU004",
      name: "Bilal",
      email: "bilal@gmail.com",
      photo:
        "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      address: "Karachi",
      classId: classMap["5A"].id,
      parentId: parentMap["Javeria"].id,
    },

    {
      studentId: "STU005",
      name: "Tariq",
      email: "tariq@gmail.com",
      photo:
        "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      address: "Karachi",
      classId: classMap["5A"].id,
      parentId: parentMap["Amna"].id,
    },
  ],
});

console.log("✅ Students Created");



import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

// ---------- DATA (copied from your temporary data) ----------
export const teachersData = [
  {
    id: 1,
    teacherId: "1234567890",
    name: "Zargham Ali",
    email: "Zarghamali065@gmail.com",
    photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["1B", "2A", "3C"],
    address: "Karachi",
  },
  {
    id: 2,
    teacherId: "1234567890",
    name: "Abdullah",
    email: "abdullah@.com",
    photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics", "Chemistry"],
    classes: ["5A", "4B", "3C"],
    address: "Karachi",
  },
  {
    id: 3,
    teacherId: "1234567890",
    name: "asad ",
    email: "asad@.com",
    photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "Karachi",
  },
  {
    id: 4,
    teacherId: "1234567890",
    name: "Hammad",
    email: "hammad@gmail.com",
    photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["History"],
    classes: ["5A", "4B", "3C"],
    address: "Karachi",
  },
  {
    id: 5,
    teacherId: "1234567890",
    name: "Hassnain",
    email: "hassnain@gmail.com",
    photo: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Music", "History"],
    classes: ["5A", "4B", "3C"],
    address: "Karachi",
  },
];

export const studentsData = [
  {
    id: 1,
    studentId: "1234567890",
    name: "Ahmed",
    email: "abc@.com",
    photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "1B",
    address: "Karachi",
  },
  {
    id: 2,
    studentId: "1234567890",
    name: "Aslam",
    email: "Aslam@.com",
    photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "Karachi",
  },
  {
    id: 3,
    studentId: "1234567890",
    name: "Suhail",
    email: "Suhail@.com",
    photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "Karachi",
  },
  {
    id: 4,
    studentId: "1234567890",
    name: "Bilal",
    email: "Bilal@gmail.com",
    photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "Karachi",
  },
  {
    id: 5,
    studentId: "1234567890",
    name: "Tariq",
    email: "Tariq@gmail.com",
    photo: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    grade: 5,
    class: "5A",
    address: "Karachi",
  },
];

export const parentsData = [
  {
    id: 1,
    name: "Zain",
    students: ["Sarah Brewer"],
    email: "zain@.com",
    phone: "1234567890",
    address: "Karachi",
  },
  {
    id: 2,
    name: "Aslam",
    students: ["Jahanzaib"],
    email: "jaha@.com",
    phone: "1234567890",
    address: "Karachi",
  },
  {
    id: 3,
    name: "Minahil",
    students: ["Areeba"],
    email: "minahil@.com",
    phone: "1234567890",
    address: "Karachi",
  },
  {
    id: 4,
    name: "Javeria",
    students: ["Ayesha", "Iqra"],
    email: "jav@.com",
    phone: "1234567890",
    address: "Karachi",
  },
  {
    id: 5,
    name: "Amna",
    students: ["Annie"],
    email: "Annie@.com",
    phone: "1234567890",
    address: "Karachi",
  },
];

export const subjectsData = [
  { id: 1, name: "Math", teachers: ["Zain", "Hyder"] },
  { id: 2, name: "English", teachers: ["Zain", "Hyder"] },
  { id: 3, name: "Physics", teachers: ["Zain", "Hyder"] },
  { id: 4, name: "Chemistry", teachers: ["Zain", "Hyder"] },
  { id: 5, name: "Biology", teachers: ["Zain", "Hyder"] },
];

export const classesData = [
  { id: 1, name: "1A", capacity: 20, grade: 1, supervisor: "Zargham Ali" },
  { id: 2, name: "2B", capacity: 22, grade: 2, supervisor: "Aslam" },
  { id: 3, name: "3C", capacity: 20, grade: 3, supervisor: "Hunain" },
  { id: 4, name: "4B", capacity: 18, grade: 4, supervisor: "Ahmed" },
  { id: 5, name: "5A", capacity: 16, grade: 5, supervisor: "Ishtiaq" },
  { id: 6, name: "5B", capacity: 20, grade: 5, supervisor: "Sarfaraz" },
];

export const lessonsData = [
  { id: 1, subject: "Math", class: "1A", teacher: "Aslam " },
  { id: 2, subject: "English", class: "2A", teacher: "Inza" },
  { id: 3, subject: "Science", class: "3A", teacher: "Kashaf" },
  { id: 4, subject: "Social Studies", class: "1B", teacher: "Akbar" },
  { id: 5, subject: "Art", class: "4A", teacher: "Javed" },
];

export const examsData = [
  { id: 1, subject: "Math", class: "1A", teacher: "Martha Morris", date: "2025-01-01" },
  { id: 2, subject: "English", class: "2A", teacher: "Randall Garcia", date: "2025-01-01" },
  { id: 3, subject: "Science", class: "3A", teacher: "Myrtie Scott", date: "2025-01-01" },
  { id: 4, subject: "Social Studies", class: "1B", teacher: "Alvin Swanson", date: "2025-01-01" },
  { id: 5, subject: "Art", class: "4A", teacher: "Mabelle Wallace", date: "2025-01-01" },
  { id: 6, subject: "Music", class: "5A", teacher: "Dale Thompson", date: "2025-01-01" },
  { id: 7, subject: "History", class: "6A", teacher: "Allie Conner", date: "2025-01-01" },
  { id: 8, subject: "Geography", class: "6B", teacher: "Hunter Fuller", date: "2025-01-01" },
  { id: 9, subject: "Physics", class: "7A", teacher: "Lois Lindsey", date: "2025-01-01" },
  { id: 10, subject: "Chemistry", class: "8A", teacher: "Vera Soto", date: "2025-01-01" },
];

export const assignmentsData = [
  { id: 1, subject: "Math", class: "1A", teacher: "Junaid", dueDate: "2025-01-01" },
  { id: 2, subject: "English", class: "2A", teacher: "Sameer", dueDate: "2025-01-01" },
  { id: 3, subject: "Science", class: "3A", teacher: "Suleman", dueDate: "2025-01-01" },
  { id: 4, subject: "Social Studies", class: "1B", teacher: "Javeria", dueDate: "2025-01-01" },
  { id: 5, subject: "Art", class: "4A", teacher: "Sehar", dueDate: "2025-01-01" },
];

export const resultsData = [
  { id: 1, subject: "Math", class: "1A", teacher: "Zargham Ali", student: "Zain", date: "2025-01-01", type: "exam", score: 90 },
  { id: 2, subject: "English", class: "2A", teacher: "Junaid", student: "Aslam", date: "2025-01-01", type: "exam", score: 90 },
  { id: 3, subject: "Science", class: "3A", teacher: "Insha", student: "Sehar", date: "2025-01-01", type: "exam", score: 90 },
  { id: 4, subject: "Social Studies", class: "1B", teacher: "Kashaf", student: "Maryam", date: "2025-01-01", type: "exam", score: 90 },
  { id: 5, subject: "Art", class: "4A", teacher: "Ishtiaq", student: "Tariq", date: "2025-01-01", type: "exam", score: 90 },
];

export const eventsData = [
  { id: 1, title: "Lake Trip", class: "1A", date: "2025-01-01", startTime: "10:00", endTime: "11:00" },
  { id: 2, title: "Picnic", class: "2A", date: "2025-01-01", startTime: "10:00", endTime: "11:00" },
  { id: 3, title: "Beach Trip", class: "3A", date: "2025-01-01", startTime: "10:00", endTime: "11:00" },
  { id: 4, title: "Museum Trip", class: "4A", date: "2025-01-01", startTime: "10:00", endTime: "11:00" },
  { id: 5, title: "Music Concert", class: "5A", date: "2025-01-01", startTime: "10:00", endTime: "11:00" },
];

export const announcementsData = [
  { id: 1, title: "About 4A Math Test", class: "4A", date: "2025-01-01" },
  { id: 2, title: "About 3A Math Test", class: "3A", date: "2025-01-01" },
  { id: 3, title: "About 3B Math Test", class: "3B", date: "2025-01-01" },
  { id: 4, title: "About 6A Math Test", class: "6A", date: "2025-01-01" },
  { id: 5, title: "About 8C Math Test", class: "8C", date: "2025-01-01" },
  { id: 6, title: "About 2A Math Test", class: "2A", date: "2025-01-01" },
  { id: 7, title: "About 4C Math Test", class: "4C", date: "2025-01-01" },
  { id: 8, title: "About 4B Math Test", class: "4B", date: "2025-01-01" },
  { id: 9, title: "About 3C Math Test", class: "3C", date: "2025-01-01" },
  { id: 10, title: "About 1C Math Test", class: "1C", date: "2025-01-01" },
];

export const calendarEvents = [
  { title: "Math", allDay: false, start: new Date(2024, 7, 21, 8, 0), end: new Date(2024, 7, 21, 8, 45) },
  { title: "English", allDay: false, start: new Date(2024, 7, 21, 9, 0), end: new Date(2024, 7, 21, 9, 45) },
  { title: "Biology", allDay: false, start: new Date(2024, 7, 21, 10, 0), end: new Date(2024, 7, 21, 10, 45) },
  { title: "Physics", allDay: false, start: new Date(2024, 7, 21, 11, 0), end: new Date(2024, 7, 21, 11, 45) },
  { title: "Chemistry", allDay: false, start: new Date(2024, 7, 21, 13, 0), end: new Date(2024, 7, 21, 13, 45) },
  { title: "History", allDay: false, start: new Date(2024, 7, 21, 14, 0), end: new Date(2024, 7, 21, 14, 45) },
  { title: "English", allDay: false, start: new Date(2024, 7, 13, 9, 0), end: new Date(2024, 7, 13, 9, 45) },
  { title: "Biology", allDay: false, start: new Date(2024, 7, 13, 10, 0), end: new Date(2024, 7, 13, 10, 45) },
  { title: "Physics", allDay: false, start: new Date(2024, 7, 13, 11, 0), end: new Date(2024, 7, 13, 11, 45) },
  { title: "History", allDay: false, start: new Date(2024, 7, 13, 14, 0), end: new Date(2024, 7, 13, 14, 45) },
  { title: "Math", allDay: false, start: new Date(2024, 7, 14, 8, 0), end: new Date(2024, 7, 14, 8, 45) },
  { title: "Biology", allDay: false, start: new Date(2024, 7, 14, 10, 0), end: new Date(2024, 7, 14, 10, 45) },
  { title: "Chemistry", allDay: false, start: new Date(2024, 7, 14, 13, 0), end: new Date(2024, 7, 14, 13, 45) },
  { title: "History", allDay: false, start: new Date(2024, 7, 14, 14, 0), end: new Date(2024, 7, 13, 14, 45) },
  { title: "English", allDay: false, start: new Date(2024, 7, 15, 9, 0), end: new Date(2024, 7, 15, 9, 45) },
  { title: "Biology", allDay: false, start: new Date(2024, 7, 15, 10, 0), end: new Date(2024, 7, 15, 10, 45) },
  { title: "Physics", allDay: false, start: new Date(2024, 7, 15, 11, 0), end: new Date(2024, 7, 15, 11, 45) },
  { title: "History", allDay: false, start: new Date(2024, 7, 15, 14, 0), end: new Date(2024, 7, 15, 14, 45) },
  { title: "Math", allDay: false, start: new Date(2024, 7, 16, 8, 0), end: new Date(2024, 7, 16, 8, 45) },
  { title: "English", allDay: false, start: new Date(2024, 7, 16, 9, 0), end: new Date(2024, 7, 16, 9, 45) },
  { title: "Physics", allDay: false, start: new Date(2024, 7, 16, 11, 0), end: new Date(2024, 7, 16, 11, 45) },
  { title: "Chemistry", allDay: false, start: new Date(2024, 7, 16, 13, 0), end: new Date(2024, 7, 16, 13, 45) },
  { title: "History", allDay: false, start: new Date(2024, 7, 16, 14, 0), end: new Date(2024, 7, 16, 14, 45) },
];

// ---------- SEED SCRIPT ----------
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // 1. Create admin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10);
  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL! },
    update: {},
    create: {
      name: process.env.ADMIN_NAME!,
      email: process.env.ADMIN_EMAIL!,
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });
  console.log('✅ Admin created');

  // 2. Insert subjects (upsert by name)
  const subjectMap = new Map<string, string>();
  for (const sub of subjectsData) {
    const created = await prisma.subject.upsert({
      where: { name: sub.name },
      update: {},
      create: { name: sub.name },
    });
    subjectMap.set(sub.name, created.id);
  }
  console.log('✅ Subjects inserted');

  // 3. Insert classes (upsert by name)
  const classMap = new Map<string, string>();
  for (const cls of classesData) {
    const created = await prisma.class.upsert({
      where: { name: cls.name },
      update: {},
      create: {
        name: cls.name,
        capacity: cls.capacity,
        grade: cls.grade,
        // supervisor will be linked later
      },
    });
    classMap.set(cls.name, created.id);
  }
  console.log('✅ Classes inserted');

  // 4. Insert teachers (upsert by email)
  const teacherMap = new Map<string, string>(); // email -> id
  for (const t of teachersData) {
    const created = await prisma.teacher.upsert({
      where: { email: t.email },
      update: {},
      create: {
        teacherId: t.teacherId,
        name: t.name.trim(),
        email: t.email,
        photo: t.photo,
        phone: t.phone,
        address: t.address,
        // subjects and classes will be linked later
      },
    });
    teacherMap.set(t.email, created.id);
  }
  console.log('✅ Teachers inserted');

  // 5. Insert students (upsert by email)
  const studentMap = new Map<string, string>(); // email -> id
  for (const s of studentsData) {
    const created = await prisma.student.upsert({
      where: { email: s.email },
      update: {},
      create: {
        studentId: s.studentId,
        name: s.name,
        email: s.email,
        photo: s.photo,
        phone: s.phone,
        grade: s.grade,
        address: s.address,
        // class will be linked later
      },
    });
    studentMap.set(s.email, created.id);
  }
  console.log('✅ Students inserted');

  // 6. Insert parents (upsert by email)
  const parentMap = new Map<string, string>(); // email -> id
  for (const p of parentsData) {
    const created = await prisma.parent.upsert({
      where: { email: p.email },
      update: {},
      create: {
        name: p.name,
        email: p.email,
        phone: p.phone,
        address: p.address,
        // students will be linked later
      },
    });
    parentMap.set(p.email, created.id);
  }
  console.log('✅ Parents inserted');

  // 7. Link relations
  // 7a. Teacher <-> Subject (many-to-many)
  for (const t of teachersData) {
    const teacherId = teacherMap.get(t.email)!;
    const subjectIds = t.subjects
      .map(name => subjectMap.get(name))
      .filter((id): id is string => id !== undefined);
    await prisma.teacher.update({
      where: { id: teacherId },
      data: {
        subjects: {
          connect: subjectIds.map(id => ({ id })),
        },
      },
    });
  }
  console.log('✅ Teacher ↔ Subject links created');

  // 7b. Teacher <-> Class (many-to-many)
  for (const t of teachersData) {
    const teacherId = teacherMap.get(t.email)!;
    const classIds = t.classes
      .map(name => classMap.get(name))
      .filter((id): id is string => id !== undefined);
    await prisma.teacher.update({
      where: { id: teacherId },
      data: {
        classes: {
          connect: classIds.map(id => ({ id })),
        },
      },
    });
  }
  console.log('✅ Teacher ↔ Class links created');

  // 7c. Set Class supervisor (one-to-many: class has supervisorId)
  for (const cls of classesData) {
    const classId = classMap.get(cls.name)!;
    const supervisorEmail = cls.supervisor;
    // Find teacher by name (may not be unique; we'll assume first match)
    const teacher = await prisma.teacher.findFirst({
      where: { name: supervisorEmail.trim() },
    });
    if (teacher) {
      await prisma.class.update({
        where: { id: classId },
        data: { supervisorId: teacher.id },
      });
    } else {
      console.warn(`Supervisor "${supervisorEmail}" not found for class ${cls.name}`);
    }
  }
  console.log('✅ Class supervisors set');

  // 7d. Set Student's class (foreign key)
  for (const s of studentsData) {
    const studentId = studentMap.get(s.email)!;
    const className = s.class;
    const classId = classMap.get(className);
    if (classId) {
      await prisma.student.update({
        where: { id: studentId },
        data: { classId },
      });
    } else {
      console.warn(`Class "${className}" not found for student ${s.name}`);
    }
  }
  console.log('✅ Student classes set');

  // 7e. Parent <-> Student (many-to-many)
  for (const p of parentsData) {
    const parentId = parentMap.get(p.email)!;
    const studentEmails = p.students.map(name => {
      // Find student by name (assuming unique name? better to use email, but we only have name)
      // We'll match by name from studentsData
      const student = studentsData.find(s => s.name === name);
      return student ? student.email : null;
    }).filter((email): email is string => email !== null);
    const studentIds = studentEmails
      .map(email => studentMap.get(email))
      .filter((id): id is string => id !== undefined);
    await prisma.parent.update({
      where: { id: parentId },
      data: {
        students: {
          connect: studentIds.map(id => ({ id })),
        },
      },
    });
  }
  console.log('✅ Parent ↔ Student links created');

  // 8. Insert lessons, exams, assignments, results, events, announcements, calendarEvents
  // Helper to resolve subject, class, teacher by names
  function resolveIds(subjectName: string, className: string, teacherName: string) {
    const subjectId = subjectMap.get(subjectName);
    const classId = classMap.get(className);
    // Find teacher by name (could be multiple; we'll take first)
    const teacher = teacherName ? prisma.teacher.findFirst({ where: { name: teacherName.trim() } }) : null;
    return { subjectId, classId, teacherId: teacher ? teacher.id : undefined };
  }

  // 8a. Lessons
  for (const lesson of lessonsData) {
    const { subjectId, classId, teacherId } = await resolveIds(lesson.subject, lesson.class, lesson.teacher);
    if (subjectId && classId && teacherId) {
      await prisma.lesson.upsert({
        where: { id: lesson.id },
        update: {},
        create: {
          id: lesson.id,
          subjectId,
          classId,
          teacherId,
        },
      });
    } else {
      console.warn(`Skipping lesson ${lesson.id}: missing relation`);
    }
  }
  console.log('✅ Lessons inserted');

  // 8b. Exams
  for (const exam of examsData) {
    const { subjectId, classId, teacherId } = await resolveIds(exam.subject, exam.class, exam.teacher);
    if (subjectId && classId && teacherId) {
      await prisma.exam.upsert({
        where: { id: exam.id },
        update: {},
        create: {
          id: exam.id,
          subjectId,
          classId,
          teacherId,
          date: new Date(exam.date),
        },
      });
    } else {
      console.warn(`Skipping exam ${exam.id}: missing relation`);
    }
  }
  console.log('✅ Exams inserted');

  // 8c. Assignments
  for (const ass of assignmentsData) {
    const { subjectId, classId, teacherId } = await resolveIds(ass.subject, ass.class, ass.teacher);
    if (subjectId && classId && teacherId) {
      await prisma.assignment.upsert({
        where: { id: ass.id },
        update: {},
        create: {
          id: ass.id,
          subjectId,
          classId,
          teacherId,
          dueDate: new Date(ass.dueDate),
        },
      });
    } else {
      console.warn(`Skipping assignment ${ass.id}: missing relation`);
    }
  }
  console.log('✅ Assignments inserted');

  // 8d. Results
  for (const res of resultsData) {
    const { subjectId, classId, teacherId } = await resolveIds(res.subject, res.class, res.teacher);
    // Find student by name
    const student = await prisma.student.findFirst({ where: { name: res.student.trim() } });
    const studentId = student?.id;
    if (subjectId && classId && teacherId && studentId) {
      await prisma.result.upsert({
        where: { id: res.id },
        update: {},
        create: {
          id: res.id,
          subjectId,
          classId,
          teacherId,
          studentId,
          date: new Date(res.date),
          type: res.type,
          score: res.score,
        },
      });
    } else {
      console.warn(`Skipping result ${res.id}: missing relation`);
    }
  }
  console.log('✅ Results inserted');

  // 8e. Events
  for (const ev of eventsData) {
    const classId = classMap.get(ev.class);
    if (classId) {
      await prisma.event.upsert({
        where: { id: ev.id },
        update: {},
        create: {
          id: ev.id,
          title: ev.title,
          classId,
          date: new Date(ev.date),
          startTime: ev.startTime,
          endTime: ev.endTime,
        },
      });
    } else {
      console.warn(`Skipping event ${ev.id}: class not found`);
    }
  }
  console.log('✅ Events inserted');

  // 8f. Announcements
  for (const ann of announcementsData) {
    const classId = classMap.get(ann.class);
    if (classId) {
      await prisma.announcement.upsert({
        where: { id: ann.id },
        update: {},
        create: {
          id: ann.id,
          title: ann.title,
          classId,
          date: new Date(ann.date),
        },
      });
    } else {
      console.warn(`Skipping announcement ${ann.id}: class not found`);
    }
  }
  console.log('✅ Announcements inserted');

  // 8g. CalendarEvents (no relations, just insert)
  for (const ce of calendarEvents) {
    await prisma.calendarEvent.create({
      data: {
        title: ce.title,
        allDay: ce.allDay,
        start: ce.start,
        end: ce.end,
      },
    });
  }
  console.log('✅ Calendar events inserted');

  console.log('🌱 Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });