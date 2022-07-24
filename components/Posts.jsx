import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "gopimudumal99",
    userImage: "https://i.ibb.co/rF4Zc3w/01.jpg",
    img: "https://i.ibb.co/rF4Zc3w/01.jpg",
    caption: "This is DOPE! i am a full stack developer mern stack ",
  },
  {
    id: "123",
    username: "gopimudumal99",
    userImage: "https://i.ibb.co/rF4Zc3w/01.jpg",
    img: "https://i.ibb.co/rF4Zc3w/01.jpg",
    caption: "This is DOPE!",
  },
 
];
function Posts() {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImage={post.userImage}
            caption={post.caption}
            img={post.img}
          />
        );
      })}
    </div>
  );
}

export default Posts;
