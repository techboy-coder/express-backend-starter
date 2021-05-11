import boxen from "boxen";
import { NextFunction, Request, Response } from "express";

const app = require("express")()
const routes = require("./routes")
var compression = require('compression');

app.use(compression());
//All Routes
app.use("/api", routes)


interface Error {
  status?: number;
  message?: string;
}

app.use((req: Request, res: Response, next: NextFunction) => {
  const error: Error = new Error("Not found");
  error.status = 404;
  next(error);
});

// error handler middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(boxen(`Hey there master! 💖 Server started and ready to scale to the moon. 🚀 Visit me on: http://localhost:${PORT}`, { padding: 1 }));
})