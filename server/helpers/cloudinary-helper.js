import cloudinary from "../configs/cloudinary";

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.log("Error while uploading to cloudinary");
    throw new Error(error.message);
  }
};

export default uploadToCloudinary;
