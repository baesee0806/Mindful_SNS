import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const uid = cookies().get('uid')?.value;

	if (cookies().has('uid')) {
		if (pathname === '/profile') {
			return NextResponse.redirect(new URL(`/profile/${uid}`, request.url));
		}
		if (pathname === '/auth/login') {
			return NextResponse.redirect(new URL('/', request.url));
		}
		return NextResponse.next();
	} else {
		if (pathname === '/auth/register') {
			return NextResponse.next();
		}
		return NextResponse.rewrite(new URL('/auth/login', request.url));
	}
}
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
