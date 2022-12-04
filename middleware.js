import { NextResponse } from 'next/server';

const isLoggedIn = true;
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log('Middleware');
  if (isLoggedIn) {
    return;
  }
  return NextResponse.redirect(new URL('/app', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/app/:path*'],
};
