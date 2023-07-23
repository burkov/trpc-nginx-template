import { trpc } from '../../trpc/trpc';

export const Greeting = ({ name }: { name: string }) => {
  const greeting = trpc.greeting.useQuery({ name });

  return <div className="">{greeting.data?.text}</div>;
};
