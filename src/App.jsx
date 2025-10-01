import Header from "./components/header.jsx";
import PageComponent from "./components/PageComponent.jsx";
import icontwo from "./assets/pagetwo.svg"
import iconone from "./assets/pageone.svg"
import Pagetwo from "./components/Pagetwo.jsx";
import Footer from "./components/footer.jsx";
import Pagethree from "./components/pagethree.jsx";


export default function App(){
    return (
        <div>
            <Header />
            <PageComponent
                icon = {iconone}
                title = "Custom Software Development"
                description ="Helping businesses grow through custom software. We design and build software tailored to your unique needs. From internal tools to customer-facing apps, Stdiox creates scalable solutions that make your business more efficient and competitive."
            />

            <Pagetwo
                icon = {icontwo}
                title = "StdioX score"
                description="Helping lenders decide with the power of smart insights.Our loan evaluation systems use data-driven models to assess repayment probability. This helps financial institutions reduce risk, make faster decisions, and support responsible lending."

            />
            <Pagethree
                icon={iconone}
                title="Soldout Africa"
                description="Soldout Africa is your go-to platform for discovering and buying tickets to the hottest events across the continent. From concerts and festivals to sports and conferences, we make it easy and secure to book your spot. Enjoy a smooth ticketing experience with instant confirmations and safe payments."
            />

            < Footer />
        </div>
    )
}