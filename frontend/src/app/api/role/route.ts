import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Contoh: Mendapatkan role dari token atau database
        const role = "user"; // Dummy role
        return NextResponse.json({ role });
    } catch (error) {
        return NextResponse.json({ error: "Unable to fetch role" }, { status: 500 });
    }
}