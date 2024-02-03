
//Aqui Recibimos y Desestructura el quote y el author que vienen del MultipleCustomHooks
export const Quote = ({quote, author}) => {

    return (
        <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer mt-1"> {author} </footer>

        </blockquote>
    )
}


