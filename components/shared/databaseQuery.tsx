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
      const res = await fetch("https://ericbryann.vercel.app/api/posts/");
      const { data } = await res.json();
      return { data };
    }
    if (method === "POST") {
      await axios
        .post(process.env.URL + "api/posts", body)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
    if (method === "GET") {
      const res = await fetch(process.env.URL + "api/posts/" + id);
      const { data } = await res.json();
      return { data };
    } else if (method === "PUT") {
      await axios.put(process.env.URL + "api/posts/" + id, body);
    } else if (method === "DELETE") {
      await axios.delete(process.env.URL + "api/posts/" + id);
    }
  }
};

export default databaseQuery;
