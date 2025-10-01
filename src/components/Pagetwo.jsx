

export default function Pagetwo(props) {
    return (
        <section className="pagetwo">
            <div>

                <h1 className="pagetwo-title">
                    {props.title}
                </h1>
                <p className="pagetwo-description">
                    {props.description}
                </p>
            </div>
            <div className="icon2">
                <img className="icon" src= {props.icon} alt="icon" />
            </div>

        </section>
    )
}