import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies;

  // 🎮 Protect Games Page
  if (pathname.startsWith('/games')) {
    const lotteryCookie = cookie.get('lottery_user');
    if (!lotteryCookie) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  }

  // 🎫 Lottery Page
  if (pathname.startsWith('/lottery')) {
    const lotteryCookie = cookie.get('lottery_user');
    if (!lotteryCookie) {
      return NextResponse.redirect(new URL('/games', req.url));
    }
    // ❌ REMOVE THIS LINE (do not auto-delete cookie)
    // res.cookies.delete('lottery_user');
    return NextResponse.next();
  }

  // 🧑‍💼 Protect Admin Dashboard
  if (pathname.startsWith('/admin/dashboard')) {
    const adminAuth = cookie.get('admin_auth');
    if (!adminAuth) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/lottery', '/games', '/admin/dashboard'],
};
