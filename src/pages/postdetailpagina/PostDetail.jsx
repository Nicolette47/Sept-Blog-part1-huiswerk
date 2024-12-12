import React from 'react';
import './PostDetail.css';
import {useParams} from "react-router-dom";


function PostDetail () {
    const {id} = useParams();

    return (
        <p>het id nummer is {id}</p>
    );
}

export default PostDetail;