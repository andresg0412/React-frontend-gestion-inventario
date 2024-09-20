import { signToken } from '@/utils/auth';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req) {

    const { username, password } = await req.json();

    if (username === 'admin' && password === '123456') {
        const token = signToken({ id: 1, username });

        const cookie = serialize('auth', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 3600,
            sameSite: 'strict',
            path: '/',
        });

        const response = NextResponse.json({ success: true });
        response.headers.set('Set-Cookie', cookie);
        return response;
    }

    return NextResponse.json({ success: false });

}