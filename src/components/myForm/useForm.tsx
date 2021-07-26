export default function useForm() {
    return []
}

export class FormStore {
    store: any; // ts中定义类的成员之前必须先定义类型，就如同形参必须指定类型一样
    constructor() {
        this.store = {}
    }

    getStoreById(id: string) {
        return this.store[id]
    }
    // 注意返回的东西需要解构

    getStore() {
        return { ...this.store }
    }

    setStore(store: any) {
        this.store = {
            ...this.store,
            ...store
        }
    }

    setStoreById(id: string, value: any) {
        this.store[id] = value;
    }
}

export const myFormStore = new FormStore();