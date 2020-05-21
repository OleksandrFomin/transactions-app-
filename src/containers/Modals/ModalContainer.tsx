import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectModal } from "../../selectors/selectors";
import EditModal from "../../components/Modals/EditModal";
import DeleteModal from "../../components/Modals/DeleteModal";
import { hideModal } from "../../redux/actions/modalActions";

const MODAL_TYPES = {
  ["Edit Modal"]: EditModal,
  ["Delete Modal"]: DeleteModal,
};

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const hideModalHandler = () => dispatch(hideModal());

  if (!modal.modalType) {
    return null;
  }

  // component returns a modal based on which one was chosen (name parameter is passed to redux from onShow func)
  const SpecifiedModal = (MODAL_TYPES as any)[modal.modalType];

  return (
    <>
      <SpecifiedModal
        hideModalHandler={hideModalHandler}
        {...modal.modalProps}
      />
    </>
  );
};

export default ModalContainer;
