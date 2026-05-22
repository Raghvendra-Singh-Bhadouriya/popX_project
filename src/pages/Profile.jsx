

const Profile = () => {
    return(
        <>
        <section id="profile" className=" h-full">
        <div className="bg-white pb-4 pr-4 pl-4">
            <h1 className="text-[14px] mt-5">Account Settings</h1>
        </div>
            <div className="flex pt-2 pr-4 pl-4 gap-3">
                <div className="rounded-full">
                    <img src="https://react-assessment-popx-ui-by-aayushshaw.vercel.app/assets/Ellipse114.png" alt="profile_img" />
                </div>
                <div>
                    <h4 className="font-semibold text-[12px]">Marry Doe</h4>
                    <p className="text-[12px] text-gray-600">Marry@Gmail.Com</p>
                </div>
            </div>

            <div className="text-[12px] text-gray-800 pr-4 pl-4 mt-5">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>

            <div className="mt-5 px-4 pb-4 h-80 flex flex-col justify-between">
                <div className="border-t border-dashed border-gray-400"></div>
                <div className="border-t border-dashed border-gray-400"></div>
            </div>
        </section>
        </>
    )
}

export default Profile;