import { trpc } from '../../trpc/trpc';

export const Greeting = () => {
  const greeting = trpc.greeting.useQuery({ name: 'tRPC user' });

  return <div className="">{greeting.data?.text}</div>;
};
