import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPage, page, changePage}) => {
    const pagesArray = getPagesArray(totalPage)
    return (
        <div className={'page__wrapper'}>
            {pagesArray.map((pageItem) =>
                <span
                    className={pageItem === page ? 'page page__current' : 'page'}
                    key={pageItem}
                    onClick={() => changePage(pageItem)}
                >
                    {pageItem}
                </span>
            )}
        </div>
    );
};

export default Pagination;