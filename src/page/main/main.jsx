import Contact from '../../components/contact/contact'
import Project from '../../components/project/project'
import Skils from '../../components/skils/skils'
import './main.scss'

function Main() {
    return (
        <main className='main'> 
           <Skils />
           <Project />
           <Contact />
        </main>
    )
}

export default Main