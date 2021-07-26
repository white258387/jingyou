export default function MyForm(props: any) {
    console.log(props, 'props in Form')
    const onFinish = () => {
        props.onFinish && props.onFinish()
    }
    const onFinishFailed = () => {
        props.onFinishFailed && props.onFinishFailed();
    }
    return <div>
        <div>form</div>
        {props.children}
    </div>
}
// 注意： 使用传入的子组件用props.children，这才是react对象数组。如果直接用props就会报错，因为props不是一个react对象，不被识别。
// 函数式组件不必引入react