import Button from "@/components/atoms/button";
import Link from "next/link";

export const metadata = {
  title: "About",
};

const About = () => (
  <section>
    <h1>About</h1>
    <Button label={"Go to home"} url={"/"} primary={false} size="large" />
  </section>
);

export default About;
