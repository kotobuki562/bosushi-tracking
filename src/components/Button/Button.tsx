/* eslint-disable react/display-name */
import { Spinner } from '@chakra-ui/react';
import cc from 'classcat';
import type { ComponentProps, MouseEventHandler, VFC } from 'react';
import { memo } from 'react';
import Lottie from 'react-lottie';

import animationData from '../../animations/1103-confetti-outline-edited.json';

type Btninfo = {
  btnText: string;
  size: 'sm' | 'md' | 'lg';
  useage: 'agree' | 'delete' | 'other' | 'otherBgDark';
  rounded?: 'full' | 'none';
  rightIcon?: ComponentProps<'svg'>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
};

export const Button: VFC<Btninfo> = memo((props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      className={cc([
        'flex items-center w-full justify-around border-2 font-semibold rounded-xl tracking-wide transition duration-200 focus:outline-none',
        props.rounded === 'full' ? 'rounded-full' : null,
        props.rounded === 'none' ? 'rounded-none' : null,
        props.size === 'sm' ? 'px-2 py-1 text-sm sm:text-base' : null,
        props.size === 'md' ? 'px-4 py-2 text-base sm:text-lg' : null,
        props.size === 'lg' ? 'px-6 py-3 text-lg sm:text-xl' : null,
        props.useage === 'other'
          ? 'border-teal-400 text-teal-400 hover:bg-teal-400 focus:ring-2 ring-teal-300 hover:text-white'
          : null,
        props.useage === 'delete'
          ? 'border-red-500 text-red-500 hover:bg-red-500 focus:ring-2 ring-red-300 hover:text-white'
          : null,
        props.disabled
          ? 'border-gray-300 text-gray-300 hover:bg-gray-300'
          : null,
      ])}>
      {props.isLoading ? (
        <Spinner className="w-5 h-5" />
      ) : (
        <>
          {props.isSuccess ? (
            <Lottie options={defaultOptions} height={30} width={30} />
          ) : (
            <>
              <p className="mr-1">{props.btnText}</p>
              {props.rightIcon ? <div>{props.rightIcon}</div> : null}
            </>
          )}
        </>
      )}
    </button>
  );
});
