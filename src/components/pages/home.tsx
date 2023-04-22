import { useState } from "react";
import { ImageList } from "../imagelist/imagelist";

export const HomePage = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handleSearchChange = (newSearch: string) => {
        setSearch(newSearch);
    };

    return (
        <div>
            <h1>Home Page</h1>
            <ImageList page={page} searchQuery={search} />
            <div>
                <label>
                    Page:
                    <input
                        type="number"
                        value={page}
                        onChange={(e) => handlePageChange(+e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Search:
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
};
