import { useNavigate } from "react-router-dom";


const LandingPage = () => {
    const navigate = useNavigate();

    return(
        <div className="min-h-screen flex flex-col p-2 pb-2">
            <div className="flex-grow"></div>
            <section id="landing_page" className="space-y-4">
                <div className="space-y-2">
                    <h1 className="font-bold text-gray-800 text-xl">Welcome to PopX</h1>
                    <p className="text-[13px] text-gray-400">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing</p>
                </div>
            
                <div className="mb-4">
                    <button 
                    className="bg-blue-800 p-[3%] w-[100%] rounded text-white text-[12px] font-semibold cursor-pointer"
                    onClick={(e) => navigate(`/signup`)}
                    >
                        Create Account
                    </button>
                    <button
                    className="bg-pink-300 p-[3%] w-[100%] rounded mt-[2%] text-[12px] font-semibold cursor-pointer"
                    onClick={(e) => navigate(`/login`)}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;