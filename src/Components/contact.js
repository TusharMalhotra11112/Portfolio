import name from '../images/Name.svg'
import email from '../images/email.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
function contact(){
    return(
        <div className="contact" id="contact">
            <div className="contactText">
                <span className="contactspan">Contact</span>
                <span className="contactDetail">Contact me on other platforms</span>
                <div className='links'>
                    <a href='https://github.com/TusharMalhotra11112' target='blank'>
                    <img src={github} alt="github" className='linkImg' />
                    </a>
                    <a href='https://www.linkedin.com/in/tushar-malhotra-a34b66124/' target='blank'>
                    <img src={linkedin} alt="linkedin" className='linkImg'/>
                    </a>
                </div>
            </div>
            <div className="contactForm">
                <form className="form" onSubmit={console.log("submitted")}>
                    <div className='formdiv'>
                        <img src={name} alt='name' className='contactimg' />
                        <label htmlFor="formName">Name</label>
                        <br/>
                        <input type="text" id="formName" required></input>
                        <br/>
                    </div>
                    <div className='formdiv'>
                        <img src={email} alt='email' className='contactimg' />
                        <label htmlFor="formEmail">Email</label>
                        <br/>
                        <input type="email" id="formEmail" required></input>
                        <br/>
                    </div>
                    <div className='formdiv'>
                        <label htmlFor="formMessage">Message</label>
                        <br/>
                        <textarea name="message" rows="10" cols="10" wrap="soft" id="formMessage"  required> </textarea>
                        <br/>
                    </div>
                    <button type="submit" id="submitButton">Contact Me</button>
                </form>
            </div>
        </div>
    )
}
export default contact