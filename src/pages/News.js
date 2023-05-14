import Footer from "../layout/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { SingleNews } from "../component/SingleNews";

const News = () => {


  const [news, setNews] = useState('');
  const url = "https://inshorts.deta.dev/news?category=science";

  useEffect(() => {
    const getAllNews = async () => {
      const response = await axios.get("https://inshorts.deta.dev/news?category=science");
      const newsInfo = await response.data;
      setNews(newsInfo);
    };

    getAllNews();
   
  }, []);

  

  return (
    <>
        {
             
        }
      
      <Footer />
    </>
  );
};

export default News;

//const getNews = () =>{
//     axios.get("https://inshorts.deta.dev/news?category=science").then((res)=>{
//         const allNews = res.data
//         setData(allNews)
//     }).catch((err)=>{console.error(err)})
//    }

//     useEffect(()=>{
//         getNews();
//     },[])
