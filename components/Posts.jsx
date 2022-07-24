import Post from './Post'

const DUMMY_DATA  =[
    {id:'123',username:"gopimudumal99",userImage:""}
]
function Posts() {
  return (
    <div>
        {/* post */}
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

    </div>
  )
}

export default Posts