import React from 'react';
import './OverviewPosts.css';
import data from '../../constants/data.json';

function OverviewPosts () {
    console.log(data);

    return (
        <>
        <h1>Overview alle blogs</h1>
        <p>Aantal blogs : {data.length}</p>


        </>
    );
}

export default OverviewPosts;