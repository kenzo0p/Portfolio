import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name:"",
        email:"",
        message:""
    })
    const handleChange = ({target :{name ,value}}) => {
        setForm({...form, [name]:value})
    }
    // service_auaxs6j
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_auaxs6j',
                'template_z8xel0a', {
                    from_name:form.name,
                    to_name:'Om',
                    from_email:form.email,
                    to_email:"ombhor31@gmail.com",
                    message:form.message
            } ,"uqRIjXbCRGuZCDzuq")
            setLoading(false)
            alert("Your message has been sent successfully")
            setForm({
                name:"",
                email:"",
                message:""
            })
        }catch (e) {
            setLoading(false)
            console.log(e)
            alert("Something went wrong")
        }

    }
    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you are looking to build a new website,
                    improve an existing one or need help with a project, I am here to help you.
                    </p>
                        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7 ">
                            <label className="space-y-3">
                                <span className="field-label">Full Name</span>
                                <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="John Doe"/>
                            </label> <label className="space-y-3">
                                <span className="field-label">Email</span>
                                <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="John@gmail.com"/>
                            </label> <label className="space-y-3">
                                <span className="field-label">Your Message</span>
                                <textarea  name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hi , I am John Doe from XYZ company. I need help with my website." />
                            </label>
                            <button type="submit" className="field-btn" disabled={loading}>{loading ? "Sending..." : "Send Message"} <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/></button>
                        </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
