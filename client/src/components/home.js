import React from 'react'
// import opengpt from '../Static/opengpt.jpg'
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
        
            <div className='home-first'>
                <div className='first_content'>
                    <p>POSTED ON <span>STARTUP</span></p>
                    <h1>Step-by-step guide to choosing great font pairs</h1>
                    <label>By <span>James West</span> | May 23, 2022</label>
                    <p>This is the Magazine website, which focus on the content from the people who are in the collge. And all the people who want to contribute to this world by their words right away.</p>
                    <button>Read More</button>
                </div>
            </div>

            <div className='second_content'>
                {/* <div className='feature_post'>
                    <h2>Feature Post</h2>
                    <img src={opengpt} alt='one pic'></img>
                    <label></label>
                    <h4>Here we will talk about the OpenGPT, How It it affecting the worlds and its consequences</h4>
                    <p>OpenGPT is basically a chatbot which is developed by the OpenAI. This is an artifical intelligance website which working on the neural language processing and ai.</p>
                    <button>Read More</button>
                </div> */}
                {/* <div className='all_post'>
                    <h2>All Posts</h2>
                    <div className='post_one'>
                        <label>By Jan Dan | Aug 23 2021</label>
                        <h4>8 Figma design systems that you can download for free today.</h4>
                    </div>
                    <div className='post_one'>
                        <label>By Jan Dan | Aug 23 2021</label>
                        <h4>8 Figma design systems that you can download for free today.</h4>
                    </div>
                    <div className='post_one'>
                        <label>By Jan Dan | Aug 23 2021</label>
                        <h4>8 Figma design systems that you can download for free today.</h4>
                    </div>
                    <div className='post_one'>
                        <label>By Jan Dan | Aug 23 2021</label>
                        <h3>8 Figma design systems that you can download for free today.</h3>
                    </div>
                </div> */}
            </div>


            <div className='third_content'>
                <div className='third_first'>
                    <label>ABOUT US</label>
                    <h3>We are a community of content writers who share their learnings.</h3>
                    <p>So, We have given you a platform in which you can post you content and at the same time share with your friends and mates inside your college.</p>
                    {/* <h4><NavLink to="/">Read More</NavLink></h4> */}
                    <h4><NavLink className='nav-link' to="/">Read More</NavLink></h4>
                </div>
                <div className='third_second'>
                    <label>OUR MISSION</label>
                    <h3>Creating valuable content for creatives all around the world</h3>
                    <p>So, We have given you a platform in which you can post you content and at the same time share with your friends and mates inside your college. So, We have given you a platform in which you can post you content and at the same time share with your friends and mates inside your college.</p>
                </div>
            </div>


            <div className='fourth_content'>
                <h2>Choose a Catagory</h2>
                <div className='fourth_div_content'>

                    <div className='fourth_div'>
                        <img src="https://img.icons8.com/fluency/64/null/investment.png" alt='business pic'></img>
                        <h3>Business</h3>
                        <p>Hey, Post can post about the business related content</p>
                    </div>
                    <div className='fourth_div'>
                        <img src="https://img.icons8.com/fluency/64/null/bad-idea.png" alt='startup pic' ></img>
                        <h3>Startup</h3>
                        <p>Hey, Post can post about the startup related content</p>
                    </div>
                    <div className='fourth_div'>
                        <img src="https://img.icons8.com/fluency/64/null/bonds.png" alt='money pic'></img>
                        <h3>Economy</h3>
                        <p>Hey, Post can post about the economy related content</p>
                    </div>
                    <div className='fourth_div'>
                        <img src="https://img.icons8.com/fluency/64/null/wearable-technology.png" alt='tech pic'></img>
                        <h3>Technology</h3>
                        <p>Hey, Post can post about the technology related content</p>
                    </div>
                </div>
            </div>

            <div className='fifth_content'>

                <div className='fifth_content_div'>
                    <h2>Join our team to be a part of our story</h2>
                    <p>Hey, Join by contributing some content to our platform so that everyone can get access to your content and konwloadge all well.</p>
                    <button><NavLink className='nav-link' to="/register">Join Now</NavLink></button>
                </div>

            </div>


        </div>
    )
}

export default Home;
