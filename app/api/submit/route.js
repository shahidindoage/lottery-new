import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, dob, address, terms, privacy } = body;

    if (!name || !email || !terms || !privacy) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newEntry = await prisma.lotterySubmission.create({
      data: {
        name,
        phone,
        email,
        dob: dob ? new Date(dob) : null,
        address,
        accepted_terms: terms,
        accepted_privacy: privacy,
      },
    });

    // ✅ Set temporary cookie for access
    const res = NextResponse.json({ success: true });
    res.cookies.set('lottery_user', newEntry.id.toString(), {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60, // 1 minute access
    });

    return res;
  } catch (err) {
    console.error(err);
    if (err.code === 'P2002') {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
