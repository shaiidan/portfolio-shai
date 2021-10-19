import './Home.css'
import {lightMode, darkMode} from '../../DarkMode/DarkMode';

const SoftwareLanguagesIcons = (props) =>{

    let isDarkMode = false;

    if('isDarkMode' in props){
        isDarkMode = props.isDarkMode; 
    }

    const BG_COLOR = isDarkMode ? darkMode['link'].split('#')[1] : lightMode['link'].split('#')[1];

    const logoArray = [
        {
            label:'HTML5',
            color: BG_COLOR,
            logo:'html5',
            logoColor:'E34F26'
        },
        {
            label:'CSS3',
            color: BG_COLOR,
            logo:'css3',
            logoColor:'1572B6'
        },
        {
            label:'JavaScript',
            color: BG_COLOR,
            logo:'javascript',
            logoColor: isDarkMode ? 'F7DF1E' : 'yellow'
        },
        {
            label:'React.Js',
            color: BG_COLOR,
            logo:'react',
            logoColor:'61DAFB'
        },
        {
            label:'Redux',
            color: BG_COLOR,
            logo:'redux',
            logoColor:'764ABC'
        },
        {
            label:'Java',
            color: BG_COLOR,
            logo:'java',
            logoColor:'007396'
        },
        {
            label:'Python',
            color: BG_COLOR,
            logo:'python',
            logoColor: '3776AB'
        },
        {
            label:'VS Code',
            color: BG_COLOR,
            logo:'visual-studio-code',
            logoColor: '007ACC'
        },
        {
            label:'Android Studio',
            color: BG_COLOR,
            logo:'Android Studio',
            logoColor: '3DDC84'
        }

    ];

    return (
        <div className='icons'>
            {logoArray && logoArray.length && logoArray.map((item,index) =>{
                return (
                <img 
                key={index} 
                src={`https://img.shields.io/badge/${item.label}-${item.color}?logo=${item.logo}&logoColor=${item.logoColor}`} 
                alt=''
                height={30} />
                )                    
            })}
        </div>         
    );
}

export default SoftwareLanguagesIcons;