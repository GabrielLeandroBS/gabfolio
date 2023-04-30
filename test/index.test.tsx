import { render, screen } from "@testing-library/react";
import Home from "../src/app/page.tsx";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    const textToFind = "Montar botão";

    render(<Home />);

    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
});
