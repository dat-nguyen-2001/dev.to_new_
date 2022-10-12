import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const UserNav = () => {
    return (
        <div className='flex space-x-2 mr-3'>
            <div className='w-10 h-10 rounded-lg cursor-pointer md:hidden hover:text-[blue]/70 hover:bg-[#e2e3f3]'>
                <SearchIcon fontSize='large' className='my-auto pt-2 pl-2' />
            </div>
            <a href={"/new"} className="hidden md:inline">
                <button className='min-w-[120px] h-[40px] border-solid border-[#3e51e0] border-2 rounded-md text-[#3e51e0] font-semibold hover:bg-[#3e51e0] hover:text-white hover:underline'>
                    Create Post
                </button>
            </a>
            <div className='w-10 h-10 rounded-lg cursor-pointer hover:text-[blue]/70 hover:bg-[#e2e3f3]'>
                <NotificationsIcon fontSize='large' className='my-auto pt-2 pl-2' />
            </div>
            <div className='w-10 h-10 rounded-lg cursor-pointer hover:text-[blue]/70 hover:bg-[#e2e3f3] relative'>
                <PersonIcon fontSize='large' className='my-auto pt-2 pl-2' />
                <div className='absolute top-10 w-[75px] z-10 bg-white'>
                    <p>Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default UserNav