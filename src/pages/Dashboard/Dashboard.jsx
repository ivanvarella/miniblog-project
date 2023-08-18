import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

//Hooks
import { useAuthValue } from "../../contexts/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie seus posts</p>
      {posts && posts.length === 0 ? (
        <div>
          <p>Vocé ainda não possui posts.</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div>
          <p>Tem Posts!!!!!</p>
        </div>
      )}

      {posts && posts.map((post) => <h3 key={post.id}>{post.title}</h3>)}
    </div>
  );
};

export default Dashboard;
