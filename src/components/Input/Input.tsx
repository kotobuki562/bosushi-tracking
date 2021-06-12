/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/display-name */
import type { ChangeEventHandler, VFC } from 'react';
import { memo } from 'react';

type Props = {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: ChangeEventHandler;
  placeholder?: string;
};

export const Input: VFC<Props> = memo((props) => {
  return (
    <label className="flex flex-col mb-4" key={props.name}>
      <span className="mb-2 text-base font-semibold text-teal-600">
        {props.label}
      </span>
      <input
        className="py-2 px-3 w-full text-lg bg-opacity-0 rounded border-2 focus:ring-2 shadow-none duration-200 outline-none border-teal-600 text-teal-600 focus:border-teal-500 ring-teal-300"
        {...props}
      />
    </label>
  );
});
