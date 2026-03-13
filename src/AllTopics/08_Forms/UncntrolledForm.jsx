import { useRef } from 'react'

const UncntrolledForm = () => {
    const emailRef = useRef("");//{current:undefined}
    const passwordRef = useRef("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Form Submitted");

        // console.log(emailRef.current.value);
        // console.log(passwordRef.current.value);

        let user={
            email:emailRef.current.value,
            password:passwordRef.current.value,
        };

        console.log(user);
    }
    return (
        <div>
            <h1 className="text-center text-4xl">UncntrolledForm</h1>

            <form className="flex flex-col items-center p-5 gap-5" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter email" className="border p-1"  ref={emailRef} />
                <input type="text" placeholder="Enter Password" className="border p-1" ref={passwordRef}/>
                <button className="bg-violet-200 py-1 px-5">Submit</button>
            </form>

        </div>
    );
};

export default UncntrolledForm;