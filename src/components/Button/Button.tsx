/* eslint-disable react/display-name */
import cc from 'classcat';
import type { ComponentProps, MouseEventHandler, VFC } from 'react';
import { memo } from 'react';

type Btninfo = {
  btnText: string;
  size: 'sm' | 'md' | 'lg';
  // agreeは承諾系deleteは否定系otherはそれ以外なんでも(背景色が明るい場合)otherBgDarkもそれ以外なんでも(背景色が暗い場合)
  useage: 'agree' | 'delete' | 'other' | 'otherBgDark';
  // ボタンの丸みは特に指定がなければtailwindのrounded-xlを適用
  rounded?: 'full' | 'none';
  // アイコンを付属する場合はheroIconを使用することを前提としているためsvg型
  rightIcon?: ComponentProps<'svg'>;
  // ボタンアクションとしても、formのボタンとしても使用できるよう任意指定できるようにしています
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
};
// このコンポーネントを使用する際はdivタグで囲ってから使うと適正サイズになります
// そのまま直書きするとw-fullが適用され横長のボタンになります
export const Button: VFC<Btninfo> = memo((props) => {
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
      <p className="mr-1">{props.btnText}</p>
      {props.rightIcon ? <div>{props.rightIcon}</div> : null}
    </button>
  );
});
