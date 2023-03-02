export default function LanguageIcon(props){
    return(
        <div className="project-language-icon-container">
            <img src={props.language.src} className="project-language-icon"></img>
            <p className="project-language-label">{props.language.id}</p>
        </div>
    )
}