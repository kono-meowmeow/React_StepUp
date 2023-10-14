import { Outlet } from "react-router-dom"

export const Page2Layout = () => {
  return (
    <div>
      <h1>Page2のヘッダーです</h1>
      {/* OutletでPage2の各ファイルの内容を描画する */}
      <Outlet />
    </div>
  );
};
