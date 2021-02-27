import React, { PropsWithChildren } from 'react';

export const Button = ({ children }: PropsWithChildren<{}>) => (
  <button className="px-2 py-1 outline-none bg-blue-500 color-white rounded">
    {children}
  </button>
);
