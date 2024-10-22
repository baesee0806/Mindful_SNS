import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	if (request.cookies.has('uid')) {
		return NextResponse.rewrite(new URL('/', request.nextUrl));
	} else {
		return NextResponse.rewrite(new URL('/auth/login', request.nextUrl));
	}
}
export const config = {
	matcher: ['/auth/((?!general).*)'],
};
