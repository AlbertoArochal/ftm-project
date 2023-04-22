import { useEffect, useState } from "react";

export const useEndscreen = () => {
    const [atEnd, setAtEnd] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight =
                "innerHeight" in window
                    ? window.innerHeight
                    : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );
            const windowBottom = windowHeight + window.pageYOffset;

            if (windowBottom >= docHeight - 100) {
                setAtEnd(true);
            } else {
                setAtEnd(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return atEnd;
};

export default useEndscreen;
