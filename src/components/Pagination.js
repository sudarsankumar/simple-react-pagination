import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)
    {
        pageNumbers.push(i)
    }
    return (
        <nav className="d-flex justify-content-center align-items-center">
           <ul className="pagination" >
               {pageNumbers.map(number => (
                   <li key={number} className="page-item">
                       <a onClick={()=> paginate(number)} href="#" className="page-link text-dark">
                           {number}
                       </a>
                   </li>
               ))}
           </ul>
        </nav>
    )
}
export default Pagination