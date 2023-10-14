import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  // useParams()でURLパラメータを取得する
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメータは{id}です</p>
    </div>
  );
};
