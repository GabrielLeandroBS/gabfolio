import base from '../styles/global/base.module.scss';

export const metadata = {
  title: {
    default: 'Página inicial | Gabriel Leandro',
    template: '%s | Gabriel Leandro',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={base.layout} lang="en">
      <body>{children}</body>
    </html>
  );
}
