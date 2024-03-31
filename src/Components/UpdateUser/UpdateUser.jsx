import React from 'react'

const UpdateUser = () => {

    const handelSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.files[0].name;
        console.log(image)
          
    }
    return (
        <div>
            <div className="bg-gray-200 p-[40px] w-[50%] mx-auto mt-[100px] rounded-lg">
                <h2 className="text-4xl font-[700] text-center mb-[20px]">Update Users Info</h2>
                <form onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="Email">Name</label>
                        <input required className="w-full p-[10px] rounded-lg mt-[10px] focus:outline-none" type="text" name="name" placeholder="Enter Your name" />
                    </div>
                    <div>
                        <label htmlFor="Email">File</label>
                        <input className="w-full p-[10px] rounded-lg mt-[10px] focus:outline-none" type="file" name="image"  />
                    </div>

                    <div>
                        <input className={`w-full  bg-green-700 cursor-pointer p-[10px] rounded-lg mt-[20px]  text-white`} type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser
