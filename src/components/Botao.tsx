interface BotaoProps{
    children: any
    className?: string
    cor?: 'green' | 'blue' | 'gray'
}

export default function Botao(props) {
    return(
        <button className={`
            bg-gradient-to-r from-${props.cor}-400 to-blue-700
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}