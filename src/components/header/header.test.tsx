import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
    it("renders properl", () => {
        render(<Header />);
        expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("renders the searchbar container with placeholder text", () => {
        render(<Header />);
        const searchbarPlaceholder = screen.getByText("Searchbar");
        expect(searchbarPlaceholder).toBeInTheDocument();
    });
});
