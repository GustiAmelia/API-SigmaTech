const formResponse ={
  success:(res,results,status)=>{
      const response={
          isSuccess : true,
          status : status,
          results : results
      }
      res.json(response);
  },
  err : (res,error,status)=>{
      const response={
          isSuccess : false,
          status : status,
          results : error
      }
      res.json(response);
  },
  pagination :({query},res,results)=>{
      const page =Number(query.page);
      const prevPage = page === 1 ? "" : `/product/?page=${page - 1}&limit=10`;
      const nextPage = results.length < 10 ? "" : `/product/?page=${page + 1}&limit=10`;
      const responseObject = {
          success: true,
          status: 200,
          results,
          pageInfo: {
            currentPage: query.page,
            limit: 10,
            prevPage,
            nextPage,
          },
        };
        res.json(responseObject);
  }
}

module.exports = formResponse;