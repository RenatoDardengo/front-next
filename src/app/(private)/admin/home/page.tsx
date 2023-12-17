'use client'
import React, {useState } from 'react';
import NavBar from '@/components/NavBar/Index';
import SideBar from '@/components/SideBar/Index';
import style from "./page.module.css";
import Content from '@/components/Content';
import Products from '@/components/Products';
import HomeAdmin from '@/components/HomeAdmin';
import Users from '@/components/Users/Index';
import Publications from '@/components/Publications';
import Modal from '@/components/Custom/Modal';
import CreateProduct from '@/components/Products/Create';
import EditProduct from '@/components/Products/Edit';
import CreatePubliocation from '@/components/Publications/Create';
import EditPublication from '@/components/Publications/Edit';
import EditUser from '@/components/Users/Edit';
import CreateUser from '@/components/Users/Create';




export default function Home() {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);
    const [collapse, setCollapse] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    function handleOpenModal(
        modalChildren: string,
        data?: any,
        title?: string,
        fetchUsers?: () => Promise<void>) {
        if (modalIsOpen) {
            setModalIsOpen(false)
        } else {
            setModalIsOpen(true);
            setModalTitle(title || "");
            switch (modalChildren) {
                case 'editUser':
                    if(fetchUsers){

                        setModalContent(<EditUser userData={data} closeModal={() => setModalIsOpen(false)} fetchUsers={fetchUsers} />);
                    }
                    break;
                case 'createUser':
                    if (fetchUsers) { 
                        setModalContent(<CreateUser closeModal={() => setModalIsOpen(false)} fetchUsers={fetchUsers} />);
                    }
                    break;
                case 'createProduct':
                    setModalContent(<CreateProduct />);
                    break;
                case 'editProduct':
                    setModalContent(<EditProduct productData={data} />);
                    break;
                case 'createPublication':
                    setModalContent(<CreatePubliocation />);
                    break;
                case 'editPublication':
                    setModalContent(<EditPublication productData={data} />);
                    break;

                default:
                    setModalContent(null);
                    break;
            }

        }


    }
    const handleCollapse = () => {
        setCollapse(!collapse);
    };

    const handleMenuItemClick = (menuItem: string) => {
        switch (menuItem) {
            case 'home':
                setSelectedComponent(<HomeAdmin />);
                break;
            case 'users':
                setSelectedComponent(<Users openModal={handleOpenModal} />);
                break;
            case 'products':
                setSelectedComponent(<Products openModal={handleOpenModal} />);
                break;
            case 'publications':
                setSelectedComponent(<Publications openModal={handleOpenModal} />);
                break;

            default:
                setSelectedComponent(null);
                break;
        }
    };
    return (
        <div className={style.container}>

            <NavBar onCollapse={handleCollapse}  />
            <SideBar collapsed={collapse} onItemClick={handleMenuItemClick} />
            <Content>
                {selectedComponent}
            </Content>
            <Modal isOpen={modalIsOpen} onClose={() => handleOpenModal("")} title={modalTitle}>{modalContent} </Modal>

        </div>
    );

}

