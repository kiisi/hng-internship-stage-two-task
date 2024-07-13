export const queryClientConfig = {
    defaultOptions: {
        queries: {
            staleTime: 0 * 60 * 60 * 1000,
            cacheTime: 0 * 60 * 60 * 1000,
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
};