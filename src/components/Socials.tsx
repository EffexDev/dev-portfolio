import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Socials() {
    return (
            <div className="flex flex-row w-25 pt-3 justify-between">
                <a href="https://x.com/EffexForge" target="_blank"><XIcon /></a>
                <a href="https://www.instagram.com/thesmoothdescent/?next=%2Feffexforge%2F" target="_blank"><InstagramIcon /></a>
                <a href="https://github.com/EffexDev" target="_blank"><GitHubIcon /></a>
            </div>
    )
}

export default Socials;