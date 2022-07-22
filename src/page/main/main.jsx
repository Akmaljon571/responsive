import Project from '../../components/project/project'
import Skils from '../../components/skils/skils'
import './main.scss'

function Main() {
    return (
        <main className='main'> 
           <Skils />
           <Project />
        </main>
    )
}

export default Main