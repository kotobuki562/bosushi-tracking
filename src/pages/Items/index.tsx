/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/display-name */
/* eslint-disable no-console */
import type { ChangeEvent } from 'react';
import { memo, useCallback, useState } from 'react';

import { Input } from '../../components/Input/Input';
import { Layout } from '../../components/Layout';

export const Items = memo(() => {
  const [slipNum, setSlipNum] = useState<number | undefined>();

  const handleSlipNumChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      return setSlipNum(value);
    },
    []
  );

  return (
    <Layout>
      <div className="p-8">
        <Input
          label="伝票番号を入力してください。"
          name="slipNum"
          value={slipNum}
          onChange={handleSlipNumChange}
          placeholder="12桁の伝票番号"
          type="number"
        />
        <p>Items</p>
      </div>
    </Layout>
  );
});
