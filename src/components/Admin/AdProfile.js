import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';

const AdProfile = (props) => {
    const { show, setShow } = props;
    const handleClose = () => {
        setShow(false)
    };
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Manage Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="profile" title="User Information">
                            your infor mation
                        </Tab>
                        <Tab eventKey="password" title="Password">
                            change password
                        </Tab>
                        <Tab eventKey="history" title="History">
                            doing quiz
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>

    );
}

export default AdProfile;