import express from "express";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { z } from "zod";
import { messages, insertMessageSchema } from "../shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set.");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool, { schema: { messages } });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/messages", async (req, res) => {
  try {
    const input = insertMessageSchema.parse(req.body);
    await db.insert(messages).values(input).returning();
    res.status(201).json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: err.errors[0].message });
    }
    console.error("Error creating message:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default app;
