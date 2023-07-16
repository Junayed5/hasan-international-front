import '../../src/index.css'

export default function ResetPassword() {
  return (
    <div className="mx-auto bg-[#BDC3C7]">
      <div className='flex justify-center items-center min-h-screen'>
        <div className={"glass"} style={{ width : "50%"}}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter new password.
            </span>
          </div>

          <form className='py-10'>
              <div className=" flex flex-col items-center gap-4">
                  <input className={"textbox"} type="text" placeholder='New Password' />
                  <input className={"textbox"} type="text" placeholder='Repeat Password' />
                  <button className={"btn"} type='submit'>Reset</button>
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}
