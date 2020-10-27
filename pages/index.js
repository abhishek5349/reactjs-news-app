import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <header className="header header-title col-xl-12">
            <div className="main-header">
                <Link href={"/news/"}>
                    <a>Get Top Headlines</a>
                </Link>
            </div>
        </header>
        <main className="welcome-container">
          <h1>
            <Link href={"/news/"}>
              Welcome to Top NEWS Headlines 
            </Link>
          </h1>
        </main>
      </div>  
    </div>
  )
}


