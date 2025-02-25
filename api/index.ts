import "dotenv/config";
import app from "./src/app";

// Exporting so we can use this in the test
export const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`Application available at http://localhost:${port}`);
});
