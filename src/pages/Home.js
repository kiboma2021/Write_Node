import { NodeCard } from "../components";
export const Home = () => {

  const posts = [
    { title: 'Lorem ipsum dolor sit', body: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.'},
    { title: 'Lorem ipsum dolor sit ametLorem ipsum dolor', body: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet'},
    { title: 'title', body: 'body'}
  ];
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
