// Page1のルーティングを設定する
import { Page1 } from '../Page1';
import { Page1DetailA } from '../Page1DetailA';
import { Page1DetailB } from '../Page1DetailB';

export const page1Routes = [
  { path: '/page1', index: true, element: <Page1 /> },
  { path: '/page1/detailA', index: false, element: <Page1DetailA /> },
  { path: '/page1/detailB', index: false, element: <Page1DetailB /> },
];
