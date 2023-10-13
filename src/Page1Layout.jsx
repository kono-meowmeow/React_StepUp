import { Outlet } from "react-router-dom"

export const Page1Layout = () => {
  return (
    <div>
      <h1>Page1のヘッダーです</h1>
      <Outlet />
    </div>
  );
};
