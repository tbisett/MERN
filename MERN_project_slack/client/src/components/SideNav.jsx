import React, { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Threads from './Threads';
import Friends from './Friends';
import AddFriendModal from './AddFriendModal';
import CreateThreadModal from './CreateThreadModal';

const threadKey = 'threads';
const friendsKey = 'friends';

function SideNav({ id }) {
    const [activeTab, setActiveTab] = useState(threadKey);
    const openThread = activeTab === threadKey;
    const [openModal, setOpenModal] = useState(false);
    const [closedModal, setClosedModal] = useState(true);

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <div style={{width: "250px"}} className='d-flex flex-column'>
            <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
                <Nav className="justify-content-center" variant="tabs">
                    <Nav.Item>
                        <Nav.Link eventKey={threadKey}>Threads</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={friendsKey}>Friends</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={threadKey}>
                        <Threads />
                    </Tab.Pane>
                    <Tab.Pane eventKey={friendsKey}>
                        <Friends />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border border-top border-right small">
                    Your ID: <span className="text-muted">{id}</span>
                </div>
                <Button onClick={() => setOpenModal(true)} className="rounded-0">
                    {openThread ? "Create Thread" : "Add Friend"}
                </Button>
            </Tab.Container>

            <Modal show={openModal} onHide={closeModal}>
                {openThread ? 
                <CreateThreadModal closeModal={closeModal} /> :
                <AddFriendModal closeModal={closeModal} />}
            </Modal>
            
        </div>
    )
}

export default SideNav
