

export default function PageComponent(props) {
    return (
       <section className="pageone">
           <div>

               <h1 className="pageone-title">
                   {props.title}
               </h1>
               <p className="pageone-description">
                   {props.description}
               </p>
           </div>
           <div className="icon">
               <img className="icon" src= {props.icon} alt="icon" />
           </div>

       </section>
    )
}