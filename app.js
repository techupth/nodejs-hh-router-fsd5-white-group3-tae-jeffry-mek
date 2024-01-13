import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignmentRouter.js";
import accountsRouter from "./apps/accountsRouter.js";

const app = express();
const port = 4000;

app.use("/assignment", assignmentRouter);
app.use("/account", accountsRouter);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
