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
      const res = await fetch("https://ericbryan.vercel.app/api/posts/");
      const { data } = await res.json();
      return { data };
    }
    if (method === "POST") {
      await axios
        .post("https://ericbryan.vercel.app/api/posts/", body)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
    if (method === "GET") {
      const res = await fetch("https://ericbryan.vercel.app/api/posts/" + id);
      const { data } = await res.json();
      return { data };
    } else if (method === "PUT") {
      await axios.put("https://ericbryan.vercel.app/api/posts/" + id, body);
    } else if (method === "DELETE") {
      await axios.delete("https://ericbryan.vercel.app/api/posts/" + id);
    }
  }
};

export default databaseQuery;
