import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2> Header navigation </h2>
      {children}
    </div>
  );
}