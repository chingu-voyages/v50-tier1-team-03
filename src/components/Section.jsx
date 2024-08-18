export default function Section({ id, heading, content }) {
    return (
        <section id={id}>
            <h2 className="section--heading">{heading}</h2>
            <div className="menu--cards__container">
                {content}
            </div>
        </section>
    )
}