
export const createData = (name, code, mark, grade) => ({
  name,
  code,
  mark,
  grade,
});


export default [
  createData("Software Engineering With Java", "CITS1001", 91, "HD"),
  createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
  createData(
    "Global Challenges, Research and Leadership",
    "GCRL1000",
    96,
    "HD"
  ),
  createData("Mathematics Foundations: Specialist", "MATH1722", 90, "HD"),
  createData("Systems Programming", "CITS2002", 98, "HD"),
  createData("Discrete Structures", "CITS2211", 87, "HD"),
  createData("Multivariable Calculus", "MATH1011", 85, "HD"),
  createData("Mathematical Theory and Methods", "MATH1012", 93, "HD"),
]
