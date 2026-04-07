import { NextResponse } from "next/server";

const sampleReviews = [
  {
    id: "1",
    name: "Rajesh Kumar",
    location: "Rathinapuri, Coimbatore",
    rating: 5,
    text: "Excellent service! The technician arrived on time and fixed my AC within an hour. Very professional and affordable pricing. Highly recommend Deva AC Service!",
    createdAt: "2025-12-15T10:00:00.000Z",
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Sanganoor, Coimbatore",
    rating: 5,
    text: "Very prompt response. Called in the morning and the technician was at my door by noon. AC is working perfectly now. Great work!",
    createdAt: "2025-12-20T14:30:00.000Z",
  },
  {
    id: "3",
    name: "Murugan V",
    location: "Gandhipuram, Coimbatore",
    rating: 4,
    text: "Good service for gas refill. They detected the leak and fixed it properly. Price was very reasonable compared to others. Will call again.",
    createdAt: "2026-01-05T09:15:00.000Z",
  },
  {
    id: "4",
    name: "Aishwarya R",
    location: "Saibaba Colony, Coimbatore",
    rating: 5,
    text: "Got my new AC installed by Deva AC Service. Very neat work, proper piping and drainage setup. The technician explained everything clearly. Five stars!",
    createdAt: "2026-01-12T11:00:00.000Z",
  },
  {
    id: "5",
    name: "Karthik S",
    location: "R.S. Puram, Coimbatore",
    rating: 5,
    text: "Deep cleaning service was amazing! My AC feels like brand new now. Cool air output improved significantly. Very satisfied with the service.",
    createdAt: "2026-02-01T16:45:00.000Z",
  },
  {
    id: "6",
    name: "Lakshmi N",
    location: "Tatabad, Coimbatore",
    rating: 4,
    text: "Called for AC repair, the technician diagnosed the compressor issue quickly. Honest pricing and no hidden charges. Good experience overall.",
    createdAt: "2026-02-15T13:20:00.000Z",
  },
];

export async function GET() {
  return NextResponse.json(sampleReviews);
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

    return NextResponse.json(
      {
        id: Date.now().toString(),
        name: name.trim(),
        location: location?.trim() || "",
        rating: Number(rating),
        text: text.trim(),
        createdAt: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
