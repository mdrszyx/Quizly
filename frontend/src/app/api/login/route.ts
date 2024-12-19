import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Contoh validasi sederhana
        if (email === "admin@example.com" && password === "admin123") {
            return NextResponse.json({ role: "admin", message: "Login successful!" });
        } else if (email === "user@example.com" && password === "user123") {
            return NextResponse.json({ role: "user", message: "Login successful!" });
        } else {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}