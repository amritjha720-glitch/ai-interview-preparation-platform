require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {
    await connectToDB();

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer().catch((err) => {
    console.error("Server startup failed:", err);
    process.exit(1);
});