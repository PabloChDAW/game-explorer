import { Footer } from "flowbite-react";

const AppFooter = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <Footer.Divider />
        <p className="text-gray-600 mb-2 text-sm">
          Game Explorer. Página web educativa para la investigación sobre aplicaciones reactivas de tipo SPA (Single Page Application). Utiliza las librerías React.JS, React Router y Flowbite. Licencia GNU-GPL3.
        </p>
        <Footer.Copyright by="Game Explorer" year={2025} />
      </div>
    </Footer>
  )
}

export default AppFooter
