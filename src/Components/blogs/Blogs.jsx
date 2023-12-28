import React, { useEffect } from 'react'
import './blogs.css'
const Blogs = () => {

    // fetch blogs from API and store them in the state

    const [blogs, setBlogs] = React.useState([])

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        const data = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aakritycpg')
        const blogs = await data.json()
        if (blogs.items) {
            console.log(blogs.items)
            setBlogs(blogs.items)
        }
    }

    return (
        <div class="site__wrapper">
            <h1
                style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}
            >Find what I have scribbled,</h1>
            {
                blogs.length > 0 ? blogs.map((blog, index) => {
                    return (
                        <div class="grid" key={index}>
                            <div class="card" >
                                <div class="card__image">
                                    {/* <img src={`${blogs[0].thumbnail}`} alt="asd" /> */}

                                    <div class="card__overlay card__overlay--indigo">
                                        <div class="card__overlay-content">
                                            <ul class="card__meta">
                                                {
                                                    blog.categories.length > 0 && blog.categories.map((category, index) => {
                                                        return <li key={index}><a href="#0"><i class="fa fa-tag"></i> {category}</a></li>
                                                    })
                                                }
                                            </ul>

                                            <a target='_blank' rel='noreferrer' href={blog.link} class="card__title">{
                                                blog.title
                                            }</a>

                                            <ul class="card__meta card__meta--last">
                                                <li><a href={`https://aakritycpg.medium.com`} target='_blank' rel="noreferrer"><i class="fa fa-user"></i> {blog.author}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })
                    :
                    <h1 style={{
                        color: 'white'
                    }}> Blogposts are coming soon.</h1>
            }

        </div>
    )
}

export default Blogs