import Head from "next/head";
import { IoSearchOutline } from "react-icons/io5";
import { BlogStyled } from "../../styles/Blog.Styled";
import { postsWithImages, postsWithoutImages } from "../../mockData/postsData";
import { Posts } from "../../components/Posts/Posts";
import Link from "next/link";
import { MdEast } from "react-icons/md";

const Blog = () => {
  return (
    <BlogStyled>
      <Head>
        <title>
          Blog - Metricks | Affiliate Marketing Program Tracking software
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="header_wrapper">
          <div className="morph_effect"></div>
          <div className="under_morph"></div>
          <div className="header_content_wrapper">
            <div className="horizontal_rule"></div>
            <div>
              <h5>{"Blog".toUpperCase()}</h5>
              <h2>Articles and News</h2>
            </div>
          </div>
        </div>
      </header>

      <section className="content_wrapper">
        <section className="inner_hero">
          <div>
            <h3>Latest From The Blog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum.
            </p>
          </div>

          <div className="search_section">
            <div>
              <input type="text" placeholder="Search here" />
              <IoSearchOutline className="search_icon" />
            </div>
          </div>
        </section>

        <Posts posts={postsWithImages} />

        <section className="inner_hero">
          <div>
            <h3>Recent Articles</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum.
            </p>
          </div>

          <div className="search_section"></div>
        </section>

        <Posts posts={postsWithoutImages} />

        <div className="fetch_posts">
          <button>{"load more".toUpperCase()}</button>
        </div>
      </section>

      <section className="cta">
        <div className="content_wrapper">
          <section className="inner_hero">
            <div className="content">
              <h3>Got a Question?</h3>
              <p>Learn who we are and what drives us.</p>

              <Link href="/">
                <a>
                  <span>Contact Us</span>
                  <MdEast />
                </a>
              </Link>
            </div>

            <div className="search_section morph_wrapper">
              <div className="morph"></div>
              <div className="under_morph"></div>
            </div>
          </section>
        </div>
      </section>
    </BlogStyled>
  );
};

export default Blog;
