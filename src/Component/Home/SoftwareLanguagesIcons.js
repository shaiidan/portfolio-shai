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
            label:'Node.js',
            color: BG_COLOR,
            logo:'Node.js',
            logoColor: '339933'
        },
        {
            label:'NPM',
            color: BG_COLOR,
            logo:'npm',
            logoColor: 'CB3837'
        },
        {
            label:'Express',
            color: BG_COLOR,
            logo:'Express',
            logoColor: '000000'
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
            label:'C',
            color: BG_COLOR,
            logo:'C',
            logoColor: 'A8B9CC'
        },
        
        {
            label:'C++',
            color: BG_COLOR,
            logo:'cplusplus',
            logoColor: '00599C'
        },
        {
            label:'C Sharp',
            color: BG_COLOR,
            logo:'C Sharp',
            logoColor: '239120'
        },
        {
            label:'Git',
            color: BG_COLOR,
            logo:'Git',
            logoColor: 'F05032'
        },
        {
            label: 'Visual Studio',
            color: BG_COLOR,
            logo: 'Visual Studio',
            logoColor: '5C2D91'
        },
        {
            label:'VS Code',
            color: BG_COLOR,
            logo:'visual-studio-code',
            logoColor: '007ACC'
        },
        {
            label:'PyCharm',
            color: BG_COLOR,
            logo:'PyCharm',
            logoColor: '000000'
        },
        {
            label:'Eclipse',
            color: BG_COLOR,
            logo:'Eclipse IDE',
            logoColor: '2C2255'
        },
        {
            label:'Android Studio',
            color: BG_COLOR,
            logo:'Android Studio',
            logoColor: '3DDC84'
        },
        {
            label:'MySQL',
            color: BG_COLOR,
            logo:'MySQL',
            logoColor:'4479A1'
        },
        {
            label:'Firebase',
            color: BG_COLOR,
            logo:'Firebase',
            logoColor: isDarkMode ? 'F7DF1E' : 'yellow'
        },
        {
            label:'Heroku',
            color: BG_COLOR,
            logo:'Heroku',
            logoColor:'430098'
        },
        {
            label:'Ethereum tools',
            color: BG_COLOR,
            logo:'Ethereum',
            logoColor:'3C3C3D'
        },
        {
            label:'Solidity',
            color: BG_COLOR,
            logo:'Solidity',
            logoColor:'363636'
        },
        {
            label:'Linux',
            color: BG_COLOR,
            logo:'Linux',
            logoColor: '000000'
        },
        {
            label:'VirtualBox',
            color: BG_COLOR,
            logo:'VirtualBox',
            logoColor: '183A61'
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
