/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/display-name */
import type { ChangeEventHandler, VFC } from 'react';
import { memo } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  label: string;
  name: string;
  type: string;
  value: string | number | undefined;
  onChange: ChangeEventHandler;
  placeholder?: string;
  hookInputInfo: {
    register: UseFormRegister<FieldValues>;
    required?: boolean;
    pattern?: string;
    // RegExp?
    maxLength?: number;
  };
};

export const Input: VFC<Props> = memo((props) => {
  return (
    <label className="flex flex-col mb-4">
      <span className="mb-2 text-base font-semibold text-teal-600">
        {props.label}
      </span>
      <input
        {...(props.hookInputInfo.register,
        {
          required: props.hookInputInfo.required,
          maxLength: props.hookInputInfo.maxLength,
          pattern: props.hookInputInfo.pattern,
        })}
        className="py-2 px-3 w-full text-lg text-teal-600 bg-opacity-0 rounded-xl border-2 border-gray-200 focus:border-teal-300 shadow-none duration-200 outline-none"
        {...props}
      />
    </label>
  );
});
