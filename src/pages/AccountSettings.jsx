import profileImg from "../assets/image.png";

function AccountSettings() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Account Settings</h1>
      
      <div className="flex items-center mt-4">
        <img 
          src={profileImg}   // ✅ use the imported variable
          alt="profile" 
          className="rounded-full w-16 h-16"
        />
        
        <div className="ml-4">
          <h2 className="font-bold">Marry Doe</h2>
          <p>marry@gmail.com</p>
        </div>
      </div>
      
      <p className="mt-4 text-gray-500">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr...
      </p>
    </div>
  );
}

export default AccountSettings;
