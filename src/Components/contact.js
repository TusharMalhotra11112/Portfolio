import name from '../images/Name.svg'
import email from '../images/email.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
function contact(){
    function submit(){
        let Name = document.getElementById("formName").value
        let email = document.getElementById("formEmail").value
        let message = document.getElementById("formMessage").value
        console.log(Name +" " + email + " " + message)
        document.querySelector(".form").style.zIndex = "-1"
        document.querySelector(".afterForm").style.zIndex = "1"

        console.log("submitted")
    }
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
                <form className="form" onSubmit={(e)=>{e.preventDefault();submit()}}>
                    <div className='formdiv'>
                        <img src={name} alt='name' className='contactimg' />
                        <label htmlFor="formName">Name</label>
                        <br/>
                        <input type="text" id="formName" defaultValue="" required></input>
                        <br/>
                    </div>
                    <div className='formdiv'>
                        <img src={email} alt='email' className='contactimg' />
                        <label htmlFor="formEmail">Email</label>
                        <br/>
                        <input type="email" id="formEmail" defaultValue="" required></input>
                        <br/>
                    </div>
                    <div className='formdiv'>
                        <label htmlFor="formMessage">Message</label>
                        <br/>
                        <textarea name="message" rows="10" cols="10" wrap="soft" id="formMessage" defaultValue="" required />
                        <br/>
                    </div>
                    <button type="submit" id="submitButton">Contact Me</button>
                </form>
                <div className="afterForm"><span className='contactspan'>Successfull</span><br/>Thanks For Contacting...<br/>I will soon be in touch</div>
            </div>
        </div>
    )
}
export default contact