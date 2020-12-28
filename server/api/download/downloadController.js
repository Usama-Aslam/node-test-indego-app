class Download {
  fetchData(req, res) {
    try {
      res.send("hello world");
    } catch (error) {
      res.status(400).send({ error: { message: error.message } });
    }
  }
}

module.exports = Download;
