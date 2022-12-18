import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [purpose, setPurpose] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch('/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    purpose,
                    message
                })
            })

            const data = await res.json();

            if (res.status === 400 || !data) {
                window.alert("Please fill all the fields");
                console.log("Pleaes fill all the fields");
            } else {
                window.alert("Message Send Successfully");
                console.log("Message Send Successfully");
                navigate('/thanks');
            }

        } catch (error) {
            console.log("This is the Error : " + error);
        }
    }

    return (
        <div className='contact_div'>

            <div className='contact_info'>
                <label>CONTACT US</label>
                <h2>Let's Start a Conversation</h2>
                <p>Hey Please give us any suggestion if you want about this website. Or You can ask any question regarding this website. Don't hagitate to ask. You are free to ask anything</p>
            </div>

            <div className='contact_link'>
                <div className='contact_time'>
                    <h4>Monday To Friday</h4>
                    <p>9:00 AM to 8:00 PM</p>
                </div>
                <div className='contact_number'>
                    <h4>098987878789</h4>
                    <p>hello@gmail.com</p>
                </div>
            </div>

            <div className='contact_field'>
                <input className='contact_input' type="text" value={name} placeholder='Full Name' onChange={(e) => setName(e.target.value)} />
                <input className='contact_input' type="email" value={email} placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} />
                <input className='contact_input' type="text" value={purpose} placeholder='Query Related' onChange={(e) => setPurpose(e.target.value)} />
                {/* <input type="text" placeholder='your date' onChange={(e) => setM(e.target.value)} /> */}
                <textarea rows='5' className='contact_textarea' type="text" value={message} placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
                <button className='contact_button' type='submit' onClick={onSubmit}>Send Message</button>

            </div>
        </div>
    )
}

export default Contact;