import "./UfoList.css";

const UfoListTitle = 'Fastest ships in the galaxy!'
const UfoList = () => {
    return (
        <>
            <article className='UfoList'>
                    <h2>{UfoListTitle}</h2>
                <ul>
                    <li>Millennium Falcon</li>
                    <li>USS Enterprise</li>
                    <li>TARDIS</li>
                    <li>Serenity</li>
                    <li>Discovery One</li>
                    <li>Nostromo</li>
                    <li>Battlestar Galactica</li>
                    <li>Event Horizon</li>
                    <li>Sulaco</li>
                    <li>Heart of Gold</li>
                </ul>
            </article>
        </>
    )
}

export default UfoList;
