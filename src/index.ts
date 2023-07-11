import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoute";
import { BookRouter } from "./routes/bookRoute";
import { connection } from "./config/config";
import { logger } from "./logger/logger";
dotenv.config();

const app = express();


app.use(express.json());
app.use(logger)

app.use("/",userRouter)
app.use("/",BookRouter)


const port = process.env.PORT || 8080;
app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to DB");

    console.log(`Listening on PORT ${port}`);
  } catch (err) {
    console.log(err)
  }
});
