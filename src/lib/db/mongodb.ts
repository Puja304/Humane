import mongoose, { mongo } from "mongoose";
import { cache } from "react";
import "server-only";

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI){
    throw new Error("Please define MONGODB_URI in env");
}

let cached = (global as any).mongoose;
if (!cached){
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB(){
    if (cached.conn) return cached.conn;

    if (!cached.promise){
    console.log("Connecting to MongoDB at:", MONGODB_URI);
    cached.promise = mongoose.connect(MONGODB_URI)
        .then((mongoose) => {
            console.log("MongoDB connection successful!");
            return mongoose;
        })
        .catch(err => {
            console.error("MongoDB connection error:", err);
            throw err; // re-throw so API knows connection failed
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}