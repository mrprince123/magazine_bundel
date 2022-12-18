import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

function BlogPost() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [regno, setRegno] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [sub_title_1, setSubTitle1] = useState('');
    const [content_1, setContent1] = useState('');
    const [sub_title_2, setSubTitle2] = useState('');
    const [content_2, setContent2] = useState('');
    const [sub_title_3, setSubTitle3] = useState('');
    const [content_3, setContent3] = useState('');


    const imagePost = async (e) => {
        e.preventDefault();

        try {

            const imgData = new FormData();

            imgData.append("file", image);
            imgData.append("upload_preset", 'college_magazine');
            imgData.append('cloud_name', 'sniperdocs');

            await fetch("https://api.cloudinary.com/v1_1/sniperdocs/image/upload", {
                method: 'POST',
                body: imgData
            }).then((res) => res.json()).then(async (result) => {
                console.log(result.url);

                if (!result || !result.url) {
                    window.alert("Please fill all the fields");
                    console.log("Pleaes fill all the fields");
                } else {
                    window.alert("Content Posted Successfully");
                    console.log("Content Posted Successfully");
                    navigate('/thanks');
                }

                try {
                    const res = fetch('/blogpost', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            image: result.url,
                            name: name,
                            regno: regno,
                            title: title,
                            sub_title_1: sub_title_1,
                            content_1: content_1,
                            sub_title_2: sub_title_2,
                            content_2: content_2,
                            sub_title_3: sub_title_2,
                            content_3: content_3,
                        })
                    })

                    const data = await res.json();
                    console.log(data);


                    if (res.status === 400 || !data) {
                        window.alert("Please fill all the fields");
                        console.log("Pleaes fill all the fields");
                    } else {
                        window.alert("Message Send Successfully");
                        console.log("Message Send Successfully");
                        navigate('/blog');
                    }
                } catch (error) {
                    console.log("This is the last error " + error);
                }

            }).catch((err) => {
                console.log("This is the Image Fetch error : " + err);
            })

        } catch (error) {
            console.log("This is the Last Error");
        }
    }



    return (
        <div className='blogpost_div'>

            <h2>Monthly Magazine</h2>
            <div className='blogpost_info'>
                <h4>Rules of Posting</h4>
                <p>Welcome to Our Magazine - a magazine that covers a wide range of topics. In each issue, we bring you exclusive interviews, in-depth articles, and reviews of the latest products and services. You can post anything relate to tech, startup, new Idea, bussiness and many more.</p>
            </div>

            <div className='blogpost_field'>

                {/* <form method='POST'> */}
                <input className='blogpost_file' type='file' onChange={(e) => setImage(e.target.files[0])} />
                <input className='blogpost_input' type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                <input className='blogpost_input' type="text" value={sub_title_1} placeholder='Sub Title 1' onChange={(e) => setSubTitle1(e.target.value)} />
                <textarea className='blogpost_textarea' rows='8' type="text" value={content_1} placeholder='Content 1' onChange={(e) => setContent1(e.target.value)} />
                <input className='blogpost_input' type="text" value={sub_title_2} placeholder='Sub Title 2' onChange={(e) => setSubTitle2(e.target.value)} />
                <textarea className='blogpost_textarea' rows='8' value={content_2} placeholder='Content 2' onChange={(e) => setContent2(e.target.value)} />
                <input className='blogpost_input' type="text" value={sub_title_3} placeholder='Sub Title 3' onChange={(e) => setSubTitle3(e.target.value)} />
                <textarea className='blogpost_textarea' rows='8' value={content_3} placeholder='Content 3' onChange={(e) => setContent3(e.target.value)} />
                <input className='blogpost_input' type="text" value={name} placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
                <input className='blogpost_input' type="text" value={regno} placeholder='Your Registration no' onChange={(e) => setRegno(e.target.value)} />
                <button className='blogpost_button' type='submit' onClick={imagePost}>Submit Data</button>

                {/* </form> */}
            </div>

        </div>
    )
}

export default BlogPost;
