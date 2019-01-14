import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export default class Homes_loader extends Component {
  
  MyLoader = props => (
    <ContentLoader 
      height={400}
      width={1400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="8.6" y="12.67" rx="4" ry="4" width="338.13" height="25.15" /> 
      <rect x="1141.48" y="-72.33" rx="3" ry="3" width="355.3" height="10.5" /> 
      <rect x="302" y="-62" rx="3" ry="3" width="350" height="6.4" /> 
      <rect x="302" y="-42" rx="3" ry="3" width="380" height="6.4" /> 
      <rect x="302" y="-22" rx="3" ry="3" width="201" height="6.4" /> 
      <circle cx="623" cy="-49" r="30" /> 
      <rect x="12.41" y="50.67" rx="0" ry="0" width="254.32" height="190.86" /> 
      <rect x="1245.41" y="-65.33" rx="0" ry="0" width="215" height="6" /> 
      <rect x="1330.41" y="-245.33" rx="0" ry="0" width="336" height="199" /> 
      <rect x="1289.4" y="-326.33" rx="0" ry="0" width="292.32" height="323.49" /> 
      <rect x="1291.27" y="-381.33" rx="0" ry="0" width="292.32" height="323.49" /> 
      <rect x="1355.08" y="-348.33" rx="0" ry="0" width="292.32" height="323.49" /> 
      <rect x="13.1" y="258.48" rx="0" ry="0" width="250" height="18" /> 
      <rect x="14.1" y="287.48" rx="0" ry="0" width="319" height="18" /> 
      <rect x="13.1" y="317.48" rx="0" ry="0" width="136" height="20" /> 
      <rect x="1207.61" y="-49.33" rx="4" ry="4" width="338.13" height="25.15" /> 
      <rect x="358.41" y="52.67" rx="0" ry="0" width="254.32" height="190.86" /> 
      <rect x="357.1" y="256.48" rx="0" ry="0" width="250" height="18" /> 
      <rect x="355.1" y="289.48" rx="0" ry="0" width="319" height="18" /> 
      <rect x="357.1" y="318.48" rx="0" ry="0" width="136" height="20" /> 
      <rect x="705.41" y="46.67" rx="0" ry="0" width="254.32" height="190.86" /> 
      <rect x="703.1" y="260.48" rx="0" ry="0" width="250" height="18" /> 
      <rect x="702.1" y="291.48" rx="0" ry="0" width="319" height="18" /> 
      <rect x="707.1" y="320.48" rx="0" ry="0" width="136" height="20" />
    </ContentLoader>
  )
    render(){
        return (
            <>
            {this.MyLoader()}
            </>
        )
    }
}