/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./Check-bc1d37d9","./Cartesian2-6ec3db89","./Transforms-a4d7073e","./OrientedBoundingBox-764de7b5"],function(e,g,x,h,B){"use strict";var n={},s=new x.Cartesian3,P=new x.Cartesian3,p=new x.Cartesian3,M=new x.Cartesian3,k=new B.OrientedBoundingBox;function o(e,n,t,r,i){var a=x.Cartesian3.subtract(e,n,s),o=x.Cartesian3.dot(t,a),u=x.Cartesian3.dot(r,a);return x.Cartesian2.fromElements(o,u,i)}n.validOutline=function(e){g.Check.defined("positions",e);var n=B.OrientedBoundingBox.fromPoints(e,k).halfAxes,t=h.Matrix3.getColumn(n,0,P),r=h.Matrix3.getColumn(n,1,p),i=h.Matrix3.getColumn(n,2,M),a=x.Cartesian3.magnitude(t),o=x.Cartesian3.magnitude(r),u=x.Cartesian3.magnitude(i);return!(0===a&&(0===o||0===u)||0===o&&0===u)},n.computeProjectTo2DArguments=function(e,n,t,r){g.Check.defined("positions",e),g.Check.defined("centerResult",n),g.Check.defined("planeAxis1Result",t),g.Check.defined("planeAxis2Result",r);var i,a,o=B.OrientedBoundingBox.fromPoints(e,k),u=o.halfAxes,s=h.Matrix3.getColumn(u,0,P),d=h.Matrix3.getColumn(u,1,p),C=h.Matrix3.getColumn(u,2,M),c=x.Cartesian3.magnitude(s),l=x.Cartesian3.magnitude(d),m=x.Cartesian3.magnitude(C),f=Math.min(c,l,m);return(0!==c||0!==l&&0!==m)&&(0!==l||0!==m)&&(f!==l&&f!==m||(i=s),f===c?i=d:f===m&&(a=d),f!==c&&f!==l||(a=C),x.Cartesian3.normalize(i,t),x.Cartesian3.normalize(a,r),x.Cartesian3.clone(o.center,n),!0)},n.createProjectPointsTo2DFunction=function(r,i,a){return function(e){for(var n=new Array(e.length),t=0;t<e.length;t++)n[t]=o(e[t],r,i,a);return n}},n.createProjectPointTo2DFunction=function(t,r,i){return function(e,n){return o(e,t,r,i,n)}},e.CoplanarPolygonGeometryLibrary=n});
