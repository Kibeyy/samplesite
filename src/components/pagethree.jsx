export default function Pagethree(props) {
    return (
        <section className="pagethree">
            <div>

                <h1 className="pagethree-title">
                    {props.title}
                </h1>
                <p className="pagethree-description">
                    {props.description}
                </p>
            </div>
            <div className="icon3">
                <img className="icon" src= {props.icon} alt="icon" />
            </div>

        </section>
    )
}