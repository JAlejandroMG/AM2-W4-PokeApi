import React from 'react';
import './pagination.css';


//3. Mostrar las páginas disponibles
    //Si solicitamos la página 10 mostrariamos [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] ( |10 - 5| |10 + 4| )
    //Si solicitamos la página 14 mostrariamos [9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ( |14 - 5 | |14 + 4| )
function Pagination(props){
    // const pokemonArray = Array.apply(null, Array(10)).map(() => {})
    const currentPage = props.currentPage;
    let pageLimit = 0;
    (props.pokemonLimit % props.pokemonPerPage) === 0 ? pageLimit = props.pokemonLimit/props.pokemonPerPage : pageLimit = Math.floor(props.pokemonLimit/props.pokemonPerPage) + 1;
    const pages = [];

    if(currentPage <= 6){
      for(let i = 1; i<=10; i++){
        pages.push(i);
      }
    } else if(currentPage > pageLimit-5) {
        for(let i = pageLimit-9; i <= pageLimit; i++) {
          pages.push(i);
        }
    } else{
      let limiteInferior = currentPage - 5;
      let limiteSuperior = currentPage + 4;
      for(let i = limiteInferior; i<=limiteSuperior; i++){
        pages.push(i);
      }
    }    
    
    return (
        <div className="pagination-row">
            {
                pages.map( (page, index) => {
                    return (                      
                      <div className="pokepage" key={index} onClick={() => props.fetchPageFn(page)}><span>{page}</span></div>
                    )
                })
            }
            
        </div>
    )
}


export default Pagination;
