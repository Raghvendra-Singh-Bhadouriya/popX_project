import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return(
        <>
        <div className="space-y-4 p-3">
            <div className="w-50 space-y-2 mt-[6%]">
                <h1 className="text-xl font-semibold">Signin to your PopX account</h1>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            
            <div className="space-y-4">
                <form className="space-y-4">
                    <div className="relative">
                        <label 
                        className="absolute left-3 -top-2 bg-white px-1 text-[12px] text-violet-600"
                        >
                            Email Address *
                        </label>
                        <input
                        placeholder="Enter email address"
                        className="w-full p-[2%] text-[12px] border border-gray-300 rounded"
                        />
                    </div>
                    
                    <div className="relative">
                        <label 
                        className="absolute left-3 -top-2 bg-white px-1 text-[12px] text-violet-600">
                            Password *
                        </label>
                        <input
                        placeholder="Enter password"
                        className="w-full p-[2%] text-[12px] border border-gray-300 rounded"
                        />
                    </div>
                    
                </form>

                <button 
                className="w-full p-[2%] bg-blue-200 rounded cursor-pointer text-sm font-bold text-white"
                onClick={(e) => navigate(`/profile`)}
                >LogIn</button>
            </div>
        </div>
        </>
    )
}

export default Login;