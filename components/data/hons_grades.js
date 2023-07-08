
export const createData = (name, code, mark, grade, topgrade = false, url = "") => ({
  name,
  code,
  mark,
  grade,
  topgrade,
  url
});


export default [
  createData("Special Topics in Mathematics 1", "MATH4001", 99, "HD", true, ),
  createData("Algebra", "MATH4031", 86, "HD", true),
  createData("Continuous Geometry and Analysis", "MATH4032", 98, "HD"),
]