import { Outlet } from "react-router-dom"

export const Page1Layout = () => {
  return (
    <div>
      <h1>Page1のヘッダーです</h1>
      {/* OutletでPage1の各ファイルの内容を描画する */}
      <Outlet />
    </div>
  );
};
