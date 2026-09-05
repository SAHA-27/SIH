const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./db");

// Load all 10 models to register schemas and models
const User = require("../models/User");
const Progress = require("../models/Progress");
const Module = require("../models/Module");
const LessonProgress = require("../models/LessonProgress");
const Quiz = require("../models/Quiz");
const QuizResult = require("../models/QuizResult");
const Circuit = require("../models/Circuit");
const Challenge = require("../models/Challenge");
const Submission = require("../models/Submission");
const Chat = require("../models/Chat");

const models = [
  { name: "User", model: User },
  { name: "Progress", model: Progress },
  { name: "Module", model: Module },
  { name: "LessonProgress", model: LessonProgress },
  { name: "Quiz", model: Quiz },
  { name: "QuizResult", model: QuizResult },
  { name: "Circuit", model: Circuit },
  { name: "Challenge", model: Challenge },
  { name: "Submission", model: Submission },
  { name: "Chat", model: Chat },
];

const initDatabase = async () => {
  try {
    console.log("Connecting to MongoDB for schema/index initialization...");
    await connectDB();

    console.log("Initializing collections and indexes...");
    const initializedCollections = [];

    for (const { name, model } of models) {
      // Explicitly trigger collection creation (if not exists) and index syncing
      await model.createCollection();
      await model.syncIndexes();
      initializedCollections.push(model.collection.name);
    }

    console.log("\n==========================================");
    console.log("Database Initialization Completed Successfully!");
    console.log("The following 10 collections are ready:");
    initializedCollections.forEach((collName, index) => {
      console.log(` ${index + 1}. ${collName}`);
    });
    console.log("==========================================\n");

    process.exit(0);
  } catch (error) {
    console.error("Database initialization failed:", error.message);
    process.exit(1);
  }
};

initDatabase();
