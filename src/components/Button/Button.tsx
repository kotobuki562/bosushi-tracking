import cc from 'classcat';
import type { MouseEventHandler, VFC } from 'react';

type Btninfo = {
  btnText: string;
  type: 'agree' | 'delete' | 'other';
  onClick: MouseEventHandler<HTMLButtonElement>;
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
};
export const Button: VFC<Btninfo> = (props) => {
  return (
    <div>
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={cc([
          'flex items-center font-semibold tracking-wide rounded-full transition duration-200 hover:text-white focus:outline-none',
          props.size === 'sm'
            ? 'border-2 px-4 py-2 text-sm sm:text-base'
            : null,
          props.size === 'md'
            ? 'border-2 px-4 py-2 text-base sm:text-lg'
            : null,
          props.size === 'lg' ? 'border-2 px-4 py-2 text-lg sm:text-xl' : null,
          props.type === 'other'
            ? 'border-teal-400 text-teal-400 hover:bg-teal-400'
            : null,
          props.type === 'delete'
            ? 'border-red-600 text-red-600 hover:bg-red-600 dark:border-red-500 dark:text-red-500  dark:hover:bg-red-500'
            : null,
          props.disabled
            ? 'border-fontDark text-fontDark hover:bg-fontDark'
            : null,
        ])}>
        {props.btnText}
      </button>
    </div>
  );
};
