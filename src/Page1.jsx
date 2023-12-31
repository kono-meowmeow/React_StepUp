import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  // useNavigate()を使うことで、jsでのページ遷移が可能になる
  const navigate = useNavigate();
  const onClickDetailA = () => navigate("/page1/detailA")

  return (
    <>
      <div>
        <h1>Page1です</h1>
        {/* 以下は、v6での書き方 */}
        {/* 下記のようにstateを渡すページ遷移をすると、一覧ページでstateを取得して、詳細ページでstateを再取得するようなことを回避できる */}
        <Link to="/page1/detailA" state={arr}>DetailA</Link>
        <br />
        <Link to="/page1/detailB">DetailB</Link>
        <br />
        <button onClick={onClickDetailA}>DetailA</button>
      </div>
    </>
  );
};
