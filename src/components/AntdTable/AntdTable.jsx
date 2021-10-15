import { Table, Tag, Space } from 'antd';

function AntdTable(props) {

  const { posts } = props;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'User',
      dataIndex: 'user_id',
      key: 'user_id'
    },
    {
      title: 'Post',
      dataIndex: 'text',
      key: 'text'
    },
    {
      title: 'Comments',
      dataIndex: 'numberOfComments',
      key: 'numberOfComments'
    },
    {
      title: 'Created_at',
      dataIndex: 'created_at',
      key: 'created_at'
    },
    {
      title: 'Updated_at',
      dataIndex: 'updated_at',
      key: 'updated_at'
    }
  ]

  let dataSource = [];
  let render = false;

  if (posts.length) {
    render = true;
    dataSource = posts.reduce((acc, {id, user_id, text, created_at, updated_at, comments}) => {
      let numberOfComments = comments.length
      return [...acc, {
        id,
        user_id,
        text,
        created_at,
        updated_at,
        numberOfComments,
        key: `${id}`,
      }];
    }, []);
  }
  console.log('DATASOURCE', dataSource)

  return (
    <>
      {render && <Table dataSource={dataSource} columns={columns} />}
    </>
  )
}

export default AntdTable;