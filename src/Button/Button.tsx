import React, { PropsWithChildren } from 'react';
import cx from 'clsx';

export type ButtonProps = {
  primary?: boolean;
} & JSX.IntrinsicElements['button'];

export const Button = ({
  children,
  primary,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const baseClassName =
    'bg-gray-100 text-gray-900 hover:bg-gray-300 focus:ring-gray-400';
  const primaryClassName =
    'bg-green-500 text-white hover:bg-green-700 focus:ring-green-400';
  return (
    <button
      className={cx(
        `py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75`,
        primary ? primaryClassName : baseClassName,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
