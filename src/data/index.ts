
import { IProduct, IFormInputList } from "../interfaces"
export const ProductList: IProduct[] = [
    {
        id: "1",
        title: "2202 Genise G46",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "5000$",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        }
    },
    {
        id: "2",
        title: "SAMSUNG HEADPHONE",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvc2UlMjBwcm9kdWN0fGVufDB8fDB8fHww",
        price: "5000$",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvc2UlMjBwcm9kdWN0fGVufDB8fDB8fHww",

        }
    }, {
        id: "3",
        title: "HUAWEI SMART WATCH",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "5000$",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        }
    }, {
        id: "4",
        title: "SHEIN SUNGLASSES",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        price: "5000$",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",

        }
    }, {
        id: "5",
        title: "NIKE AIR GORDON",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        price: "5000$",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",

        }
    }, {
        id: "6",
        title: "BMW BIKE",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpY3ljbGV8ZW58MHx8MHx8fDA%3D",
        price: "5000$",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpY3ljbGV8ZW58MHx8MHx8fDA%3D",

        }
    }, {
        id: "7",
        title: "2202 Genise G46",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "5000$",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        }
    }, {
        id: "8",
        title: "2202 Genise G46",
        description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sint veniam doloremque at minima ea  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sintveniam doloremque at minima ea Lorem ipsudolor sit amet consectetur adipisicing elit.sintveniam doloremque at minima ea ",
        image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "5000$",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        category: {
            name: "cars",
            image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        }
    }
]
export const FormInputList: IFormInputList[] = [
    {
        id: "title",
        name: "title",
        label: "product title",
        type: "text",

    },
    {
        id: "description",
        name: "description",
        label: "product description",
        type: "text",

    },
    {
        id: "image",
        name: "image",
        label: "ImageUrl",
        type: "text",

    },
    {
        id: "price",
        name: "price",
        label: "product price",
        type: "text",

    }
]
export const colors: string[] = [
    "#FF0000",
    "#0000FF",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
    "#FFA500",
    "#800080",
    "#00FF00",
    "#FFC0CB",
    "#A52A2A",
    "#808080",
    "#000000",
    "#FFFFFF",
]
