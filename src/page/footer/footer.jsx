import language from '../../language'
import './footer.scss'
import useStart from '../../hooks/useStart'
import tg from '../../img/tg.png'
import insta from '../../img/insta.png'
import git from '../../img/gitHub.png'
import linkin from '../../img/Vector.png'
import email from '../../img/gmail.svg'
import { Container } from '../../components'


function Footer() {
    const { lan } = useStart()
    return (
        <footer className="footer">
            <Container>
                <div className="footer_ota">

                    <div className="footer_left">
                        <h2 className='footer_h2'>{language[0][lan].footer}</h2>
                        <ul className="footer_list">
                        <li className="footer_item">
                            <a href='https://www.instagram.com/akmal77_571__/'>
                                <img width={65} height={65} className='footer_img' src={insta} alt="cd" />
                            </a>
                        </li>
                        <li className="footer_item">
                            <a href='https://t.me/Sabr571sav'>
                                <img width={65} height={65} className='footer_img1' src={tg} alt="cd" />
                            </a>
                        </li>
                        <li className="footer_item">
                            <a href='mailto:ahmadjonovakmal079@gmail.com'>
                                <img width={65} height={65} className='footer_img1' src={email} alt="cd" />
                            </a>
                        </li>
                        <li className="footer_item">
                            <a href='https://www.linkedin.com/in/akmal-ahmadjonov-a85792240/'>
                                <img width={65} height={55} className='footer_img1' src={linkin} alt="cd" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="footer_rigth">
                        <h2 className='footer_h2'>More projects I’ve worked on</h2>
                        <a href='https://github.com/Akmaljon571' className="footer_otach">
                            <img className='footer_imgcha' width={65} height={65} src={git} alt="c" />
                            <div className='gitLink'>
                               @john-doe on github
                            </div>
                        </a>
                    </div>
                </div>
                
            </Container>
        </footer>
    )
}

export default Footer