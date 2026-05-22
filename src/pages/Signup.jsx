import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();

    console.log("signup")
    return(
        <>
        <div className="p-4 min-h-screen flex flex-col">
            <h1 className="w-[60%] text-xl font-bold">Create your PopX account</h1>
            <form className="relative space-y-5 mt-5">
                <div>
                    <label 
                    className="absolute left-3 -top-2 bg-white px-1 text-[12px] text-violet-600">
                        Full name*
                    </label>
                    <input
                    type="text"
                    name="fullname"
                    value={"Marry Doe"}
                    placeholder="Marry Doe"
                    className="w-full p-[3%] text-[12px] border border-gray-300 rounded"
                    />
                </div>

                <div className="relative mt-5">
                    <label 
                    className="absolute left-3 -top-2 bg-white px-1 text-[12px] text-violet-600">
                        Phone number *
                    </label>
                    <input
                    type="text"
                    name="number"
                    value={"Marry Doe"}
                    placeholder="Marry Doe"
                    className="w-full p-[3%] text-[12px] border border-gray-300 rounded"
                    />
                </div>

                <div className="relative mt-5">
                    <label 
                    className="absolute left-3 -top-2 bg-white px-1 text-[12px] text-violet-600">
                        Email Address *
                    </label>
                    <input
                    type="text"
                    name="email"
                    value={"Marry Doe"}
                    placeholder="Marry Doe"
                    className="w-full p-[3%] text-[12px] border border-gray-300 rounded"
                    />
                </div>

                <div className="relative mt-5">
                    <label 
                    className="absolute left-3 -top-2 bg-white px-1 text-[12px] text-violet-600">
                        Password *
                    </label>
                    <input
                    type="text"
                    name="password"
                    value={"Marry Doe"}
                    placeholder="Marry Doe"
                    className="w-full p-[3%] text-[12px] border border-gray-300 rounded"
                    />
                </div>

                <div className="relative mt-5">
                    <label 
                    className="absolute left-3 -top-2 bg-white px-1 text-[12px] text-violet-600">
                        Company name
                    </label>
                    <input
                    type="text"
                    name="company"
                    value={"Marry Doe"}
                    placeholder="Marry Doe"
                    className="w-full p-[3%] text-[12px] border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <p className="text-[14px]">Are you an Agency?</p>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer text-[12px]">
                        <input
                        type="radio"
                        name="agency"
                        value="yes"
                        defaultChecked
                        className="accent-violet-600"
                        />
                            Yes
                        </label>
                    
                        <label className="flex items-center gap-2 cursor-pointer text-[12px]">
                        <input
                        type="radio"
                        name="agency"
                        value="no"
                        className="accent-violet-600"
                        />
                            No
                        </label>
                    </div>
                </div>
            </form>

            <div className="flex-grow"></div>
            <button 
                onClick={(e) => navigate("/profile")} 
                className="bg-violet-600 hover:bg-violet-700 cursor-pointer w-full py-2 text-white font-semibold rounded text-[12px]"

                >
                    Create Account
            </button>
            </div>
        </>
    )
}

export default Signup;