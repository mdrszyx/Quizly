import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { username, email, password } = await request.json();

        // Contoh: Simpan data ke database (dummy response di sini)
        if (!username || !email || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        return NextResponse.json({
            message: "Signup successful! Welcome, " + username,
        });
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}