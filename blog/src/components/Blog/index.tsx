import React, { FC } from 'react';

import {SPost, SPostTitle, SPostContent} from './styles';
import Post from '../../types/post';

export interface BlogProps {
    posts: Post[];
}

const Blog: FC<BlogProps> = ({ posts }) => (
    <>
        {posts.map((post) => (
            <SPost key={post.title}>
                <SPostTitle>{post.title}</SPostTitle>
                <SPostContent>{post.content}</SPostContent>
            </SPost>
        ))}
    </>
)

export default Blog;
