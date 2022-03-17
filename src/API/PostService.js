import axios from "axios";

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

export default class PostService {

    static async getAll(limit = 10, page= 1) {
        return await axios.get(postsUrl, {
            params: {
                _limit: limit,
                _page: page
            }
        })
    }

    static async getById(id) {
        return await axios.get(`${postsUrl}/${id}`)
    }

    static async getCommentsByPostId(id) {
        return await axios.get(`${postsUrl}/${id}/comments`)
    }
}