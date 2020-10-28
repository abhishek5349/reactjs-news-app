import React from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import LoadingPage from './components/LoadingPage';


export default function DisplayNews({matchedNews}) {
    const router = useRouter();
    
    if(router.isFallback){
      return <div><LoadingPage/></div>
    }

    return (
        <div className="container">
            <div className="row">
                <header className="header header-title col-xl-12">
                    <div className="main-header">
                        <Link href={"/news/"}>
                            <a>Top Headlines</a>
                        </Link>
                    </div>
                    <p className="text-justify">
                        {matchedNews.title}
                    </p>
                </header>

                <main>
                    <div>
                        <p>
                            Updated By: <span className="author">{matchedNews.author}</span> | 
                            <span className="name"> {matchedNews.source.name}, 
                                {matchedNews.source.id ? matchedNews.source.id : matchedNews.source.name.replace(" ", "-").toLowerCase()}
                            </span> | 
                            <span className="publishedAt"> {matchedNews.publishedAt.replace("T", " ").replace("Z", "")}</span>
                        </p>
                    </div>
                    <div className="news-body">
                        <img src={matchedNews.urlToImage} className="news-main-thumbnail" />
                        <p>{matchedNews.description}</p>
                    </div>
                </main>

                
            </div>
        </div>
    );
}

export async function getStaticPaths() {
  const paths = ['/news/0', '/news/1', '/news/2'];
  return {paths, fallback: true};
}

export async function getStaticProps({query, params}){
  const {id} = query || params;
  const url = `${process.env.API_BASE_URL}/top-headlines?country=us&apiKey=${process.env.API}`;
  const res = await Axios.get(url);
  const allNews = await res.data;
  const matchedNews = allNews.articles[id];

  return {
    props: {
        matchedNews,
    },
    revalidate: 1,
  };
}
