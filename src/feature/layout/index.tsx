import type { ReactNode } from 'react';
import * as S from './layout.style';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <S.LayoutContainer>{children}</S.LayoutContainer>;
};

export default Layout;
