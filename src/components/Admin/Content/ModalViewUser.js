// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { FcPlus } from 'react-icons/fc';

// const ModalViewUser = (props) => {
//     const { show, setShow, dataUpdate } = props;

//     const handleClose = () => {
//         setShow(false);
//     };

//     return (
//         <>
//             <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="modal-add-user">
//                 <Modal.Header closeButton>
//                     <Modal.Title>View User Details</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form className="row g-3">
//                         <div className="col-md-6">
//                             <label className="form-label">Email</label>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 value={dataUpdate.email}
//                                 disabled
//                             />
//                         </div>
//                         <div className="col-md-6">
//                             <label className="form-label">Password</label>
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 value={dataUpdate.password}
//                                 disabled
//                             />
//                         </div>
//                         <div className="col-md-6">
//                             <label className="form-label">Username</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 value={dataUpdate.username}
//                                 disabled
//                             />
//                         </div>
//                         <div className="col-md-4">
//                             <label className="form-label">Role</label>
//                             <select className="form-select" value={dataUpdate.role} disabled>
//                                 <option value="USER">USER</option>
//                                 <option value="ADMIN">ADMIN</option>
//                             </select>
//                         </div>
//                         <div className="col-md-12">
//                             <label className="form-label label-upload" htmlFor="labelUploal">
//                                 <FcPlus /> Uploaded Image (if any)
//                             </label>
//                             {/* Conditionally display image preview if available */}
//                             {dataUpdate.image && (
//                                 <div className="col-md-12 img-preview">
//                                     <img src={`data:image/jpeg;base64,${dataUpdate.image}`} />
//                                 </div>
//                             )}
//                         </div>
//                     </form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default ModalViewUser;
////3 file :ManageUser, TableUser, this file