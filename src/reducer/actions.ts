export const setPage = (page: number) => {
    return {
        type: "SET_PAGE",
        payload: page,
    };
};

export const setSearchQuery = (searchquery: string) => {
    return {
        type: "SET_SEARCH_QUERY",
        payload: searchquery,
    };
};
