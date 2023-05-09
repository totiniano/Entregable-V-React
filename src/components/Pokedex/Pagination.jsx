const Pagination = (pokePerPage, currentPage, setCurrentPage, totalPokemon) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPokemon / pokePerPage); i++) {
        pageNumber.pageNumber(i);
    }

    const MaxPageToShow = 10;
    const middlePage = Math.floor(MaxPageToShow / 2);
    const maxPage = Math.min(currentPage + middlePage, pageNumber.length);
    const minPage = Math.max(maxPage - MaxPageToShow + 1, 1);
    const displayPages = pageNumber.slice(minPage - 1, maxPage);

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const onNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const selectPage = () => {
        setCurrentPage(e);
    };

    return (
        <nav>
            <a
                className={`pagination__previsus ${
                    currentPage === 1 ? "is__isabled" : ""
                }`}
                onClick={onPreviusPage}
            >
                Previous
            </a>
            <a
                className={`pagination__next ${
                    currentPage >= pageNumber.length ? "is__disabled" : ""
                }`}
                onClick={onNextPage}
            >
                Next
            </a>
            <ul className="pagination__list">
                {displayPages.map((nroPage) => (
                    <li key={nroPage}>
                        <a
                            className={`pagination__link ${
                                nroPage === currentPage ? "is__current" : ""
                            }`}
                            onClick={() => selectPage(nroPage)}
                        >
                            {nroPage}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
