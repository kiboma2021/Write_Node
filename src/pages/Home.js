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
