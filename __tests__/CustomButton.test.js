import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CustomButton } from "../components/atoms/CustomButton/CustomButton";
describe("Page", () => {
  it("renders a heading", () => {
    render(<CustomButton />);
  });
});
