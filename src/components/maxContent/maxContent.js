
export default function MaxContent(props){
    return(
        <>
            <div className={`max-content ${props.class? props.class : ""}`}>
                {props.content}
            </div>
        </>
    )
}