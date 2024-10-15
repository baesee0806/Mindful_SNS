'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				// ssr 일경우 보통 staleTime 을 지정해야한다.
				// 클라이언트에서 즉시 refetch 되는것을 방지하기위해 0 위로 설정
				staleTime: 60 * 1000,
			},
		},
	});
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
	if (typeof window === 'undefined') {
		// Server: 항상 새로운 queryClient 생성
		return makeQueryClient();
	} else {
		// Browser: 다시 만들지 않고 기존에 이미 client 존재시 해당 client 제공
		if (!browserQueryClient) browserQueryClient = makeQueryClient();
		return browserQueryClient;
	}
}

export default function QueryProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	// NOTE: suspense boundary 로 로딩 이 잡히지 않는경우, useState 를 사용하여 초기화한다면, clinet 는 유실된다.
	const queryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
