

class Download {
  fetchData(req, res) {
    try {

    } catch (error) {
      res.status(400).send({ error: { message: error.message } });
    }
  }
}

module.exports = Download;
