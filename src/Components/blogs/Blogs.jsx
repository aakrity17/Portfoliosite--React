import React, { useEffect, useState } from 'react'; // Corrected the import statement
import './blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]); // Used useState instead of React.useState

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const data = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aakritycpg');
            const blogsData = await data.json();

            if (blogsData.items) {
                console.log(blogsData.items);
                setBlogs(blogsData.items);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    return (
        <div className="site__wrapper">
            <h1
                style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
            >
                Find what I have scribbled,
            </h1>
            {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                    <div className="grid" key={index}>
                        <div className="card">
                            <div className="card__image">
                                <div className="card__overlay card__overlay--indigo">
                                    <div className="card__overlay-content">
                                        <ul className="card__meta">
                                            {blog.categories.length > 0 &&
                                                blog.categories.map((category, index) => (
                                                    <li key={index}>
                                                        <a href="#0">
                                                            <i className="fa fa-tag"></i> {category}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>

                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={blog.link}
                                            className="card__title"
                                        >
                                            {blog.title}
                                        </a>

                                        <ul className="card__meta card__meta--last">
                                            <li>
                                                <a
                                                    href={`https://aakritycpg.medium.com`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <i className="fa fa-user"></i> {blog.author}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1 style={{ color: 'white' }}>Blogposts are coming soon.</h1>
            )}
        </div>
    );
};

export default Blogs;
