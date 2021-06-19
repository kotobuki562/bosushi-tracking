/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/display-name */
import type { VFC } from 'react';
import { memo } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  label: string;
  placeholder?: string;

  register: UseFormRegisterReturn;
  required?: boolean;
  pattern?: string;
  // RegExp?
  maxLength?: number;
};

export const HookInput: VFC<Props> = memo((props) => {
  return (
    <label className="flex flex-col mb-4">
      <span className="mb-2 text-base font-semibold text-teal-600">
        {props.label}
      </span>
      <input
        className="py-2 px-3 w-full text-lg text-teal-600 bg-opacity-0 rounded-xl border-2 border-gray-200 focus:border-teal-300 shadow-none duration-200 outline-none"
        {...props}
      />
    </label>
  );
});
