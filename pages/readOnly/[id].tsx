import Form from "../../components/shared/Form"
import databaseQuery from "../../components/shared/databaseQuery"
import {useRouter} from "next/router"

const id = ({data}) => {
    const route = useRouter();
    const idx = route.query.id;
    data = data.filter(item => item._id === idx)
    return (
        <Form
            title={data[0].title}
            firstName="title"
            secondName="content"
            secondValue={data[0].content}
            readOnly={true}
        />
    )
}

id.getInitialProps = async () => {
    const data = await databaseQuery("GET");
    return data;
  };

export default id
