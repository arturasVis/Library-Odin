let myLibrary=[];
const contetScreen=document.querySelector(".content")
function Book(title,author,pages,read){
    this.author=author
    this.title=title
    this.pages=pages
    this.read=read
}


function displayBook(book,id){
const card=document.createElement('div')
    card.setAttribute('class','card')
    card.setAttribute('id',`${id}`)
    const title=document.createElement('h1')
    title.innerHTML=book.title
    card.appendChild(title)
    const list=document.createElement('ul')
    const li1=document.createElement('li')
    li1.innerHTML=`Author: ${book.author}`
    list.appendChild(li1)
    const li2=document.createElement('li')
    li2.innerHTML=`Pages: ${book.pages}`
    list.appendChild(li2)
    const li3=document.createElement('li')
    li3.innerHTML=`Status: ${book.read ? "Already been read":"Has not been read yet"}`
    list.appendChild(li3)
    card.appendChild(list)
    const removeButton=document.createElement('button')
    removeButton.innerHTML="Remove book"
    removeButton.setAttribute("class","btn remove_Book")
    removeButton.addEventListener("click",(e) =>{
        const id=e.target.parentElement.id
        myLibrary.splice(parseInt(id),1)
        e.target.parentElement.parentElement.innerHTML=""
        displayAllBooks()
    })
    const statusButton=document.createElement("button")
    statusButton.setAttribute("class","btn")
    statusButton.innerHTML="Change status"
    statusButton.addEventListener("click",(e) =>{
        const id=parseInt(e.target.parentElement.id)
        myLibrary[id].read=myLibrary[id].read ? false:true
        e.target.parentElement.parentElement.innerHTML=""
        displayAllBooks()
    })
    card.appendChild(statusButton)
    card.appendChild(removeButton)
    contetScreen.appendChild(card)
}
function displayAllBooks()
{
    for(let i=0;i<myLibrary.length;i++)
    {
        displayBook(myLibrary[i],i)
    }
}
function addBookToLibrary(title,author,pages,read){
    const book=new Book(title,author,pages,read)
    myLibrary.push(book)
    displayBook(book,myLibrary.length-1)
}
function openForm() {
    document.querySelector(".popup").style.display = "block";
    document.querySelector(".open-button").style.display="none"
  }
  
  function closeForm() {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".open-button").style.display="block"
  }
const addBookForm= document.querySelector(".form-container")

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const title=document.querySelector("#title").value;
    const author=document.querySelector("#author").value;
    const pages=document.querySelector("#pages").value;
    const read=document.querySelector('#read').checked;
    document.querySelector('#read').checked=false;
    document.querySelector("#pages").value="";
    document.querySelector("#author").value="";
    document.querySelector("#title").value="";
    addBookToLibrary(title,author,pages,read);
    closeForm()
})
