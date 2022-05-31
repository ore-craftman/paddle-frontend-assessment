import moment from "moment";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { useFetchRepos } from "../../hooks/useFetchRepos";
import { GithubStyled } from "../../styles/Github.Styled";

const Github = () => {
  const { repos, setPage } = useFetchRepos();
  return (
    <GithubStyled>
      <header>
        <div className="header_wrapper">
          <div className="morph_effect"></div>
          <div className="under_morph"></div>
          <div className="header_content_wrapper">
            <div className="horizontal_rule"></div>
            <div>
              <h5>{"github".toUpperCase()}</h5>
              <h2>Most Starred Github Repos in 30days</h2>
            </div>
          </div>
        </div>
      </header>
      <div className="content_wrapper">
        <InfiniteScroll
          dataLength={repos.length}
          next={() => setPage((prev) => prev + 1)}
          hasMore={true}
          loader={<h4 className="processor">Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }} className="processor">
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {repos.map((repo: any, i) => {
            return (
              <div key={i} className="repo_container">
                <section>
                  <Image
                    src={repo.owner.avatar_url}
                    width="150px"
                    height="150px"
                    alt=""
                  />
                </section>
                <section className="details">
                  <div>
                    <h4>{repo.name.split("-").join(" ").toUpperCase()}</h4>
                    <p>{repo.description}</p>
                  </div>
                  <div>
                    <button>{`Stars: ${repo.stargazers_count / 1000}K`}</button>
                    <button>{`Issues: ${repo.open_issues_count}`}</button>
                    <span>{` Submited ${moment(repo.created_at, "YYYYMMDD")
                      .startOf("day")
                      .fromNow()} By ${repo.owner.login}`}</span>
                  </div>
                </section>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </GithubStyled>
  );
};

export default Github;
