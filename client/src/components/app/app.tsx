import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useState } from 'react';
import { trpc } from '../../trpc/trpc';
import { IndexPage } from '../../pages/index-page/index-page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/layout';

const SERVER_PORT = 2022;
const url = `${window.location.protocol}//${window.location.host.replace(/:\d+/, '')}:${SERVER_PORT}`;

export const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url })],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="*" element={<Navigate to={'/'} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  );
};
