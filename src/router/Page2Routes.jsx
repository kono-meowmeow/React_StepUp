// 動的に変わるパスを設定する

// Page1のルーティングを設定する
import { Page2 } from '../Page2';
import { UrlParameter } from '../UrlParameter';

export const page2Routes = [
  { path: '/page2', index: true, element: <Page2 /> },
  // :idの部分が動的に変わる(URLパラメーターとなる)
  { path: '/page2/:id', index: false, element: <UrlParameter /> },
];

