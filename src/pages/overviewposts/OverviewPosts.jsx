import React from 'react';
import './OverviewPosts.css';
import posts from '../../constants/data.json';
import {Link} from 'react-router-dom';


function OverviewPosts() {
    console.log(posts);


    return (
        <>
            <div className="posts-container">
                <h1 >Bekijk alle {posts.length} posts op het platform</h1>

                <ul>
                    {posts.map((post) => {
                        return (
                            <>
                                <li key={post.id} className="post-summary">
                                    <p><strong><Link to={`/posts/${post.id}`}>{post.title}</Link></strong> -({post.author})</p>
                                    <em>{post.comments} reacties - {post.shares} keer gedeeld</em>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default OverviewPosts;