import User from "components/Icons/User";
import { useState } from "react";
import LoginRegisterModal from "../LoginRegisterModal/LoginRegisterModal";
import { useLoginRegisterModal } from "components/Pages/comparator/context/LoginRegisterModalContext/useLoginRegisterModal";

const UserWithFunctionality = () => {
  const { isOpenModal, setIsOpenModal } = useLoginRegisterModal();
  const [type, setType] = useState("register");

  return (
    <>
      <User
        onClick={() => {
          setIsOpenModal(true);
        }}
      />

      {isOpenModal && (
        <LoginRegisterModal
          setOpenLogin={setIsOpenModal}
          type={type}
          setType={setType}
        />
      )}
    </>
  );
};

export default UserWithFunctionality;
