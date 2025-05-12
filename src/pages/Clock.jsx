import '../styles/Clock.css'

const Clock = () => {
    return(
        <>
            <div className="home flex bg-[#C36868] justify-center items-center w-full  h-full">
                <div className="clock flex flex-col justify-center items-start w-8/10 h-8/10 md:w-4/10">
                    <div className="screen w-9/10 h-5/10 mt-5">
                        <div className="top">Session</div>
                        <div className="middle">25:00</div>
                    </div>
                    <div className="controls">
                        <div className="sessionLength"></div>
                        <div className="breakLength"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Clock;