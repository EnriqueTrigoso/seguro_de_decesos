import styles from "./Avatar.module.css";
import { useState, useEffect, useRef } from "react";
import NextImage from "next/image";
import User from "components/Icons/User";
import { useMediaQuery } from "react-responsive";
import useText from "contexts/TextContext/useText";

const Avatar = ({ imageBase64ref }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [currentPhoto, setCurrentPhoto] = useState("");

  let dropzone = useRef(null);

  const { avatartext } = useText();

  const readFile = (file) => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      const img = new Image();

      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let width = img.width;
        let height = img.height;

        if (width > 128 || height > 128) {
          const aspectRatio = width / height;

          if (aspectRatio > 1) {
            width = 128;
            height = Math.round(128 / aspectRatio);
          } else {
            height = 128;
            width = Math.round(128 * aspectRatio);
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        imageBase64ref.current = canvas.toDataURL();

        const preview = document.getElementById("preview");
        preview.innerHTML = "";

        const imgPreview = document.createElement("img");
        imgPreview.src = imageBase64ref.current;

        preview.appendChild(imgPreview);
        dropzone.current.classList.remove(`${styles.wrapper_active}`);
      };

      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    setCurrentPhoto(imageBase64ref.current);
  };

  const handleFileSelect = (e) => {
    const { files } = e.target;
    const file = files[0];
    readFile(file);
  };

  const dropHandler = (e) => {
    stopPropagationAndPreventDefault(e);
    const file = e.dataTransfer.files[0];
    fileRead(file);
  };

  const dragOverHandler = (e) => {
    stopPropagationAndPreventDefault(e);
    dropzone.current.classList.add(`${styles.wrapper_active}`);
  };

  const dragLeaveHandler = (e) => {
    stopPropagationAndPreventDefault(e);
    dropzone.current.classList.remove(`${styles.wrapper_active}`);
  };

  useEffect(() => {
    if (imageBase64ref.current !== "") {
      setCurrentPhoto(imageBase64ref.current);
      return;
    }

    try {
      const userDataLocal = JSON.parse(
        window.localStorage.getItem("userDataEva")
      );
      const userPhoto = userDataLocal["photo"];
      setCurrentPhoto(userPhoto);
    } catch (e) {
      setCurrentPhoto("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles.container}
      ref={dropzone}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
    >
      <div className={styles.image_container} id="preview">
        {currentPhoto ? (
          <NextImage src={currentPhoto} alt={""} width={128} height={128} />
        ) : (
          <div className={styles.image}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M12.0001 4H20.0001L22.6667 6.66667H28.0001C28.7365 6.66667 29.3334 7.26363 29.3334 8V26.6667C29.3334 27.4031 28.7365 28 28.0001 28H4.00008C3.26371 28 2.66675 27.4031 2.66675 26.6667V8C2.66675 7.26363 3.26371 6.66667 4.00008 6.66667H9.33341L12.0001 4ZM16.0001 25.3333C20.4183 25.3333 24.0001 21.7516 24.0001 17.3333C24.0001 12.9151 20.4183 9.33333 16.0001 9.33333C11.5818 9.33333 8.00008 12.9151 8.00008 17.3333C8.00008 21.7516 11.5818 25.3333 16.0001 25.3333ZM16.0001 22.6667C13.0546 22.6667 10.6667 20.2788 10.6667 17.3333C10.6667 14.3879 13.0546 12 16.0001 12C18.9455 12 21.3334 14.3879 21.3334 17.3333C21.3334 20.2788 18.9455 22.6667 16.0001 22.6667Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <p className={styles.description}>
        {isDesktop && avatartext.desktop_msg[0]}
        <label htmlFor="input-file" className="custom-file-upload">
          <span className={styles.upload}>
            {isDesktop ? avatartext.desktop_msg[1] : avatartext.mobile_msg}
          </span>
        </label>
        <input
          id="input-file"
          type="file"
          accept=".png, .jpg, .jpeg"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </p>
    </div>
  );
};

export default Avatar;
