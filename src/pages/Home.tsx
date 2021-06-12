/* eslint-disable react/display-name */
/* eslint-disable no-console */
import type { ChangeEvent } from 'react';
import { memo, useCallback, useState } from 'react';
import useSWR from 'swr';

// import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Layout } from '../components/Layout';
import type { StatusInfo } from '../types/slim';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const fetcher = (url: string): Promise<any> => {
  return fetch(url).then((res) => {
    return res.json();
  });
};

export const Home = memo(() => {
  const [slipNum, setSlipNum] = useState('468008693865');
  const { data } = useSWR(`${API_ENDPOINT}/${slipNum}`, fetcher);

  const handleSlipNumChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return setSlipNum(e.target.value);
    },
    []
  );

  return (
    <Layout>
      <div>
        <Input
          label="伝票番号を入力してください。"
          name="slipNum"
          value={slipNum}
          onChange={handleSlipNumChange}
          placeholder="12桁の伝票番号"
          type="number"
        />
        {data?.errors ? <div>伝票番号に一致するものがありません</div> : null}
        {data ? (
          <div>
            <h2>{data.itemType}</h2>
            <p>{data.companyNameJP}</p>
            <p>{data.delivered ? '配達済み' : '未配達'}</p>
            {data.statusList ? (
              <div>
                {data.statusList.map((status: StatusInfo) => {
                  return (
                    <div key={status?.dateTime}>
                      <p>{status?.placeName}</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : (
          'Loading'
        )}
      </div>
    </Layout>
  );
});
