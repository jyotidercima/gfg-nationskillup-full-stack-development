import React from "react";
import { render } from "@testing-library/react";
import Button from "../components/SnapButton";

test("Button component renders correctly", () => {
    const { asFragment } = render(<Button label="Click me" />);
    expect(asFragment()).toMatchSnapshot(); 
});