/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Blog() {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getBlog = async () => {
        try {
            const res = await fetch('/blog', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setBlogData(data);

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            navigate('/');
        }
    };

    useEffect(() => {
        getBlog();
         //eslint-disable-next-line
    }, []);

    return (
        <div className='blog_div'>
            <div className="search_blog">
                <h4>Search Magazine</h4>
                <input className="blog_search_input" type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
            </div>
            {blogData
                .filter(val => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                })
                .map((val, key) => {
                    return (

                        <div className='one_blog' key={key}>
                            <div className='blog_profile'>
                                <div>
                                    <img src="https://img.icons8.com/color/48/null/user-male-circle--v1.png" alt="this is profile" />
                                </div>
                                <div className='blog_profile_data'>
                                    <p>{val.name}</p>
                                    <label>{val.regno}</label>
                                </div>
                            </div>

                            <div className='blog_data'>
                                <h1>{val.title}</h1>
                                <img src={val.image} alt="just pic" />
                                <h2>{val.sub_title_1}</h2>
                                <p>{val.content_1}</p>
                                <h2>{val.sub_title_2}</h2>
                                <p>{val.content_2}</p>
                                <h2>{val.sub_title_3}</h2>
                                <p>{val.content_3}</p>
                            </div>

                        </div>
                    )
                })};

        </div>
    )
}

export default Blog;
