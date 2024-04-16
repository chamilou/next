"use client"

import { useRef, useState } from "react"
import classes from "@/componenets/ui/imagePicker.module.css"
import Image from "next/image"

export default function ImagePicker({ label, name }) {
    function PickImage() {
        pickImage.current.click()
    }
    function HandleImageChange(event) {
        const file = event.target.files[0]
        if (!file) {
            setPickedImage(null);
            return
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    const pickImage = useRef()

    const [pickedImage, setPickedImage] = useState()
    return (
        <>

            <div>

                <div className={classes.image}>
                    <label htmlFor={label}>Select Picture</label>
                    {!pickedImage && <p className={classes.p}>no picture selected</p>}
                    {pickedImage && <Image src={pickedImage} alt="no Image then" width={200} height={300} name={name}></Image>}
                </div>
                <input className={classes.input} type="file"
                    accept="image/jpg"
                    ref={pickImage}
                    onChange={HandleImageChange}
                    required
                    id={name}
                    name={name}

                >
                </input>
                <button type="button" onClick={PickImage}>ImagePicker</button>
            </div>

        </>
    )
}