

export default function ButtonComponent(props){
    return (
        <>
            <button 
                onClick={()=>{props.onClick()}}
                value={props.text}
                className = {props.className ? props.className : ""}
            >
                <p>{props.text}</p>
            </button>
        </>
    )
}