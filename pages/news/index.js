import React from 'react';
import Axios from 'axios';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


const API = '85a2aee1a68b4ebea4ad678ef23576e3';

export default function index({allNews}) {
    
    return (
        <div>
            <header className="header">
                <p>
                    Top Headlines
                </p>
            </header>

            <main className="container main-container">
                <ul className="row">
                    {allNews.articles.map((news, index)=>{
                        return(
                            <li key={index} className="col-xl-12">
                                <div className="news-head">
                                    <img src={news.urlToImage} className="news-thumbnail" />
                                    <div className="news-headings">
                                        <h4 className="news-title">
                                            <Link href={"/news/"+index}>
                                                <a>{news.title}</a>
                                            </Link>
                                        </h4>
                                        <p>
                                            {news.publishedAt.replace("T", " ").replace("Z", "")}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </div>
    )
}


export async function getStaticProps(){
    const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`;
    const res = await Axios.get(url);
    
    const allNews = await res.data;
    
  
    return {
      props: {
        allNews,
      },
      revalidate: 1,
    };
  }