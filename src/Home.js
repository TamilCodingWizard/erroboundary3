import React, { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary';



const Home = () => {

    const [posts, setPosts] = useState([])

    const handleError = useErrorHandler()
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')

                if(!response.ok) {
                    throw new Error('Throwing')
                }
                if (response.ok) {
                    const jsonResponse = await response.json()
                     setPosts(jsonResponse)
                }
            }
            catch (e) {
                console.log('In catch')
                handleError(e)
            }
        }

        fetchData()
    }, [])
    return (
        <div>
            {
                posts.length > 0 && posts.map((post) => {
                    return <h6 key={post.id}>{post.title}</h6>
                })
            }
        </div>
    )
}

export default Home
