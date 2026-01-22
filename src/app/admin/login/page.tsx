"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AdminLogin() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        //see if their input was correct

        const res = await fetch("/api/admin/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
            
        });

        if (!res.ok) {
            console.log("Invalid creds no cookie")
            setError("Invalid credentials");
            return;
        }

        // if the credentials were right, go to admin page
        console.log("Found cookie, now pushing")
        window.location.href = "/admin";
    }

    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <h1>Admin Login</h1>

            <form onSubmit={handleSubmit} className="flex flex-col mt-10 gap-5">
                <input 
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="border rounded p-1"
                />
                
                <input 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border rounded p-1"
                />

                <button type="submit" className="bg-highlight p-1 rounded ">Login</button>

                {error && <p>{error}</p>}

            </form>
        </main>
    )
}