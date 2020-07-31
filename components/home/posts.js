import { useState, useEffect } from "react";
import Call from "./Call";

function Post(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    post();
  }, []);

  let post = () => {
    Call.getPosts()
      .then(d => {
        let {
          data: { data }
        } = d;

        setPosts(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div style={props.style}>
      <div className="posts">
        {posts.map((e, i) => (
          <div className="post-item" key={i}>
            <div className="file">
              {e.file ? (
                e.file.type && e.file.type.startsWith("image") ? (
                  <img
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={`${e.file.url}${e.file.name}_510x340.jpg`}
                  />
                ) : (
                  <video
                    style={{ width: "100%", objectFit: "cover" }}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    controls={true}
                    data-reactid=".0.1.0.0"
                    onClick={() => {
                      handleFileClick(e);
                    }}
                  >
                    <source
                      type="video/mp4"
                      data-reactid=".0.1.0.0.0"
                      src={`${e.file.url}${e.file.name}.mp4`}
                    />
                  </video>
                )
              ) : (
                ""
              )}
            </div>
            <div className="detail">
              <h1>{e.title}</h1>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .posts {
          padding: 10px 120px;
        }
        .post-item {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-content: space-evenly;
          margin-bottom: 30px;
          border: 1px solid #ddd;
        }

        .post-item .detail {
          padding: 0px 20px;
        }

        .post-item .detail h1 {
          font-family: "Ubuntu";
          color: #333;
        }

        .post-item .detail p {
          font-family: "Arya";
          color: #555;
          font-size: 17px;
        }

        @media (min-width: 600px) {
          .posts {
            padding: 4px 5px;
          }
        }

        @media (min-width: 800px) {
          .posts {
            padding: 4px 20px;
          }
        }

        @media (min-width: 1068px) {
          .posts {
            padding: 10px 120px;
          }
        }

        @media only screen and (max-width: 668px) {
          .posts {
            padding: 4px 5px;
          }

          .post-item {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

export default Post;
