import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	if (pathname === '/auth/register' && !cookies().has('uid')) {
		return NextResponse.next();
	}

	if (cookies().has('uid')) {
		if (
			pathname === '/' ||
			pathname === '/profile' ||
			pathname === '/message'
		) {
			return NextResponse.next();
		}
		return NextResponse.rewrite(new URL('/', request.nextUrl));
	} else {
		return NextResponse.rewrite(new URL('/auth/login', request.nextUrl));
	}
}
export const config = {
	matcher: ['/auth/((?!general).*)', '/profile', '/message', '/'],
};
