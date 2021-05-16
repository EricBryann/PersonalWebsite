import axios from "axios";

interface BodyInterface {
  title: string;
  content: string;
}

const databaseQuery = async (
  method: string,
  body?: BodyInterface,
  id?: string
) => {
  if (!id) {
    if (method === "GET") {
      const res = await fetch("http://localhost:3000/api/posts");
      const { data } = await res.json();
      return { data };
    }
    if (method === "POST") {
      await axios
        .post("http://localhost:3000/api/posts", body)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
    if (method === "GET") {
      const res = await fetch("http://localhost:3000/api/posts/" + id);
      const { data } = await res.json();
      return { data };
    } else if (method === "PUT") {
      await axios.put("http://localhost:3000/api/posts/" + id, body);
    } else if (method === "DELETE") {
      await axios.delete("http://localhost:3000/api/posts/" + id);
    }
  }
};

export default databaseQuery;
