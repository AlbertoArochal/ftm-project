import { useState, useEffect } from "react";
import { ImageList } from "../imagelist/imagelist";
import { useEndscreen } from "../../hooks/useEndscreen";

export const HomePage = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const atEnd = useEndscreen();

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handleSearch = (newSearch: string) => {
        setSearch(newSearch);
    };

    useEffect(() => {
        if (atEnd) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [atEnd]);

    return (
        <div>
            <h1>Home Page</h1>
            <ImageList page={page} searchQuery={search} />

            <div id="endscreen">
                <h1>End of the page</h1>
            </div>
        </div>
    );
};
