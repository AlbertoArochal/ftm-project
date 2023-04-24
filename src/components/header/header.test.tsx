import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
    it("should render the header", () => {
        render(<Header />);

        expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("should render the logo", () => {
        render(<Header />);

        const logo = screen.getByAltText("Gallery logo");
        expect(logo).toBeInTheDocument();
    });

    it("should render the SearchBar", () => {
        render(<Header />);

        expect(screen.getByTestId("searchbar")).toBeInTheDocument();
    });
});
