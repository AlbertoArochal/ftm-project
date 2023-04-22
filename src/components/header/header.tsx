import logo from "../../assets/img/logo.svg";
import { SearchBar } from "../../searchbar/searchbar";

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <img src={logo} alt="Gallery logo" />
                    </div>
                    <div className="searchbar__container">
                        <p>Searchbar</p>
                        <SearchBar />
                    </div>
                </div>
            </header>
        </>
    );
};
