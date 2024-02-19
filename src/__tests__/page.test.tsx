import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Page", () => {
  it("renders home page", () => {
    render(<Page />);
    expect(screen.getByText("WelCome to Washazon!")).toBeInTheDocument();
  });
});
