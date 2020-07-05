import { useState, useEffect } from "react";
import Call from "./Call";

function Post(props) {
  const [dummyPosts, setDummyPosts] = useState([
    {
      file: {
        type: "image",
        url: "https://cdn.pixabay.com/photo/2013/05/07/11/25/chain-109302__340.jpg"
      },
      desc:
        "A long description is a way to provide long alternative text for non-text elements, such as images. Generally, alternative text exceeding 250 characters, which cannot be made more concise without",
      title: "Fire Proof"
    },
    {
      file: {
        type: "image",
        url: "https://cdn.pixabay.com/photo/2018/04/06/19/35/door-3296644__340.jpg"
      },
      desc: "Get the best fire proof door arounf the world heat and cold buster. Excellent pal",
      title: "Weather Resistance"
    }
  ]);

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
              {e.file && e.file.type ? (
                e.file.type.startsWith("image") ? (
                  <img
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    src={`${e.file.url}${e.file.name}_510x340.jpg`}
                  />
                ) : (
                  <video style={{ width: "100%", height: "100%", objectFit: "cover" }} controls>
                    <source src={`${e.file.url}${e.file.name}`} type="video/mp4" />
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
        }
      `}</style>
    </div>
  );
}

export default Post;
