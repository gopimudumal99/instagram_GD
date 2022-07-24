import Stories from "./Stories";
import Posts from "./Posts"
function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 max-w-6xl 
    mx-auto">
      {/* Section  */}
      <section className="col-span-2 ">
      {/* stories */}
      <Stories/>

      {/* Posts */}
    <Posts/>
      </section>

      {/* Section */}
      <section>
      {/* mini-profile */}
      {/* suggestions */}

      </section>
    </main>
  );
}

export default Feed;
