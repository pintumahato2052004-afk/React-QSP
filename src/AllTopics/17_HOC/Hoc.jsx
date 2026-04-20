const Hoc = (Wrapper) =>{
    let data = "Hii";

    return()=>{
        return <Wrapper data= {data} />;
    };

};

export default Hoc;