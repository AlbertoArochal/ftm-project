import { useState } from "react";
import { useGalleryApi } from "../../hooks/usegalleryapi";

export const SearchBar = () => {
    const { useGetImagesBySearch } = useGalleryApi();
    const [search, setSearch] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        if (inputValue.length > 3) {
            useGetImagesBySearch(inputValue);
        }
    };

    return (
        <input
            type="text"
            value={search}
            onChange={handleChange}
            data-testid="searchbar"
            placeholder="You are looking for something?"
        />
    );
};
