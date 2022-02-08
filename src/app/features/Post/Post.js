import React, { useState } from 'react';

// MUI Card
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

const Posts = (props) => {
    const { post, onToggleComments } = props;

    return (
        <article key={post.id}>
            <Card>
                <div className='post-wrapper'>
                    <div className='post-votes-container'>
                        <button
                            type='button'
                            className={`icon-action-button up-vote ${
                                voteValue === 1 && 'active'
                            }`}
                            onClick={() => onHandleVote(1)}
                            aria-label='Up vote'
                        >
                            {renderUpVote()}
                        </button>

                        <p className={`post-votes-value ${getVoteType()}`}>
                            {shortenNumber(post.ups, 1)}
                        </p>

                        <button
                            type='button'
                            className={`icon-action-button down-vote ${
                                voteValue === -1 && 'active'
                            }`}
                              onClick={() => onHandleVote(-1)}
                              aria-label="Down vote"                            
                        >
                            {renderDownVote()}
                        </button>
                    </div>
                </div>

                <div className='post-container'>
                    <h3 className='post-title'>{post.title}</h3>

                    <div className='post-image-container'>
                        <img src={post.url} alt='' className='post-image' />
                    </div>

                    <div className='post-details'>
                        <span className='author-details'>
                            {/* <Avatar name={post.author} /> */}
                            <span className="author-username">{post.author}</span>
                        </span>

                        <span>{moment.unix(post.created_utc).fromNow()}</span>

                        <span className='post-comments-container'>
                            <button
                                type='button'
                                className={`icon-action-button ${
                                    post.showingComments && 'showing-comments'
                                }`}
                                onClick={() => onToggleComments(post.permalink)}
                                aria-label="Show comments"                                
                            >
                                <TiMessage className="icon-action" />
                            </button>

                            {shortenNumber(post.num_comments, 1)}
                        </span>
                    </div>

                    {renderComments()}
                </div>
            </Card>
        </article>
    );
};

export default Post;