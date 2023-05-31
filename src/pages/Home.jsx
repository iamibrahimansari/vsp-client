import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery'
import Hero from '../components/Hero';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () =>{
    const [searchKeyword, setSearchKeyword] = useState('');
    const [firstVideo, setFirstVideo] = useState({});
    const [allVideo, setAllVideo] = useState([]);
    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response = await axios.get('https://vsp-api.onrender.com/api/videos');
                setFirstVideo(response.data[0]);
                setAllVideo(response.data);
            } catch (error) {
                console.error(error);
                // Handle error
            }
        }
        fetchData();
    }, [])
    return(
        <div className="home">
            <Navbar setSearchKeyword={setSearchKeyword} />
            <Hero firstVideo={firstVideo} />
            <Gallery allVideo={allVideo} searchKeyword={searchKeyword} />
        </div>
    )
}

export default Home;