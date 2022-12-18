import React from 'react'
import hand from '../Images/team_pic.jpg';
import team from '../Images/hand_pic.jpg';
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <div className='about_div'>

            <div className='about_first'>
                <div className='about_label'>
                    <label>ABOUT US</label>
                    <h1>We are a team of content writers who share their learnings</h1>
                </div>
                <div className='about_data'>
                    <p>You can also use this page to provide information about the frequency of your magazine, such as whether it is published daily, weekly, or monthly. You can also include links to any social media accounts associated with your magazine, so that readers can follow you for updates.</p>
                </div>
            </div>

            <div className='about_second'>
                <div className='about_second_first'>
                    <h3>Our Team of creatives</h3>
                    <h6>You can also use this page to provide information about the frequency of your magazine, such as whether </h6>
                    <p>When publishing articles on your post magazine page, it is important to use a clear and consistent format. This could include a title and author for each article, a brief summary or introduction, and the main body of the article. You can also include images or videos to enhance the reader experience.</p>
                </div>
                <div className='about_second_second'>
                    <img src={hand} alt='an hand pic'></img>
                </div>
            </div>

            <div className='about_third'>
                <div className='about_third_first'>
                    <img src={team} alt='an team pic'></img>
                </div>
                <div className='about_third_second'>
                    <h3>Our Team of creatives</h3>
                    <h6>You can also use this page to provide information about the frequency of your magazine, such as whether </h6>
                    <p>When publishing articles on your post magazine page, it is important to use a clear and consistent format. This could include a title and author for each article, a brief summary or introduction, and the main body of the article. You can also include images or videos to enhance the reader experience.</p>
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

export default About;
