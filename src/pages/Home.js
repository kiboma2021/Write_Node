import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config"
import { NodeCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = ({title}) => {
  const [posts, setPosts ] = useState([])
  const postsRef = collection(db, "posts");

  useTitle({title});

  

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef);
      setPosts(data.docs.map((document) => (
        {...document.data(),id: document.id}
      )
      ));
    }
    getPosts()
  },[]);

  // const posts = [
  //   { title: 'Lorem ipsum dolor sit', body: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.'},
  //   { title: 'Lorem ipsum dolor sit ametLorem ipsum dolor', body: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet'},
  //   { title: 'title', body: 'body'}
  // ];
  return (
    <main>
      <div>
        { posts && posts.map(post => 
        <div key={post.id}>
          <NodeCard post={post} />  
        </div>
        )}
      </div>

        
      
    </main>
  )
}
