module.exports = (app) => {
  app.use("/app-event", (req, res, next) => {
    const { payload } = req.body;

    console.log("========= Product service received events ==========");
    res.status(200).json(payload);
  });
};
