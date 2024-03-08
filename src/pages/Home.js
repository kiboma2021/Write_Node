import { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config"
import { NodeCard,LoadingSkeleton } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = ({title}) => {
  const [posts, setPosts ] = useState([]);
  const postsRef = useRef(collection(db, "posts"));
  const [toogleUpdate, setToogleUpdate] = useState(false);

  useTitle({title});

  

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      setPosts(data.docs.map((document) => (
        {...document.data(),id: document.id}
      )
      ));
    }
    getPosts()
  },[postsRef,toogleUpdate]);
  return (
    <main>
      <div> 
          {posts.length > 0 ? (
            posts.map(post =>
              <div key={post.id}>
                <NodeCard post={post} toogleUpdate={toogleUpdate} setToogleUpdate={setToogleUpdate} />  
              </div>
            )          
          ):(
            <LoadingSkeleton />        
        )}
      </div>
    </main>
  )
}
