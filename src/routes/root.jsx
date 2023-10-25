import SideMenu from '../components/organisms/side-menu'
import WebPage from '../components/templates/web-page'
import ProjectMenu from '../components/organisms/project-menu'

function Root() {
  return (
    <WebPage>
      <SideMenu />
      <ProjectMenu />
    </WebPage>
  )
}

export default Root
