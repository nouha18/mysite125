
import React from 'react';


export default function Articles (props){ 
 return ( <div>
      <h1 className="title is-1">{props.location.aboutProps}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
        risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
        nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
        lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
      </p>
    </div>
  );
 }