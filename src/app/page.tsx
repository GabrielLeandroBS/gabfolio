import Link from "next/link";

const Home = () => (
  <section>
    <h1>Montar botão</h1>
    <Link href={'/about'}>About</Link>
  </section>
);

export default Home;
