import { noAuth } from "./client.js";

const bookEndpoint = '/book'
//GET /book
export const apiBook = async (bookID, cancelToken) =>{
    let error
    let book
    console.log('HERE!')
    const response = await noAuth(cancelToken).get(bookEndpoint+'/'+bookID)
    if (response.ok){
        book = response.data
    }
    else{
        error = "Error!"  
    }
    return {
        error,
        book
    }
}
