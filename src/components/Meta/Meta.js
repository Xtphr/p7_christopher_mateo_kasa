/***************************************************************
 ****           Meta           ****
 **************************************************************/

export default function Meta({title, description}){
    const element = document.querySelector('title');
    if (title){
        element.innerText= `${title}`;
    } else{
        element.innerText= "Page d'erreur"
    }

    const desc = document.querySelector("meta[name='description']");
    if (description){
        desc.setAttribute("content", description);
    } else{
        desc.setAttribute("content", "Oups! La page que vous demandez n'existe pas.")
    }
}