import React from "react";
import { myFormStore } from "./useForm";


export default function File(props: any) {
    console.log(props, 'props in file')
    const childern = props.children;
    if (childern.length > 1) {
        throw new Error('File组件只能传一个子组件')
    }
    const Value = () => {
        return {
            value: myFormStore.getStoreById(props.id),
            onChange: (e: any) => {
                const changeValue = e.target.value;
                myFormStore.setStoreById(props.id, changeValue);
                console.log(myFormStore.getStoreById(props.id))
            }

        }
    }
    const cloneChildren = React.cloneElement(childern, Value())
    return <>
        {cloneChildren}
    </>
    // 可以通过父元素直接操控子元素，反正最后还是看的父元素
}