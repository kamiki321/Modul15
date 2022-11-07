
import { Header } from "./Header";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";




/*Silakan edit code di bawah agar dapat menampilkan daftar buku baru dari API secara dinamis */
/* HINT : Gunakan mapping array */
export const Search= ()=>{
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const {judul} = useParams()
    const url = 'https://api.itbook.store/1.0/search/' + judul
    const fetchAPI = async () => {
        await axios.get(url)
        .then(res=>{
            setData(res.data.books)
        })
    }
    console.log(data)
    useEffect(() => {
        fetchAPI()
    }, [])

    return(
        <>
            <div className="container">
                <Header/>
                <h1>Searching for something?</h1>
            <div class = "search">
                <div class="searchInput"></div>
                    <input type="text" id="title" />
                    <button type="button" 
                        onClick={() => {
                            const judul = document.getElementById("title").value 
                            console.log(judul)
                            const path = "/search/" + judul
                            console.log(path)
                            navigate(path)
                            window.location.reload()
                        }
                    }>Go find it!</button>
                <div class="searchIcon"></div>
            </div>
                
            <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                <h5 style={{width:"48rem",marginTop:"50px"}}>LIST OF BOOKS</h5>
                <h6  style={{width:"48rem",marginTop:""}}>Results :</h6>
                {/*Berikut ini merupakan datalate untuk membuat book card, silakan diedit sesuai kebutuhan */}
                {data.map((data) => (
                    <>
                        <div className="card flex-row flex-wrap" style={{width:"48rem",marginTop:"50px"}} onClick={()=>{navigate('/book/'+ `${data.isbn13}`)}}>
                            <div className="card-header border-0">
                                <img src={data.image} alt="Buku.jpg" width="200" height="220" class="px-4"/>
                            </div>
                            <div className="card-block p-4" style={{width:"50%"}}>
                                <h4 className="card-title">{data.title}</h4>
                                <p className="card-text">{data.subtitle}</p>
                                <p className="text-muted">{data.isbn13}</p>
                                <h5>{data.price}r</h5>
                            </div>
                        </div>
                        </>
                     ))}
                </div>
            </div>
        </>

    
    )
}