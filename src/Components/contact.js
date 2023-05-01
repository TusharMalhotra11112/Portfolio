import name from '..//images/Name.svg'
import email from '..//images/email.svg'
function contact(){
    return(
        <div className="contact" id="contact">
            <div className="contactText">
                <span className="contactspan">Contact</span>
                <h1 className="contactDetail">Contact me here.</h1>
            </div>
            <div className="contactForm">
                <form className="form">
                    <div className='formdiv'>
                        <img src={name} alt='name' className='contactimg' />
                        <label for="formName">Name</label>
                        <br/>
                        <input type="text" id="formName" required></input>
                        <br/>
                    </div>
                    <div className='formdiv'>
                        <img src={email} alt='email' className='contactimg' />
                        <label for="formEmail">Email</label>
                        <br/>
                        <input type="email" id="formEmail" required></input>
                        <br/>
                    </div>
                    <div className='formdiv'>
                        <label for="formMessage">Message</label>
                        <br/>
                        <textarea name="message" rows="10" cols="10" wrap="soft" id="formMessage" required> </textarea>
                        <br/>
                    </div>
                    <input type="submit" value="Contact Me" id="submitButton"></input>
                </form>
            </div>
        </div>
    )
}
export default contact