export default function Item({item}){
    const { image_link, name, price, description } = item;
    return (
        <>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%"}}>
        <img src={image_link} alt=""/>
        <strong>{name}</strong>
        <h3>$ {price}</h3>
        <p style={{width:"30%"}}>
            {description}
        </p>
        </div>
        </>
    )
}