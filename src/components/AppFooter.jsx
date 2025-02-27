import { Footer } from "flowbite-react";

const AppFooter = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  )
}

export default AppFooter
