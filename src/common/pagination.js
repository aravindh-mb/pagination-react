import React from 'react'
import _ from 'lodash'
const Pagination = props => {
    // console.log( props.itemsCount/props.pageSize + " "+ pagesCount)

    const {itemsCount,pageSize} = props;

    // console.log(itemsCount/pageSize);
    console.log(props.currentPage + " page");

    const pagesCount = Math.ceil(itemsCount/pageSize)

    const pages = _.range(1,pagesCount + 1)

    return(
        <React.Fragment>
            <nav>
            <ul className="pagination">
                {pages.map((page)=>(
                <li  className={page==props.currentPage?'page-item active':'page-item'} key={page} >
                    <a  className="page-link" href="/#" onClick={() => props.onPageChange(page)}>{page}</a>
                   {/* { console.log(page)} */}
                </li>
                ))}
            </ul>
        </nav>
        </React.Fragment>

    )
}
export default Pagination  