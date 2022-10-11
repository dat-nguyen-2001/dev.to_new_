
const ReadingListBlock = ({ article }: any) => {
    console.log(article)
    return (
        <div className="flex space-x-2 px-3 bg-white rounded-md mx-auto border-[#d3d3d3] border-[.2px] pb-8">
            <div className="w-8 h-8 rounded-full">
                <img src={article.user.profile_pic ? article.user.profile_pic : 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'} className='rounded-full w-8 h-8' />
            </div>
            <div>
                <div>
                    {article.title}
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default ReadingListBlock 