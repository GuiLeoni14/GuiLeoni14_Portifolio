import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'big';
  typeButton?: 'primary' | 'second';
  asChild?: boolean;
}

export function DefaultButton({
  asChild,
  size = 'medium',
  typeButton = 'primary',
  className,
  ...rest
}: DefaultButtonProps) {
  const Component = asChild ? Slot : 'button';
  return (
    <Component
      className={classNames(`inline-block rounded font-bold ${className}`, {
        'bg-yellow-200 text-gray-600': typeButton === 'primary',
        'px-6 leading-[50px] text-base': size === 'medium',
      })}
      {...rest}
    />
  );
}
