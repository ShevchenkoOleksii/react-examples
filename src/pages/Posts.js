import React, {useEffect, useRef, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import {usePosts} from "../hooks/usePosts";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

const Posts = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'A JS-2', body: 'y JavaScript-1'},
        {id: 2, title: 'a JS-2', body: 'u JavaScript-2'},
        {id: 3, title: 'b JS-3', body: 'f JavaScript-3'},
        {id: 4, title: 'z JS-4', body: 'a JavaScript-4'},
        {id: 5, title: 'e JS-5', body: 'n JavaScript-5'}
    ])

    const postsListTitle = 'Posts List'
    const [filter, setFilter] = useState({
        selectedSort: '',
        searchValue: ''
    })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPagesCount(totalCount, limit))
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const sortedAndSelectedPosts = usePosts(posts, filter.selectedSort, filter.searchValue)

    const removePost = (post) => {
        setPosts([...posts.filter(item => post.id !== item.id)])
    }

    const changePage = (page) => {
        setPage(page)
    }

    const lastElement = useRef()

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
            .then(() => {
                // console.log('Success!')
            })
            .catch(e => {
                console.log(e)
            })
    }, [page, limit])

    return (
        <div className={'container'}>
            {/*<Something />*/}
            {/*<Counter />*/}
            <MyButton
                style={{marginTop: '20px'}}
                onClick={() => setModal(true)}
            >
                Create New Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal} >
                <PostForm create={createPost} posts={sortedAndSelectedPosts}/>
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue={'Page Count'}
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'All'}
                ]}
            />

            {postError &&
            <h1>Error! {postError}</h1>
            }
            <PostList posts={sortedAndSelectedPosts} title={postsListTitle} remove={removePost}/>
            <div
                ref={lastElement}
                style={{height: '20px', width: '100%', backgroundColor: 'red'}}
            >

            </div>
            {isPostsLoading &&
                <div style={{marginTop: '50px'}}><Loader /></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPage={totalPages}
            />
        </div>
    );
};

export default Posts;