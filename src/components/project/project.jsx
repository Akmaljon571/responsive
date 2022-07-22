import useStart from "../../hooks/useStart";
import language from "../../language";
import './project.scss'
import proj from '../../img/gears-svgrepo-com.svg'
import bobur from '../../img/bobu.jpg'
import magazin from '../../img/magazin.jpg'
import link from '../../img/Group.png'
import nn from '../../img/nn.jpg'


function Project() {
    const { lan } = useStart()

    return ( 
        <section id="project" className="project">
            <h2 className="skils_h1">{language[0][lan].loyiha} <img src={proj} alt="" /></h2>
            <h3 className="skils_h2" style={{textAlign: 'center', marginTop: 45}} >{language[0][lan].bazi}</h3>
            <ul className="project_list">
                <li className="project_item">
                  <div className="project_ota">
                    <img src={bobur} width={300} height={200} className='project_img' alt="rfr" />
                    <p className="project_p">{language[0][lan].bobur}</p>
                    <a className="project_link" href="https://imtihon555.netlify.app/"><img src={link} alt="xe" /></a>
                  </div>
                </li>
                <li className="project_item">
                    <div className="project_ota">
                        <img src={magazin} width={300} height={200} className='project_img' alt="rfr" />
                        <p className="project_p1">{language[0][lan].magazin}</p>
                        <a className="project_link1" href="https://mahinashop.netlify.app/"><img src={link} alt="xe" /></a>
                    </div>
                </li>
                <li className="project_item">
                 <div className="project_ota">
                    <img src={nn} width={300} height={200} className='project_img' alt="rfr" />
                    <p className="project_p">{language[0][lan].nn}</p>
                    <a className="project_link" href="https://cheery-platypus-f75650.netlify.app/post"><img src={link} alt="xe" /></a>
                 </div>
                </li>
            </ul>
        </section>
     );
}

export default Project;