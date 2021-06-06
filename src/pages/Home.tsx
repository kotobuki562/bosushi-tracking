import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { LoginButton } from '../components/AUTH0/LoginButton';
import { LogoutButton } from '../components/AUTH0/LogoutButton';
import type { StatusInfo } from '../types/slim';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const titles = [
  { title: 'title1' },
  { title: 'title2' },
  { title: 'title3' },
  { title: 'title4' },
];

const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json());

const Home = () => {
  const [slipNum, setSlipNum] = useState('468008693865');
  const { data, error } = useSWR(`${API_ENDPOINT}/${slipNum}`, fetcher);

  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <LogoutButton />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input
          type="text"
          value={slipNum}
          onChange={(e) => setSlipNum(e.target.value)}
        />
        {titles.map((title, i) => {
          return (
            <p key={i}>
              {title.title}
              {i}
            </p>
          );
        })}
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
