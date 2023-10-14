import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // useParams()でURLパラメータを取得する
  const { id } = useParams();
  // useLocation()でクエリパラメータを取得する
  // 以下の場合、searchはURLの?以降の文字列となる
  const { search } = useLocation();
  // URLSearchParams()でsearchをオブジェクトに変換する
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメータは{id}です</p>
      {/* クエリパラメータのname=XXXのXXXを取得する */}
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
