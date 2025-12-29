import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {data.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <img
            src={user.image}
            alt={user.firstName}
            style={{ width: "100%", borderRadius: "50%" }}
          />
          <h3>{user.firstName}</h3>
        </div>
      ))}
    </div>
  );
};

export default Users;
