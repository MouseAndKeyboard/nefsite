export default (req, res) => {
  if (req.method === "GET") {
    const cellLoc = req.query;

    if (cellLoc.r == "6" && cellLoc.c == "9") {
      console.log("swag");
      res.json({
        "title": "🤔",
        "body": "what could this be?"
      })
    } else {
      res.json({
        "title": "Nothing here",
        "body": "You look around, there's nothing to be seen..."
      })
    }
  }
  if (req.method === "POST") {
    res.json(req)
  }
}
