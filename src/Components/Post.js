import React from 'react';
import {Input , Form, Layout} from 'antd';


const { Content } = Layout;

const Post = () => (
    <div>
        <p>post works!!</p>
        <Layout>
            <Content margin='100px'>
                <Form>
                <Input margin='5px' placeholder='Type tweets in here'></Input>
                </Form>
            </Content>
        </Layout>
        
       
    </div>
);

export default Post