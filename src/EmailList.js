import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import { Checkbox, IconButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';



const EmailList = () => {
  return (
    <div className='emailList'>
    <div className='emailList__settings'>
      <div className='emailList__settingsLeft'>
        <Checkbox/>
        <IconButton>
        <ArrowDropDownIcon/>
        </IconButton>
        <IconButton>
        <RedoIcon />
        </IconButton>
        <IconButton>
        <MoreVertIcon />
        </IconButton>
      </div>

      <div className='emailList__settingsRight'>
      <IconButton>
        <ChevronLeftIcon />
        </IconButton>
        <IconButton>
        <ChevronRightIcon />
        </IconButton>
        <IconButton>
        <KeyboardHideIcon />
        </IconButton>
        <IconButton>
        <SettingsIcon />
        </IconButton>
      </div>
    </div>

    <div className='emailList__sections'>
      <Section Icon={InboxIcon} title="primary" color="red" selected />
      <Section Icon={PeopleIcon} title="social" color="#1A73E8" />
      <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
    </div>
      <div className='emailList__list'>
        <EmailRow 
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="this is a test"
          time="10pm"
        />

          <EmailRow 
          title="Twitch"
          subject="Hey fellow streamer!!! this is a test this is a test this is a test"
          description="this is a test"
          time="10pm"
        />
      </div>
    </div>
  
  )
}

export default EmailList;