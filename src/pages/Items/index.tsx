/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/display-name */
import { gql, useMutation, useQuery } from '@apollo/client';
import type { ChangeEvent } from 'react';
import { memo, useCallback, useState } from 'react';

import { Input } from '../../components/Input/Input';
import { Layout } from '../../components/Layout';

const GET_TEXT = gql`
  query GetDogs {
    posts {
      id
      text
    }
  }
`;

const ADD_TEXT = gql`
  mutation MyQuery($text: String!) {
    insert_posts(objects: { text: $text }) {
      returning {
        id
        text
      }
    }
  }
`;

export const Items = memo(() => {
  const [addText, setAddText] = useState('');
  // loading, error,
  const { loading, error, data: texts } = useQuery(GET_TEXT);
  const [addPostsText] = useMutation(ADD_TEXT, {
    onCompleted: () => {
      return setAddText('');
    },
  });

  console.log(texts);

  const [slipNum, setSlipNum] = useState<number | undefined>();

  const handleSlipNumChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      return setSlipNum(value);
    },
    []
  );

  const handleChangeAddText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return setAddText(e.target.value);
    },
    []
  );

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!addText.trim()) return;
    await addPostsText({
      variables: { text: addText },
      refetchQueries: [{ query: GET_TEXT }],
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  return (
    <Layout>
      <div className="p-8">
        {texts.posts.map((text: any) => {
          return <p key={text.id}>{text.text}</p>;
        })}

        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            name="text"
            value={addText}
            onChange={handleChangeAddText}
          />
          <button type="submit">Add Todo</button>
        </form>

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
