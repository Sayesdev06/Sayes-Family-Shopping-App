

function Button({ children, type , handler , style }) {
    return (
        <button className={`${style}`} onClick={handler} type={type}>
           {children} 
        </button>
    )
}

export default Button
