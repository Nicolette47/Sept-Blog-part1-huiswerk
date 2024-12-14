import React from 'react';
import './PostDetail.css';
import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import dateformatChange from "../../Helpers/cambioDate.js";


function PostDetail() {
    const {postId} = useParams();
    console.log(postId);

    const requestPost = posts.find((post) => {
        return postId === post.id.toString();
    })

    console.log(requestPost);


    return (
        <>
            <div className="blog-container">
                <h1>{requestPost.title} ({requestPost.readTime} min.)</h1>
                <h3>{requestPost.subtitle}</h3>
                <h4>Geschreven door <em>{requestPost.author}</em> op {dateformatChange(requestPost.created)} </h4>
                <p>{requestPost.content}</p>
                <em>{requestPost.comments} reacties - {requestPost.shares} keer gedeeld</em>
                <p><Link to="/overviewposts">Terug naar de overzichtspagina</Link></p>
            </div>
        </>
    );
}

export default PostDetail;