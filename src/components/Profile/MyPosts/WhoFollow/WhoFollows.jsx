import Follow from "./Follow/Follow";

const WhoFollows = () => {
    return (
        <div className="app__columnGeneral app__columnRight">
            <div className="app__sidebar">
                <div>
                    <h4 className='rightTitle'>Who to Follow</h4>
                    <Follow rightName="Diana Amber"/>
                    <Follow rightName="Maks Amber"/>
                    <Follow rightName="Diana Amber"/>
                    <Follow rightName="Diana Amber"/>
                </div>
            </div>
        </div>
    )
}
export default WhoFollows;