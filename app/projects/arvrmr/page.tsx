import Image from 'next/image'
import ProfileImage from '../../images/arvrmr.jpg'

export default function ArVrMrPage() {
  return (
    <main>
      <div>AR/VR/MR Page</div>
      <Image
        src={ProfileImage}
        alt="Picture of the author"
      // width and height are now automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
      />
    </main>
  );
}
