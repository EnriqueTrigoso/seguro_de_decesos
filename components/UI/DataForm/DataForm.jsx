import styles from "./DataForm.module.css";
import GreenTitleWithArrow from "components/UI/GreenTitleWithArrow/GreenTitleWithArrow";
import Button from "components/UI/Button/Button";
// import InputData from './InputData/InputData'
import SelectData from "./SelectData/SelectData";
import DateData from "./DateData/DateData";
import GenderData from "./GenderData/GenderData";
import InputSmallData from "./InputSmallData/InputSmallData";
import InputData from "./InputData/InputData";
import Avatar from "./Avatar/Avatar";
import { useEffect, useRef, useState } from "react";
import { RegisterContext } from "contexts/RegisterContext";
import { POST, GET } from "services/fetching";
import { useRouter } from "next/router";
import Spinner from "components/UI/Spinner/Spinner";
import { ifEqual } from "utils/functions";
import FormInput from "components/UI/FormInput/FormInput";
import InputForm from "../LoginRegisterCard/InputForm/InputForm";
import useText from "contexts/TextContext/useText";

const DataForm = () => {
  const { dataformlanguage } = useText();
  const [dataUser, setDataUser] = useState({
    token: "",
    email: "",
    password: "",
    name: "",
    p_surname: "",
    m_surname: "",
    dni: "",
    phone: "",
    birth_date: "",
    postal_code: "",
    place_of_birth: "",
    id_civil_status: 1,
    id_gender: 1,
  });

  let imageBase64ref = useRef("");

  const [isChangePassword, setIsChangePassword] = useState(false);
  const [uploadedData, setUploadedData] = useState(false);
  const [dataPrevious, setDataPrevious] = useState({});

  // let passwordRef = useRef('')
  let newPasswordRef = useRef();
  let repeatNewPasswordRef = useRef();

  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [areErrors, setAreErrors] = useState(false);
  const [passwordChangeMsg, setPasswordChangeMsg] = useState("");

  const passwordRegex = /^[\w\W]{8,15}$/;

  useEffect(() => {
    if (uploadedData) {
      return;
    }

    try {
      const photo = JSON.parse(window.localStorage.getItem("userDataEva"))[
        "photo"
      ];
      imageBase64ref.current = photo;
      const token = JSON.parse(window.localStorage.getItem("userDataEva"))[
        "token"
      ];
      GET(token, "/user/get_data_user")
        .then((res) => res.json())
        .then((data) => {
          setUploadedData(true);
          setDataUser({ ...data, photo: photo, token: token });
          setDataPrevious({ ...data, photo: photo, token: token });
        })
        .catch((error) => {
          // console.log({ error });
        });
    } catch (error) {
      imageBase64ref.current = "";
      // console.log({ error })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLocalStorageImage = () => {
    window.localStorage.setItem(
      "userDataEva",
      JSON.stringify({ ...dataUser, photo: imageBase64ref.current })
    );
  };

  const changeData = async () => {
    let promises = [];
    let isChanging = false;

    // Enviando Foto

    dataUser["token"] = JSON.parse(window.localStorage.getItem("userDataEva"))[
      "token"
    ];

    if (dataUser["photo"] !== imageBase64ref.current) {
      isChanging = true;

      changeLocalStorageImage();

      promises.push(
        POST("/user/set_profile_photo", {
          token: dataUser["token"],
          image_64: imageBase64ref.current,
        })
      );
    }

    //Enviando Datos

    if (ifEqual(dataPrevious, dataUser) !== true) {
      isChanging = true;

      promises.push(POST("/user/update_user", dataUser));

      // console.log({dataUser})

      setDataPrevious(dataUser);
    }

    if (isChanging) {
      setUploadedData(false);
    }

    Promise.allSettled(promises).then((results) => {
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          if (result.value.status === "ok") {
            // console.log('cambio exitoso', index)
          }
        } else {
          // console.log(result.reason);
        }
      });
    });

    if (isChanging) {
      setTimeout(() => {
        setUploadedData(true);
      }, 300);
    }

    // router.push('/user-panel')
  };

  const changePassword = async () => {
    let newPassword = newPasswordRef.current.value;
    let repeatNewPassword = repeatNewPasswordRef.current.value;

    if (newPassword === "" && repeatNewPassword === "") {
      setPasswordErrorMsg(dataformlanguage.enterPasswordMsg);
      setAreErrors(true);
      return;
    }

    if (newPassword !== repeatNewPassword) {
      setPasswordErrorMsg(dataformlanguage.samePasswordMsg);
      setAreErrors(true);
      return;
    }

    if (!newPassword.match(passwordRegex)) {
      setPasswordErrorMsg(dataformlanguage.correctPaswordMsg);
      setAreErrors(true);
      return;
    }

    const token = JSON.parse(window.localStorage.getItem("userDataEva"))[
      "token"
    ];
    const body = {
      token,
      new_password: newPassword,
    };
    try {
      const response = await POST("/user/set_password", body);
      setPasswordChangeMsg(
        response.status === "ok"
          ? dataformlanguage.passwordChangeMsg
          : dataformlanguage.passwordChangeErrorMsg
      );
      setTimeout(() => {
        setPasswordChangeMsg("");
        setIsChangePassword(false);
      }, 2500);
    } catch (err) {
      // console.log(err)
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        dataUser,
        setDataUser,
      }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.user_image_container}>
            <Avatar imageBase64ref={imageBase64ref} />
            <div>
              <InputData
                title={dataformlanguage.emailTitle}
                dataKey={"email"}
                disabled
              />
              {/* {!isChangePassword ? (
                <GreenTitleWithArrow
                  onClick={() => {
                    setIsChangePassword(true);
                  }}
                >
                  {dataformlanguage.changePasswordText}
                </GreenTitleWithArrow>
              ) : (
                <div>
                  <InputForm
                    ref={newPasswordRef}
                    inputType="password"
                    title={dataformlanguage.newPasswordTitle}
                    errorStatus={areErrors}
                    errorMsg={passwordErrorMsg}
                    changeError={() => setAreErrors(false)}
                  />
                  <InputForm
                    ref={repeatNewPasswordRef}
                    inputType="password"
                    title={dataformlanguage.repeatNewPasswordTitle}
                    errorStatus={areErrors}
                    errorMsg={passwordErrorMsg}
                    changeError={() => setAreErrors(false)}
                  />
                  <p className={styles.password_change_msg}>
                    {passwordChangeMsg}
                  </p>

                  <div className={styles.setPassword_buttons}>
                    <Button onClick={changePassword}>
                      {dataformlanguage.changePasswordText}
                    </Button>

                    <Button
                      onClick={() => {
                        setIsChangePassword(false);
                      }}
                    >
                      {dataformlanguage.cancelBtnText}
                    </Button>
                  </div>
                </div>
              )} */}
            </div>
          </div>
          <div className={styles.user_data_container}>
            <div className={styles.user_data}>
              <FormInput
                title={dataformlanguage.inputTitleName}
                name="name"
                errorMessage={dataformlanguage.errorMsgName}
                regex={/^[A-ZÁÉÍÓÚ][a-záéíóú]+(\s[A-ZÁÉÍÓÚ][a-záéíóú]+)?$/}
                form={dataUser}
                setForm={setDataUser}
              />
              <FormInput
                title={dataformlanguage.inputTitlePName}
                name="p_surname"
                errorMessage={dataformlanguage.errorMsgSurname}
                regex={/^[A-ZÁÉÍÓÚ][a-záéíóú]+$/}
                form={dataUser}
                setForm={setDataUser}
              />
              <FormInput
                title={dataformlanguage.inputTitleMName}
                name="m_surname"
                errorMessage={dataformlanguage.errorMsgSurname}
                regex={/^[A-ZÁÉÍÓÚ][a-záéíóú]+$/}
                form={dataUser}
                setForm={setDataUser}
              />
              <FormInput
                title="DNI / NIE / CIF"
                name="dni"
                errorMessage={dataformlanguage.errorMsgDni}
                regex={/^[A-Va-w][0-9]{8}[A-Z]$|^[0-9]{7}[0-9A-Ja]$/g}
                form={dataUser}
                setForm={setDataUser}
              />
              <FormInput
                title={dataformlanguage.inputTitlePhone}
                name="phone"
                errorMessage={dataformlanguage.errorMsgPhone}
                regex={/^\d{9}$/g}
                form={dataUser}
                setForm={setDataUser}
              />
              <DateData
                title={dataformlanguage.inputTitleBirthdate}
                dataKey={"birth_date"}
              />
              <FormInput
                title={dataformlanguage.postalCodeTitle}
                name="postal_code"
                errorMessage={dataformlanguage.errorMsgPostalCode}
                regex={/^[0-9]{5}$/g}
                form={dataUser}
                setForm={setDataUser}
              />
              <FormInput
                title={dataformlanguage.placeBirthTitle}
                name="place_of_birth"
                form={dataUser}
                setForm={setDataUser}
              />
              <SelectData
                title={dataformlanguage.civilStatusTitle}
                dataKey={"id_civil_status"}
                select_id={"civil_status"}
                options={[
                  {
                    value: 1,
                    text: dataformlanguage.singleCivilStatus,
                  },
                  {
                    value: 2,
                    text: dataformlanguage.marriedCivilStatus,
                  },
                  {
                    value: 3,
                    text: dataformlanguage.divorcedCivilStatus,
                  },
                ]}
              />

              <GenderData dataKey={"id_gender"} />
            </div>

            <div className={styles.button_container}>
              <Button variant="secondary" onClick={changeData}>
                {dataformlanguage.saveChangesBtnText}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* {
				!uploadedData && (
					<div className='modal center'>
						<Spinner />
					</div>
				)
			} */}
    </RegisterContext.Provider>
  );
};

export default DataForm;
