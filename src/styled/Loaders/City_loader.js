import React, { Component } from "react";
import ContentLoader from "react-content-loader";

export default class City_loader extends Component {
    MyLoader = props => (
        <ContentLoader
          height={250}
          width={1400}
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          {...props}
        >
          <rect x="8.6" y="5.67" rx="4" ry="4" width="338.13" height="25.15" />
          <rect x="8.47" y="40.67" rx="3" ry="3" width="355.3" height="10.5" />
          <rect x="302" y="-62" rx="3" ry="3" width="350" height="6.4" />
          <rect x="302" y="-42" rx="3" ry="3" width="380" height="6.4" />
          <rect x="302" y="-22" rx="3" ry="3" width="201" height="6.4" />
          <circle cx="623" cy="-49" r="30" />
          <rect x="14.41" y="63.67" rx="0" ry="0" width="292.32" height="323.49" />
          <rect x="1245.41" y="-65.33" rx="0" ry="0" width="215" height="6" />
          <rect x="1330.41" y="-245.33" rx="0" ry="0" width="336" height="199" />
          <rect x="327.39" y="60.67" rx="0" ry="0" width="292.32" height="323.49" />
          <rect
            x="1291.27"
            y="-381.33"
            rx="0"
            ry="0"
            width="292.32"
            height="323.49"
          />
          <rect
            x="1355.08"
            y="-348.33"
            rx="0"
            ry="0"
            width="292.32"
            height="323.49"
          />
        </ContentLoader>
      );
    render(){
        return (
            <>
            {this.MyLoader()}
            </>
        )
    }
}