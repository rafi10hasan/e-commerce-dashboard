import { ChartColumn, Home, NotepadText, Package, Settings, ShoppingBag, User } from "lucide-react";

import Person1 from "../assets/alex.jpg";
import Person2 from "../assets/person-1.jpg";
import Person3 from "../assets/person-2.jpg";
import Person4 from "../assets/person3.jpg";

import camera from "../assets/camera.jpg";
import hardDrive from "../assets/hard-drive.jpg";
import headphones from "../assets/headphones.jpg";
import keyboard from "../assets/keyboard.jpg";
import monitor from "../assets/monitor.jpg";
import mouse from "../assets/mouse.jpg";
import phone from "../assets/phone.jpg";
import laptop from "../assets/product-image.jpg";
import watch from "../assets/smart-watch.jpg";
import speakar from "../assets/speaker.jpg";
export const navbarLinks = [
  {
    id: 1,
    label: "Dashboard",
    icon: Home,
    path: "/",
  },
  {
    id: 2,
    label: "customers",
    icon: User,
    path: "/customers",
  },
  {
    id: 3,
    label: "products",
    icon: Package,
    path: "/products",
  },
  {
    id: 4,
    label: "purchases",
    icon: ShoppingBag,
    path: "/purchases",
  },
  {
    id: 5,
    label: "stock transfer",
    icon: ChartColumn,
    path: "/stock-transfer",
  },
  {
    id: 6,
    label: "stock adjustment",
    icon: ChartColumn,
    path: "/stock-adjustment",
  },
  {
    id: 7,
    label: "Reports",
    icon: NotepadText,
    path: "/reports",
  },
  {
    id: 8,
    label: "settings",
    icon: Settings,
    path: "/settings",
  },
];

export const overviewData = [
  {
    name: "Jan",
    total: 1200,
  },
  {
    name: "Feb",
    total: 1500,
  },
  {
    name: "Mar",
    total: 1050,
  },
  {
    name: "Apr",
    total: 3000,
  },
  {
    name: "May",
    total: 4000,
  },
  {
    name: "Jun",
    total: 4500,
  },
  {
    name: "Jul",
    total: 2500,
  },
  {
    name: "Aug",
    total: 6500,
  },
  {
    name: "Sep",
    total: 2500,
  },
  {
    name: "Oct",
    total: 4600,
  },
  {
    name: "Nov",
    total: 3500,
  },
  {
    name: "Dec",
    total: 4500,
  },
];

export const recentSalesData = [
  {
    id: 1,
    name: "Emilio Martinez",
    email: "martinez@email.com",
    image: Person1,
    total: 1500,
  },
  {
    id: 2,
    name: "Silas Ferguson",
    email: "ferguson@email.com",
    image: Person2,
    total: 2000,
  },
  {
    id: 3,
    name: "Adrian Martel",
    email: "adrian@email.com",
    image: Person3,
    total: 4000,
  },
  {
    id: 4,
    name: "Noah Wilson",
    email: "noah.wilson@email.com",
    image: Person4,
    total: 3000,
  },
  {
    id: 5,
    name: "Mateo Vincente",
    email: "mateo@email.com",
    image: Person1,
    total: 2500,
  },
  {
    id: 6,
    name: "Damian Ferris",
    email: "damian@email.com",
    image: Person2,
    total: 4500,
  },
  {
    id: 7,
    name: "Lucas Montrez",
    email: "lucas@email.com",
    image: Person3,
    total: 5300,
  },
];

export const topProducts = [
  {
    number: 1,
    name: "Wireless Headphones",
    image: headphones,
    description: "High-quality noise-canceling wireless headphones.",
    price: 19.99,
    status: "In Stock",
    rating: 4.7,
  },
  {
    number: 2,
    name: "Smartphone",
    image: phone,
    description: "Latest 5G smartphone with excellent camera features.",
    price: 199.99,
    status: "In Stock",
    rating: 4.8,
  },
  {
    number: 3,
    name: "Gaming Laptop",
    image: laptop,
    description: "Powerful gaming laptop with high-end graphics.",
    price: 1269.99,
    status: "In Stock",
    rating: 4.5,
  },
  {
    number: 4,
    name: "Smartwatch",
    image: watch,
    description: "Stylish smartwatch with fitness tracking features.",
    price: 129.99,
    status: "Out of Stock",
    rating: 4.6,
  },
  {
    number: 5,
    name: "Bluetooth Speaker",
    image: speakar,
    description: "Portable Bluetooth speaker with deep bass sound.",
    price: 29.99,
    status: "In Stock",
    rating: 4.3,
  },
  {
    number: 6,
    name: "4K Monitor",
    image: monitor,
    description: "Ultra HD 4K monitor with stunning color accuracy.",
    price: 299.99,
    status: "In Stock",
    rating: 4.4,
  },
  {
    number: 7,
    name: "Mechanical Keyboard",
    image: keyboard,
    description: "Mechanical keyboard with customizable RGB lighting.",
    price: 15.99,
    status: "In Stock",
    rating: 4.6,
  },
  {
    number: 8,
    name: "Wireless Mouse",
    image: mouse,
    description: "Ergonomic wireless mouse with precision tracking.",
    price: 49.99,
    status: "In Stock",
    rating: 4.5,
  },
  {
    number: 9,
    name: "Action Camera",
    image: camera,
    description: "Waterproof action camera with 4K video recording.",
    price: 849.99,
    status: "In Stock",
    rating: 4.8,
  },
  {
    number: 10,
    name: "External Hard Drive",
    image: hardDrive,
    description: "Portable 2TB external hard drive for data storage.",
    price: 13.99,
    status: "Out of Stock",
    rating: 4.5,
  },
];
