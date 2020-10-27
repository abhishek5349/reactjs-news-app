import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoadingPage() {
    return (
        <div className="page-loader">
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Please Wait, Page is loading...
            </button>
        </div>
    )
}
