/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/display-name */
import { gql, useMutation, useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { formatISO } from 'date-fns';
import type { ChangeEvent } from 'react';
import { memo, useCallback, useState } from 'react';

import { Button } from '../../components/Button/Button';
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

const GET_ALL_ORDERS = gql`
  query GetAllOrders {
    orders {
      id
      itemName
      description
    }
  }
`;

const ADD_ORDERS = gql`
  mutation InsertOrders(
    $user_id: String!
    $createdAt: String!
    $delivered: Boolean!
    $description: String!
    $itemName: String!
    $number: Int!
    $updateAt: String!
  ) {
    insert_orders_one(
      object: {
        user_id: $user_id
        delivered: $delivered
        description: $description
        itemName: $itemName
        number: $number
        createdAt: $createdAt
        updatedAt: $updateAt
      }
    ) {
      user_id
      delivered
      description
      itemName
      number
      createdAt
      updatedAt
    }
  }
`;

export const Items = memo(() => {
  const { user } = useAuth0();
  const [addText, setAddText] = useState('');
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [slipNum, setSlipNum] = useState<number | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { data: orderData } = useQuery(GET_ALL_ORDERS);
  const { loading, error, data: texts } = useQuery(GET_TEXT);
  const [addPostsText] = useMutation(ADD_TEXT, {
    onCompleted: () => {
      return setAddText('');
    },
  });
  const [addOrders] = useMutation(ADD_ORDERS, {
    onCompleted: () => {
      return setAddText('');
    },
  });

  const handleChangeAddText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return setAddText(e.target.value);
    },
    []
  );

  const handleSlipNumChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      return setSlipNum(value);
    },
    []
  );

  const handleChangeItemName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return setItemName(e.target.value);
    },
    []
  );

  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return setDescription(e.target.value);
    },
    []
  );

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    if (!addText.trim()) return setIsLoading(false);
    await addPostsText({
      variables: { text: addText },
      refetchQueries: [{ query: GET_TEXT }],
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const handleAddOrders = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const createDate = formatISO(new Date());
    await addOrders({
      variables: {
        user_id: user?.sub,
        createdAt: createDate,
        updateAt: createDate,
        delivered: false,
        itemName: itemName,
        description: description,
        number: slipNum,
      },
      refetchQueries: [{ query: GET_ALL_ORDERS }],
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  return (
    <Layout>
      <div className="p-8">
        <h2>テキスト</h2>
        {texts.posts.map((text: any) => {
          return <p key={text.id}>{text.text}</p>;
        })}

        <form onSubmit={handleAddTodo}>
          <Input
            label="テキストを入力"
            name="text"
            value={addText}
            onChange={handleChangeAddText}
            placeholder="テキストを入力"
            type="text"
          />
          <Button
            isLoading={isLoading}
            btnText="送信"
            type="submit"
            size="md"
            useage="other"
          />
        </form>

        <h2>オーダーズ</h2>
        {orderData.orders?.map((order: any) => {
          return (
            <div key={order.id}>
              <p>{order.itemName}</p>
              <p>{order.description}</p>
            </div>
          );
        })}

        <form onSubmit={handleAddOrders}>
          <Input
            label="伝票番号を入力してください。"
            name="slipNum"
            value={slipNum}
            onChange={handleSlipNumChange}
            placeholder="12桁の伝票番号"
            type="number"
          />
          <Input
            label="注文品の名前"
            name="itemName"
            value={itemName}
            onChange={handleChangeItemName}
            placeholder="例）レモン"
            type="text"
          />
          <Input
            label="詳細文"
            name="description"
            value={description}
            onChange={handleChangeDescription}
            placeholder="例）アメリカからの輸入用品"
            type="text"
          />
          <Button
            isLoading={isLoading}
            btnText="送信"
            type="submit"
            size="md"
            useage="other"
          />
        </form>
      </div>
    </Layout>
  );
});
