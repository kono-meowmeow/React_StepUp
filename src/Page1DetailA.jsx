import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  // 下記でもページ遷移は可能
  // const onClickBack = () => history.back();
  // useNavigateを使うと下記のようになる(上記のようにhistoryを使う必要がなくなる)
  const navigate = useNavigate();
  const onClickBack = () => navigate(-1);

  return (
    <div>
      <h1>Page1DetailAです</h1>
      {/* useLocation()で取得したLocationのstateを表示する */}
      <p>{state}</p>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
