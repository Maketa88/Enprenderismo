
export const Vision = ({ titulo, parrafo, imageUrl,contenido,hr }) => {
    return (
      <>
      <div className="countero">
        <div className='mision'>
        <h1 className="">{titulo}</h1>
       
        <p>{parrafo}</p>
        
        </div>
        <img className="Imagen" src={imageUrl} alt={contenido} />
        
        
      </div>
      
      </>
    );
  };
  