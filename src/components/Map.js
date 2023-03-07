import React from 'react'

function Map() {
    return (
        <div>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="100%" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=VARANASI&t=&z=8&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                    <style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}" }} /></div></div>
        </div>
    )
}

export default Map