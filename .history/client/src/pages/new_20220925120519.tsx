import ClearIcon from '@mui/icons-material/Clear';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import ImageIcon from '@mui/icons-material/Image';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CodeIcon from '@mui/icons-material/Code';
import BoltIcon from '@mui/icons-material/Bolt';
import { useEffect, useState } from 'react';

const New = () => {

    //Handle creating new article
    const createArticle = () => {
        console.log('created!')
    }

    //Preview image uploaded by user
    const [url, setUrl] = useState<string>('')
    const handlePreviewImage = (e: any) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        setUrl(url)
    }

    //Handle tags
    const tags = ["javascript", "react", "python", "dev's life", "programming", "css", "html", "typescript", "mongodb"]

    // Resize textarea when typing
    const textarea = document.querySelector('textarea');
    const handleResize = (e: any) => {
        const area = e.target;
        area.style.height = "auto";
        area.style.height = area.scrollHeight + "px";
    }
    if (textarea !== null) {
        textarea.addEventListener('input', handleResize)
    }


    return (
        <div className='md:grid grid-cols-4 bg-[#f5f5f5] lg:grid-cols-7 2xl:pl-[100px]'>
            <div className='flex flex-col content-center h-screen col-span-3 lg:col-span-5'>
                <div className='h-[8vh] flex items-center space-between px-3'>
                    <div className='flex items-center space-x-3'>
                        <a href='/' className='hidden md:inline'>
                            <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" width={50} className="cursor-pointer" />
                        </a>
                        <p className='font-semibold'>Create Post</p>
                    </div>
                    <div className='icon'>
                        <a href='/'>
                            <ClearIcon />
                        </a>
                    </div>
                </div>
                <div className='overflow-y-auto bg-white h-[82vh] border-[2px] rounded-lg flex flex-col py-3 md:py-10 px-2 md:px-16 space-y-5 lg:ml-[100px]'>
                    <form>
                        <input type="file" name='file' id='file' onChange={handlePreviewImage} className='w-0 h-0 opacity-0 overflow-hidden absolute z-[-1] ' />
                        <label htmlFor='file' className='bg-[#f9f9f9] font-semibold px-3 py-2 cursor-pointer rounded-md border-black/30 border-[1.5px]'>Add a cover image</label>
                    </form>

                    {/* preview image */}
                    {url !== "" &&
                        <div className='flex items-center space-x-10'>
                            <img src={url} width={200} />
                            <button className='text-lg px-3 py-1 text-[red] hover:bg-[#eeeeee] rounded-md' onClick={() => setUrl('')}>Remove</button>
                        </div>}

                    <form>
                        <input placeholder='New post title here...' className='text-3xl md:text-4xl lg:text-5xl w-full h-[130%] outline-none font-bold placeholder-black/70' />
                    </form>
                    <form className='relative'>
                        <input placeholder='Add up to 4 tags...' className='w-full outline-none' />
                        <div className='z-[100] absolute top-10 flex flex-col space-y-3 px-5 bg-white w-full border-[.1em] border-solid border-[#777] rounded-md max-h-[500px] overflow-y-auto'>
                            <h2 className='text-lg font-bold pt-3'>Top tags</h2>
                            <hr></hr>
                            <ul className='flex flex-col space-y-2 cursor-pointer '>
                                {tags.map(tag => (
                                    <li key={tag} className='py-3'>#{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </form>
                    <div className='bg-[#f9f9f9] w-full'>
                        <div className='flex space-between py-4 px-2 '>
                            <div className='flex space-x-3'>
                                <div className='icon'>
                                    <FormatBoldIcon />
                                </div>
                                <div className='icon'>
                                    <FormatItalicIcon />
                                </div>
                                <div className='icon hidden sm:inline'>
                                    <AttachmentIcon />
                                </div>
                                <div className='icon'>
                                    <FormatListNumberedIcon />
                                </div>
                                <div className='icon'>
                                    <FormatListBulletedIcon />
                                </div>
                                <div className='icon hidden md:inline'>
                                    <FormatQuoteIcon />
                                </div>
                                <div className='icon hidden md:inline'>
                                    <CodeIcon />
                                </div>
                                <div className='icon hidden md:inline'>
                                    <BoltIcon />
                                </div>
                                <div className='icon'>
                                    <ImageIcon />
                                </div>
                            </div>
                            <div className='icon'>
                                <MoreVertIcon />
                            </div>
                        </div>

                    </div>
                    <div className='w-full'>
                        <textarea placeholder='Write your post content here...' className='outline-none text-lg w-full' />
                    </div>
                </div>
                <div className='h-[10vh] flex items-center px-3 space-x-2 lg:ml-[100px] lg:px-0'>
                    <button className='px-4 py-2 rounded bg-[blue]/70 hover:bg-[blue] text-white font-bold text-base' onClick={createArticle}>Publish</button>
                    <button className='px-3 py-2 rounded hover:text-[blue]/70 hover:bg-[#e2e3f3]'>Save draft</button>
                    <button className='hidden sm:inline px-3 py-2 rounded hover:text-[blue]/70 hover:bg-[#e2e3f3] text-md'>Revert new changes</button>
                </div>
            </div>

            <div className='hidden md:inline col-span-1 lg:col-span-2 h-[82vh] my-auto px-2 lg:px-5 md:mr-4'>
                <h1 className='font-bold'>Tagging Guidelines</h1>
                <ul className='text-[14px] lg:text-base list-disc pl-5 '>
                    <li>Tags help people find your post.</li>
                    <li>Think of tags as the topics or categories that best describe your post.</li>
                    <li>Add up to four comma-separated tags per post. Combine tags to reach the appropriate subcommunities.</li>
                    <li>Use existing tags whenever possible.</li>
                    <li>Some tags, such as "help" or "healthy debate" have special posting guidelines</li>
                </ul>
            </div>

        </div>
    )
}

export default New

