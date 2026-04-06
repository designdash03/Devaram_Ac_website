import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const reviews = await db.review.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, location, rating, text } = body;

    if (!name || !rating || !text) {
      return NextResponse.json(
        { error: "Name, rating, and review text are required" },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    const review = await db.review.create({
      data: {
        name: name.trim(),
        location: location?.trim() || "",
        rating: Number(rating),
        text: text.trim(),
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
