import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./searchbar";
import { useGalleryApi } from "../../hooks/usegalleryapi";

jest.mock("../../hooks/usegalleryapi");

describe("SearchBar", () => {
    let useGetImagesBySearchMock: jest.Mock;

    beforeEach(() => {
        useGetImagesBySearchMock = jest.fn();
        (useGalleryApi as jest.Mock).mockReturnValue({
            useGetImagesBySearch: useGetImagesBySearchMock,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render the searchbar", () => {
        render(<SearchBar />);
        expect(screen.getByTestId("searchbar")).toBeInTheDocument();
    });

    it("should call useGetImagesBySearch when input value length is greater than 3", async () => {
        render(<SearchBar />);
        const searchBar = screen.getByTestId("searchbar") as HTMLInputElement;

        await userEvent.type(searchBar, "test");
        expect(useGetImagesBySearchMock).toHaveBeenCalledTimes(1);
        expect(useGetImagesBySearchMock).toHaveBeenCalledWith("test");
    });

    it("should not call useGetImagesBySearch when input value length is less than or equal to 3", async () => {
        render(<SearchBar />);
        const searchBar = screen.getByTestId("searchbar") as HTMLInputElement;

        await userEvent.type(searchBar, "tes");
        expect(useGetImagesBySearchMock).toHaveBeenCalledTimes(0);
    });
});
