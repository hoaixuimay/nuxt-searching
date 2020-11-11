export const state = () => {
    return {
        books: [
            {name: "Never die", image: "", author: "Johny Depth", publishedYear: "1989", description: "You will never die if you read this book"},
            {name: "Sky walker", image: "", author: "Claudia Papalope", publishedYear: "2000", description: "Person who walk on the sky"},
            {name: "Walking through the forest", image: "", author: "Walking Dead", publishedYear: "2007", description: "Dangerous things in the forest"}
          ],
        foundBooks: []
    };
};
export const mutations = {
    addBook(state, book) {
        state.books.push(book);
    },
    searchBooks(state, searchInput) {
        if(searchInput == null || searchInput == ''){
            state.foundBooks = state.books;
            return;
        }
        
        state.foundBooks = [];
        let searchTerm = searchInput.toLowerCase();
        for(let i = 0; i < state.books.length; i++){
            let book = state.books[i];
            if(book.name.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm) ||
            book.publishedYear.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm)
            ) {
                state.foundBooks.push(book);
            }
        }
    },
};
export const actions = {
    addBook(vuexContext, book) {
        vuexContext.commit('addBook', book);
    },
    searchBooks(vuexContext, searchInput) {
        vuexContext.commit('searchBooks', searchInput);
    }
};
export const getters = {
    books(state) {
        return state.books;
    },
    foundBooks(state) {
        return state.foundBooks;
    }
};

