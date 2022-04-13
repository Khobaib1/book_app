


document.addEventListener('DOMContentLoaded',  function (){
    document.getElementById('button').onclick = async function(){
    let search = document.getElementById('search').value;
    const api = await fetch ("https://www.googleapis.com/books/v1/volumes?q= " + search)
    console.log(api)
    console.log(search)
    const respData = await api.json()
    console.log(respData)
    // console.log(respData.items[1].volumeInfo.authors[1])
    const title = document.getElementById('title').innerHTML = `Title: ${respData.items[1].volumeInfo.title}`
    const author = document.getElementById('author').innerHTML = `Author : ${respData.items[0].volumeInfo.authors[0]}`
    const rating = document.getElementById('rating').innerHTML = `Rating : ${respData.items[1].volumeInfo.averageRating}`
    const language = document.getElementById('language').innerHTML = `Language : ${respData.items[1].volumeInfo.language}`
    const publishDate = document.getElementById('publishDate').innerHTML = `Publish Date : ${respData.items[0].volumeInfo.publishedDate}`
    const image = document.getElementById('thumbnail').src = `${respData.items[1].volumeInfo.imageLinks.thumbnail}`
}})