import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "@/components/atoms/button";
import { ButtonProps } from "@/types/button.type";

describe("Component Button", () => {
  it("Should render with correct props", () => {
    const props: ButtonProps = {
      url: "/",
      label: "Button",
      size: "medium",
      primary: true,
    };

    const { getByText } = render(<Button {...props} />);

    const validateButtonProps = getByText(props.label);

    expect(validateButtonProps).toBeInTheDocument();
    expect(validateButtonProps).toHaveAttribute("href", props.url);
    expect(validateButtonProps).toHaveClass("c-button--primary");
    expect(validateButtonProps).toHaveClass("c-button--medium");
  });

  it("Access the index link component", () => {
    const { getByRole } = render(
      <Button url="/" label="Jest && Testing Library" size="medium" primary />
    );

    const linkToRedirect = getByRole("link", {
      name: "Link to go to Jest && Testing Library page",
    });

    fireEvent.click(linkToRedirect);
    expect(window.location.pathname).toBe("/");
  });
});
