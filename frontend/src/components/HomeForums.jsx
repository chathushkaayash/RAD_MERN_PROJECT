import { IF } from '../url'

const HomeForums = ({ forum }) => {
    return (
        <div className=" flex mt-8 space-x-4  bg-gray-200 py-2 px-4 rounded">
            
            {/* left */}
            <div className="flex  flex-col w-full ">
                <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
                    {forum.title}
                </h1>
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                    <p>@{forum.username}</p>
                    <div className="flex space-x-2 text-sm">
                        <p>{new Date(forum.updatedAt).toString().slice(0, 15)}</p>
                        <p>{new Date(forum.updatedAt).toString().slice(16, 24)}</p>
                    </div>
                </div>
                <p className="text-sm md:text-lg">{ forum.desc.length > 200 ? forum.desc.slice(0,200) + " ...Read more" : forum.desc}</p>

            </div>

        </div>
    )
}

export default HomeForums