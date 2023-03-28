import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ cat }) => {

    const { images, isLoading } = useFetchGifs( cat );
    

    /**
     * sin el custom hook
     */
    // const [images, setImages] = useState([])

    // const getImages = async ()=>{
    //     const newImages = await getGifs( cat );
    //     setImages( newImages );
    // }

    // useEffect( ()=>{
    //     getImages();
    // }, [])


        return (
            <>
            <h3>{ cat }</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map( ( image ) =>(
                        <GifItem 
                        key={ image.id }
                        { ...image } 
                        />
                    ))
                }
            </div>

            </>
        )
}
