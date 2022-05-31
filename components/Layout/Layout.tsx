import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { useRouter } from "next/router";

interface PagesSchema {
  children: React.ReactNode;
}

export const Layout = ({ children }: PagesSchema) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Header pathname={pathname} />
      {children}
      <Footer pathname={pathname} />
    </>
  );
};
