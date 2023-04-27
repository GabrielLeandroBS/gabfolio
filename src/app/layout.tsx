import base from "../styles/global/base.module.scss";

export const metadata = {
  title: {
    default: "Página inicial | Gabriel Leandro",
    template: "%s | Gabriel Leandro",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={base.layout} lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
