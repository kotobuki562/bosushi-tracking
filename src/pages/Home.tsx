/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/display-name */
/* eslint-disable no-console */
import { format } from 'date-fns';
import type { ChangeEvent } from 'react';
import { memo, useCallback, useState } from 'react';
import useSWR from 'swr';

import { Input } from '../components/Input/Input';
import { Layout } from '../components/Layout';
import type { StatusInfo } from '../types/slim';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);
  return await res.json();
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
      <div className="p-8">
        <Input
          label="伝票番号を入力してください。"
          name="slipNum"
          value={slipNum}
          onChange={handleSlipNumChange}
          placeholder="12桁の伝票番号"
          type="number"
        />
        {data?.errors ? <div>伝票番号に一致するものがありません。</div> : null}
        {data ? (
          <div>
            <p>{data.itemType}</p>
            <p>{data.companyNameJP}</p>
            <p>{data.delivered === true ? '配達済み' : null}</p>
            <p>{data.delivered === false ? '未配達' : null}</p>
            {data.statusList ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.statusList.map((status: StatusInfo, index: number) => {
                  return (
                    <div className="p-4 rounded-2xl bg-teal-100" key={index}>
                      <div className="flex items-center">
                        <div className="flex flex-col justify-items-center items-center w-6 h-6 text-white rounded-full bg-teal-400">
                          {index + 1}
                        </div>
                        <p>{status?.placeName}</p>
                      </div>
                      <div>
                        {format(new Date(status?.dateTime), 'yyyy年MM月dd日')}
                      </div>
                      <iframe
                        src={`https://maps.google.co.jp/maps?output=embed&q=${
                          data.companyNameJP + status?.placeName
                        }}&z=14`}
                        width="100%"
                        height="300"></iframe>
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
