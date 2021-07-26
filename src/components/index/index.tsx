import react, { Component } from "react";
import { Form, Input, Button } from "antd";
import MyForm, { useForm, File } from "../myForm";


class BaseComponent extends Component {
    onFinish = (value: any) => {
        console.log('提交成功', value)
    }
    onFinishFailed = (value: any) => {
        console.log('提交失败', value);
    }
    // form表单的onfinish和onfinishfailed函数携带的参数就是form表单里的所有参数

    useMyself = false;
    render() {
        return this.useMyself ? <Form
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}>
            <Form.Item name='username' label='姓名' rules={[{ required: true, message: '请输入姓名' }]}>
                <Input />
            </Form.Item>
            <Form.Item name='password' label='密码' rules={[{ required: true, message: '请输入密码' }]}>
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form> : <MyForm>
            <File id='username'>
                <Input />
            </File>
            <File id='passward'>
                <Input />
            </File>
        </MyForm>
    }
}
export default BaseComponent;