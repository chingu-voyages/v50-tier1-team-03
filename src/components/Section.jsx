export default function Section({ id, heading, content }) {
    return (
        <a id={id}>
            <h2>{heading}</h2>
            <div>
                {content}
            </div>
            {/* menu items */}
        </a>
        
    )
}