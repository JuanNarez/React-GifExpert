

export const GifItem = ({ title, id, url}) => {
    return (
    <div className="card">
        <img title= {title} src={ url } alt={ title }/>
        <p  title= {title}>{ title }</p>
    </div>

  )
}
