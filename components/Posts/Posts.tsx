import Image from "next/image";
import Link from "next/link";
import { PostsStyled } from "./Posts.Styled";

interface PropSchema {
  _id: string;
  lastUpdated: string;
  categories: string[];
  title: string;
  desc: string;
  featuredImage?: string;
}

export const Posts = ({ posts }: { posts: PropSchema[] }) => {
  return (
    <PostsStyled>
      <div className="posts_wrapper">
        {posts.map((post) => {
          return (
            <article key={post._id}>
              <div className="inner_wrapper">
                <div>
                  {post.featuredImage && (
                    <Image
                      src={post.featuredImage}
                      width="300px"
                      height="200px"
                      alt={post.title}
                    />
                  )}
                </div>
                <div className="meta_data">
                  <p>{post.lastUpdated.toUpperCase()}</p>
                  <p>
                    {post.categories.map(
                      (category) => `. ${category.toUpperCase()}`
                    )}
                  </p>
                </div>

                <h3>{post.title}</h3>
                <p className="post_desc">{post.desc}</p>

                <div className="readmore_button">
                  <div className="horizontal_rule"></div>
                  <Link href="/">
                    <a>{"read more".toUpperCase()}</a>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </PostsStyled>
  );
};
