
const alphabetize = (bookList) => {
    let compare = (a,b) => {
        if(a.title < b.title) { return -1 }
        if(a.title > b.title) { return 1 }

        return 0;
    }
    return bookList.sort(compare)
}


export { alphabetize }
