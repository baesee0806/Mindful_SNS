'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { createQueryClient } from '@/providers/createQueryClient';

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
	if (typeof window === 'undefined') {
		// Server: 항상 새로운 queryClient 생성
		return createQueryClient();
	} else {
		// Browser: 다시 만들지 않고 기존에 이미 client 존재시 해당 client 제공
		if (!browserQueryClient) browserQueryClient = createQueryClient();
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
