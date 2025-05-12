import '../styles/Clock.css'

const Clock = () => {
    return(
        <>
            <div className="home flex bg-[#C36868] justify-center items-center w-full  h-full">
                <div className="clock w-4/10 h-8/10">
                    <div className="screen">
                        <div className="top"></div>
                        <div className="middle bottom"></div>
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