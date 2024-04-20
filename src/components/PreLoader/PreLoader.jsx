import { useEffect } from 'react';
import { preLoaderAnim } from '../../animations';
import './preloader.css'

function PreLoader() {

    useEffect(()=>{
        preLoaderAnim()
    },[])

    return ( 
        <div className="preloader">
            <div className="texts-container">
                <span>Julio</span>
                <span>Cesar</span>
                <span>Zampieri</span>
            </div>
        </div>
     );
}

export default PreLoader;