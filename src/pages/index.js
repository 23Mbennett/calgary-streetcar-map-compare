import React from "react"
import ReactCompareImage from 'react-compare-image';
import Container from "../components/container"
import SEO from "../components/seo"

// import map1 from "../images/calgary_streetcar.jpg"
// import map2 from "../images/calgary_ctrain.jpg"


export default () => (

<Container>
   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ReactCompareImage sliderLineColor="#999" sliderPositionPercentage="0.7" sliderLineWidth="1" handleSize="40" leftImage="https://s3-us-west-2.amazonaws.com/smohiudd.github.co/streetcar-map/calgary_streetcar.jpg" rightImage="https://s3-us-west-2.amazonaws.com/smohiudd.github.co/streetcar-map/calgary_ctrain.jpg"/>
    <p><a href="https://saadiqm.com/2019/04/13/calgary-historic-streetcar-map.html">Designing Calgary's Historic Streetcar Map</a></p>
    <p><a href="https://saadiqm.com">www.saadiqm.com</a></p>
</Container>

)
