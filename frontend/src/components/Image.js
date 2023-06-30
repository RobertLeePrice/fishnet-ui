import React, { useEffect, useState } from "react";
// const imageUrl = "https://i.imgur.com/fHyEMsl.jpg";
const imageUrl = "https://images.unsplash.com/photo-1520262389826-d5…ufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

export default function Image() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} alt="icons" />
    </>
  );
}