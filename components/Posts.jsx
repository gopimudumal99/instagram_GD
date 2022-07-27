import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

// const posts = [
//   {
//     id: "123",
//     username: "gopimudumal99",
//     userImage: "https://i.ibb.co/rF4Zc3w/01.jpg",
//     img: "https://i.ibb.co/rF4Zc3w/01.jpg",
//     caption: "This is DOPE! i am a full stack developer mern stack ",
//   },
//   {
//     id: "124",
//     username: "gopimudumal99",
//     userImage: "https://i.ibb.co/rF4Zc3w/01.jpg",
//     img: "https://i.ibb.co/rF4Zc3w/01.jpg",
//     caption: "This is DOPE!",
//   },
// ];
function Posts() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      // snapshot is real time listner and amazing thing of real listner is if the value any point changing in the database
      (sanpshot) => {
        setPosts(sanpshot.docs);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [db]);


  
  return (
    <div>
      {posts?.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImage={post.data().profileImage}
            caption={post.data().caption}
            userId={post.data().userID}
            img={post.data().image}
          />
        );
      })}
    </div>
  );
}

export default Posts;
