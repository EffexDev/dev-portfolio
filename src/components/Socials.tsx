import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Socials() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex text-center justify-center pb-5 text-3xl font-bold">
                <h1>Reach Out</h1>
            </div>
            <div className="text-center pb-5">
                <p id="type">Feel free to flick me a message! I will get back to you when I can. </p>
            </div>
            <div className="flex flex-row w-50 justify-evenly">
                <a href="https://x.com/EffexForge" target="_blank"><XIcon /></a>
                <a href="https://www.instagram.com/thesmoothdescent/?next=%2Feffexforge%2F" target="_blank"><InstagramIcon /></a>
                <a href="https://github.com/EffexDev" target="_blank"><GitHubIcon /></a>
            </div>
        </div>
    )
}

export default Socials;