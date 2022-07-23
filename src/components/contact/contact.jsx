import './contact.scss'
import left from '../../img/contact.png'

function Contact() {
    return (
        <section id='Contactme' className='contact'>
            <h2 className='skils_h1'>Contact me</h2>
            <div className="contact_ota">
                <div className="contact_left">
                    <img src={left} width = {636} height={471} alt="fd" />
                </div>
                <ul className="contact_list">
                    <li className="contact_item">
                        <a href="tel:+998900456961">
                        +998900456961
                        </a>
                    </li>
                    <li className="contact_item">
                        <a href="mailto:ahmadjonovakmal079@gmail.com">
                        ahmadjonovakmal079@gmail.com
                        </a>
                    </li>
                    <li className="contact_item">
                        Toshkent vil. Yangiyol sh.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;