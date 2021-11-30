export default (req, res) => {
  if (req.method === "GET") {
    const cellLoc = req.query;

    console.log(cellLoc)

    res.json({
      "title": "Embark",
      "body": "Start your journey...",
      "buttons": ["Embark"],
      "row": cellLoc.r,
      "col": cellLoc.c
    })
  }
  if (req.method === "POST") {
    res.json(req)
  }
}
