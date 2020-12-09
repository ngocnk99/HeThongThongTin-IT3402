import axios from 'axios'

const url = 'http://localhost:8090/api/book';


class BookService {
    // get posts
    static getPosts() {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url)
                const data = res.data

                resolve(
                    data.map((post) => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            } catch (err) {
                reject(err)
            }
        })
    }
    static getBook(search) {
        return axios.get(url, {
            params: {
                search: search
            }
        });
    }
    static addBook(book) {
        localStorage.setItem('user', JSON.stringify(book));
        return axios.post(url + '/mybook/edit', book.book);
    }

}

export default BookService