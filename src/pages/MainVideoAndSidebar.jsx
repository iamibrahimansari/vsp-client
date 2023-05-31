import Navbar from '../components/Navbar';
import MainVideo from '../components/MainVideo';
import Sidebar from '../components/Sidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';

const MainVideoAndSidebar = () =>{
    const [allVideo, setAllVideo] = useState([]);
    useEffect(() =>{
        const getAllVideos = async () =>{
            try{
                const response = await axios.get('https://vsp-api.onrender.com/api/videos');
                setAllVideo(response.data);    
            }catch(error){
                console.error(error);
            }
        }
        getAllVideos();
    }, []);
    return(
        <>
            <Navbar />
            <div className="main-sidebar">
                <MainVideo allVideo={allVideo} />
                <Sidebar allVideo={allVideo} />
            </div>
        </>

    )
}

export default MainVideoAndSidebar;